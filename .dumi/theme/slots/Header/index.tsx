import {  MenuOutlined } from "@ant-design/icons";
import { Col,Popover, Row } from "antd";
import { createStyles } from "antd-style";
import classNames from "classnames";
import { useLocation } from "dumi";
import DumiSearchBar from "dumi/theme-default/slots/SearchBar";
import ButtonIcon from '../../builtins/ButtonIcon'
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useLocale from "../../../hooks/useLocale";
import * as utils from "../../utils";
import type { SiteContextProps } from "../SiteContext";
import SiteContext from "../SiteContext";
import type { SharedProps } from "./interface";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SwitchBtn from "./SwitchBtn";
import ResourceLink from "./ResourceLink";

const RESPONSIVE_XS = 1120;
const RESPONSIVE_SM = 1200;



const useStyle = createStyles(({ token, css }) => {
  const searchIconColor = "#ced4d9";
  return {
    header: css`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: ${token.colorBgContainer};
      box-shadow: ${token.boxShadowTertiary};
      backdrop-filter: blur(8px);

      @media only screen and (max-width: ${token.mobileMaxWidth}px) {
        text-align: center;
        border: none;
      }

      .dumi-default-search-bar {
        display: inline-flex;
        align-items: center;
        flex: auto;
        margin: 0;
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: ${searchIconColor};
        }

        > input {
          height: 22px;
          border: 0;
          max-width: calc(100vw - 768px);

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: ${searchIconColor};
          }
        }

        .dumi-default-search-shortcut {
          color: ${searchIconColor};
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: ${token.borderRadiusSM}px;
          position: static;
          top: unset;
          transform: unset;
        }

        .dumi-default-search-popover {
          inset-inline-start: ${token.paddingSM}px;
          inset-inline-end: unset;
          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
          & > section {
            scrollbar-width: thin;
            scrollbar-color: unset;
          }
        }
      }
    `,
    menuRow: css`
      display: flex;
      align-items: center;
      margin: 0;
      column-gap: ${token.paddingSM}px;
      padding-inline-end: ${token.padding}px;

      > * {
        flex: none;
        margin: 0;
      }
    `,
    dataDirectionIcon: css`
      width: 20px;
    `,
    popoverMenu: {
      width: 300,
      [`${token.antCls}-popover-inner-content`]: {
        padding: 0,
      },
    },
    banner: css`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `,
    link: css`
      margin-inline-start: 10px;
      @media only screen and (max-width: ${token.mobileMaxWidth}px) {
        margin-inline-start: 0;
      }
    `,
    versionSelect: css`
      min-width: 90px;
      .rc-virtual-list {
        .rc-virtual-list-holder {
          scrollbar-width: thin;
          scrollbar-color: unset;
        }
      }
    `,
  };
});

interface HeaderState {
  menuVisible: boolean;
  windowWidth: number;
  searching: boolean;
}

// ================================= Header =================================
const Header: React.FC = () => {
  const [_,lang] = useLocale();

  const [headerState, setHeaderState] = useState<HeaderState>({
    menuVisible: false,
    windowWidth: 1400,
    searching: false,
  });

  const { isMobile, } =
    useContext<SiteContextProps>(SiteContext);
  const pingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const { pathname, search } = location;

  const { styles } = useStyle();

  const handleHideMenu = useCallback(() => {
    setHeaderState((prev) => ({ ...prev, menuVisible: false }));
  }, []);
  const onWindowResize = useCallback(() => {
    setHeaderState((prev) => ({ ...prev, windowWidth: window.innerWidth }));
  }, []);
  const onMenuVisibleChange = useCallback((visible: boolean) => {
    setHeaderState((prev) => ({ ...prev, menuVisible: visible }));
  }, []);



  useEffect(() => {
    handleHideMenu();
  }, [location]);

  useEffect(() => {
    onWindowResize();
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
      if (pingTimer.current) {
        clearTimeout(pingTimer.current);
      }
    };
  }, []);




  const onLangChange = useCallback(() => {
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.slice(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem(
        "locale",
        utils.isZhCN(pathname) ? "en-US" : "zh-CN"
      );
    }
    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname), search)
          .pathname
      );
  }, [location]);





  const { menuVisible, windowWidth, searching } = headerState;



  const isHome = ["", "index", "index-cn"].includes(pathname);
  const isZhCN = lang === "cn";
  let responsive: null | "narrow" | "crowded" = null;
  if (windowWidth < RESPONSIVE_XS) {
    responsive = "crowded";
  } else if (windowWidth < RESPONSIVE_SM) {
    responsive = "narrow";
  }

  const headerClassName = classNames(styles.header, "clearfix", {
    "home-header": isHome,
  });

  const sharedProps: SharedProps = {
    isZhCN,
  };

  const navigationNode = (
    <Navigation
      key="nav"
      {...sharedProps}
      responsive={responsive}
      isMobile={isMobile}
      onLangChange={onLangChange}
    />
  );

  let menu = [
    navigationNode,
    <ResourceLink/>,
    <SwitchBtn
      key="lang"
      onClick={onLangChange}
      value={utils.isZhCN(pathname) ? 1 : 2}
      label1="中"
      label2="En"
      tooltip1="中文 / English"
      tooltip2="English / 中文"
    />,
     <a
     key="github"
     href="https://github.com/mufeng889/react-soybean-admin.git"
     target="_blank"
     rel="noreferrer"
   >
    <ButtonIcon tooltipContent="Github"  icon="logos:github-icon"/>
    </a>,
          <a
          key="qq"
          href="https://qm.qq.com/cgi-bin/qm/qr?k=WBX5tYiXMmmeid0Vw4yaqtSFqdBugAYY&jump_from=webapi&authKey=DNjXMlJRUf0EMrM+WV9fed2D1PaB3isk8Ph/6GYyruQeR2W/eIz5V6sk1FLJUP98"
          target="_blank"
          rel="noreferrer"
        >
    <ButtonIcon tooltipContent="qq" icon="logos:github-icon">
      {IconLocalQq({className:'w-20px h-22px'})}
            </ButtonIcon>,
            </a>


  ];

  if (windowWidth < RESPONSIVE_XS) {
    menu = searching ? [] : [navigationNode];
  } else if (windowWidth < RESPONSIVE_SM) {
    menu = searching ? [] : menu;
  }

  const colProps = isHome
    ? [{ flex: "none" }, { flex: "auto" }]
    : [
        { xxl: 4, xl: 5, lg: 6, md: 6, sm: 24, xs: 24 },
        { xxl: 20, xl: 19, lg: 18, md: 18, sm: 0, xs: 0 },
      ];

  return (
    <header className={headerClassName}>
      {isMobile && (
        <Popover
          overlayClassName={styles.popoverMenu}
          placement="bottomRight"
          content={menu}
          trigger="click"
          open={menuVisible}
          arrow={{ pointAtCenter: true }}
          onOpenChange={onMenuVisibleChange}
        >
          <MenuOutlined className="nav-phone-icon" />
        </Popover>
      )}

      <Row style={{ flexFlow: "nowrap", height: 64 }}>
        <Col {...colProps[0]}>
          <Logo {...sharedProps}  />

        </Col>
        <Col {...colProps[1]}>
          <div className={styles.menuRow}>
            <DumiSearchBar />

            {!isMobile && menu}
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
