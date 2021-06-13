import { GetServerSideProps } from 'next';

import { getPageInfo } from '@services/page';
import { layouts } from '@utils';
import {
  Simple,
  AboutUs,
  BecomeAPartner,
  ContactUs,
  InternHubMain,
  ProgramsMain,
  InternHub01,
  Programs01,
  Programs02,
  SpacesMain,
  Spaces01,
  Spaces02,
  Spaces03,
  Spaces04,
  NotFound,
} from '@layouts';
import { LOCALES } from '@models';

const Page = ({ pageContent }) => {
  switch (pageContent?.layout) {
    case layouts.SIMPLE:
      return <Simple pageContent={pageContent} />;
    case layouts.ABOUT_US:
      return <AboutUs pageContent={pageContent} />;
    case layouts.BECOME_A_PARTNER:
      return <BecomeAPartner pageContent={pageContent} />;
    case layouts.CONTACT_US:
      return <ContactUs pageContent={pageContent} />;
    case layouts.INTERN_HUB_MAIN:
      return <InternHubMain pageContent={pageContent} />;
    case layouts.INTERN_HUB_01:
      return <InternHub01 pageContent={pageContent} />;
    case layouts.PROGRAMS_MAIN:
      return <ProgramsMain pageContent={pageContent} />;
    case layouts.PROGRAMS_01:
      return <Programs01 pageContent={pageContent} />;
    case layouts.PROGRAMS_02:
      return <Programs02 pageContent={pageContent} />;
    case layouts.SPACES_MAIN:
      return <SpacesMain pageContent={pageContent} />;
    case layouts.SPACES_01:
      return <Spaces01 pageContent={pageContent} />;
    case layouts.SPACES_02:
      return <Spaces02 pageContent={pageContent} />;
    case layouts.SPACES_03:
      return <Spaces03 pageContent={pageContent} />;
    case layouts.SPACES_04:
      return <Spaces04 pageContent={pageContent} />;
    default:
      return <NotFound />;
  }
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, query } = context;

  const pageContent = await getPageInfo(query.slug2, locale as LOCALES);
  return {
    props: {
      pageContent,
    },
  };
};

export default Page;
