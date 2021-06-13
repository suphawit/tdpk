import { IoIosShareAlt } from 'react-icons/io';

import { IInternHubLayoutContents } from '@models';

interface InternshipDetailsHeader {
  contents: IInternHubLayoutContents[];
}

const Section01 = ({ contents }: InternshipDetailsHeader) => {
  const section = (num: number) => contents[num].contents;
  const { title, detail } = section(0);
  const isNotRender = !title && !detail;

  if (isNotRender) return <></>;

  return (
    <nav className="py-6 px-6 flex items-center justify-between lg:px-24 xl:px-36 2xl:container 2xl:mx-auto">
      <div>
        {title && (
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className="text-2xl font-bold"
          />
        )}
        {detail && (
          <div
            dangerouslySetInnerHTML={{ __html: detail }}
            className="text-md lg:text-lg"
          />
        )}
      </div>
      <button className="border px-4 py-2">
        <IoIosShareAlt size="18" />
      </button>
    </nav>
  );
};

export default Section01;
