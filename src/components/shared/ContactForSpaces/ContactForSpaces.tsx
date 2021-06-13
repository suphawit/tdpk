import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { ISpaceLayoutContents } from '@models';

interface ContactForSpacesProps {
  contents?: ISpaceLayoutContents[];
}

const ContactForSpaces = ({ contents = null }: ContactForSpacesProps) => {
  const { t } = useTranslation('common');

  if (!contents)
    return (
      <section className="text-white bg-black">
        <div className="gap-4 p-6 lg:h-72 lg:p-0 lg:grid lg:grid-cols-3 2xl:container 2xl:mx-auto">
          <article className="col-span-2 mb-4 font-bold lg:px-36 lg:text-4xl lg:m-auto">
            <h2 className="mb-0.5 lg:mb-4">
              {t('contactForSpaces.contactTDPK')}
            </h2>
            <h2>
              {t('contactForSpaces.toCheckOut')}
              <Link href="/spaces/event-space">
                <a className="hover:underline text-bright-green">
                  {t('contactForSpaces.spaces')}
                </a>
              </Link>
            </h2>
          </article>
          <article className="lg:py-12 lg:pr-36 lg:flex lg:items-center">
            <div>
              <h3 className="mb-2 font-bold">
                {t('contactForSpaces.addressLabel')}
              </h3>
              <a
                target="_blank"
                className="hover:underline"
                href="https://www.google.co.th/maps/place/True+Digital+Park/@13.6851519,100.6091376,17z/data=!4m5!3m4!1s0x30e29ed269181bb1:0x60c3178ba983c76!8m2!3d13.6860104!4d100.6109687?hl=th&authuser=0"
              >
                <p className="mb-4 lg:mb-6">{t('contactForSpaces.address')}</p>
              </a>
              <h3 className="mb-2 font-bold">
                {t('contactForSpaces.contactLabel')}
              </h3>
              <p>
                <Link href="tel:02-009-1101">
                  <a className="hover:underline">
                    {t('contactForSpaces.phoneNumber')}
                  </a>
                </Link>
              </p>
            </div>
          </article>
        </div>
      </section>
    );

  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { title, detail } = section(1);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !title && !detail;

  if (isNotRender) return <></>;

  return (
    <section
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <div className="gap-4 p-6 lg:h-72 lg:p-0 lg:grid lg:grid-cols-3 2xl:container 2xl:mx-auto">
        <article className="col-span-2 mb-4 font-bold lg:px-36 lg:text-4xl lg:m-auto">
          {title && (
            <div
              dangerouslySetInnerHTML={{
                __html: title,
              }}
              className="ContentContainer__header-line-height"
            />
          )}
        </article>
        <article className="lg:py-12 lg:pr-36 lg:flex lg:items-center">
          {detail && (
            <div
              dangerouslySetInnerHTML={{
                __html: detail,
              }}
            />
          )}
        </article>
      </div>
    </section>
  );
};

export default ContactForSpaces;
