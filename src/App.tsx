/* eslint-disable import/no-extraneous-dependencies */
import './lib/i18n/i18n';

import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function App() {
  const { t } = useTranslation();

  return <h1>{t('Hello world')}</h1>;
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
