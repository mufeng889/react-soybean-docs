import { Col, Row, Typography } from 'antd';
import { createStyles, useTheme } from 'antd-style';
import { Link, useLocation } from 'dumi';
import React, { useContext } from 'react';
import useDark from '../../../hooks/useDark';
import useLocale from '../../../hooks/useLocale';
import SiteContext from '../../../theme/slots/SiteContext';
import * as utils from '../../../theme/utils';


const locales = {
  cn: {
    values: '最新流行技术栈',
    valuesDesc: 'React18,React-Router-Dom V6,Vite5,TypeScript 和 UnoCSS',
    guide: '清晰的项目结构',
    guideDesc: '采用 pnpm monorepo，结构清晰优雅，易于维护。代码规范性极高。',
    lib: 'TypeScript',
    libDesc: '严格的类型检查，易于维护。',
    theme:'主题配置',
    themeDesc:'基于 Ant Design，内置了丰富的主题配置，完美结合 UnoCSS，轻松实现主题的动态切换',
    file:'文件路由系统',
    fileDesc:'自动化、智能化的文件路由系统,根据文件自动生成本地路由，配合脚本命令，自动生成简易路由文件',
    route:'权限路由',
    routeDesc:'支持前端静态路由和后端动态路由'
  },
  en: {
    values: 'Latest Popular Tech Stack',
    valuesDesc: 'React18,React-Router-Dom V6,Vite5,TypeScript 和 UnoCSS',
    guide: 'Clear Project Structure',
    "guideDesc": "Adopts pnpm monorepo, with a clear and elegant structure that is easy to maintain. The code is highly standardized.",
    "lib": "TypeScript",
    "libDesc": "Strict type checking, easy to maintain.",
    "theme": "Theme Configuration",
    "themeDesc": "Based on Ant Design, includes rich built-in theme configurations, perfectly integrates with UnoCSS, allowing for effortless dynamic theme switching.",
    "file": "File Routing System",
    "fileDesc": "Automated and intelligent file routing system that automatically generates local routes based on files, and with script commands, generates simple routing files automatically.",
    "route": "Permission-based Routing",
    "routeDesc": "Supports both front-end static routes and back-end dynamic routes."
  },
};


const useStyle = () => {
  const isRootDark = useDark();

  return createStyles(({ token, css }) => ({
    cardMini: css`
      display: block;
      border-radius: ${token.borderRadius * 2}px;
      padding: 24px;
      backdrop-filter: blur(10px);
      min-height:168px;
      background: ${isRootDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(243, 242, 242, 0.2)'};
      border: 1px solid
        ${isRootDark ? 'rgba(255, 255, 255, 0.45)' : 'rgba(0, 0, 0, 0.06)'};
       &:hover {
        box-shadow: ${token.boxShadow};
      }

     .text-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 6px;
    background-color: ${isRootDark ?'rgba(13, 13, 13, 0.7)':'rgba(222, 222, 222, 0.4)'};
    width: 48px;
    height: 48px;
    font-size: 24px;
    transition: background-color .25s;
      }
    `,
  }))();
};

const DesignFramework: React.FC = () => {
  const [locale] = useLocale(locales);
  const token = useTheme();
  const { styles } = useStyle();
  const { pathname, search } = useLocation();
  const isZhCN = utils.isZhCN(pathname);
  const { isMobile } = useContext(SiteContext);
  const colSpan = isMobile ? 24 : 8;

  const MAINLY_LIST = [
    {
      img: '🆕',
      key: 'values',
      path: utils.getLocalizedPathname('/docs/spec/values/', isZhCN, search),
    },
    {
      img: '🦋',
      key: 'guide',
      path: utils.getLocalizedPathname('/docs/spec/colors/', isZhCN, search),
    },
    {
      img: '🛠️',
      key: 'lib',
      path: utils.getLocalizedPathname(
        '/docs/react/introduce/',
        isZhCN,
        search,
      ),
    },
    {
      img: '🔩',
      key: 'theme',
      path: utils.getLocalizedPathname('/docs/spec/values/', isZhCN, search),
    },
    {
      img: '🔗',
      key: 'file',
      path: utils.getLocalizedPathname('/docs/spec/colors/', isZhCN, search),
    },
    {
      img: '🔑',
      key: 'route',
      path: utils.getLocalizedPathname(
        '/docs/react/introduce/',
        isZhCN,
        search,
      ),
    },
  ];

  return (
    <Row gutter={[token.marginXL, token.marginXL]}>
      {MAINLY_LIST.map(({ img, key, path }, index) => {
        const title = locale[key as keyof typeof locale];
        const desc = locale[`${key}Desc` as keyof typeof locale];

        return (
          <Col key={index} span={colSpan}>
            <Link to={path}>
              <div className={styles.cardMini}>
                <div className='text-icon'>{img}</div>

                <Typography.Title
                  level={5}
                  style={{
                    marginTop: token.margin,
                    marginBottom: token.marginXS,
                  }}
                >
                  {title}
                </Typography.Title>
                <Typography.Paragraph ellipsis={{rows:3,tooltip:{title:desc}}} type="secondary" style={{ margin: 0 }}>
                  {desc}
                </Typography.Paragraph>
              </div>
            </Link>
          </Col>
        );
      })}


    </Row>
  );
};

export default DesignFramework;
