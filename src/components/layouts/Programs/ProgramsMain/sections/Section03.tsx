import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

import { PrimaryButton, Container } from '@components';
import { ISectionContents } from '@models';

interface Section03Props {
  contents: ISectionContents;
  parentSlug: string;
}

const Section03 = ({ contents, parentSlug }: Section03Props) => {
  const section = (num: number) => contents[num].contents;

  const { subdata } = section(1);
  const { t } = useTranslation('common');

  if (!subdata.length) return <></>;
  return (
    <section className="bg-gray-100">
      <Container>
        {subdata.map((data, index) => {
          const { title, detail, subtitle, target, image } = data;
          return (
            <div
              key={index}
              className={classNames(
                'grid bg-white shadow p-8 md:grid-cols-4 gap-4 lg:gap-8',
                {
                  'mt-10 lg:mt-20': index > 0,
                }
              )}
            >
              <div>{image && <img src={image} alt="Startup Program" />}</div>
              <div className="md:col-span-3">
                {title && (
                  <div
                    className="font-extrabold text-3xl mb-4"
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                )}
                {detail && (
                  <div
                    className="ContentContainer"
                    dangerouslySetInnerHTML={{ __html: detail }}
                  />
                )}

                {target && subtitle && (
                  <Link href={`/${parentSlug}${target}`}>
                    <a target="_blank">
                      <PrimaryButton extraClassNames="mt-6">
                        {subtitle}
                      </PrimaryButton>
                    </a>
                  </Link>
                )}
                {!(target && subtitle) && (
                  <PrimaryButton disabled extraClassNames="mt-6">
                    {t('startupSandbox.startupList.comingbutton')}
                  </PrimaryButton>
                )}
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export default Section03;
