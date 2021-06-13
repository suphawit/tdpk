import { Container } from '@components';
import { IAboutLayoutContents } from '@models';

interface MoreThanASpaceProps {
  contents: IAboutLayoutContents[];
}

const Section04 = ({ contents }: MoreThanASpaceProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title, detail } = section(1);
  const cardSets = contents
    .map((cardSet) => cardSet.contents)
    .slice(2)
    .filter((cardSet) => cardSet.title || cardSet.detail);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title && !detail && cardSets.length === 0;

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

        {cardSets.length > 0 && (
          <div className="mt-8 grid gap-2 grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-6 lg:grid-cols-4">
            {cardSets.map(
              ({ id, title, detail }) =>
                title && (
                  <div
                    key={id}
                    className="w-100 bg-true-v md:flex md:flex-col md:items-center md:text-center lg:h-96"
                  >
                    <div className="p-4 md:py-14 md:px-8">
                      {title && (
                        <div
                          dangerouslySetInnerHTML={{ __html: title }}
                          className="ContentContainer AboutTDPK__card-header"
                        />
                      )}
                      {detail && (
                        <div
                          dangerouslySetInnerHTML={{ __html: detail }}
                          className="ContentContainer AboutTDPK__card-description AboutTDPK__paragraph--no-margin mt-3 md:mt-6"
                        />
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </Container>
    </section>
  );
};
export default Section04;
