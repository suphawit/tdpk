import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { IInterconnectedResponse } from '@models';
import { PrimaryButton, Container } from '@components';

interface InterconnectedEcoSystemProps {
  interconnected: IInterconnectedResponse;
}

const InterconnectedEcoSystem = ({
  interconnected: { section01, section02, section03 = [] },
}: InterconnectedEcoSystemProps) => {
  const { lang } = useTranslation();
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${section01.image})`,
      }}
    >
      <Container extraClasses="flex items-center grid gap-4 lg:grid-cols-12">
        <article className="lg:col-span-5">
          <h2 className="text-bright-green font-extrabold text-2xl md:text-3xl">
            {section02.title}
          </h2>
          <p className="text-white mt-4">{section02.detail}</p>
          <Link href="/about-tdpk" locale={lang}>
            <a>
              <PrimaryButton extraClassNames="mt-8">
                {section02.targetLabel}
              </PrimaryButton>
            </a>
          </Link>
        </article>
        <article className="grid gap-2 grid-cols-2 mt-9 md:gap-6 lg:mt-0 lg:gap-8 lg:col-start-7 lg:col-end-13">
          <div className="space-y-2 md:space-y-6 lg:space-y-8">
            <img
              src={section03[0].image}
              alt={section03[0].contentType}
              height="100%"
              width="100%"
            />
            <img
              src={section03[2].image}
              alt={section03[2].contentType}
              height="100%"
              width="100%"
              className="pb-10 lg:pb-16"
            />
          </div>
          <div className="space-y-2 md:space-y-6 lg:space-y-8">
            <img
              src={section03[1].image}
              alt={section03[1].contentType}
              height="100%"
              width="100%"
              className="pt-10 lg:pt-16"
            />
            <img
              src={section03[3].image}
              alt={section03[3].contentType}
              height="100%"
              width="100%"
            />
          </div>
        </article>
      </Container>
    </section>
  );
};

export default InterconnectedEcoSystem;
