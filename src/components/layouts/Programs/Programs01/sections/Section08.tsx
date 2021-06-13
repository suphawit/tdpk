import classNames from 'classnames';

import { ISection } from '@models';

const Section08 = ({ contents }: ISection) => {
  const section = (num: number) => contents[num].contents;

  const { color, image, theme } = section(0);
  const { title, detail } = section(1);
  const sectionImage = section(2).image;

  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };
  const isNotRender = !title && !detail && !sectionImage;

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
      <div className="relative grid gap-6 flex items-center py-10 lg:my-20 lg:px-36 lg:grid-cols-12 lg:gap-8 2xl:container 2xl:mx-auto">
        <article className="lg:col-span-5 px-6">
          {title && (
            <div
              className="text-bright-green font-extrabold text-4xl"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}

          {detail && (
            <div
              className="ContentContainer text-white mt-4 lg:mt-6"
              dangerouslySetInnerHTML={{ __html: detail }}
            />
          )}
        </article>
        {sectionImage && (
          <article className="lg:col-span-7 lg:-my-20">
            <img
              src={sectionImage}
              alt="Making deal"
              className="w-full shadow-md"
            />
          </article>
        )}
      </div>
    </section>
  );
};

export default Section08;
