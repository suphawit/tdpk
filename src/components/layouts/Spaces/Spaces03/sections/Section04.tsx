import * as React from 'react';
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import { IAvailablePackages } from '@models';

interface AvailablePackagesProps {
  contents: IAvailablePackages;
}

const Section04 = ({ contents }: AvailablePackagesProps) => {
  const [
    currentAvailablePackages,
    setCurrentAvailablePackages,
  ] = React.useState([]);
  const [sliderValue, setSliderValue] = React.useState<number>(4);

  const {
    price_based_day_satangs: dayCost,
    price_based_month_satangs: monthCost,
    price_based_day_currency: dayCurrency,
    price_based_month_currency: monthCurrency,
  } = contents;

  const dayPackage = () => {
    const cost = Math.round(dayCost / 100);
    return {
      time: '1 Day',
      cost,
      discount: contents[`discount_1_day`],
      currency: dayCurrency,
    };
  };

  const monthPackage = (month) => {
    const discount = discountMonth(month);
    const cost = Math.round((monthCost / 100) * month);
    return {
      time: `${month} Month${month > 1 ? 's' : ''}`,
      cost,
      discount,
      currency: monthCurrency,
    };
  };

  const discountMonth = (i) => {
    let month = [null];
    let temp = null;
    for (let j = 1; j <= 12; j++) {
      let monthVal = contents[`discount_${j}_month`];
      if (monthVal) temp = monthVal;
      month.push(temp);
    }
    return month[i];
  };

  React.useEffect(() => {
    const monthTime = sliderValue - 1;
    if (monthTime) {
      setCurrentAvailablePackages([monthPackage(monthTime)]);
    } else {
      setCurrentAvailablePackages([dayPackage()]);
    }
  }, [sliderValue]);

  const packagesShowed = () => {
    const packArr = [];
    if (contents['discount_1_day'] && contents['mark_as_preset_1_day'])
      packArr.push(dayPackage());
    for (let i = 1; i <= 12; i++) {
      if (
        contents[`discount_${i}_month`] &&
        contents[`mark_as_preset_${i}_month`]
      )
        packArr.push(monthPackage(i));
    }
    return packArr;
  };

  return (
    <div className="shadow-custom px-8 py-10 border border-light-orange">
      <h1 className="text-xl font-bold text-center text-mid-black lg:text-2xl lg:mb-4">
        Become a Member Now
      </h1>
      <p className="text-base	text-center text-mid-black my-4 lg:text-lg lg:mb-6">
        Customize your co-working space period below to see the full price.
      </p>
      <p className="text-base font-bold text-mid-black lg:text-lg">
        Available pacakges
      </p>

      {packagesShowed().map((item, key) => (
        <div
          className="grid py-4 px-6 mt-4 gap-3 grid-cols-2 border border-default-gray lg:grid-cols-3"
          key={key}
        >
          <div className="font-bold text-base text-black items-center justify-start lg:text-lg lg:flex">
            {item.time}
            <div className="flex items-center lg:hidden">
              {item.discount > 0 && (
                <button className="border text-xs text-white font-bold bg-light-red px-2 py-0.5 focus:outline-none">
                  {item.discount}% OFF
                </button>
              )}
            </div>
          </div>
          <div className="items-center justify-center hidden lg:flex">
            {item.discount > 0 && (
              <button className="border text-xs text-white font-bold bg-light-red px-2 py-0.5 focus:outline-none">
                {item.discount}% OFF
              </button>
            )}
          </div>
          <div className="flex flex-col items-center text-right">
            <p className="w-full font-bold text-lg text-black leading-tight">
              {`${item.cost - (item.cost * item.discount) / 100} ${
                item.currency
              }`}
              {item.discount > 0 && (
                <>
                  <br />
                  <span className="font-normal text-xs text-gray line-through">
                    {`${item.cost}-${item.currency}`}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center mt-4 mb-6">
        <div className="border border-black flex-grow" />
        <div className="flex-grow-0 font-bold text-black text-base px-3 lg:text-lg">
          OR
        </div>
        <div className="border border-black flex-grow" />
      </div>
      <div>
        <p className="text-base text-mid-black font-bold lg:text-lg">
          Select in Days / Months
        </p>
        <div className="border border-default-gray px-3 py-3 mt-3">
          {currentAvailablePackages?.map((item, key) => (
            <div className="flex mb-4" key={key}>
              <div className="flex-grow">
                <p className="text-black font-bold text-base lg:text-xl">
                  {item.time}
                </p>
                <p className="text-light-red font-bold text-xs">
                  {item.discount > 0 ? item.discount + '% OFF' : 'No Discounts'}
                </p>
              </div>
              <div>
                <p className="text-black font-bold text-lg">
                  {`${item.cost - (item.cost * item.discount) / 100} ${
                    item.currency
                  }`}
                </p>
                {item.discount > 0 && (
                  <p className="font-normal text-xs text-thunder-gray line-through">
                    {`${item.cost}-${item.currency}`}
                  </p>
                )}
              </div>
            </div>
          ))}
          <Slider
            aria-label="slider-ex-1"
            defaultValue={4}
            max={13}
            min={1}
            onChangeEnd={(val) => setSliderValue(val)}
          >
            <SliderTrack className="bg-light-purple">
              <SliderFilledTrack bg="purple" />
            </SliderTrack>
            <SliderThumb
              boxSize={6}
              className="rounded-none bg-true-v focus:shadow-none"
            >
              <Box className="w-5 h-5 bg-true-v" />
            </SliderThumb>
          </Slider>
        </div>
      </div>
      <div className="text-center mt-8">
        <a
          href="mailto:member@truedigitalpark.com"
          className="font-bold text-lg lg:text-base"
        >
          Contact &nbsp;
          <span className="text-bullet-navy underline">
            member@truedigitalpark.com
          </span>
        </a>
      </div>
    </div>
  );
};

export default Section04;
