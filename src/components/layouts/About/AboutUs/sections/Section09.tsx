import { IAboutLayoutContents } from '@models';
import { Container } from '@components';

interface ResidentialAreaProps {
  contents: IAboutLayoutContents[];
}

const Section09 = ({ contents }: ResidentialAreaProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { subtitle, target } = section(1);
  const { title, detail } = section(2);
  const { image: logo1 } = section(3);
  const { image: logo2 } = section(4);
  const { image: banner } = section(5);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender =
    !banner && !title && !detail && !logo1 && !logo2 && !subtitle;

  if (isNotRender) return <></>;

  return (
    <section
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container extraClasses="grid gap-8 grid-cols-1 lg:grid-cols-2">
        {banner && <img className="shadow-md w-full" src={banner} alt="" />}
        <article>
          {title && (
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className="font-extrabold mt-2 mb-8 text-2xl lg:text-3xl"
            />
          )}
          {detail && (
            <div
              dangerouslySetInnerHTML={{ __html: detail }}
              className="ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin mb-6"
            />
          )}
          {(logo1 || logo2) && (
            <div className="flex items-center space-x-4 mb-8">
              {logo1 && <img src={logo1} alt="" className="w-32 sm:w-40" />}
              {logo2 && <img src={logo2} alt="" className="w-32 sm:w-40" />}
            </div>
          )}
          {subtitle && (
            <a
              href={target}
              target="_blank"
              className="font-bold underline text-link-blue"
            >
              {subtitle}
            </a>
          )}
        </article>
      </Container>
    </section>
  );
};

export default Section09;
