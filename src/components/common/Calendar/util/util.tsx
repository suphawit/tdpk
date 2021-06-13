import { DateTime } from 'luxon';
import axios from 'axios';

export const currentMonth = (date) => {
  let current = date;
  let dates: DateTime[] = [];
  const month = current.month;
  while (current.month === month) {
    dates = [...dates, current];
    current = current.plus({ days: 1 });
  }
  return dates;
};

export const nextMonth = (date) => {
  let next = date.plus({ month: 1 }).minus({ days: 1 });

  let dayOfweek = next.weekday;
  let dates: DateTime[] = [];
  for (let i = dayOfweek; i < 6; i++) {
    next = next.plus({ days: 1 });
    dates = [...dates, next];
  }
  return dates;
};
export const prevMonth = (date) => {
  let dates: DateTime[] = [];
  let dayOfweek = date.weekday;
  let prev = date.minus({ days: dayOfweek + 1 });
  for (let i = dayOfweek; i > 0; i--) {
    prev = prev.plus({ days: 1 });
    dates = [...dates, prev];
  }
  return dates;
};

export const getDates = (date) => {
  return [...prevMonth(date), ...currentMonth(date), ...nextMonth(date)];
};

export const setDateAndTimeSlotSelectbox = (appoint, dateI) => {
  const date = appoint[dateI.toISODate()];
  const periods = JSON.stringify(date?.periods);

  const dateField = document.querySelector(
    "input[type='date']"
  ) as HTMLInputElement;
  dateField.value = dateI.toISODate();

  const timeSlot = document.querySelector(
    '#field-1898-__5'
  ) as HTMLInputElement;
  const timeSlotOpt = Object.entries(JSON.parse(periods));
  let optTxt = '<option></option>';

  for (let [key, value] of timeSlotOpt) {
    if (value) optTxt += `<option>${key} - ${value} Seats</option>`;
  }

  timeSlot.innerHTML = optTxt;
};

export const callBookingData = async (date = DateTime.now()) => {
  const todayMonth = DateTime.now().startOf('month');
  const currentMonth = date.startOf('month');

  const prevM = prevMonth(date);

  const compareObj = currentMonth.diff(todayMonth, 'months');
  const compare = compareObj.toObject().months;

  let from = date.toISODate();

  if (compare >= 1) from = prevM[0].toISODate();

  const nextM = nextMonth(date);
  const to = nextM.length
    ? nextM[nextM.length - 1].toISODate()
    : date.endOf('month').toISODate();

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/book_a_tour`,
    {
      params: {
        from,
        to,
      },
    }
  );

  return response.data.data;
};
