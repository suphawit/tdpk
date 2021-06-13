import * as React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { IPrivacyPolicy } from '@models';
import { Container } from '@components';

interface PrivacyPolicyProps {
  privacyPolicy: IPrivacyPolicy[];
}

const PrivacyPolicy = ({ privacyPolicy = [] }: PrivacyPolicyProps) => {
  const { t } = useTranslation('common');
  const refs = privacyPolicy.reduce((item, value) => {
    item[value.id] = React.createRef();
    return item;
  }, {});

  const scrollToElement = (id: number) => {
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const handleClick = (id: number) => {
    scrollToElement(id);
  };

  const handleChange = (e) => {
    let id = e.target.value;
    scrollToElement(id);
  };

  const renderDSARText = () => {
    return (
      <>
        <aside className="opacity-70">
          <h2 className="font-bold  mb-3">Data Subject Access Rights (DSAR)</h2>

          <p className="mb-3">
            You have the right to see the personal data we hold about you. This
            is called a Data Subject Access Request (DSAR).
          </p>
          <p>
            Please{' '}
            <strong>
              <a
                target="_blank"
                href="https://privacyportal-apac.onetrust.com/webform/abe5c0b3-4603-4e8b-98f8-dd3b872352a7/3be8f499-4de5-4991-b18c-022884267bf5"
              >
                click here
              </a>
            </strong>{' '}
            to submit your specific request to us.
          </p>
        </aside>
      </>
    );
  };

  return (
    <Container extraClasses="privacyPolicy">
      <h1 className="font-extrabold text-3xl text-black">
        {t('privacyPolicy.header')}
      </h1>
      <nav className="block lg:hidden">
        <select
          className="border border-metallic-gray text-base font-bold bg-light-gray p-3 my-4 cursor-pointer w-full "
          onChange={(e) => handleChange(e)}
        >
          {privacyPolicy.map((item) => (
            <option key={item.id} value={item.id}>
              {t(item.title)}
            </option>
          ))}
        </select>
      </nav>
      <div className="grid grid-cols-5 grid-flow-col gap-4 mt-8">
        <div className="col-span-1 hidden lg:block">
          <nav>
            {privacyPolicy.map((item) => (
              <div
                className="border border-metallic-gray text-base font-bold bg-light-gray p-3 mb-4 cursor-pointer"
                key={item.id}
                onClick={() => handleClick(item.id)}
              >
                {t(item.title)}
              </div>
            ))}
          </nav>

          <div className="mx-3  text-sm">{renderDSARText()}</div>
        </div>
        <div className="col-span-5 ml-0 lg:col-span-4 lg:ml-4">
          {privacyPolicy.map((item) => (
            <article key={item.id} ref={refs[item.id]}>
              <h1 className="text-2xl font-bold mb-6">{t(item.title)}</h1>
              <div className="text-base leading-7 mb-10">
                <div
                  dangerouslySetInnerHTML={{ __html: t(item.description) }}
                  className="content leading-7"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
