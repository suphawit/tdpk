import * as React from 'react';
import classNames from 'classnames';

import { Carousel } from 'react-responsive-carousel';
import { CarouselIndicator } from '@components/common';

import { IFeedbackBanner, ISection } from '@models';

const listSectionFilter = (contents) => {
  const listContents = contents.slice(2);
  const list: IFeedbackBanner[] = [];

  for (let listContent of listContents) {
    const {
      contentType,
      contents: { id, detail, image, createdAt, updatedAt },
    } = listContent;
    if (image)
      list.push({
        id,
        contentType,
        image,
        detail,
        createdAt,
        updatedAt,
      });
  }
  return list;
};

const Section09 = ({ contents }: ISection) => {
  const section = (num: number) => contents[num].contents;

  const { color, image, theme } = section(0);
  const { title } = section(1);

  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };

  const list = listSectionFilter(contents);

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleChangeSlide = (index: number) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };
  const isNotRender = !title && !list.length;

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
      <div className="py-10 lg:my-20 px-6 lg:px-40 2xl:container 2xl:mx-auto">
        {title && (
          <div
            className="font-extrabold text-3xl mb-6 lg:mb-10"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        <Carousel
          selectedItem={currentSlide}
          onChange={handleChangeSlide}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          infiniteLoop
          swipeable
          emulateTouch
        >
          {list.map((banner, key) => (
            <div key={key} className="lg:grid lg:grid-cols-12 lg:gap-8">
              <img className="lg:col-span-4 mb-6 lg:mb-0" src={banner.image} />
              {banner.detail && (
                <div
                  className="ContentContainer lg:col-span-8 text-left"
                  dangerouslySetInnerHTML={{ __html: banner.detail }}
                />
              )}
            </div>
          ))}
        </Carousel>
        <CarouselIndicator
          extraClasses="justify-center"
          numOfSlide={list.length}
          selectedItem={currentSlide}
          onChange={handleChangeSlide}
        />
      </div>
    </section>
  );
};

export default Section09;
