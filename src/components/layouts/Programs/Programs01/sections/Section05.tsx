import classNames from 'classnames';

import { ISection, IOurMentors } from '@models';
import { Container } from '@components';

const listSectionFilter = (contents) => {
  const listContents = contents.slice(2);
  const ourMentors: IOurMentors[] = [];

  for (let listContent of listContents) {
    const { id, title, detail, image } = listContent.contents;
    if (title)
      ourMentors.push({
        id,
        name: title,
        title: detail,
        image,
      });
  }
  return ourMentors;
};

const Section05 = ({ contents }: ISection) => {
  const section = (num: number) => contents[num].contents;

  const { color, image, theme } = section(0);
  const { title } = section(1);

  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };

  const ourMentors = listSectionFilter(contents);
  const isNotRender = !title && !ourMentors.length;

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
        {title && (
          <div
            className="font-extrabold text-3xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        <article className="mt-6 lg:mt-9">
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
            {ourMentors.map((mentor) => {
              const { id, image, title, name } = mentor;
              return (
                <li key={id}>
                  {image && (
                    <img src={image} alt={name} className="shadow-md w-full" />
                  )}
                  {name && (
                    <div
                      className="font-bold mt-4"
                      dangerouslySetInnerHTML={{ __html: name }}
                    />
                  )}
                  {title && (
                    <div
                      className="ContentContainer mt-2"
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </article>
      </Container>
    </section>
  );
};

export default Section05;
