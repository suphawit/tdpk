import { GetServerSideProps } from 'next';

import {
  Articles,
  HomeBanners,
  InterconnectedEcoSystem,
  Memberships,
  UpcomingEvents,
} from '@components/pages';
import {
  IHomePageArticleResponse,
  IEvent,
  IHomeBanner,
  IInterconnectedResponse,
  IMembershipResponse,
  LOCALES,
} from '@models';
import {
  getHomepageArticles,
  getHomepageBanners,
  getInterconnectedEcoSystem,
  getMemberships,
  getUpcomingEvents,
} from '@services';
import { SharedHead } from '@components';

interface IndexProps {
  homeBanners: IHomeBanner[];
  upcomingEvents: IEvent[];
  homePageArticles: IHomePageArticleResponse;
  memberships: IMembershipResponse;
  interconnected: IInterconnectedResponse;
}

const Index = ({
  homeBanners,
  upcomingEvents,
  homePageArticles,
  memberships,
  interconnected,
}: IndexProps) => {
  return (
    <>
      <SharedHead
        title="True Digital Park"
        metaDescription="True Digital Park is a startup and technology campus, offering a complete ecosystem with an “open innovation” concept that brings together multinational companies, startups, business operators, investors, and R&D centers. This established digital community provides crucial knowledge creation that is supportive to digital innovations."
      />
      <HomeBanners homeBanners={homeBanners} />
      <UpcomingEvents events={upcomingEvents} />
      <Articles homePageArticles={homePageArticles} />
      <Memberships memberships={memberships} />
      <InterconnectedEcoSystem interconnected={interconnected} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  const homeBanners = await getHomepageBanners(locale as LOCALES);
  const upcomingEvents = await getUpcomingEvents(locale as LOCALES);
  const homePageArticles = await getHomepageArticles(locale as LOCALES);
  const memberships = await getMemberships(locale as LOCALES);
  const interconnected = await getInterconnectedEcoSystem(locale as LOCALES);

  return {
    props: {
      homeBanners,
      upcomingEvents,
      homePageArticles,
      memberships,
      interconnected,
    },
  };
};

export default Index;
