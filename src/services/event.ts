import { clientQuery } from '@libs/apollo-client';
import { IEvent, LOCALES } from '@models';
import { UPCOMING_EVENTS } from '@queries';

export async function getUpcomingEvents(
  locale = LOCALES.EN
): Promise<IEvent[]> {
  const result = await clientQuery({
    query: UPCOMING_EVENTS(locale),
  });
  return result.data.getHomepageUpcomingEventsBanners;
}

// TODO: mock data
export function getVenueOverall() {
  return (resolve) => {
    resolve({
      items: [
        {
          id: 0,
          anchor: 'Auditorium',
        },
        {
          id: 1,
          anchor: 'Townhall',
        },
        {
          id: 2,
          anchor: 'WorkshopRooms',
        },
        {
          id: 3,
          anchor: 'Nest',
        },
        {
          id: 4,
          anchor: 'Foyer',
        },
      ],
    });
  };
}
