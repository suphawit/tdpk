import * as React from 'react';
import classNames from 'classnames';
import axios from 'axios';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { ISection } from '@models';
import { Container } from '@components';
import { formPayLoad, isValidate, clearValidationOnEnterField } from '@utils';

const Section03 = ({ contents }: ISection) => {
  const formRef = React.useRef(null);
  const { lang } = useTranslation('');
  const router = useRouter();
  const section = (num: number) => contents[num].contents;
  const { color, image, theme } = section(0);
  const { rendered: __html, target, subdata } = section(1);

  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const txtColor = theme === 'd' ? 'text-white' : 'text-gray-800';
  const sectionTheme = {
    l: 'before:theme-light',
    d: 'before:theme-dark',
  };

  React.useEffect(() => {
    clearValidationOnEnterField(formRef.current);
  }, []);
  //TODO: this form is suppose to render form by using field from database
  const clickHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = formPayLoad(formData);

    // send data
    if (isValidate(subdata, payload)) {
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
    }
  };

  React.useEffect(() => {
    const document = formRef.current;
    clearValidationOnEnterField(document);
  }, []);

  if (!__html) return <></>;
  return (
    <section
      className={classNames(
        'simple-layout',
        'relative',
        { 'before:section-display': theme },
        sectionTheme[theme],
        txtColor
      )}
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <Container extraClasses="relative">
        <div
          ref={formRef}
          onSubmit={clickHandler}
          className="ContentContainer"
          dangerouslySetInnerHTML={{ __html }}
        />
      </Container>
    </section>
  );
};

export default Section03;
