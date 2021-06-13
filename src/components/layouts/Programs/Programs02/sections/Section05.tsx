import classNames from 'classnames';

import { ISection } from '@models';
import { Container } from '@components';

const Section05 = ({ contents }: ISection) => {
  const section = (num: number) => contents[num].contents;

  const { color, image, theme } = section(0);
  const { title, detail } = section(2);

  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };

  const paragraph = section(1).detail;

  const isNotRender = !title && !detail && !paragraph;

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
        <article className="lg:col-span-4">
          {title && (
            <div
              className="font-extrabold text-3xl"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {detail && (
            <div
              className="ContentContainer mt-4 lg:mt-6"
              dangerouslySetInnerHTML={{ __html: detail }}
            />
          )}
        </article>

        <article className="lg:col-start-6 lg:col-end-13">
          {paragraph && (
            <div
              className="ContentContainer"
              dangerouslySetInnerHTML={{
                __html: paragraph,
              }}
            />
          )}
        </article>
      </Container>
    </section>
  );
};

export default Section05;
