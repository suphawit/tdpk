import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import classNames from 'classnames';

import { CarouselIndicator } from '@components/common';
import { ISection } from '@models';
import { Container } from '@components';

const Section02 = ({ contents }: ISection) => {
  const section = (num: number) => contents[num].contents;

  const { color, image, theme } = section(0);
  const { title, detail } = section(1);
  const { subimages } = section(2);

  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const handleChangeSlide = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  const isNotRender = !title && !detail && !subimages.length;

  if (isNotRender) return <></>;
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
      <Container extraClasses="relative grid gap-y-6 lg:grid-cols-12 lg:gap-11">
        <article className="lg:col-span-6">
          {title && (
            <div
              className="font-extrabold text-2xl lg:text-3xl"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {detail && (
            <div
              className="ContentContainer mt-4"
              dangerouslySetInnerHTML={{ __html: detail }}
            />
          )}
        </article>
        {subimages.length > 0 && (
          <article className="lg:col-span-6 flex justify-center">
            <div>
              <Carousel
                selectedItem={currentSlide}
                onChange={handleChangeSlide}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
                showIndicators={false}
                infiniteLoop
                autoPlay
              >
                {subimages.map((src, key) => (
                  <img src={src} key={key} />
                ))}
              </Carousel>
              <div className="h-1.5 bg-bright-green"></div>
              <CarouselIndicator
                numOfSlide={subimages.length}
                selectedItem={currentSlide}
                onChange={handleChangeSlide}
                centered
              />
            </div>
          </article>
        )}
      </Container>
    </section>
  );
};

export default Section02;
