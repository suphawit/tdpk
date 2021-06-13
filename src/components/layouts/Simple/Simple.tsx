import { SharedHead, UniversalBanner } from '@components';
import { sectionFilter } from '@utils';

import { Section02, Section03 } from './sections';

const Simple = ({ pageContent }) => {
  const { title, detail, keywords } = pageContent;

  const universalBanner = sectionFilter(pageContent, '01');
  const section02Contents = sectionFilter(pageContent, '02');
  const section03Contents = sectionFilter(pageContent, '03');
  return (
    <>
      <SharedHead
        title={title}
        metaDescription={detail}
        metaKeywords={keywords}
      />
      <UniversalBanner data={universalBanner} />
      <Section02 contents={section02Contents} />
      <Section03 contents={section03Contents} />
    </>
  );
};
export default Simple;
