import * as React from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { GoSearch as SearchIcon, GoX as CloseIcon } from 'react-icons/go';
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import { getMenu } from '@services';
import { LOCALES } from '@models';
import Lang from '@components/common/Lang';
import HamburgerArea from '@components/common/Menus/HambergerArea';
import LoginArea from '@components/common/Menus/LoginArea';

import SearchContent from './_SearchContent/index';

const Header = () => {
  const [menuList, setMenuList] = React.useState([]);
  const { lang } = useTranslation('common');
  const [isSearchTabVisible, setIsSearchTabVisible] = React.useState(false);
  const [hamburgerMenuArea, setHamburgerMenuArea] = React.useState(false);
  const [loginMenuArea, setLoginMenuArea] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  React.useEffect(() => {
    getMenu(lang as LOCALES).then((m) => {
      setMenuList([...m]);
    });
  }, [lang]);

  let navbarClasses = [
    'Menu__body w-full text-lg border-b h-16 flex items-center justify-between xl:h-24 xl:px-12',
  ];
  let menuSubItemClasses = ['absolute Menu__subItem'];
  let menuItem = ['Menu__item flex cursor-pointer relative'];
  let logInButton = [
    'font-bold hover:bg-bright-green duration-300 bg-black text-white h-12 w-28 focus:outline-none',
  ];

  if (scrolled) {
    navbarClasses.push('Menu__scroll');
    menuSubItemClasses.push('Menu__subItem--scroll');
    menuItem.push('Menu__scroll');
    logInButton.push('Menu__button--scroll');
  }

  return (
    <div className="h-16 xl:h-24">
      {loginMenuArea && (
        <LoginArea onToggle={(prevState) => setLoginMenuArea(!prevState)} />
      )}
      {hamburgerMenuArea && (
        <HamburgerArea
          onToggle={(prevState) => setHamburgerMenuArea(!prevState)}
        />
      )}

      <header className={navbarClasses.join(' ')}>
        <div className="flex items-center">
          <FiMenu
            className="text-2xl mx-4 cursor-pointer xl:hidden"
            onClick={() => setHamburgerMenuArea(!hamburgerMenuArea)}
          />
          <Link href="/">
            <a>
              <img
                src="/Logo.svg"
                alt="True Digital Park Logo"
                className="w-3/4 xl:w-full"
              />
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="hidden xl:flex h-full">
            {menuList.map((menu, index) => (
              <li
                key={index}
                className={classNames(menuItem.join(' '), {
                  'ml-8': index > 0,
                })}
              >
                <span title={menu.title} className="Menu__item__span">
                  {menu.title}
                </span>
                <div className={menuSubItemClasses.join(' ')}>
                  <ul className="Menu__subItem__ul">
                    {menu.subPages?.map((subLvl1, index) => (
                      <li
                        key={subLvl1.title}
                        className={classNames(
                          `Menu__subItem__ul__li subLvl1__dropdown subLvl1__dropdown-${index}`,
                          {
                            'subLvl1__dropdown-last':
                              index === menu.subPages.length - 1,
                          }
                        )}
                      >
                        <Link
                          href={`/${menu.slug}/${subLvl1.slug}`}
                          locale={lang}
                        >
                          <a target={subLvl1.linkTargetBlank ? '_blank' : ''}>
                            <div
                              className={classNames({
                                'flex justify-between': subLvl1?.subPages,
                              })}
                            >
                              <span>{subLvl1.title}</span>
                              {subLvl1?.subPages && (
                                <span className="flex items-center">
                                  <IoIosArrowForward />
                                </span>
                              )}
                            </div>
                          </a>
                        </Link>
                        {subLvl1?.subPages && (
                          <ul className="Menu__subItem__ul__li__ul">
                            {subLvl1.subPages?.map((subLvl2, index) => (
                              <Link
                                href={`/${menu.slug}/${subLvl2.slug}`}
                                key={subLvl2.title}
                              >
                                <a
                                  target={
                                    subLvl2.linkTargetBlank ? '_blank' : ''
                                  }
                                >
                                  <li
                                    className={classNames(
                                      `Menu__subItem__ul__li__ul__li subLvl2__dropdown subLvl2__dropdown-${index}`,
                                      {
                                        'subLvl2__dropdown-last':
                                          index === subLvl1.subPages.length - 1,
                                      }
                                    )}
                                  >
                                    {subLvl2.title}
                                  </li>
                                </a>
                              </Link>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>

          {(function () {
            if (!isSearchTabVisible) {
              return (
                <SearchIcon
                  className="text-lg cursor-pointer ml-8 mr-4 xl:mr-0"
                  onClick={() => setIsSearchTabVisible(true)}
                />
              );
            }

            return (
              <CloseIcon
                className="text-lg cursor-pointer ml-8 mr-4 xl:mr-0"
                onClick={() => setIsSearchTabVisible(false)}
              />
            );
          })()}

          {isSearchTabVisible && <SearchContent isScrolled={scrolled} />}
          {/* <img
            src="/Profile.svg"
            alt="Profile"
            className="xl:hidden mx-4"
            onClick={() => setLoginMenuArea(!loginMenuArea)}
          /> */}
        </div>
        <div className="hidden xl:block">
          {/* <button className={logInButton.join(' ')}>{t('Login')}</button> */}
          <Lang />
        </div>
      </header>
    </div>
  );
};

export default Header;
