import { ISpaceLayoutContents } from '@models';
import { CarouselImages } from '@components/common';
import { NoSSR } from '@components/common/NoSSR';
import { Container } from '@components';

interface MeetingRoomProps {
  contents: ISpaceLayoutContents[];
}

const Section03 = ({ contents }: MeetingRoomProps) => {
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
      <Container extraClasses="grid gap-y-6 lg:grid-cols-12 lg:gap-11">
        <article className="lg:col-span-6">
          {title && (
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className="font-extrabold text-md lg:text-lg"
            />
          )}
          {detail && (
            <div
              dangerouslySetInnerHTML={{ __html: detail }}
              className="ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin mt-4"
            />
          )}
        </article>
        <article className="lg:col-span-6">
          {subimages.length > 0 && (
            <NoSSR>
              <CarouselImages items={subimages} />
            </NoSSR>
          )}
        </article>
      </Container>
    </section>
  );
};

export default Section03;
