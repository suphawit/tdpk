import classNames from 'classnames';

interface AnimatedArrowType {
  extraClasses?: string;
  active?: boolean;
  isWhite?: boolean;
}

const AnimatedArrow = ({
  extraClasses,
  active,
  isWhite,
}: AnimatedArrowType) => {
  return (
    <span className={`${extraClasses}`}>
      <span
        className={classNames(
          'animated-arrow',
          {
            'animated-arrow__active': active,
          },
          { 'animated-arrow__white': isWhite }
        )}
      >
        <span />
        <span />
      </span>
    </span>
  );
};

export default AnimatedArrow;
