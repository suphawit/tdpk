import { format as _format, isValid } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { LOCALES } from '@models';

const locales = {
  [LOCALES.EN]: enUS,
};

export function formattedDate(value: number | string | Date, format = 'P') {
  const locale = LOCALES.EN;
  if (!value) {
    return '';
  }
  if (typeof value === 'string') {
    if (!isNaN(+value)) {
      value = +value;
    } else if (isValid(new Date(value))) {
      value = new Date(value);
    } else {
      return '';
    }
  }
  return _format(value, format, { locale: locales[locale] });
}
