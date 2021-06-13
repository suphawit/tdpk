import * as React from 'react';
import Slider from 'react-slick';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';

import { EventTime, ItemCard } from '@components/common';
import { useCheckBreakpointValues } from '@hooks';
import { IEvent } from '@models';

interface UpcomingEventCarouselProps {
  events: IEvent[];
}

const UpcomingEventCarousel = ({ events = [] }: UpcomingEventCarouselProps) => {
  const { isSm, isMd } = useCheckBreakpointValues();

  const slides = React.useMemo(() => {
    if (isSm) return 1;
    else if (isMd) return 2;
    return 3;
  }, [isSm, isMd]);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: slides,
  };

  return (
    <Slider {...settings}>
      {events.map((event) => (
        <Link href={event.target} key={event.title}>
          <a target="_blank">
            <ItemCard
              // imageHeight={isSm ? '174px' : '204px'}
              imageUrl={event.image}
              category={event.category}
              title={event.title}
              className="mt-8 mx-8 mb-10 lg:mb-8 lg:mb-12"
            >
              <ItemCard.Extras>
                <EventTime date={event.eventDate} eventTime={event.eventTime} />
              </ItemCard.Extras>
            </ItemCard>
          </a>
        </Link>
      ))}
    </Slider>
  );
};

export default UpcomingEventCarousel;
