import { ISpaceLayoutContents } from '@models';

interface CoWorkingServiceProps {
  contents: ISpaceLayoutContents[];
}

const Section02 = ({ contents = [] }: CoWorkingServiceProps) => {
  const section = (num: number) => contents[num].contents;
  const { title } = section(1);
  const serviceIcons = contents
    .map((service) => service.contents)
    .slice(2)
    .filter((service) => service.image || service.title);
  const isNotRender = title && serviceIcons.length === 0;

  if (isNotRender) return <></>;

  return (
    <>
      {title && (
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-2xl font-extrabold lg:text-3xl lg:mb-6"
        />
      )}
      {serviceIcons.length > 0 && (
        <div className="grid mt-8 gap-6 grid-cols-1 lg:grid-cols-2">
          {serviceIcons.map(({ id, image, title }) => (
            <div key={id} className="flex items-center">
              {image && (
                <img
                  className="w-10 h-10 flex-shrink-0 object-cover lg:h-12 lg:w-12"
                  src={image}
                  alt=""
                />
              )}
              {title && (
                <div
                  dangerouslySetInnerHTML={{ __html: title }}
                  className="font-bold ml-4"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Section02;
