import { IAboutLayoutContents } from '@models';

interface OurMissionVisionProps {
  contents: IAboutLayoutContents[];
}

const Section05 = ({ contents }: OurMissionVisionProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title: title1, detail: detail1 } = section(1);
  const { title: title2, detail: detail2 } = section(2);
  const { image: banner } = section(3);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title1 && !detail1 && !title2 && !detail2 && !banner;

  if (isNotRender) return <></>;

  return (
    <section
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <div className="grid py-10 px-6 gap-8 grid-cols-1 lg:px-0 lg:grid-cols-2 2xl:container 2xl:mx-auto">
        <article>
          {banner && (
            <img
              className="object-cover shadow-md md:w-100"
              src={banner}
              alt=""
            />
          )}
        </article>
        <article className="flex flex-col align-items justify-center lg:pr-36">
          <div className="pb-10">
            {title1 && (
              <div
                dangerouslySetInnerHTML={{ __html: title1 }}
                className="ContentContainer AboutTDPK__title"
              />
            )}
            {detail1 && (
              <div
                dangerouslySetInnerHTML={{ __html: detail1 }}
                className="ContentContainer AboutTDPK__paragraph--no-margin text-lg"
              />
            )}
          </div>
          <div>
            {title2 && (
              <div
                dangerouslySetInnerHTML={{ __html: title2 }}
                className="ContentContainer AboutTDPK__title"
              />
            )}
            {detail2 && (
              <div
                dangerouslySetInnerHTML={{ __html: detail2 }}
                className="ContentContainer AboutTDPK__paragraph--no-margin text-lg"
              />
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Section05;
