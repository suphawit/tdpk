import { Container } from '@components';
import { IAboutLayoutContents } from '@models';

const gridClasses = [
  '',
  'row-span-2',
  '',
  'hidden lg:block',
  'hidden lg:block',
  'col-span-2 hidden lg:block',
];

interface LifeStyleAreaProps {
  contents: IAboutLayoutContents[];
}

const Section08 = ({ contents }: LifeStyleAreaProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title, detail } = section(1);
  const imageSets = contents
    .map((imageSet) => imageSet.contents)
    .slice(2)
    .filter((imageSet) => imageSet.image);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title && !detail && imageSets.length === 0;

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
            className="font-extrabold mb-6 text-2xl text-center lg:text-3xl"
          />
        )}
        {detail && (
          <div
            dangerouslySetInnerHTML={{ __html: detail }}
            className="ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin text-center mx-0 lg:mx-64"
          />
        )}
        {imageSets.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
            {imageSets.map(({ image, id }, index) => (
              <img
                key={id}
                src={image}
                alt=""
                className={`w-full shadow-md ${gridClasses[index]}`}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Section08;
