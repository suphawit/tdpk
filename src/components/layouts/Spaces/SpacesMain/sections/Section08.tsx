import { ISpaceLayoutContents } from '@models';
import { Container } from '@components';

interface AdditionalServicesProps {
  contents: ISpaceLayoutContents[];
}

const Section08 = ({ contents }: AdditionalServicesProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title } = section(1);
  const {
    title: imgSet01Title,
    detail: imgSet01Detail,
    image: imgSet01Image,
  } = section(2);
  const {
    title: imgSet02Title,
    detail: imgSet02Detail,
    image: imgSet02Image,
  } = section(3);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender =
    !title &&
    !imgSet01Title &&
    !imgSet01Detail &&
    !imgSet01Image &&
    !imgSet02Title &&
    !imgSet02Detail &&
    !imgSet02Image;

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
            className="font-extrabold text-2xl lg:text-3xl"
          />
        )}
        <div className="grid gap-8 grid-cols-1 mt-8 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex-grow">
              {imgSet01Title && (
                <div
                  dangerouslySetInnerHTML={{ __html: imgSet01Title }}
                  className="font-bold mb-4"
                />
              )}
              {imgSet01Detail && (
                <div
                  dangerouslySetInnerHTML={{ __html: imgSet01Detail }}
                  className="ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin"
                />
              )}
            </div>
            {imgSet01Image && (
              <img
                src={imgSet01Image}
                alt=""
                className="shadow-md w-full mt-8"
              />
            )}
          </div>
          <div className="flex flex-col">
            <div className="flex-grow">
              {imgSet02Title && (
                <div
                  dangerouslySetInnerHTML={{ __html: imgSet02Title }}
                  className="font-bold mb-4"
                />
              )}
              {imgSet02Detail && (
                <div
                  dangerouslySetInnerHTML={{ __html: imgSet02Detail }}
                  className="ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin"
                />
              )}
            </div>
            {imgSet02Image && (
              <img
                src={imgSet02Image}
                alt=""
                className="shadow-md w-full mt-8"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section08;
