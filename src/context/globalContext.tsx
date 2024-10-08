/* eslint-disable import/no-extraneous-dependencies */
import { createContext, Dispatch, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next, { i18n } from 'i18next';
import '../lib/i18n/i18n';

import LOCALS from '../lib/i18n/constants';
import { T } from '../types/T';
import Children from '../types/Children';
import { Langs } from '../types/Langs';

type GlobalContextProps = {
  LOCALS: typeof LOCALS;
  i18next: i18n;
  currLang: Langs;
  setCurrLang: Dispatch<Langs>;
} & T;

export const GlobalContext = createContext<GlobalContextProps | null>(null);

function GlobalProvider({ children }: Children) {
  const [currLang, setCurrLang] = useState(
    (i18next.language as Langs) || LOCALS.EN
  );
  const { t } = useTranslation();

  return (
    <GlobalContext.Provider
      value={{
        i18next,
        LOCALS,
        currLang,
        setCurrLang,
        t,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
