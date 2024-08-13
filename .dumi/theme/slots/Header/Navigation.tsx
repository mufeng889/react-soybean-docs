import { MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { createStyles, css } from 'antd-style';
import { FormattedMessage, useLocation } from 'dumi';
import * as React from 'react';
import useLocale from '../../../hooks/useLocale';
import Link from '../../common/Link';
import * as utils from '../../utils';
import type { SharedProps } from './interface';

const locales = {
  cn: {
    guide: '指引',
    route: '路由',
    hook: 'hooks',
    faq: '常见问题',
    iteration: '迭代计划',
  },
  en: {
    guide: 'Guide',
    route: 'Route',
    hook: 'Hooks',
    faq:'FAQ',
    iteration: 'Iteration Plan',
  },
};

// ============================= Style =============================
const useStyle = createStyles(({ token }) => {
  const { antCls, iconCls, fontFamily, fontSize, headerHeight, colorPrimary } =
    token;

  return {
    nav: css`
      height: 100%;
      font-size: ${fontSize}px;
      font-family: Avenir, ${fontFamily}, sans-serif;
      border: 0 !important;

      &${antCls}-menu-horizontal {
        border-bottom: none;

        & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
          min-width: ${40 + 12 * 2}px;
          height: ${headerHeight}px;
          padding-inline-end: ${token.paddingSM}px;
          padding-inline-start: ${token.paddingSM}px;
          line-height: ${headerHeight}px;
        }

        & ${antCls}-menu-submenu-title ${iconCls} {
          margin: 0;
        }

        & > ${antCls}-menu-item-selected {
          a {
            color: ${colorPrimary};
          }
        }
      }

      & > ${antCls}-menu-item, & > ${antCls}-menu-submenu {
        text-align: center;
      }
    `,
  };
});

export interface NavigationProps extends SharedProps {
  isMobile: boolean;
  responsive: null | 'narrow' | 'crowded';
  onLangChange: () => void;
}

const HeaderNavigation: React.FC<NavigationProps> = (props) => {
  const {
    isZhCN,
    isMobile,
    responsive,
    onLangChange,
  } = props;
  const { pathname, search } = useLocation();
  const [locale] = useLocale(locales);

  const { styles } = useStyle();

  const menuMode = isMobile ? 'inline' : 'horizontal';

  const module = pathname.split('/').filter(Boolean).slice(0, -1).join('/');
  let activeMenuItem = module || 'home';
  if (pathname.startsWith('/changelog')) {
    activeMenuItem = 'docs/react';
  } else if (pathname.startsWith('/docs/resources')) {
    activeMenuItem = 'docs/resources';
  }

  let additional: MenuProps['items'] = [];

  const additionalItems: MenuProps['items'] = [
    {
      label: (
        <a
          href="https://github.com/ant-design/ant-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      ),
      key: 'github',
    },
    {
      label: <FormattedMessage id="app.header.lang" />,
      onClick: onLangChange,
      key: 'switch-lang',
    },
  ];

  if (isMobile) {
    additional = additionalItems;
  } else if (responsive === 'crowded') {
    additional = [
      {
        label: <MenuOutlined />,
        key: 'additional',
        children: [...additionalItems],
      },
    ];
  }

  const items: MenuProps['items'] = [
    {
      label: (
        <Link
          to={utils.getLocalizedPathname(
            '/docs/guide/intro/',
            isZhCN,
            search,
          )}
        >
          {locale.guide}
        </Link>
      ),
      key: '/guide/intro',
    },
    {
      label: (
        <Link
          to={utils.getLocalizedPathname(
            '/docs/route/intro/',
            isZhCN,
            search,
          )}
        >
          {locale.route}
        </Link>
      ),
      key: '/docs/route',
    },
    {
      label: (
        <Link
          to={utils.getLocalizedPathname(
            '/components/overview/',
            isZhCN,
            search,
          )}
        >
          {locale.hook}
        </Link>
      ),
      key: 'components',
    },

 {
          label: (
            <Link
              to={utils.getLocalizedPathname(
              '/docs/faq/',
                isZhCN,
                search,
              )}
            >
              {locale.faq}
            </Link>
          ),
          key: 'docs/faq',
        }
      ,
    {
      label: (
        <Link
          to={utils.getLocalizedPathname('/docs/resources', isZhCN, search)}
        >
          {locale.iteration}
        </Link>
      ),
      key: 'docs/resources',
    },
    ...(additional ?? []),
  ].filter(Boolean);

  return (
    <Menu
      mode={menuMode}
      selectedKeys={[activeMenuItem]}
      className={styles.nav}
      disabledOverflow
      items={items}
    />
  );
};

export default HeaderNavigation;
