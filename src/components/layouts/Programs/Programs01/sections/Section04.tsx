import classNames from 'classnames';

import { ISection, IStartupBoosterTabs } from '@models';
import { TabList } from '@components';
import { Container } from '@components';

const listSectionFilter = (contents) => {
  const listContents = contents.slice(2);
  const list: IStartupBoosterTabs[] = [];

  for (let listContent of listContents) {
    const { id, title, detail } = listContent.contents;
    if (title)
      list.push({
        id,
        header: title,
        description: detail,
      });
  }
  return list;
};

const Section04 = ({ contents }: ISection) => {
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
  const sectionImage = section(7).image;

  const list = listSectionFilter(contents);
  const isNotRender = !title && !detail && !list.length && !sectionImage;

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
      <Container extraClasses="relative">
        <article className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <div>
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
          </div>
        </article>
        <article className="grid gap-4 mt-8 lg:mt-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <TabList list={list} />
          </div>
          {sectionImage && (
            <div className="hidden lg:block">
              <img src={sectionImage} alt="Making deal" width="100%" />
            </div>
          )}
        </article>
      </Container>
    </section>
  );
};

export default Section04;
