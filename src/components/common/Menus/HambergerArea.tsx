import * as React from 'react';
import classNames from 'classnames';
import { GoX as CloseIcon } from 'react-icons/go';
import useTranslation from 'next-translate/useTranslation';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Link from 'next/link';

import Lang from '@components/common/Lang';
import { getMenu } from '@services';
import { LOCALES } from '@models';
import { siteCopyright } from '@components/common/siteCopyright';
import { sitePolicies } from '@components/common/sitePolicies';
import { AnimatedArrow } from '@components/shared';

const HamburgerArea = ({ onToggle }) => {
  const [menuList, setMenuList] = React.useState([]);
  const { lang } = useTranslation('common');
  const [expandedTabIndex, setExpandedTabIndex] = React.useState(-1);

  const handleTabClick = (index: number) => () => {
    const tabIndex = index === expandedTabIndex ? -1 : index;
    setExpandedTabIndex(tabIndex);
  };

  React.useEffect(() => {
    getMenu(lang as LOCALES).then((m) => {
      setMenuList([...m]);
    });
  }, [lang]);

  return (
    <div className="fixed w-full h-full overflow-y-scroll z-30 bg-gray-50 xl:hidden">
      <div className="px-6 py-8 space-y-10">
        <CloseIcon className="cursor-pointer text-2xl" onClick={onToggle} />
        <Lang inline />
      </div>
      <hr />
      <div className="px-6 pt-8 mb-8 xl:px-0 xl:py-0 xl:mb-12">
        <ul className="space-y-6">
          {menuList.map((menu, index) => (
            <li key={index}>
              <div
                className="flex justify-between items-center xl:mb-0 xl:inline"
                onClick={handleTabClick(index)}
              >
                <h3
                  className={classNames(
                    { 'font-bold': expandedTabIndex === index },
                    'cursor-pointer xl:font-bold'
                  )}
                >
                  {menu.title}
                </h3>
                <AnimatedArrow active={expandedTabIndex === index} />
              </div>
              <ul
                className={classNames(
                  'max-h-0 transition-all duration-400 ease-in-out overflow-hidden xl:inline',
                  { 'max-h-screen ease-in': expandedTabIndex === index }
                )}
              >
                {menu.subPages.map((subLvl1, index) => (
                  <li
                    key={index}
                    className={classNames(
                      {
                        'mb-8': index === menu.subPages.length - 1,
                      },
                      'ml-6 mt-6 xl:mb-0',
                      { 'xl:mt-6': index > 0, 'xl:mt-8': index <= 0 }
                    )}
                    onClick={onToggle}
                  >
                    <Link href={`/${menu.slug}/${subLvl1.slug}`} locale={lang}>
                      <a target={subLvl1.linkTargetBlank ? '_blank' : ''}>
                        <div>{subLvl1.title}</div>
                      </a>
                    </Link>
                    {subLvl1?.subPages && (
                      <ul>
                        {subLvl1.subPages.map((subLvl2, index) => (
                          <Link
                            href={`/${menu.slug}/${subLvl2.slug}`}
                            locale={lang}
                            key={index}
                          >
                            <a target={subLvl2.linkTargetBlank ? '_blank' : ''}>
                              <li className="mt-6">{subLvl2.title}</li>
                            </a>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <ul className="px-6 pt-8 pb-6">
          {sitePolicies.map((sitePolicy, index) => (
            <Link href={sitePolicy.path} key={index} locale={lang}>
              <a>
                <li
                  className={classNames('xl:mt-0', { 'mt-4': index > 0 })}
                  onClick={onToggle}
                >
                  <span className="hidden xl:inline">&nbsp;|&nbsp;</span>
                  {sitePolicy.label}
                </li>
              </a>
            </Link>
          ))}
        </ul>
        <p className="px-6 mb-12">{siteCopyright}</p>
      </div>
    </div>
  );
};

export default HamburgerArea;
