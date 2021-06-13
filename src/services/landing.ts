import { clientQuery } from '@libs/apollo-client';
import { IHomeBanner, IInterconnectedResponse, LOCALES } from '@models';
import { HOME_BANNER_QUERY, INTERCONNECTED_ECO_SYSTEM_QUERY } from '@queries';

export function getHomepageBanners(
  locale = LOCALES.EN
): Promise<IHomeBanner[]> {
  return clientQuery({
    query: HOME_BANNER_QUERY(locale),
  }).then(({ data }) => data.getHomepageBanners || []);
}

export function getInterconnectedEcoSystem(
  locale = LOCALES.EN
): Promise<IInterconnectedResponse> {
  return clientQuery({
    query: INTERCONNECTED_ECO_SYSTEM_QUERY(locale),
  }).then(({ data }) => data.getInterconnectedEcosystem);
}
