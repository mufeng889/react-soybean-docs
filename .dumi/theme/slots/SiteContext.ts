import * as React from 'react';

export type ThemeName = 'light' | 'dark' | 'compact' | 'motion-off' | 'happy-work';

export interface SiteContextProps {
  isMobile: boolean;
  bannerVisible: boolean;
  theme: ThemeName[];
  updateSiteConfig: (props: Partial<SiteContextProps>) => void;
}

const SiteContext = React.createContext<SiteContextProps>({
  isMobile: false,
  bannerVisible: false,
  theme: ['light'],
  updateSiteConfig: () => {}
});

export default SiteContext;
