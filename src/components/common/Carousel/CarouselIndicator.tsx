import { GiPlainSquare } from 'react-icons/gi';
import classNames from 'classnames';

interface CarouselIndicatorProps {
  numOfSlide: number;
  selectedItem: number;
  onChange: (index: number) => void;
  centered?: boolean;
  extraClasses?: string;
}

const CarouselIndicator = ({
  numOfSlide,
  selectedItem,
  onChange,
  centered,
  extraClasses,
}: CarouselIndicatorProps) => {
  return (
    <div
      className={classNames(
        'flex',
        'items-center',
        {
          'justify-center': centered,
        },
        'mt-4',
        'sm:mt-6',
        'space-x-4',
        extraClasses
      )}
    >
      {numOfSlide > 1 &&
        new Array(numOfSlide).fill(null).map((_, index) => (
          <GiPlainSquare
            key={index}
            style={{
              color: index === selectedItem ? 'black' : 'gray',
              fontSize: index === selectedItem ? '11px' : '8px',
              cursor: 'pointer',
            }}
            onClick={() => onChange(index)}
          />
        ))}
    </div>
  );
};

export default CarouselIndicator;
