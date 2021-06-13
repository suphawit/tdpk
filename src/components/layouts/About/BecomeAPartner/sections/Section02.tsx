import { IAboutLayoutContents } from '@models';
import { BecomeAPartnerCard, Container } from '@components';
import { useCheckBreakpointValues } from '@hooks';

interface VenueOverallProps {
  contents: IAboutLayoutContents[];
}

const Section02 = ({ contents }: VenueOverallProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title, detail } = section(1);
  const items = contents
    .map((item) => item.contents)
    .splice(2)
    .filter((item) => item.image || item.title);
  const { isSm } = useCheckBreakpointValues();
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title && !detail && items.length === 0;

  if (isNotRender) return <></>;

  const onScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    const offsetY = !isSm ? 76 : 112;
    const top =
      section?.getBoundingClientRect().top + window.pageYOffset - offsetY;
    if (section) window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container extraClasses="grid gap-8 grid-cols-1 md:grid-cols-2">
        <article className="col-span-1">
          {title && (
            <div
              dangerouslySetInnerHTML={{ __html: title }}
              className="text-3xl font-extrabold mb-6"
            />
          )}
          {detail && (
            <div
              dangerouslySetInnerHTML={{ __html: detail }}
              className="ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin"
            />
          )}
        </article>
        <article className="col-span-1 grid gap-4 grid-cols-2 md:gap-6">
          {items.length > 0 &&
            items.map((item) => (
              <a
                key={item.id}
                onClick={() => onScrollToSection(item.id.toString())}
              >
                <BecomeAPartnerCard imageUrl={item.image} title={item.title} />
              </a>
            ))}
        </article>
      </Container>
    </section>
  );
};

export default Section02;
