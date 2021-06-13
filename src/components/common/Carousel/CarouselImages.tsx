import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import CarouselIndicator from './CarouselIndicator';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface CarouselImagesProps {
  items: string[];
}

const CarouselImages = ({ items = [] }: CarouselImagesProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleChangeSlide = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <>
      <Carousel
        selectedItem={currentSlide}
        onChange={handleChangeSlide}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        className="shadow-md"
      >
        {items.map((item, index) => (
          <div key={index} className="border-b-6 border-bright-green">
            <img
              src={item}
              alt=""
              className="object-cover h-48 md:h-60 lg:h-80"
            />
          </div>
        ))}
      </Carousel>
      {items.length > 1 && (
        <div className="w-full">
          <CarouselIndicator
            numOfSlide={items.length}
            selectedItem={currentSlide}
            onChange={handleChangeSlide}
            centered
          />
        </div>
      )}
    </>
  );
};

export default CarouselImages;
