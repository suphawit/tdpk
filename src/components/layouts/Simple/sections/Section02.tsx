import classNames from 'classnames';

import { ISection } from '@models';
import { Container } from '@components';

const Section02 = ({ contents }: ISection) => {
  const section = (num: number) => contents[num].contents;

  const { color, image, theme } = section(0);
  const postfixText = section(1).detail;
  const { title, detail } = section(2);

  const bannerLogo = section(3).image;

  const bannerImage = section(4).image;
  const bannerVideo = section(4).embedVideo;

  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };

  const isNotRender =
    !title &&
    !detail &&
    !postfixText &&
    !bannerLogo &&
    !bannerImage &&
    !bannerVideo;

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
      <Container>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <article className="col-span-1">
            {bannerLogo && <img src={bannerLogo} alt="Logo" className="mb-4" />}
            {title && (
              <div
                className="text-2xl font-extrabold mb-4 lg:text-3xl lg:mb-6"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {detail && <div dangerouslySetInnerHTML={{ __html: detail }} />}
            {postfixText && (
              <div dangerouslySetInnerHTML={{ __html: postfixText }} />
            )}
          </article>
          <div className="col-span-1">
            {bannerImage && (
              <img src={bannerImage} alt="" className="shadow-2xl" />
            )}
            {bannerVideo && (
              <div
                dangerouslySetInnerHTML={{
                  __html: bannerVideo,
                }}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section02;
