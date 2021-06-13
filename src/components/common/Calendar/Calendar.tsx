import * as React from 'react';
import { DateTime } from 'luxon';
import classNames from 'classnames';
import { getDates, callBookingData, setDateAndTimeSlotSelectbox } from './util';

const Calendar = ({ isShowed = false, onChooseDateCallback }) => {
  // state
  const [initMonth, setInitMonth] = React.useState(
    DateTime.now().startOf('month')
  );

  const [dates, setDates] = React.useState<DateTime>([]);
  const [appoint, setAppoint] = React.useState([]);
  const label = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const initBooking = async () => {
    const appoint = await callBookingData(initMonth);
    setAppoint(appoint);
  };

  React.useEffect(() => {
    setDates(getDates(initMonth));
    initBooking();
  }, [initMonth]);

  return (
    <div id="calendar-container" className={classNames({ showed: isShowed })}>
      <div className="header">
        <div className="header__indicator">
          <p className="indicator"> {initMonth.toFormat('MMMM yyyy')} </p>
        </div>
        <div className="header__btn">
          <button
            onClick={() => {
              setInitMonth(initMonth.minus({ month: 1 }));
            }}
          >
            <i className="arrow arrow--left" />
          </button>
          <button
            onClick={() => {
              setInitMonth(initMonth.plus({ months: 1 }));
            }}
          >
            <i className="arrow arrow--right" />
          </button>
        </div>
      </div>
      <div className="calendar">
        {label.map((l, idx) => (
          <div
            key={`${l}${idx}`}
            className="calendar__item calendar__item--header"
          >
            {l}
          </div>
        ))}
        {dates.map((d) => {
          const date = appoint[d.toISODate()];
          const isAvailable = date?.is_available;
          const sumAvailable = date?.sum_available;
          return (
            <div
              onClick={() => {
                if (isAvailable) {
                  setDateAndTimeSlotSelectbox(appoint, d);
                  onChooseDateCallback();
                }
              }}
              key={d.toISODate()}
              className={classNames({
                calendar__item: true,
                enabled: isAvailable,
                'calendar__item--prev-date':
                  DateTime.now() > d && !DateTime.now().hasSame(d, 'day'),
                'calendar__item--today': DateTime.now().hasSame(d, 'day'),
              })}
            >
              {d.toFormat('d')}
              {isAvailable && sumAvailable && (
                <>
                  <br />
                  <p className="appointDay">{sumAvailable}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
