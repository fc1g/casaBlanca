/* eslint-disable import/no-extraneous-dependencies */
import { createContext, Dispatch, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next, { i18n } from 'i18next';
import '../lib/i18n/i18n';

import LOCALS from '../lib/i18n/constants';
import { T } from '../types/T';
import Children from '../types/Children';

type GlobalContextProps = {
  LOCALS: typeof LOCALS;
  i18next: i18n;
  currLang: string;
  setCurrLang: Dispatch<string>;
  changeLangHandler: (lang: string) => void;
} & T;

export const GlobalContext = createContext<GlobalContextProps | null>(null);

function GlobalProvider({ children }: Children) {
  const [currLang, setCurrLang] = useState(LOCALS.EN);
  const { t } = useTranslation();

  function changeLangHandler(lang: string) {
    setCurrLang(currLang !== lang ? lang : currLang);
    i18next.changeLanguage(lang);
  }

  return (
    <GlobalContext.Provider
      value={{
        i18next,
        LOCALS,
        currLang,
        setCurrLang,
        changeLangHandler,
        t,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
