import { ISpaceLayoutContents } from '@models';

interface Section02Props {
  contents: ISpaceLayoutContents[];
}

const Section02 = ({ contents = [] }: Section02Props) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const companies = contents
    .map((company) => company.contents)
    .splice(1)
    .filter((company) => company.detail || company.image);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = companies.length === 0;

  if (isNotRender) return <></>;

  return (
    <section
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <ul className="px-6 lg:px-36 2xl:container 2xl:mx-auto">
        {companies.map(({ id, image, detail }, index) => (
          <li key={id} className="mt-10 lg:mt-20">
            {image && <img src={image} alt="" className="mb-6" />}
            {detail && (
              <div
                dangerouslySetInnerHTML={{ __html: detail }}
                className="mb-10 lg:mb-20"
              />
            )}
            {index !== contents.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section02;
