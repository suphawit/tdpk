import Slider from 'react-slick';

import { IAboutLayoutContents } from '@models';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface BecomeAPartner {
  contents: IAboutLayoutContents[];
}

const Section07 = ({ contents }: BecomeAPartner) => {
  const section = (num: number) => contents[num].contents;
  const reorderSubimages = (subimages: string[], num: number) => [
    ...subimages.slice(num),
    ...subimages.slice(0, num),
  ];

  const { image, color } = section(0);
  const { subimages } = section(1);
  const { title, detail } = section(2);
  const rows = [
    subimages,
    reorderSubimages(subimages, 1),
    reorderSubimages(subimages, 2),
  ];
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
      <div className="py-10">
        {title && (
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-extrabold mb-6 text-2xl text-center lg:text-3xl"
          />
        )}
        {detail && (
          <div
            dangerouslySetInnerHTML={{ __html: detail }}
            className="ContentContainer text-lg text-center mb-8 mx-0 px-6 lg:mx-64 2xl:px-36 2xl:container 2xl:mx-auto"
          />
        )}
        {subimages.length > 0 &&
          rows.map((row, index) => (
            <div key={index} className="mb-1 lg:mb-4">
              <Slider
                adaptiveHeight
                infinite
                centerMode
                variableWidth
                swipe={false}
                arrows={false}
              >
                {row.map((logo) => (
                  <div key={logo} className="slider-item">
                    <div className="mx-1 h-12 px-4 py-3 border border-gray-300 lg:mx-3 lg:h-24">
                      <img
                        className="mx-auto h-full object-contain"
                        src={logo}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Section07;
