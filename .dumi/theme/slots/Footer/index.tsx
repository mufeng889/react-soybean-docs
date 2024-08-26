import { TinyColor } from '@ctrl/tinycolor';
import { createStyles } from 'antd-style';
import getAlphaColor from 'antd/es/theme/util/getAlphaColor';
import { FormattedMessage,Link } from 'dumi';
import RcFooter from 'rc-footer';
import { useContext } from 'react';
import SiteContext from '../SiteContext';
import useLocation from '../../../hooks/useLocation';

import {
  BugOutlined,
  GithubOutlined,
  IssuesCloseOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

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
          margin-bottom: ${isMobile ? 40 : 0}px;
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
          padding: 40px 0 20px;
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


const col1 = {
  title: <FormattedMessage id="soy-series" />,
  items: [
    {
      title: 'React Soybean',
      url: 'https://github.com/mufeng889/react-soybean-admin',
      openExternal: true,
    },
    {
      title: 'React Soybean',
      description: <FormattedMessage id="online-preview" />,
      url: 'https://react-soybean.ohh-889.com/',
      openExternal: true,
    },
    {
      title: 'React Soybean',
      description: <FormattedMessage id="app.footer.chinamirror" />,
      url: 'https://react-soybean-admin.pages.dev/',
      openExternal: true,
    },
    {
      title: 'React Soybean Docs',
      url: 'https://github.com/mufeng889/react-soybean-docs',
      openExternal: true,
    },
    {
      title: 'Soybean',
      url: 'https://github.com/soybeanjs/soybean-admin',
      openExternal: true,
    },
    {
      title: 'Elegant Router',
      description: <FormattedMessage id="auto-router" />,
      url: 'https://github.com/soybeanjs/elegant-router',
      openExternal: true,
    },
    {
      title: 'Eslint Config',
      description: <FormattedMessage id="out-box" />,
      url: 'https://github.com/soybeanjs/eslint-config',
      openExternal: true,
    },
  ],
};

const col2 = {
  title: <FormattedMessage id="app.footer.resources" />,
  items: [
    {
      title: 'Ant Design Charts',
      url: 'https://ant-design-charts.antgroup.com',
      openExternal: true,
    },
    {
      title: 'Ant Design Pro Components',
      url: 'https://procomponents.ant.design',
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
      title: <FormattedMessage id="app.footer.chinamirror" />,
      url: 'https://ant-design.antgroup.com',
    },
  ],
};

const Footer = () => {
  const { styles } = useStyle();

  const location = useLocation();



  const { getLink } = location;

  const col3 = {
    title: <FormattedMessage id="app.footer.help" />,
    items: [
      {
        icon: <GithubOutlined />,
        title: 'GitHub',
        url: 'https://github.com/mufeng889/react-soybean-admin',
        openExternal: true,
      },
      {
        icon: <QuestionCircleOutlined />,
        title: <FormattedMessage id="app.footer.faq" />,
        url: getLink('/docs/faq'),
        LinkComponent: Link,
      },
      {
        icon: <BugOutlined />,
        title: <FormattedMessage id="app.footer.bug-report" />,
        url: 'https://github.com/mufeng889/react-soybean-admin/issues/new?assignees=&labels=bug%3F&projects=&template=bug-report_cn.yaml&title=%5BBug%5D%3A+',
        openExternal: true,
      },
      {
        icon: <IssuesCloseOutlined />,
        title: <FormattedMessage id="app.footer.issues" />,
        url: 'https://github.com/mufeng889/react-soybean-admin/issues',
        openExternal: true,
      },
      {
        icon: <MessageOutlined />,
        title: <FormattedMessage id="app.footer.discussions" />,
        url: 'https://github.com/mufeng889/react-soybean-admin/discussions',
        openExternal: true,
      },
    ],
  };


  return (
    <RcFooter
      className={styles.footer}
      columns={[col1,col2,col3]}
      bottom={
        <>
          <div style={{ opacity: '0.4' }}>
          Copyright © 2021 Soybean  Made with <span style={{ color: '#fff' }}>❤️</span> by
          </div>
          <div>Soybean</div>
        </>
      }
    />
  );
};

export default Footer;
