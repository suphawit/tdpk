import Link from 'next/link';

import { IInternHubLayoutContents } from '@models';
import { Container } from '@components/common';

interface IAvailableRolesProps {
  contents: IInternHubLayoutContents[];
}

const Section03 = ({ contents = [] }: IAvailableRolesProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title } = section(1);
  const { subdata } = section(2);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title && subdata.length === 0;

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
            className="text-3xl font-bold"
          />
        )}
        {subdata.length > 0 && (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-8">
            {subdata.map(
              ({ refId, title, detail, subtitle, target }) =>
                (title || detail || subtitle) && (
                  <div key={refId} className="shadow-md bg-white px-8 py-8">
                    {title && (
                      <div
                        dangerouslySetInnerHTML={{ __html: title }}
                        className="text-2xl font-bold"
                      />
                    )}
                    {detail && (
                      <div
                        dangerouslySetInnerHTML={{ __html: detail }}
                        className="text-lg mt-4"
                      />
                    )}
                    {subtitle && (
                      <Link href={`/startup-support${target}`}>
                        <button className="border mt-6 px-4 py-2 text-sm bg-mid-gray focus:outline-none">
                          {subtitle}
                        </button>
                      </Link>
                    )}
                  </div>
                )
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Section03;
