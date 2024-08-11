import { createContext } from 'react';

export interface SiteContextProps {
  isMobile: boolean;
}

const SiteContext = createContext<SiteContextProps>({
  isMobile: false
});

export default SiteContext;
