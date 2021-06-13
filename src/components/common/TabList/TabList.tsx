import * as React from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { AnimatedArrow } from '@components/shared';

const TabList = ({ list }) => {
  const [openedTabIndex, setOpenedTabIndex] = React.useState(null);
  const handleClickTab = (index: number) => {
    if (openedTabIndex === index) {
      setOpenedTabIndex(null);
    } else {
      setOpenedTabIndex(index);
    }
  };

  return (
    <ul className="space-y-4">
      {list.map(({ id, header, description, url, button }, index) => (
        <li
          key={id}
          className={classNames(
            {
              'bg-true-v text-white ease-in':
                description && openedTabIndex === index,
            },
            'border bg-gray-50 border-gray-200 transition duration-300 ease-in-out'
          )}
        >
          <div
            className={classNames('flex justify-between p-6', {
              'cursor-pointer': description,
            })}
            onClick={() => handleClickTab(index)}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: header,
              }}
              className="font-bold"
            />
            <span className="ml-4">
              {description && (
                <AnimatedArrow
                  active={openedTabIndex === index}
                  isWhite={openedTabIndex === index}
                />
              )}
            </span>
          </div>
          {description && (
            <div
              className={classNames(
                'text-white max-h-0 transition-all duration-400 ease-in-out overflow-hidden',
                {
                  'max-h-screen ease-in p-6 pt-0': openedTabIndex === index,
                }
              )}
            >
              <div
                className="ContentContainer tablist"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
              {url && (
                <div>
                  <Link href={url}>
                    <a className="inline-block text-black font-bold bg-mid-gray mt-6 px-6 py-4 focus:outline-none">
                      {button || 'About.learnMore'}
                    </a>
                  </Link>
                </div>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TabList;
