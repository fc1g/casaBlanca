import { useState } from 'react';
import useGlobal from '../../hooks/useGlobal';

import Lang from '../../components/Lang/Lang';

import { Langs } from '../../types/Langs';
import engFlag from '../../assets/images/flags/united-kingdom.webp';
import plFlag from '../../assets/images/flags/poland.webp';
import spFlag from '../../assets/images/flags/spain.webp';

function LangList() {
  const [isOpenLangMenu, setIsOpenLangMenu] = useState(false);
  const { i18next, LOCALS, setCurrLang } = useGlobal()!;

  function onLangBtnClick(lang: Langs) {
    i18next.changeLanguage(lang);
    setCurrLang(lang);
    setIsOpenLangMenu(false);
  }

  document.body.addEventListener('click', e => {
    setIsOpenLangMenu(
      (e.target as HTMLButtonElement).closest('.toggleLangBtn')
        ? !isOpenLangMenu
        : isOpenLangMenu !== false && false
    );
  });

  document.body.addEventListener('keydown', e => {
    if (isOpenLangMenu) return;
    setIsOpenLangMenu(e.key === 'Escape' && false);
  });

  return (
    <ul
      className={`absolute top-[125%] z-[999999] transition-opacity duration-300 ${isOpenLangMenu ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} rounded-lg bg-gray-300 px-4 text-dark dark:bg-dark dark:text-white`}
    >
      <Lang
        src={engFlag}
        translatePath="langList.english"
        onClick={() => onLangBtnClick(LOCALS.EN)}
      />

      <Lang
        src={plFlag}
        translatePath="langList.polish"
        onClick={() => onLangBtnClick(LOCALS.PL)}
      />

      <Lang
        src={spFlag}
        translatePath="langList.spanish"
        onClick={() => onLangBtnClick(LOCALS.SP)}
      />
    </ul>
  );
}

export default LangList;
