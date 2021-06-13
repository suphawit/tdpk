import classNames from 'classnames';

import { ISection, IStartupBoosterTabs } from '@models';
import { TabList, Container } from '@components';

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

const Section07 = ({ contents }: ISection) => {
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

  const list = listSectionFilter(contents);

  const isNotRender = !title && !detail && !list.length;

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
      <Container extraClasses="lg:grid lg:grid-cols-12 lg:gap-8">
        <article className="col-span-5">
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
        <article className="col-span-7">
          <TabList list={list} />
        </article>
      </Container>
    </section>
  );
};

export default Section07;
