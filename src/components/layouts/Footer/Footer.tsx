import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import { getMenu } from '@services';
import { siteCopyright } from '@components/common/siteCopyright';
import { sitePolicies } from '@components/common/sitePolicies';
import { SocialNetworks } from '@components/common';
import { AnimatedArrow } from '@components/shared';

const Footer = () => {
  const [menuList, setMenuList] = React.useState([]);
  const [expandedTabIndex, setExpandedTabIndex] = useState(-1);
  const { lang } = useTranslation('common');

  const handleTabClick = (index: number) => () => {
    const tabIndex = index === expandedTabIndex ? -1 : index;
    setExpandedTabIndex(tabIndex);
  };

  React.useEffect(() => {
    getMenu().then((m) => {
      setMenuList([...m]);
    });
  }, []);

  return (
    <footer className="border-t">
      <div className="xl:pt-16 xl:px-24 xl:pb-10 xl:px-36 2xl:container 2xl:mx-auto">
        <div className="px-6 pt-10 pb-0 xl:px-0 xl:py-0 xl:mb-12">
          <div className="grid xl:grid-cols-6 xl:gap-2">
            {menuList.map((menu, index) => (
              <ul key={index}>
                <li>
                  <div
                    className="cursor-pointer flex justify-between items-center xl:inline mb-4 xl:mb-0 xl:cursor-default"
                    onClick={handleTabClick(index)}
                  >
                    <h3
                      className={classNames(
                        { 'font-bold': expandedTabIndex === index },
                        'xl:font-bold'
                      )}
                    >
                      {menu.title}
                    </h3>
                    <AnimatedArrow
                      extraClasses="xl:hidden"
                      active={expandedTabIndex === index}
                    />
                  </div>
                  <ul
                    className={classNames(
                      'ml-6 max-h-0 transition-all duration-400 ease-in-out overflow-hidden xl:inline xl:ml-0',
                      { 'max-h-screen ease-in': expandedTabIndex === index }
                    )}
                  >
                    {menu.subPages?.map((subLvl1, index) => (
                      <li
                        key={index}
                        className={classNames(
                          {
                            'mb-4': index !== menu.subPages.length - 1,
                            'mb-8': index === menu.subPages.length - 1,
                          },
                          'xl:mb-0',
                          { 'xl:mt-6': index > 0, 'xl:mt-8': index <= 0 }
                        )}
                      >
                        <Link href={`/${menu.slug}/${subLvl1.slug}`}>
                          <a target={subLvl1.linkTargetBlank ? '_blank' : ''}>
                            {subLvl1.title}
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
                                <a
                                  target={
                                    subLvl2.linkTargetBlank ? '_blank' : ''
                                  }
                                >
                                  <li className="mt-4">{subLvl2.title}</li>
                                </a>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            ))}
          </div>
        </div>

        <div className="xl:flex xl:flex-row-reverse xl:items-center xl:justify-between">
          <div
            className={classNames('px-6 pb-8 xl:px-0 xl:pb-0 text-2xl', {
              'mt-2 xl:mt-0': expandedTabIndex !== menuList.length - 1,
            })}
          >
            <SocialNetworks />
          </div>
          <hr className="xl:hidden" />
          <div className="xl:flex xl:flex-row-reverse">
            <ul className="p-6 xl:p-0 xl:flex">
              {sitePolicies?.map((sitePolicy, index) => (
                <li
                  key={index}
                  className={classNames('xl:mt-0', { 'mt-4': index > 0 })}
                >
                  <span className="hidden xl:inline">
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                  </span>
                  <Link href={sitePolicy.path}>
                    <a>{sitePolicy.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <hr className="xl:hidden" />
            <div className="p-6 xl:p-0">
              <p className="inline">{siteCopyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
