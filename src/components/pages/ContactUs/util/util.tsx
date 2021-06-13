// import useTranslation from 'next-translate/useTranslation';

import { clearValidationOnEnterField } from '@utils';

export const bookATourCalendar = (document, callback) => {
  const fields = document.querySelectorAll('.form-group');
  const date = document.querySelector("input[type='date']");
  const dateComponent = date.cloneNode(true);
  const dateBox = "<div class='dateBox relative'></div>";
  const button =
    "<button class='calendar-icon' type='button'><img src='/ico/calendar.jpg' alt='calendar' /></button>";

  //add box to put calendar input and calendar icon
  document
    .querySelector("input[type='date']")
    .insertAdjacentHTML('afterend', dateBox);

  //remove calendar fiele to change place to dateBox div
  document.querySelector("input[type='date']").remove();
  document.querySelector('.dateBox').appendChild(dateComponent);

  document
    .querySelector("input[type='date']")
    .insertAdjacentHTML('afterend', button);

  //calendar trigger enevt
  document.querySelector('.calendar-icon').addEventListener('click', () => {
    callback();
    fields.forEach((field) => {
      field.classList.remove('error');
      field.querySelector('.form_helper').innerHTML = '';
    });
  });
};

export const selectTimeEventBinding = (document, txtObj) => {
  document.querySelector('#field-1898-__5').addEventListener('change', (e) => {
    const { value } = e.target;
    const visitor = value.split(' - ')[1]?.slice(0, 2);
    let opt = '<option></option>';
    for (let i = 1; i <= visitor; i++) opt += `<option>${i}</option>`;
    document.querySelector('#field-1898-__6').innerHTML = opt;
    _integrateHaveMore(document, visitor, txtObj.visitorTxt, txtObj.peopleTxt);
    _haveMoreEventBinding(document, txtObj.specifyVisitorTxt);
  });
};

export const integrateNumOfVisitors = (document) => {
  const prevNumOfVisitor = document.querySelector('#field-1898-__6');
  const requiredMessage = prevNumOfVisitor.getAttribute(
    'data-required-message'
  );
  const selectBox = `<select name="field[6]" id="field-1898-__6" class="form-control" data-required="required" data-required-message="${requiredMessage}"></select>`;
  prevNumOfVisitor.insertAdjacentHTML('afterend', selectBox);
  document.querySelector('#field-1898-__6').remove();
};

export const _integrateHaveMore = (
  document,
  visitor,
  visitorTxt,
  peopleTxt
) => {
  const moreField = `<div class="form-group">
    <div class="checkbox">
      <label class="control-label">
        <input type="checkbox" name="visitor-more" id="visitor-more" value="${visitor}">&nbsp;${visitorTxt} ${visitor} ${peopleTxt}
      </label>
    </div>
    <div class="form_helper"></div>
  </div>`;

  const visitorMoreDOM = document.querySelector('#visitor-more');

  if (visitorMoreDOM) {
    const visitorMoreBox = visitorMoreDOM.parentNode.parentNode.parentNode;
    visitorMoreBox.remove();
  }

  document
    .querySelector('#field-1898-__6')
    .parentNode.insertAdjacentHTML('afterend', moreField);
};

export const _haveMoreEventBinding = (document, txt) => {
  const specificNumOfVisitorField = `<div class="form-group">
    <label class="control-label" for="specific-num-of-visitor">${txt}&nbsp;<i class="fas fa-asterisk text-danger"></i></label>
    <input type="text" name="specific-num-of-visitor" id="specific-num-of-visitor" class="form-control" data-required="required">
    <div class="form_helper"></div>
  </div>`;
  const visitorMoreDOM = document.querySelector('#visitor-more');
  const visitorMoreBox = visitorMoreDOM.parentNode.parentNode.parentNode;

  visitorMoreDOM.addEventListener('click', (e) => {
    const { checked } = e.target;
    if (checked) {
      visitorMoreBox.insertAdjacentHTML('afterend', specificNumOfVisitorField);
      document.querySelector('#field-1898-__6').disabled = true;
    } else {
      document.querySelector('#specific-num-of-visitor').parentNode.remove();
      document.querySelector('#field-1898-__6').disabled = false;
    }
    clearValidationOnEnterField(document);
  });
};

export const getBookATourPayload = (document, payload) => {
  const specificVisitor = document.getElementById(
    'specific-num-of-visitor'
  ) as HTMLInputElement;
  const visitor = document.getElementById('field-1898-__6') as HTMLInputElement;
  if (specificVisitor?.value) {
    payload['field[6]'] = specificVisitor.value;
  } else {
    payload['field[6]'] = visitor.value;
  }

  payload['field[5]'] = payload['field[5]'].split(' - ')[0];
  delete payload['specific-num-of-visitor'];
  delete payload['visitor-more'];
  return payload;
};
