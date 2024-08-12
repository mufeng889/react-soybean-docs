import { css } from 'antd-style';

export interface Author {
  avatar: string;
  href: string;
  type: 'design' | 'develop';
  name: string;
}

export interface Article {
  title: string;
  href: string;
  date: string;
  type: 'design' | 'develop';
  author: Author['name'];
}

export interface Recommendation {
  title?: string;
  img?: string;
  href?: string;
  popularize?: boolean;
  description?: string;
}

type SourceType = 'zhihu' | 'yuque';
export interface Extra {
  title: string;
  description: string;
  date: string;
  img: string;
  source: SourceType;
  href: string;
}

export interface Icon {
  name: string;
  href: string;
}

export type Articles = {
  cn: Article[];
  en: Article[];
};

export type Authors = Author[];

export type Recommendations = {
  cn: Recommendation[];
  en: Recommendation[];
};

export type Extras = {
  cn: Extra[];
  en: Extra[];
};

export type Icons = Icon[];

export type SiteData = {
  articles: Articles;
  authors: Authors;
  recommendations: Recommendations;
  extras: Extras;
  icons: Icons;
};

export const getCarouselStyle = () => ({
  carousel: css`
    .slick-dots.slick-dots-bottom {
      bottom: -22px;
      li {
        width: 6px;
        height: 6px;
        background: #e1eeff;
        border-radius: 50%;
        button {
          height: 6px;
          background: #e1eeff;
          border-radius: 50%;
        }
        &.slick-active {
          background: #4b9cff;
          button {
            background: #4b9cff;
          }
        }
      }
    }
  `
});
