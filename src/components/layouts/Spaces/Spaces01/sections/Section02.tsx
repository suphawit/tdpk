import { ISpaceLayoutContents } from '@models';
import { CarouselImages } from '@components/common';
import { NoSSR } from '@components/common/NoSSR';
import { Container } from '@components';

interface OfficeSpaceDescriptionProps {
  contents: ISpaceLayoutContents[];
}

const Section02 = ({ contents }: OfficeSpaceDescriptionProps) => {
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
      <Container extraClasses="grid gap-y-6 lg:grid-cols-2 lg:gap-11">
        <div>
          {subimages.length > 0 && (
            <NoSSR>
              <CarouselImages items={subimages} />
            </NoSSR>
          )}
        </div>
        <div>
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
        </div>
      </Container>
    </section>
  );
};

export default Section02;
