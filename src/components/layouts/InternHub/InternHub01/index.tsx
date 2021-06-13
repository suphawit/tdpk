import { sectionFilter } from '@utils';
import { SharedHead, Breadcrumb } from '@components';

import { Section01, Section02 } from './sections';

const InternHub = ({ pageContent }) => {
  const { title, detail, keywords, slug } = pageContent;
  const { title: parentTitle, slug: parentSlug } = pageContent.parentPage;

  return (
    <>
      <SharedHead
        title={title}
        metaDescription={detail}
        metaKeywords={keywords}
      />
      <Breadcrumb
        breadcrumbArray={[
          { name: parentTitle, pathName: `/startup-support/${parentSlug}` },
          { name: title, pathName: `/startup-support/${slug}` },
        ]}
      />
      <Section01 contents={sectionFilter(pageContent, '01')} />
      <Section02 contents={sectionFilter(pageContent, '02')} />
    </>
  );
};

export default InternHub;
