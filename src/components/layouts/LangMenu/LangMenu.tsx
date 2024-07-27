import { useState } from 'react';
import useGlobal from '../../../hooks/useGlobal';
import Lang from '../../Lang/Lang';
import LangList from '../LangList/LangList';

type LangMenuProps = {
  flags: {
    engFlag: string;
    plFlag: string;
    spFlag: string;
  };
};

function LangMenu({ flags }: LangMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { LOCALS, currLang, t, changeLangHandler } = useGlobal()!;

  function onLangBtnClick(lang: string) {
    changeLangHandler(lang);
    setIsOpen(false);
  }

  document.body.addEventListener('click', e => {
    setIsOpen(
      (e.target as HTMLButtonElement).closest('.toggleLangBtn')
        ? !isOpen
        : isOpen !== false && false
    );
  });

  document.body.addEventListener('keydown', e => {
    if (isOpen) return;
    setIsOpen(e.key === 'Escape' && false);
  });

  return (
    <div className="relative hidden items-center justify-center md:flex">
      <button
        type="button"
        className="toggleLangBtn justify-left inline-flex w-28 cursor-pointer items-center rounded-lg bg-lightGrayish px-4 py-2 text-base text-dark transition duration-300 hover:text-primary-800 focus:outline-none dark:bg-dark dark:text-white dark:hover:text-primary-300"
      >
        <div className="inline-flex items-center space-x-2 [&>img]:h-4 [&>img]:w-4">
          {currLang === LOCALS.EN && (
            <img src={flags.engFlag} alt={t('langList.english.imgAltText')} />
          )}
          {currLang === LOCALS.PL && (
            <img src={flags.plFlag} alt={t('langList.polish.imgAltText')} />
          )}
          {currLang === LOCALS.SP && (
            <img src={flags.spFlag} alt={t('langList.spanish.imgAltText')} />
          )}
          <span className="group-hover:text-primary-800 group-hover:dark:text-primary-300">
            {currLang === LOCALS.EN && t('langList.english.text')}
            {currLang === LOCALS.PL && t('langList.polish.text')}
            {currLang === LOCALS.SP && t('langList.spanish.text')}
          </span>
        </div>
      </button>

      <LangList isOpen={isOpen}>
        <>
          <Lang
            src={flags.engFlag}
            translatePath="langList.english"
            onClick={() => onLangBtnClick(LOCALS.EN)}
          />

          <Lang
            src={flags.plFlag}
            translatePath="langList.polish"
            onClick={() => onLangBtnClick(LOCALS.PL)}
          />

          <Lang
            src={flags.spFlag}
            translatePath="langList.spanish"
            onClick={() => onLangBtnClick(LOCALS.SP)}
          />
        </>
      </LangList>
    </div>
  );
}

export default LangMenu;
