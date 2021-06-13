import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Form from './Form';

import { IContactUs, IContactUsSocialList } from '@models';
import { Container } from '@components';

interface ContactUsProps {
  contact: IContactUs;
}

const socialListSectionFilter = (contents) => {
  const listContents = contents
    .filter((content) => content.section === '01')
    .slice(2);
  const list: IContactUsSocialList[] = [];

  for (let listContent of listContents) {
    const { id, title, image, target } = listContent.contents;
    if (image && target)
      list.push({
        id,
        title,
        image,
        target,
      });
  }
  return list;
};

const ContactAndForm = ({ contact }: ContactUsProps) => {
  const section = (num: number) => contact.layoutContents[num].contents;

  const { color, image, theme } = section(0);
  const { title, detail } = section(1);

  const list = socialListSectionFilter(contact.layoutContents);

  const isNotRender = !title && !detail && !list.length;

  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };
  const { t } = useTranslation('common');

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
        <article className="lg:w-1/3">
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className="text-3xl font-extrabold"
          />
          <hr className="w-60 h-1 border-0 bg-bright-green mt-4 mb-6 lg:mb-8" />
          <div
            dangerouslySetInnerHTML={{ __html: detail }}
            className="ContentContainer ContactContent"
          />
          {list.length > 0 && (
            <>
              <h2 className="font-bold mt-8 mb-2.5">
                {t('contactUs.socialHeader')}
              </h2>
              <div className="flex items-center space-x-6 text-lg">
                {list.map(({ id, title, image, target }) => (
                  <a key={id} href={target} target="_blank">
                    {title}
                    <img src={image} />
                  </a>
                ))}
              </div>
            </>
          )}
        </article>
      </Container>
    </section>
  );
};

export default ContactAndForm;
