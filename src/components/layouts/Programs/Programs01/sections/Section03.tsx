import classNames from 'classnames';

import { ISection } from '@models';
import { Container } from '@components';

const Section03 = ({ contents }: ISection) => {
  const section = (num: number) => contents[num].contents;

  const { color, image, theme } = section(0);
  const { title, detail } = section(1);

  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };
  const bannerImage = section(2).image;
  const isNotRender = !title && !detail && !bannerImage;

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
      <Container extraClasses="relative grid lg:grid-cols-12 lg:gap-8">
        <article className="lg:col-span-5">
          <img src={bannerImage} className="shadow-2xl" />
        </article>
        <article className="mt-6 lg:mt-0 lg:col-span-7">
          {title && (
            <div
              className="font-extrabold text-3xl"
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
      </Container>
    </section>
  );
};

export default Section03;
