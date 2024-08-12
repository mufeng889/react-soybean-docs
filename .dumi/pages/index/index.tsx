import React from 'react';
import BannerRecommends from './components/BannerRecommends';
import PreviewBanner from './components/PreviewBanner';

const Homepage: React.FC = () => {

  return (
    <section>
      <PreviewBanner>
        <BannerRecommends />
      </PreviewBanner>
    </section>
  );
};

export default Homepage;
