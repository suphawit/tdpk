import * as React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { MdKeyboardArrowUp } from 'react-icons/md';

const OFFSET_TARGET = 300;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { t } = useTranslation('common');

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    const isPageOffSet = window.pageYOffset > OFFSET_TARGET;
    setIsVisible(isPageOffSet);
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  React.useEffect(() => {
    if (document) {
      document.addEventListener('scroll', toggleVisibility);
    }

    return () => {
      document.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // TODO: use style component for scroll-to-top
  return (
    <div className="scroll-to-top cursor-pointer fixed right-6 bottom-20">
      {isVisible && (
        <button
          className="bg-gray-300 font-bold p-2.5 flex focus:outline-none"
          onClick={scrollToTop}
        >
          <span className="hidden lg:block lg:px-1">{t('scrollToTop')}</span>
          <MdKeyboardArrowUp className="text-2xl" />
        </button>
      )}
    </div>
  );
}
