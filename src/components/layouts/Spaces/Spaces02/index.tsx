import { sectionFilter } from '@utils';
import {
  SharedHead,
  UniversalBanner,
  ContactForSpaces,
  GoogleMap,
  ContactBarScrolling,
} from '@components';

import { Section02 } from './sections';

const Spaces02 = ({ pageContent }) => {
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
      <ContactForSpaces contents={sectionFilter(pageContent, '03')} />
      <GoogleMap contents={sectionFilter(pageContent, '04')} />
      <ContactForSpaces contents={sectionFilter(pageContent, '05')} />
      <ContactBarScrolling contents={sectionFilter(pageContent, '06')} />
    </>
  );
};

export default Spaces02;
