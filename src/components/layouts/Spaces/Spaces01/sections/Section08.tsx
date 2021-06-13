import { ISpaceLayoutContents } from '@models';
import { Container } from '@components';

interface OverheadCostsProps {
  contents: ISpaceLayoutContents[];
}

const Section08 = ({ contents }: OverheadCostsProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title, detail } = section(1);
  const { subimages } = section(2);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title && !detail && subimages.length === 0;

  if (isNotRender) return <></>;

  return (
    <section
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container extraClasses="gap-y-6 lg:gap-11">
        {title && (
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-extrabold text-2xl lg:text-3xl"
          />
        )}
        {detail && (
          <div
            dangerouslySetInnerHTML={{ __html: detail }}
            className="ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin mb-8 mt-4"
          />
        )}
        <div className="grid gap-4 lg:grid-cols-2">
          {subimages.map(
            (image) =>
              image && <img key={image} className="w-full" src={image} alt="" />
          )}
        </div>
      </Container>
    </section>
  );
};
export default Section08;
