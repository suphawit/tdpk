import classNames from 'classnames';

interface ITertiaryButton {
  children: JSX.Element | string;
  extraClassNames?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const TertiaryButton = ({
  children,
  extraClassNames,
  disabled = false,
  onClick,
}: ITertiaryButton) => (
  <button
    className={classNames(
      'px-8 py-2 font-bold border border-mid-gray duration-300 lg:py-3 focus:outline-none',
      {
        'bg-gray-100 text-gray-300 cursor-not-allowed': disabled,
        'bg-white hover:bg-black hover:border-black hover:text-white': !disabled,
      },
      extraClassNames
    )}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default TertiaryButton;
