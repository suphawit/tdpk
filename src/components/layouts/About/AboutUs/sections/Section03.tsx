import { Container } from '@components';
import { IAboutLayoutContents } from '@models';

interface AboutTrueDigitalPark2Props {
  contents: IAboutLayoutContents[];
}

const Section03 = ({ contents }: AboutTrueDigitalPark2Props) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const imageSets = contents
    .map((imageSet) => imageSet.contents)
    .slice(1)
    .filter(({ image, title, detail }) => image || title || detail);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = imageSets.length === 0;

  if (isNotRender) return <></>;

  return (
    <section
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container extraClasses="pt-4 lg:pt-10">
        <div className="grid grid-cols-1 gap-10 lg:gap-x-8 lg:gap-y-20 lg:grid-cols-2">
          {imageSets.map(({ id, title, image, detail }) => (
            <div key={id}>
              {title && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: title,
                  }}
                  className="ContentContainer AboutTDPK__image-header font-bold"
                />
              )}
              {image && (
                <img
                  className="my-6 object-cover w-full h-96 shadow-md"
                  src={image}
                  alt={title}
                />
              )}
              {detail && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: detail,
                  }}
                  className="ContentContainer AboutTDPK__paragraph--no-margin text-lg"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Section03;
