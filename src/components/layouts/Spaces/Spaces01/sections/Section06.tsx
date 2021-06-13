import { ISpaceLayoutContents } from '@models';
import { Container } from '@components';

interface DescriptionPartProps {
  contents: ISpaceLayoutContents[];
}

const Section06 = ({ contents }: DescriptionPartProps) => {
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
      <Container extraClasses="gap-y-6">
        {title && (
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-extrabold text-2xl lg:text-3xl"
          />
        )}
        {detail && (
          <div
            dangerouslySetInnerHTML={{ __html: detail }}
            className="ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin mt-4"
          />
        )}
      </Container>
    </section>
  );
};

export default Section06;
