import { sectionFilter } from '@utils';
import {
  SharedHead,
  UniversalBanner,
  ContactForSpaces,
  BookTour,
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

const SpacesMain = ({ pageContent }) => {
  const { title, detail, keywords } = pageContent;
  const section02Contents = sectionFilter(pageContent, '02');

  const getScrollToId = (num: number) =>
    section02Contents[num].contents.id.toString();

  return (
    <>
      <SharedHead
        title={title}
        metaDescription={detail}
        metaKeywords={keywords}
      />
      <UniversalBanner data={sectionFilter(pageContent, '01')} />
      <Section02 contents={section02Contents} />
      <Section03
        id={getScrollToId(2)}
        contents={sectionFilter(pageContent, '03')}
      />
      <Section04
        id={getScrollToId(3)}
        contents={sectionFilter(pageContent, '04')}
      />
      <Section05
        id={getScrollToId(4)}
        contents={sectionFilter(pageContent, '05')}
      />
      <Section06
        id={getScrollToId(5)}
        contents={sectionFilter(pageContent, '06')}
      />
      <Section07
        id={getScrollToId(6)}
        contents={sectionFilter(pageContent, '07')}
      />
      <Section08 contents={sectionFilter(pageContent, '08')} />
      <BookTour contents={sectionFilter(pageContent, '09')} />
      <ContactForSpaces contents={sectionFilter(pageContent, '10')} />
      <ContactBarScrolling contents={sectionFilter(pageContent, '11')} />
    </>
  );
};

export default SpacesMain;
