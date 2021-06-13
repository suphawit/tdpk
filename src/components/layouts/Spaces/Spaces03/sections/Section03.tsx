import { ISpaceLayoutContents } from '@models';
import { CarouselImages } from '@components/common';
import { NoSSR } from '@components/common/NoSSR';

interface CoWorkingContentProps {
  contents: ISpaceLayoutContents[];
}

const Section03 = ({ contents = [] }: CoWorkingContentProps) => {
  const section = (num: number) => contents[num].contents;
  const { title, detail } = section(1);
  const { subimages } = section(2);
  const isNotRender = !title && !detail && subimages.length === 0;

  if (isNotRender) return <></>;

  return (
    <div className="mt-20">
      {title && (
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-2xl font-extrabold mb-4 lg:text-3xl lg:mb-6"
        />
      )}
      {detail && (
        <div
          dangerouslySetInnerHTML={{ __html: detail }}
          className="ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin mb-4"
        />
      )}
      {subimages.length > 0 && (
        <NoSSR>
          <CarouselImages items={subimages} />
        </NoSSR>
      )}
    </div>
  );
};

export default Section03;
