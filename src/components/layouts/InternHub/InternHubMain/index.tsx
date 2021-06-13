import { sectionFilter } from '@utils';
import {
  SharedHead,
  UniversalBanner,
  ContactForSpaces,
  GoogleMap,
} from '@components';

import { Section02, Section03 } from './sections';

const InternHub = ({ pageContent }) => {
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
      <ContactForSpaces />
      <GoogleMap />
    </>
  );
};

export default InternHub;
