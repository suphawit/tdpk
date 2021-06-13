import * as React from 'react';
import classNames from 'classnames';

import { Container } from '@components';

interface FourPictureBannerProps {
  background: {
    color: string;
    image: string;
    theme: string;
  };
  children: React.ReactNode;
  images?: string[];
}

const renderImg = (src) =>
  src && <img src={src} alt="" className="w-full shadow-md" />;

const FourPictureBanner = ({
  background,
  children,
  images = [],
}: FourPictureBannerProps) => {
  const { color, image, theme } = background;
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };

  return (
    <section
      className={classNames(
        'relative',
        { 'before:section-display': theme },
        sectionTheme[theme],
        txtColor
      )}
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container extraClasses="relative grid lg:grid-cols-2 gap-8">
        <article>{children}</article>
        {images.length > 0 && (
          <article className="grid grid-cols-2 gap-6">
            <div className="mx-auto space-y-6">
              {renderImg(images[0])}
              {renderImg(images[1])}
            </div>
            <div className="space-y-6 pt-14 lg:pt-20 xl:pt-28">
              {renderImg(images[2])}
              {renderImg(images[3])}
            </div>
          </article>
        )}
      </Container>
    </section>
  );
};

export default FourPictureBanner;
