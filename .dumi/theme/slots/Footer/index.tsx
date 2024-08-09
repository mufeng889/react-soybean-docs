import { TinyColor } from '@ctrl/tinycolor';
import { createStyles } from 'antd-style';
import getAlphaColor from 'antd/es/theme/util/getAlphaColor';
import { FormattedMessage } from 'dumi';
import RcFooter from 'rc-footer';
import React, { useContext } from 'react';
import SiteContext from '../SiteContext';

const useStyle = () => {
  const { isMobile } = useContext(SiteContext);
  return createStyles(({ token, css }) => {
    const background = new TinyColor(getAlphaColor('#f0f3fa', '#fff'))
      .onBackground(token.colorBgContainer)
      .toHexString();

    return {
      footer: css`
        background: ${background};
        color: ${token.colorTextSecondary};
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

        * {
          box-sizing: border-box;
        }

        h2,
        a {
          color: ${token.colorText};
        }

        .rc-footer-column {
          margin-bottom: ${isMobile ? 60 : 0}px;
          :last-child {
            margin-bottom: ${isMobile ? 20 : 0}px;
          }
        }

        .rc-footer-item-icon {
          top: -1.5px;
        }

        .rc-footer-container {
          max-width: 1208px;
          margin-inline: auto;
          padding-inline: ${token.marginXXL}px;
        }

        .rc-footer-bottom {
          box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
          .rc-footer-bottom-container {
            font-size: ${token.fontSize}px;
          }
        }
      `,
    };
  })();
};

const Footer = () => {
  const { styles } = useStyle();

  const col1 = {
    title: <FormattedMessage id="app.footer.resources" />,
    items: [
      {
        title: 'Ant Design Charts',
        url: 'https://ant-design-charts.antgroup.com',
        openExternal: true,
      },
      {
        title: 'Ant Design Pro',
        url: 'https://pro.ant.design',
        openExternal: true,
      },
      {
        title: 'Ant Design Pro Components',
        url: 'https://procomponents.ant.design',
        openExternal: true,
      },
      {
        title: 'Ant Design Mobile',
        url: 'https://mobile.ant.design',
        openExternal: true,
      },
      {
        title: 'Ant Design Mini',
        url: 'https://mini.ant.design',
        openExternal: true,
      },
      {
        title: 'Ant Design Landing',
        description: <FormattedMessage id="app.footer.landing" />,
        url: 'https://landing.ant.design',
        openExternal: true,
      },
      {
        title: 'Scaffolds',
        description: <FormattedMessage id="app.footer.scaffolds" />,
        url: 'https://scaffold.ant.design',
        openExternal: true,
      },
      {
        title: 'Umi',
        description: <FormattedMessage id="app.footer.umi" />,
        url: 'https://umijs.org',
        openExternal: true,
      },
      {
        title: 'dumi',
        description: <FormattedMessage id="app.footer.dumi" />,
        url: 'https://d.umijs.org',
        openExternal: true,
      },
      {
        title: 'qiankun',
        description: <FormattedMessage id="app.footer.qiankun" />,
        url: 'https://qiankun.umijs.org',
        openExternal: true,
      },
      {
        title: 'ahooks',
        description: <FormattedMessage id="app.footer.hooks" />,
        url: 'https://github.com/alibaba/hooks',
        openExternal: true,
      },
      {
        title: 'Ant Motion',
        description: <FormattedMessage id="app.footer.motion" />,
        url: 'https://motion.ant.design',
        openExternal: true,
      },
      {
        title: <FormattedMessage id="app.footer.chinamirror" />,
        url: 'https://ant-design.antgroup.com',
      },
    ],
  };

  return (
    <RcFooter
      className={styles.footer}
      columns={[col1]}
      bottom={
        <>
          <div style={{ opacity: '0.4' }}>
            Made with <span style={{ color: '#fff' }}>❤️</span> by
          </div>
          <div>Soybean</div>
        </>
      }
    />
  );
};

export default Footer;
