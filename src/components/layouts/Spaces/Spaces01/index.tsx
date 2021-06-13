import { sectionFilter } from '@utils';
import {
  SharedHead,
  UniversalBanner,
  ContactForSpaces,
  GoogleMap,
  ContactBarScrolling,
} from '@components';

import {
  Section02,
  Section03,
  Section04,
  Section05,
  Section06,
  Section07,
  Section08,
} from './sections';

const Spaces01 = ({ pageContent }) => {
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
      <Section06 contents={sectionFilter(pageContent, '06')} />
      <Section07 contents={sectionFilter(pageContent, '07')} />
      <Section08 contents={sectionFilter(pageContent, '08')} />
      <ContactForSpaces contents={sectionFilter(pageContent, '09')} />
      <GoogleMap contents={sectionFilter(pageContent, '10')} />
      <ContactForSpaces contents={sectionFilter(pageContent, '11')} />
      <ContactBarScrolling contents={sectionFilter(pageContent, '12')} />
    </>
  );
};

export default Spaces01;
