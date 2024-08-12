import {
  createCache,
  extractStyle,
  legacyNotSelectorLinter,
  NaNLinter,
  parentSelectorLinter,
  StyleProvider,
} from '@ant-design/cssinjs';
import { getSandpackCssText } from '@codesandbox/sandpack-react';
import type { MappingAlgorithm } from 'antd';
import { theme as antdTheme, App } from 'antd';
import type { ThemeConfig } from 'antd/es/config-provider';
import {
  createSearchParams,
  useOutlet,
  useSearchParams,
  useServerInsertedHTML,
} from 'dumi';
import React, { Suspense, useCallback, useEffect } from 'react';
import { DarkContext } from '../../hooks/useDark';
import useLayoutState from '../../hooks/useLayoutState';
import useLocation from '../../hooks/useLocation';
import type { ThemeName } from '../common/ThemeSwitch';
import SiteThemeProvider from '../SiteThemeProvider';
import type { SiteContextProps } from '../slots/SiteContext';
import SiteContext from '../slots/SiteContext';

const ThemeSwitch = React.lazy(() => import('../common/ThemeSwitch'));

type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
type SiteState = Partial<Omit<SiteContextProps, 'updateSiteContext'>>;

const RESPONSIVE_MOBILE = 768;
export const ANT_DESIGN_NOT_SHOW_BANNER = 'ANT_DESIGN_NOT_SHOW_BANNER';

// Compatible with old anchors
if (typeof window !== 'undefined') {
  const hashId = location.hash.slice(1);
  if (hashId.startsWith('components-')) {
    if (!document.querySelector(`#${hashId}`)) {
      location.hash = `#${hashId.replace(/^components-/, '')}`;
    }
  }
}

const getAlgorithm = (themes: ThemeName[] = []) =>
  themes
    .map((theme) => {
      if (theme === 'dark') {
        return antdTheme.darkAlgorithm;
      }
      if (theme === 'compact') {
        return antdTheme.compactAlgorithm;
      }
      return null as unknown as MappingAlgorithm;
    })
    .filter(Boolean);

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [
    { theme = [], isMobile, bannerVisible = false },
    setSiteState,
  ] = useLayoutState<SiteState>({
    isMobile: false,

    theme: [],
    bannerVisible: false,
  });

  const updateSiteConfig = useCallback(
    (props: SiteState) => {
      setSiteState((prev) => ({ ...prev, ...props }));

      // updating `searchParams` will clear the hash
      const oldSearchStr = searchParams.toString();

      let nextSearchParams: URLSearchParams = searchParams;
      (Object.entries(props) as Entries<SiteContextProps>).forEach(
        ([key, value]) => {

          if (key === 'theme') {
            nextSearchParams = createSearchParams({
              ...nextSearchParams,
              theme: value.filter((t) => t !== 'light'),
            });

            document
              .querySelector('html')
              ?.setAttribute(
                'data-prefers-color',
                value.includes('dark') ? 'dark' : 'light',
              );
          }
        },
      );

      if (nextSearchParams.toString() !== oldSearchStr) {
        setSearchParams(nextSearchParams);
      }
    },
    [searchParams, setSearchParams],
  );

  const updateMobileMode = () => {
    updateSiteConfig({ isMobile: window.innerWidth < RESPONSIVE_MOBILE });
  };

  useEffect(() => {
    const _theme = searchParams.getAll('theme') as ThemeName[];

    setSiteState({
      theme: _theme,
    });
    document.documentElement.setAttribute(
      'data-prefers-color',
      _theme.includes('dark') ? 'dark' : 'light',
    );
    // Handle isMobile
    updateMobileMode();

    window.addEventListener('resize', updateMobileMode);
    return () => {
      window.removeEventListener('resize', updateMobileMode);
    };
  }, []);

  const siteContextValue = React.useMemo<SiteContextProps>(
    () => ({
      updateSiteConfig,
      theme: theme!,
      isMobile: isMobile!,
      bannerVisible,
    }),
    [isMobile, updateSiteConfig, theme, bannerVisible],
  );

  const themeConfig = React.useMemo<ThemeConfig>(
    () => ({
      algorithm: getAlgorithm(theme),
      token: { motion: !theme.includes('motion-off') },
      cssVar: true,
      hashed: false,
    }),
    [theme],
  );

  const [styleCache] = React.useState(() => createCache());

  useServerInsertedHTML(() => {
    const styleText = extractStyle(styleCache, {
      plain: true,
      types: 'style',
    });

    return (
      <style
        data-type="antd-cssinjs"
        dangerouslySetInnerHTML={{ __html: styleText }}
      />
    );
  });

  useServerInsertedHTML(() => {
    const styleText = extractStyle(styleCache, {
      plain: true,
      types: ['cssVar', 'token'],
    });
    return (
      <style
        data-type="antd-css-var"
        data-rc-order="prepend"
        data-rc-priority="-9999"
        dangerouslySetInnerHTML={{ __html: styleText }}
      />
    );
  });

  useServerInsertedHTML(() => (
    <style
      data-sandpack="true"
      id="sandpack"
      dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
    />
  ));

  const demoPage = pathname.startsWith('/~demos');

  // ============================ Render ============================
  let content: React.ReactNode = outlet;

  // Demo page should not contain App component
  if (!demoPage) {
    content = (
      <App>
        {outlet}
        <Suspense>
          <ThemeSwitch
            value={theme}
            onChange={(nextTheme) => updateSiteConfig({ theme: nextTheme })}
          />
        </Suspense>
      </App>
    );
  }

  return (
    <DarkContext.Provider value={theme.includes('dark')}>
      <StyleProvider
        cache={styleCache}
        linters={[legacyNotSelectorLinter, parentSelectorLinter, NaNLinter]}
      >
        <SiteContext.Provider value={siteContextValue}>
          <SiteThemeProvider theme={themeConfig}>

              {content}

          </SiteThemeProvider>
        </SiteContext.Provider>
      </StyleProvider>
    </DarkContext.Provider>
  );
};

export default GlobalLayout;
