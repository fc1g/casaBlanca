import useGlobal from '../../hooks/useGlobal';

import LangList from '../LangList/LangList';

import engFlag from '../../assets/images/flags/united-kingdom.webp';
import plFlag from '../../assets/images/flags/poland.webp';
import spFlag from '../../assets/images/flags/spain.webp';

function LangMenu() {
  const { t, LOCALS, currLang } = useGlobal()!;

  return (
    <div className="relative flex items-center justify-center">
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

      <LangList />
    </div>
  );
}

export default LangMenu;
