import * as React from 'react';
import classNames from 'classnames';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { ISpaceLayoutContents } from '@models';
import { Container } from '@components';

interface ServiceAndAmenitiesProps {
  contents: ISpaceLayoutContents[];
}

const Section03 = ({ contents }: ServiceAndAmenitiesProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title } = section(1);
  const services = contents
    .map((service) => service.contents)
    .splice(2)
    .filter(({ image, title }) => image || title);
  const [isShowMore, setIsShowMore] = React.useState(false);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title && services.length === 0;

  if (isNotRender) return <></>;

  return (
    <section
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container>
        {title && (
          <div
            dangerouslySetInnerHTML={{ __html: title }}
            className="font-extrabold text-2xl lg:text-3xl lg:text-center"
          />
        )}
        {services.length > 0 && (
          <>
            <div
              className={classNames(
                { 'h-108': !isShowMore },
                'relative overflow-hidden sm:h-auto grid mt-8 gap-y-8 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-10 lg:grid-cols-4'
              )}
            >
              {services.map(({ id, image, title }) => (
                <div
                  key={id}
                  className="flex font-bold items-center gap-x-4 lg:gap-x-6"
                >
                  <img className="w-10 sm:w-auto" src={image} alt="" />
                  <div dangerouslySetInnerHTML={{ __html: title }} />
                </div>
              ))}
              <div
                className={classNames(
                  { hidden: isShowMore },
                  'service-menities-gradient',
                  'sm:hidden'
                )}
              ></div>
            </div>
            <div
              className="pt-8 cursor-pointer font-bold text-bullet-navy underline flex sm:hidden"
              onClick={() => setIsShowMore(!isShowMore)}
            >
              {!isShowMore && <IoIosArrowDown className="text-xl mr-2" />}
              {isShowMore && <IoIosArrowUp className="text-xl mr-2" />}
              Show {isShowMore ? 'Less' : 'All'}
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
export default Section03;
