import Link from 'next/link';

import { PrimaryButton, Container } from '@components';
import { ISpaceLayoutContents } from '@models';

interface BookTourProps {
  contents: ISpaceLayoutContents[];
}

const BookTour = ({ contents }: BookTourProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title, detail, subtitle, target } = section(1);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title && !detail && !subtitle && !target;

  if (isNotRender) return <></>;

  return (
    <section
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container extraClasses="grid gap-4 grid-cols-5">
        <div className="col-span-5 lg:col-span-4">
          {title && (
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className="text-3xl font-extrabold text-bright-green"
            />
          )}
          {detail && (
            <div
              dangerouslySetInnerHTML={{ __html: detail }}
              className="ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin text-lg"
            />
          )}
        </div>
        {subtitle && (
          <div className="col-span-5 lg:col-span-1 lg:text-right">
            <Link href={target || ''}>
              <a target="_blank">
                <PrimaryButton extraClassNames="w-48 w-12 hover:bg-bright-green hover:text-mid-black lg:w-64">
                  {subtitle}
                </PrimaryButton>
              </a>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default BookTour;
