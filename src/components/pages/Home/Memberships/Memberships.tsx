import Link from 'next/link';

import { IMembershipResponse } from '@models';
import { PrimaryButton, Container } from '@components';
import MembershipsCarousel from './MembershipsCarousel';
import MembershipsCard from './MembershipsCard';

interface MembershipsProps {
  memberships: IMembershipResponse;
}

const Memberships = ({
  memberships: {
    section01,
    section02 = [],
    section03,
    section04 = [],
    section05,
  },
}: MembershipsProps) => {
  const section4Grid = 'grid grid-cols-2 lg:grid-cols-4',
    section4Margin = 'mt-8 lg:mt-10',
    section4Gap = 'gap-4 gap-y-6 md:gap-8 md:gap-y-12';
  return (
    <Container>
      <div className="grid gap-9 lg:gap-4 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-extrabold text-2xl md:text-3xl">
            {section01.title}
          </h2>
          <p className="mt-6">{section01.detail}</p>
        </div>
        <div className="lg:col-start-7 lg:col-span-6">
          <MembershipsCarousel items={section02} />
        </div>
      </div>
      <div className="mt-11 lg:mt-16">
        <h2 className="font-extrabold text-left text-xl md:text-2xl lg:text-center">
          {section03.title}
        </h2>

        <div className={`${section4Grid} ${section4Margin} ${section4Gap}`}>
          {section04.map((item, index) => (
            <MembershipsCard key={index} item={item} />
          ))}
        </div>
        <div className="lg:flex lg:justify-center lg:mt-10">
          <Link href="/spaces/co-working-space">
            <a>
              <PrimaryButton>{section05.targetLabel}</PrimaryButton>
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Memberships;
