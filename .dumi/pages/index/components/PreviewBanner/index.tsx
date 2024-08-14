import { Button,  Flex, Typography } from 'antd';
import { createStyles } from 'antd-style';
import { Link, useLocation } from 'dumi';
import React, { Suspense } from 'react';
import useLocale from '../../../../hooks/useLocale';
import SiteContext from '../../../../theme/slots/SiteContext';
import * as utils from '../../../../theme/utils';
import GroupMaskLayer from '../GroupMaskLayer';
import useDark from '../../../../hooks/useDark';


const {Title}= Typography

const ComponentsBlock = React.lazy(() => import('./ComponentsBlock'));

const locales = {
  cn: {
    slogan:
      '基于 React18,React-Router-Dom V6,Vite5,TypeScript 和 UnoCSS',
    subheading:'一个符合 Ant Design 设计理念的清新优雅的中后台管理模板',
    start: '开始使用',
    designLanguage: '详细介绍',
  },
  en: {
    slogan:
      'Based on React18,React-Router-Dom V6,Vite5,TypeScript, and UnoCSS',
    subheading:'A fresh and elegant admin template that aligns with the Ant Design philosophy.',
    start: 'Getting Started',
    designLanguage: 'Detail Intro',
  },
};

const useStyle = () => {


  return createStyles(({ token, css, cx }) => {

    const isRootDark = useDark();

    const textShadow = `0 0 4px ${token.colorBgContainer}`;

    const mask = cx(css`
      position: absolute;
      inset: 0;
      backdrop-filter: blur(4px);
      opacity:${isRootDark ? 0 : 1} ;
      background-color: rgba(255, 255, 255, 0.2);
      transition: all 1s ease;
      pointer-events: none;
    `);

    return {
      holder: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        perspective: 800px;
        /* fix safari bug by removing blur style */
        transform: translateZ(1000px);
        row-gap: ${token.marginXL}px;

        &:hover .${mask} {
          opacity: 0;
        }
      `,

      mask,

      typography: css`
        text-align: center;
        position: relative;
        margin-top:60px;
        z-index: 1;
        padding-inline: ${token.paddingXL}px;
        text-shadow: ${new Array(5)
          .fill(null)
          .map(() => textShadow)
          .join(', ')};

        h1 {
          font-family: AliPuHui, ${token.fontFamily} !important;
          margin-bottom: 15px;
          font-weight: 900 !important;
          font-size: ${token.fontSizeHeading2 * 2}px !important;
          line-height: ${token.lineHeightHeading2} !important;
        }

          h3 {
          font-family: AliPuHui, ${token.fontFamily} !important;
          margin:0 !important;
          margin-bottom: 15px !important;
        }


        p {
          font-size: ${token.fontSizeLG}px !important;
          font-weight: normal !important;
          margin-bottom: 0;
        }
      `,

      child: css`
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 40px;
        z-index: 1;
      `,
      btnWrap: css`
        margin-bottom: ${token.marginXL}px;
      `,
    };
  })();
};

const PreviewBanner: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const [locale] = useLocale(locales);
  const { styles } = useStyle();
  const { isMobile } = React.useContext(SiteContext);
  const { pathname, search } = useLocation();
  const isZhCN = utils.isZhCN(pathname);

  return (
    <GroupMaskLayer>
      {/* Image Left Top */}
      <img
        style={{
          position: 'absolute',
          left: isMobile ? -120 : 0,
          top: 0,
          width: 240,
        }}
        src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"
        alt="bg"
      />
      {/* Image Right Top */}
      <img
        style={{
          position: 'absolute',
          right: isMobile ? 0 : '40%',
          bottom: 120,
          width: 240,
        }}
        src="https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg"
        alt="bg"
      />

      <div className={styles.holder}>
        {/* Mobile not show the component preview */}
        <Suspense fallback={null}>
          {isMobile ? null : (
              <ComponentsBlock />
          )}
        </Suspense>
        <div className={styles.mask} />
        <Typography className={styles.typography}>
          <h1>
            <span className='home-page-title'>React Soybean </span>
          </h1>
          <Title level={
          3
          }>
          {locale.subheading}
          </Title>
          <p>{locale.slogan}</p>
        </Typography>
        <Flex gap="middle" className={styles.btnWrap}>
          <Link
            to={utils.getLocalizedPathname(
              '/docs/guide/quick-start',
              isZhCN,
              search,
            )}
          >
            <Button   size="large" type="primary">
              {locale.start}
            </Button>
          </Link>
          <Link
            to={utils.getLocalizedPathname(
              '/docs/guide/intro/',
              isZhCN,
              search,
            )}
          >
            <Button  size="large">{locale.designLanguage}</Button>
          </Link>
          <a
     key="github"
     href="https://github.com/mufeng889/react-soybean-admin.git"
     target="_blank"
     rel="noreferrer"
   >
          <Button icon={IconLocalGithub({fill:'var(--ant-color-text)',className:'w-20px h-22px'})}  size="large">Github</Button>
          </a>
        </Flex>
        <div className={styles.child}>{children}</div>
      </div>
    </GroupMaskLayer>
  );
};

export default PreviewBanner;
