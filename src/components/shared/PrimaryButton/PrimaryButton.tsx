import classNames from 'classnames';

interface IPrimaryButton {
  children: JSX.Element | string;
  extraClassNames?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const PrimaryButton = ({
  children,
  extraClassNames,
  disabled = false,
  onClick,
}: IPrimaryButton) => (
  <button
    className={classNames(
      'px-8 py-2 font-bold shadow-md duration-300 lg:py-3 focus:outline-none',
      {
        'bg-gray-100 text-gray-300 cursor-not-allowed': disabled,
        'bg-bright-green hover:bg-black hover:text-white': !disabled,
      },
      extraClassNames
    )}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default PrimaryButton;
