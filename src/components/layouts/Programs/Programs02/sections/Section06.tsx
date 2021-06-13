import classNames from 'classnames';

import { ISection } from '@models';

const Section06 = ({ contents }: ISection) => {
  const section = (num: number) => contents[num].contents;

  const { color, image, theme } = section(0);
  const { title, detail, subtitle, target } = section(1);

  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };

  const isNotRender = !title && !detail && !(target && subtitle);

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
      <div className="relative grid text-white font-bold px-6 py-10 lg:px-36 lg:py-12 lg:grid-cols-6 lg:gap-4 2xl:container 2xl:mx-auto">
        <article className="text-center lg:col-span-6">
          {title && (
            <div
              className="text-2xl"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {detail && (
            <div
              className="ContentContainer mt-4"
              dangerouslySetInnerHTML={{ __html: detail }}
            />
          )}
          <div className="flex items-center justify-center mt-12 lg:mt-4">
            {target && subtitle && (
              <a href={target} target="_blank">
                <button className="focus:outline-none text-xl bg-black py-4 px-8 shadow-md">
                  {subtitle}
                </button>
              </a>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Section06;
