import { Container, TabList } from '@components';
import { IAboutLayoutContents } from '@models';

interface WorkAndCollaborationkProps {
  contents: IAboutLayoutContents[];
}

const Section06 = ({ contents = [] }: WorkAndCollaborationkProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title, detail } = section(1);
  const { image: banner } = section(2);
  const tabListArray = contents.slice(3);
  const list = tabListArray
    .map(({ contents }) => ({
      id: contents.id,
      header: contents.title,
      description: contents.detail,
      url: contents.target,
      button: contents.subtitle,
    }))
    .filter((tab) => tab.header || tab.description);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title && !detail && list.length === 0 && !banner;

  if (isNotRender) return <></>;

  return (
    <section
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container>
        {title && (
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className="ContentContainer AboutTDPK__title"
          />
        )}
        {detail && (
          <div
            dangerouslySetInnerHTML={{ __html: detail }}
            className="ContentContainer AboutTDPK__paragraph--no-margin text-lg"
          />
        )}

        <article className="mt-8 grid gap-8 grid-cols-1 lg:grid-cols-2">
          <div>{list.length > 0 && <TabList list={list} />}</div>
          <div>
            {banner && (
              <img
                className="object-cover w-100 shadow-md"
                src={banner}
                alt=""
              />
            )}
          </div>
        </article>
      </Container>
    </section>
  );
};

export default Section06;
