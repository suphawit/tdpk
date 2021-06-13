import { clientQuery } from '@libs/apollo-client';
import { TDPK_MEMBERSHIPS_QUERY } from '@queries';
import { IMembershipResponse, LOCALES } from '@models';

export function getMemberships(locale = LOCALES.EN): Promise<IMembershipResponse> {
  return clientQuery
    ({
      query: TDPK_MEMBERSHIPS_QUERY(locale),
    })
    .then(({ data }) => data.getTdpkMembership);
}
