import { IAboutLayoutContents } from '@models';

interface VenueDetailsProps {
  contents: IAboutLayoutContents[];
  id?: string;
}

const Section03 = ({ contents, id = '' }: VenueDetailsProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { subimages } = section(1);
  const { title, detail } = section(2);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title && !detail && subimages.length === 0;

  if (isNotRender) return <></>;

  return (
    <section
      id={id}
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <div className="px-6 py-8 lg:py-10 lg:px-36 2xl:container 2xl:mx-auto">
        {title && (
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className="text-xl font-bold lg:text-2xl"
          />
        )}
        {detail && (
          <div
            dangerouslySetInnerHTML={{ __html: detail }}
            className="ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin mt-4"
          />
        )}
        {subimages.length > 0 && (
          <div className="grid mt-6 grid-cols-3 gap-4 md:grid-cols-4 lg:gap-8 xl:grid-cols-6">
            {subimages.map((image, index) => (
              <div
                key={index}
                className="bg-white h-16 px-2.5 py-1.5 border border-gray-300 md:h-20 md:px-4 md:py-3 lg:h-24"
              >
                <img
                  src={image}
                  alt=""
                  className="mx-auto h-full object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Section03;
