/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand';
import i18next, { i18n } from 'i18next';
import { useTranslation } from 'react-i18next';
import '../lib/i18n/i18n';

import LOCALS from '../lib/i18n/constants';
import { Langs } from '../types/Langs';

type State = {
  LOCALS: typeof LOCALS;
  i18next: i18n;
  currLang: Langs;
  useTranslation: typeof useTranslation;
};
type Action = {
  setCurrLang: (lang: Langs) => void;
};

const useGlobal = create<State & Action>()(set => ({
  i18next,
  LOCALS,
  useTranslation,
  currLang: (i18next.language as Langs) || LOCALS.EN,
  setCurrLang: (lang: Langs) =>
    set(state => ({
      currLang: state.currLang !== lang ? lang : state.currLang,
    })),
}));

export default useGlobal;
