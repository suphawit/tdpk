import { SharedHead, UniversalBanner } from '@components';
import { sectionFilter } from '@utils';

import {
  Section02,
  Section03,
  Section04,
  Section05,
  Section06,
  Section07,
  Section08,
  Section09,
} from './sections';

const Programs01 = ({ pageContent }) => {
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
      <Section09 contents={sectionFilter(pageContent, '09')} />
    </>
  );
};

export default Programs01;
