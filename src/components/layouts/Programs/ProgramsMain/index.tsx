import { UniversalBanner, SharedHead } from '@components';
import { sectionFilter } from '@utils';

import { Section02, Section03 } from './sections';

const ProgramsMain = ({ pageContent }) => {
  const { title, detail, keywords } = pageContent;
  const parentSlug = pageContent.parentPage.slug;

  return (
    <>
      <SharedHead
        title={title}
        metaDescription={detail}
        metaKeywords={keywords}
      />
      <UniversalBanner data={sectionFilter(pageContent, '01')} />
      <Section02 contents={sectionFilter(pageContent, '02')} />
      <Section03
        contents={sectionFilter(pageContent, '03')}
        parentSlug={parentSlug}
      />
    </>
  );
};

export default ProgramsMain;
