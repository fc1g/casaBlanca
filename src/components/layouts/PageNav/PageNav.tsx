import { Dispatch, useEffect, useState } from 'react';
import { LOCALS } from '../../../lib/i18n/constants';
import i18next from 'i18next';

import Nav from '../../Nav/Nav';
import MobileNav from '../../MobileNav/MobileNav';
import Logo from '../../Logo/Logo';
import LangList from '../LangList/LangList';
import Lang from '../../Lang/Lang';
import Hamburger from '../../Hamburger/Hamburger';

import T from '../../../types/T';

import engFlag from '/flags/united-kingdom.webp';
import plFlag from '/flags/poland.webp';
import spFlag from '/flags/spain.webp';

interface PageNavProps extends T {
  pageStyles?: string;
  logoStyles: string;
  isOpenLangMenu: boolean;
  setIsOpenLangMenu: Dispatch<boolean>;
}

function PageNav({
  isOpenLangMenu,
  setIsOpenLangMenu,
  t,
  pageStyles = '',
  logoStyles = '',
}: PageNavProps) {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [currLang, setCurrLang] = useState(LOCALS.EN);

  function changeLangHandler(lang: string) {
    setCurrLang(currLang !== lang ? lang : currLang);
    setIsOpenLangMenu(false);
    i18next.changeLanguage(lang);
  }

  useEffect(() => {
    const data = localStorage.getItem('i18nextLng');
    if (!data) return;

    setCurrLang(data);
  }, [setCurrLang]);
  return (
    <nav
      className={`2xl:container 2xl:mx-auto ${pageStyles || 'absolute inset-x-0 top-0 z-[999999]'}`}
    >
      <div className="flex items-center justify-between p-4">
        <Logo className={logoStyles} />

        <Nav t={t} />

        <div className="relative hidden items-center justify-center md:flex">
          <button
            type="button"
            className="toggleLangBtn justify-left inline-flex w-28 cursor-pointer items-center rounded-lg bg-lightGrayish px-4 py-2 text-base text-dark transition duration-300 hover:text-primary-800 focus:outline-none dark:bg-dark dark:text-white dark:hover:text-primary-300"
          >
            <div className="inline-flex items-center space-x-2 [&>img]:h-4 [&>img]:w-4">
              {currLang === LOCALS.EN && (
                <img src={engFlag} alt={t('langList.english.imgAltText')} />
              )}
              {currLang === LOCALS.PL && (
                <img src={plFlag} alt={t('langList.polish.imgAltText')} />
              )}
              {currLang === LOCALS.SP && (
                <img src={spFlag} alt={t('langList.spanish.imgAltText')} />
              )}
              <span className="group-hover:text-primary-800 group-hover:dark:text-primary-300">
                {currLang === LOCALS.EN && t('langList.english.text')}
                {currLang === LOCALS.PL && t('langList.polish.text')}
                {currLang === LOCALS.SP && t('langList.spanish.text')}
              </span>
            </div>
          </button>

          <LangList isOpen={isOpenLangMenu}>
            <>
              <Lang
                src={engFlag}
                translatePath="langList.english"
                t={t}
                onClick={() => changeLangHandler(LOCALS.EN)}
              />

              <Lang
                src={plFlag}
                translatePath="langList.polish"
                t={t}
                onClick={() => changeLangHandler(LOCALS.PL)}
              />

              <Lang
                src={spFlag}
                translatePath="langList.spanish"
                t={t}
                onClick={() => changeLangHandler(LOCALS.SP)}
              />
            </>
          </LangList>
        </div>

        <div className="flex items-center justify-center space-x-4 md:hidden">
          <div className="relative flex items-center justify-center md:hidden">
            <button
              type="button"
              className="toggleLangBtn justify-left inline-flex w-28 cursor-pointer items-center rounded-lg bg-lightGrayish px-4 py-2 text-base text-dark transition duration-300 hover:text-primary-800 focus:outline-none dark:bg-dark dark:text-white dark:hover:text-primary-300"
            >
              <div className="inline-flex items-center space-x-2 [&>img]:h-4 [&>img]:w-4">
                {currLang === LOCALS.EN && (
                  <img src={engFlag} alt={t('langList.english.imgAltText')} />
                )}
                {currLang === LOCALS.PL && (
                  <img src={plFlag} alt={t('langList.polish.imgAltText')} />
                )}
                {currLang === LOCALS.SP && (
                  <img src={spFlag} alt={t('langList.spanish.imgAltText')} />
                )}
                <span className="group-hover:text-primary-800 group-hover:dark:text-primary-300">
                  {currLang === LOCALS.EN && t('langList.english.text')}
                  {currLang === LOCALS.PL && t('langList.polish.text')}
                  {currLang === LOCALS.SP && t('langList.spanish.text')}
                </span>
              </div>
            </button>

            <LangList isOpen={isOpenLangMenu}>
              <>
                <Lang
                  src={engFlag}
                  translatePath="langList.english"
                  t={t}
                  onClick={() => changeLangHandler(LOCALS.EN)}
                />

                <Lang
                  src={plFlag}
                  translatePath="langList.polish"
                  t={t}
                  onClick={() => changeLangHandler(LOCALS.PL)}
                />

                <Lang
                  src={spFlag}
                  translatePath="langList.spanish"
                  t={t}
                  onClick={() => changeLangHandler(LOCALS.SP)}
                />
              </>
            </LangList>
          </div>

          <Hamburger
            isOpen={isOpenMobileMenu}
            setIsOpen={setIsOpenMobileMenu}
          />
        </div>

        <MobileNav isOpen={false} t={t} />
      </div>
    </nav>
  );
}

export default PageNav;
