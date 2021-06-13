import * as React from 'react';
import { ImAttachment } from 'react-icons/im';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import classNames from 'classnames';

import { ISpaceLayoutContents } from '@models';
import { CarouselImages, Container } from '@components';
import { NoSSR } from '@components/common/NoSSR';

interface VenueDetailsProps {
  contents: ISpaceLayoutContents[];
  id?: string;
}

const Section03 = ({ contents, id = '' }: VenueDetailsProps) => {
  const section = (num: number) => contents[num].contents;
  const length = contents.length;
  const { image, color } = section(0);
  const { title, detail, subtitle, target } = section(length - 1);
  const { subimages } = section(length - 2);
  const items = contents
    .slice(1, -2)
    .map((item) => item.contents)
    .filter((item) => item.image || item.title);
  const [expandedDescription, setExpandedDescription] = React.useState(false);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender =
    !title &&
    !detail &&
    items.length === 0 &&
    !subtitle &&
    subimages.length === 0;

  if (isNotRender) return <></>;

  return (
    <section
      id={id}
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container>
        <article className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            {title && (
              <div
                dangerouslySetInnerHTML={{ __html: title }}
                className="font-extrabold text-2xl"
              />
            )}
            {detail && (
              <>
                <div
                  dangerouslySetInnerHTML={{ __html: detail }}
                  className={classNames(
                    'ContentContainer UlBulletPoints-square-purple Paragraph-no-bottom-margin',
                    { 'VenueDetails__max-6-lines': !expandedDescription }
                  )}
                />
                <div
                  className="flex block items-center text-link-blue mt-2 sm:hidden"
                  onClick={() => setExpandedDescription(!expandedDescription)}
                >
                  {expandedDescription ? <BsChevronUp /> : <BsChevronDown />}
                  <span className="ml-4 font-bold uppercase underline">
                    {expandedDescription ? 'Read less' : 'Read more'}
                  </span>
                </div>
              </>
            )}
            {items.length > 0 && (
              <div className="grid mt-6 gap-4 grid-cols-1 xl:grid-cols-2 md:gap-6">
                {items.map(
                  ({ id, image, title }) =>
                    image && (
                      <div key={id} className="flex items-center">
                        <img
                          className="h-12 w-12 flex-shrink-0 mr-4"
                          src={image}
                          alt=""
                        />
                        <div
                          dangerouslySetInnerHTML={{ __html: title }}
                          className="font-bold"
                        />
                      </div>
                    )
                )}
              </div>
            )}
            {subtitle && (
              <div className="flex">
                <a
                  href={target || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mt-6 text-link-blue font-bold"
                >
                  <ImAttachment />
                  <span className="ml-3 underline capitalize">{subtitle}</span>
                </a>
              </div>
            )}
            <div />
          </div>
          <div className="col-span-1">
            {subimages.length > 0 && (
              <NoSSR>
                <CarouselImages items={subimages} />
              </NoSSR>
            )}
          </div>
        </article>
      </Container>
    </section>
  );
};

export default Section03;
