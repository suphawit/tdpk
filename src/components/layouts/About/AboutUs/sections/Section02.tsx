import { Container } from '@components';
import { IAboutLayoutContents } from '@models';

interface AboutTrueDigitalParkProps {
  contents: IAboutLayoutContents[];
}

const Section02 = ({ contents }: AboutTrueDigitalParkProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title, detail } = section(1);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title && !detail;

  if (isNotRender) return <></>;

  return (
    <section
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container extraClasses="pb-4 lg:pb-10">
        <div>
          {title && (
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className="ContentContainer AboutTDPK__title"
            />
          )}
          {detail && (
            <div
              dangerouslySetInnerHTML={{ __html: detail }}
              className="ContentContainer Paragraph-no-bottom-margin mt-4 text-lg"
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default Section02;
