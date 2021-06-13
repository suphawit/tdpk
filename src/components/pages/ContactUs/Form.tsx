import * as React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation';

import { formPayLoad, isValidate, clearValidationOnEnterField } from '@utils';
import { Calendar } from '@components';
import {
  bookATourCalendar,
  integrateNumOfVisitors,
  selectTimeEventBinding,
  getBookATourPayload,
} from './util';

const Form = ({ contact }) => {
  const { slug } = contact;
  const section = (num: number) => contact.layoutContents[num].contents;
  const formRef = React.useRef(null);
  const [isShowCalendar, setIsShowCalendar] = React.useState(false);

  const { color, image, theme } = section(11);
  const { rendered: __html, target, subdata } = section(12);

  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };

  const router = useRouter();
  const { t, lang } = useTranslation('common');

  const submitForm = async (payload) => {
    const response = await axios.post(target, payload, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const { message: rawMsg, success } = response.data;
    if (success) {
      const message = encodeURIComponent(rawMsg);
      router.push(`/${lang}/form-success/${message}`);
    }
  };
  //TODO: this form is suppose to render form by using field from database
  const clickHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let payload = formPayLoad(formData);

    if (slug === 'book-a-tour') {
      payload = getBookATourPayload(document, payload);
    }
    // send data

    if (isValidate(subdata, payload, slug, lang)) submitForm(payload);
  };

  const calendarRef = React.useRef<HTMLDivElement>(null);

  const closeCalendar = () => {
    setIsShowCalendar(false);
  };

  const handleCloseCalendar = (e: any) => {
    if (calendarRef.current && calendarRef.current.contains(e.target as Node)) {
      return;
    }

    closeCalendar();
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleCloseCalendar, false);
    return () => {
      document.removeEventListener('mousedown', handleCloseCalendar, false);
    };
  }, [handleCloseCalendar]);

  React.useEffect(() => {
    const document = formRef.current;
    clearValidationOnEnterField(document);

    if (slug === 'book-a-tour') {
      bookATourCalendar(document, () => setIsShowCalendar(true));
      integrateNumOfVisitors(document);
      selectTimeEventBinding(document, {
        visitorTxt: t('bookATour.haveVisitorMore'),
        peopleTxt: t('bookATour.people'),
        specifyVisitorTxt: t('bookATour.specifyVisitor'),
      });
    }
  }, [slug, lang]);

  return (
    __html && (
      <div
        className={classNames(
          'bg-white p-8 lg:absolute lg:top-20 lg:right-36 lg:shadow-md lg:float-right lg:max-h-212 lg:w-1/3 lg:overflow-y-scroll',
          { 'before:section-display': theme },
          sectionTheme[theme],
          txtColor
        )}
        style={{
          background: backgroundImage || backgroundColor || 'white',
        }}
      >
        <div className="relative">
          <div
            ref={formRef}
            onSubmit={clickHandler}
            className="ContentContainer"
            dangerouslySetInnerHTML={{ __html }}
          />
          {slug === 'book-a-tour' && (
            <div ref={calendarRef}>
              <Calendar
                isShowed={isShowCalendar}
                onChooseDateCallback={closeCalendar}
              />
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Form;
