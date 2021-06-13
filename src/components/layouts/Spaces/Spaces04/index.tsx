import { sectionFilter } from '@utils';
import {
  SharedHead,
  UniversalBanner,
  BookTour,
  ContactBarScrolling,
} from '@components';

import { Section02, Section03, Section04, Section05 } from './sections';

const Spaces04 = ({ pageContent }) => {
  const { title, detail, keywords } = pageContent;

  return (
    <>
      <SharedHead
        title={title}
        metaDescription={detail}
        metaKeywords={keywords}
      />
      <UniversalBanner data={sectionFilter(pageContent, '01')} />
      <Section02 contents={sectionFilter(pageContent, '02')} />
      <Section03 contents={sectionFilter(pageContent, '03')} />
      <Section04 contents={sectionFilter(pageContent, '04')} />
      <Section05 contents={sectionFilter(pageContent, '05')} />
      <BookTour contents={sectionFilter(pageContent, '06')} />
      <ContactBarScrolling contents={sectionFilter(pageContent, '07')} />
    </>
  );
};

export default Spaces04;
