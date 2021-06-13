import { Section234 } from '@models';
import { CarouselImages } from '@components';

interface MembershipsCarousel {
  items: Section234[];
}

const MembershipsCarousel = ({ items }: MembershipsCarousel) => {
  return <CarouselImages items={items.map((i) => i.image)} />;
};

export default MembershipsCarousel;
