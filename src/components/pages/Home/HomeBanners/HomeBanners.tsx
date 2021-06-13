import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';

import { IHomeBanner } from '@models';
import HomeBannerItem from './HomeBannerItem';
import { CarouselIndicator } from '@components/common';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface HomeBannersProps {
  homeBanners: IHomeBanner[];
}

const HomeBanners = ({ homeBanners = [] }: HomeBannersProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleChangeSlide = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <section className="2xl:container 2xl:mx-auto">
      <Carousel
        selectedItem={currentSlide}
        onChange={handleChangeSlide}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        infiniteLoop
        swipeable
        emulateTouch
        autoPlay={false}
      >
        {homeBanners.map((banner) => (
          <HomeBannerItem
            key={banner.id}
            banner={banner}
            carouselIndicator={
              <CarouselIndicator
                numOfSlide={homeBanners.length}
                selectedItem={currentSlide}
                onChange={handleChangeSlide}
              />
            }
          />
        ))}
      </Carousel>
    </section>
  );
};

export default HomeBanners;
