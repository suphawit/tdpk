import { FourPictureBanner } from '@components';
import { ISection } from '@models';

const Section02 = ({ contents }: ISection) => {
  const section = (num: number) => contents[num].contents;

  const { color, image, theme } = section(0);
  const { title, detail } = section(1);

  const background = {
    color,
    image,
    theme,
  };

  const unfilterImg = [
    section(2).image || undefined,
    section(3).image || undefined,
    section(4).image || undefined,
    section(5).image || undefined,
  ];
  const imagesBanner = unfilterImg.filter((s) => s !== undefined);
  const isNotRender = !title && !detail && !imagesBanner.length;

  if (isNotRender) return <></>;
  return (
    <FourPictureBanner background={background} images={imagesBanner}>
      {title && (
        <div
          className="font-extrabold text-2xl lg:text-3xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {detail && (
        <div
          className="ContentContainer mt-4"
          dangerouslySetInnerHTML={{ __html: detail }}
        />
      )}
    </FourPictureBanner>
  );
};

export default Section02;
