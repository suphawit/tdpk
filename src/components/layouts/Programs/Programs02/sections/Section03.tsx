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

  const projectImage = section(2).image;

  const isNotRender = !title && !detail && !projectImage;

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
      <Container extraClasses="relative grid gap-4 lg:grid-cols-2 lg:gap-8">
        {projectImage && <img src={projectImage} />}
        <article>
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
      </Container>
    </section>
  );
};
export default Section03;
