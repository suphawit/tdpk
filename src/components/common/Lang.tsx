import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

import { LOCALES } from '@models';

const Lang = ({ inline = false }) => {
  const { lang } = useTranslation('common');

  return (
    <span
      className={classNames({
        'ml-9': !inline,
        'inline-block': inline,
      })}
    >
      {lang === LOCALES.EN && (
        <button
          className="focus:outline-none"
          onClick={async () => await setLanguage('th')}
        >
          ไทย
        </button>
      )}
      {lang === LOCALES.TH && (
        <button
          className="focus:outline-none"
          onClick={async () => await setLanguage('en')}
        >
          Eng
        </button>
      )}
    </span>
  );
};

export default Lang;
