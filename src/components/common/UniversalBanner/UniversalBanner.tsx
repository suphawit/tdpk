import classNames from 'classnames';

import { ISection } from '@models';
import { Container } from '@components';

interface UniversalBannerProps {
  data: ISection[];
}

const UniversalBanner = ({ data }: UniversalBannerProps) => {
  const section = (num: number) => data[num].contents;
  const { image, color, theme } = section(0);
  const { detail: price } = section(1);
  const { title, detail } = section(2);
  const { image: logo } = section(3);
  const { image: bannerImage, embedVideo: bannerVideo } = section(4);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };
  const isNotRender =
    !logo && !title && !detail && !price && !bannerImage && !bannerVideo;

  if (isNotRender) return <></>;
  return (
    <section
      className={classNames(
        'w-full flex justify-center items-center landing-block relative',
        { 'before:section-display': theme },
        sectionTheme[theme],
        txtColor
      )}
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container extraClasses="relative flex items-center justify-center grid lg:grid-cols-12 lg:gap-8">
        <article className="my-auto lg:col-span-5">
          {logo && <img src={logo} alt="Logo" className="mb-4" />}
          {title && (
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className="text-3xl mb-4 font-extrabold lg:text-4xl"
            />
          )}
          {detail && (
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: detail }}
                className="ContentContainer text-lg"
              />
              <hr className="w-60 h-1 border-0 bg-bright-green mt-4" />
            </div>
          )}
          {price && (
            <div
              dangerouslySetInnerHTML={{ __html: price }}
              className="ContentContainer text-lg mt-4 font-bold"
            />
          )}
        </article>
        <div className="flex items-center justify-center w-full h-4/5 mt-4 lg:mt-0 lg:col-span-7">
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
      </Container>
    </section>
  );
};

export default UniversalBanner;
