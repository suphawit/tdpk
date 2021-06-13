import * as React from 'react';

import { sectionFilter } from '@utils';
import {
  SharedHead,
  UniversalBanner,
  BookTour,
  ContactBarScrolling,
  Container,
} from '@components';

import { Section02, Section03, Section04 } from './sections';

const Spaces03 = ({ pageContent }) => {
  const { title, detail, keywords } = pageContent;
  const universalBanner = sectionFilter(pageContent, '01');
  const section02Contents = sectionFilter(pageContent, '02');
  const section03Contents = sectionFilter(pageContent, '03');
  const section04Contents = sectionFilter(pageContent, '04');
  const section05Contents = sectionFilter(pageContent, '05');
  const section06Contents = sectionFilter(pageContent, '06');

  const availablePackages =
    section06Contents[1].contents.subdata &&
    JSON.parse(section06Contents[1].contents?.subdata[0].jsonData);

  const [packagesWrapClasses, setPackagesWrapClasses] = React.useState('');
  const bannerElementRef = React.useRef(null);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > bannerElementRef.current.offsetHeight) {
      setPackagesWrapClasses('sticky left-0 top-24 duration-500');
    } else {
      setPackagesWrapClasses('');
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bannerElementRef]);

  return (
    <>
      <SharedHead
        title={title}
        metaDescription={detail}
        metaKeywords={keywords}
      />
      <div ref={bannerElementRef}>
        <UniversalBanner data={universalBanner} />
      </div>
      <Container>
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <div>
            <Section02 contents={section02Contents} />
            <Section03 contents={section03Contents} />
          </div>
          {availablePackages && (
            <div className="mt-10 ml-0 lg:mt-0 lg:ml-6 xl:ml-32">
              <div className={packagesWrapClasses}>
                <Section04 contents={availablePackages} />
              </div>
            </div>
          )}
        </div>
      </Container>
      <BookTour contents={section04Contents} />
      <ContactBarScrolling contents={section05Contents} />
    </>
  );
};

export default Spaces03;
