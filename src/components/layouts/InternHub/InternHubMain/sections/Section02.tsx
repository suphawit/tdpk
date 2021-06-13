import { IInternHubLayoutContents } from '@models';
import { Container } from '@components/common';

interface IInternShipAboutProps {
  contents: IInternHubLayoutContents[];
}

const Section02 = ({ contents = [] }: IInternShipAboutProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title, detail } = section(1);
  const { subimages } = section(2);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title && !detail && subimages.length === 0;

  if (isNotRender) return <></>;

  return (
    <div
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container extraClasses="py-10">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-5">
          <div className="col-span-2">
            {title && (
              <div
                dangerouslySetInnerHTML={{ __html: title }}
                className="text-3xl font-bold"
              />
            )}
          </div>
          <div className="col-span-3">
            {detail && (
              <div
                dangerouslySetInnerHTML={{ __html: detail }}
                className="text-lg"
              />
            )}
          </div>
        </div>
        {subimages.length > 0 && (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mt-8">
            {subimages.map((image, index) => (
              <img
                key={index}
                className="object-cover shadow-md"
                height="240px"
                width="100%"
                src={image}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Section02;
