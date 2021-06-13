export const sectionFilter = (data, sectionNum) => {
  const dataArray = data.layoutContents.filter(
    (content) => content.section === sectionNum
  );
  return dataArray;
};

export const isValidate = (fields, payload, slug = '', lang = 'en') => {
  let isAllowed = true;

  const specificVisitor = document.getElementById(
    'specific-num-of-visitor'
  ) as HTMLInputElement;
  const visitorMore = document.getElementById(
    'visitor-more'
  ) as HTMLInputElement;

  fields.map((f, i) => {
    if (f.required && !payload[`field[${i}]`]) {
      isAllowed = false;
      const txt = document
        .querySelectorAll(`.form-group .form-control`)
        [i].getAttribute('data-required-message');

      document.querySelectorAll(`.form-group`)[i].classList.add('error');
      document.querySelectorAll(`.form-group .form_helper`)[
        i
      ].innerHTML = `* ${txt}`;
    }
    if (
      slug === 'book-a-tour' &&
      visitorMore?.checked &&
      !specificVisitor?.value
    ) {
      isAllowed = false;
      const box = specificVisitor.parentNode as HTMLInputElement;
      box.classList.add('error');
      const requiredTxt =
        lang === 'en' ? '* This field is required' : '* จำเป็นต้องระบุ';
      box.querySelector('.form_helper').innerHTML = requiredTxt;
    }
  });
  return isAllowed;
};

export const formPayLoad = (data) => {
  const payload = {};
  for (let [key, value] of data.entries()) {
    //check if payload have more than 1 value(such as checkbox)
    if (!payload[key]) payload[key] = value;
    else {
      //change to array and
      if (Array.isArray(payload[key])) payload[key].push(value);
      else {
        //save previous before change into array
        const preValue = payload[key];
        payload[key] = [preValue, value];
      }
    }
  }
  return payload;
};

export const clearValidationOnEnterField = (document) => {
  const fields = document.querySelectorAll('.form-group');
  const removeValidation = () => {
    fields.forEach((field) => {
      field.classList.remove('error');
      field.querySelector('.form_helper').innerHTML = '';
    });
  };
  fields.forEach((field) => {
    field.querySelectorAll('.checkbox input').forEach((chk) => {
      chk.addEventListener('click', () => {
        removeValidation();
      });
    });
    field.querySelectorAll('select').forEach((chk) => {
      chk.addEventListener('change', () => {
        removeValidation();
      });
    });
    field.addEventListener('keydown', () => {
      removeValidation();
    });
  });
};
