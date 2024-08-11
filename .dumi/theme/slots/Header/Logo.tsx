import { createStyles } from 'antd-style';
import { useLocation } from 'dumi';
import  type {FC} from 'react';

import Link from '../../common/Link';
import * as utils from '../../utils';

const useStyle = createStyles(({ token, css }) => {
  const { headerHeight, colorTextHeading, fontFamily, mobileMaxWidth } = token;

  return {
    logo: css`
      height: ${headerHeight}px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: ${colorTextHeading};
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, ${fontFamily}, sans-serif;
      line-height: ${headerHeight}px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      column-gap: ${token.marginSM}px;

      &:hover {
        color: ${colorTextHeading};
      }

      img {
        width: 32px;
        height: 32px;
        display: inline-block;
        vertical-align: middle;
      }

      @media only screen and (max-width: ${mobileMaxWidth}px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `,
    title: css`
      line-height: 32px;
    `,
  };
});

export interface LogoProps {
  isZhCN: boolean;
}

const logoSrc =
  '/logo.svg';

const Logo: FC<LogoProps> = ({ isZhCN }) => {
  const { search } = useLocation();
  const { styles } = useStyle();
  return (
    <h1>
      <Link
        to={utils.getLocalizedPathname('/', isZhCN, search)}
        className={styles.logo}
      >
        <img src={logoSrc} draggable={false} alt="logo" />
        <span className={styles.title}>React Soybean</span>
      </Link>
    </h1>
  );
};

export default Logo;
