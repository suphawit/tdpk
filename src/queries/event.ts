import { LOCALES } from '@models';
import { gql } from '@apollo/client';

export const UPCOMING_EVENTS = (locale = LOCALES.EN) => gql`
  query {
    getHomepageUpcomingEventsBanners(locale: ${locale}) {
      id
      contentType
      image
      title
      titleTh
      titleEn
      category
      categoryTh
      categoryEn
      eventDate
      eventDateLabel
      eventTime
      eventTimeLabel
      target
      createdAt
      updatedAt
    }
  }
`;
