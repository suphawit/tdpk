import { ISpaceLayoutContents } from '@models';

interface GoogleMapProps {
  contents?: ISpaceLayoutContents[];
  className?: string;
}

const GoogleMap = ({
  contents = null,
  className = 'h-40 lg:h-64',
}: GoogleMapProps) => {
  if (!contents)
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3574.783057295865!2d100.60979823566457!3d13.684721164290742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x60c3178ba983c76!2sTrue%20Digital%20Park!5e0!3m2!1sen!2sus!4v1615541058374!5m2!1sen!2sus"
        allowFullScreen
        loading="lazy"
        width="100%"
        className={className}
      />
    );

  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { target } = section(1);

  if (target)
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: target,
        }}
        className={className}
      />
    );

  if (image)
    return (
      <section
        style={{
          background: `url(${image}) no-repeat 0/cover`,
        }}
        className={className}
      />
    );

  if (color)
    return (
      <section
        style={{
          background: color,
        }}
        className={className}
      />
    );

  return <></>;
};

export default GoogleMap;
