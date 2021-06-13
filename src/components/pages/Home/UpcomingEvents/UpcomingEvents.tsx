import Link from 'next/link';

import { IEvent } from '@models';
import { PrimaryButton } from '@components';
import { NoSSR } from '@components/common/NoSSR';
import UpcomingEventCarousel from './UpcomingEventsCarousel';

interface UpcomingEventsProps {
  events: IEvent[];
}

const UpcomingEvents = ({ events }: UpcomingEventsProps) => (
  <section className="text-left py-10 lg:py-20 lg:text-center 2xl:container 2xl:mx-auto">
    <h2 className="px-6 font-extrabold text-2xl md:text-3xl">
      Upcoming Events
    </h2>
    <div className="mt-1">
      <NoSSR>
        <UpcomingEventCarousel events={events} />
      </NoSSR>
    </div>
    <Link href="https://www.truedigitalpark.com/events">
      <a target="_blank" className="px-6">
        <PrimaryButton>Explore more events</PrimaryButton>
      </a>
    </Link>
  </section>
);

export default UpcomingEvents;
