import classNames from 'classnames';

import { ISection } from '@models';
import { Container } from '@components';

const listSectionFilter = (contents) => {
  const list = [];
  for (let content of contents || []) {
    const { title, detail } = content;
    if (title)
      list.push({
        title,
        detail,
      });
  }
  return list;
};

const Section04 = ({ contents }: ISection) => {
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

  const timelineBg = section(1).color || '#8A69D4';
  const timelineList = listSectionFilter(section(1).subdata);

  const isNotRender = !title && !detail && !timelineList.length;

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
              className="font-extrabold text-3xl lg:text-3xl"
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
        <article className="mt-6 lg:mt-0 lg:col-start-6 lg:col-end-13">
          <ul className="lg:max-h-96 lg:overflow-x-auto">
            {timelineList?.map((timeline, index) => (
              <li
                key={index}
                className={classNames(
                  'grid lg:grid-cols-10 lg:gap-4 xl:grid-cols-8',
                  { 'mt-4': index > 0 }
                )}
              >
                <div className="flex items-center lg:justify-center lg:col-span-3 xl:col-span-2">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: timeline.title,
                    }}
                    style={{ backgroundColor: timelineBg }}
                    className="text-white p-2 w-36 text-center"
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: timeline.detail,
                  }}
                  className="flex items-center mt-3 lg:mt-0 lg:col-span-7 xl:col-span-6"
                />
              </li>
            ))}
          </ul>
        </article>
      </Container>
    </section>
  );
};

export default Section04;
