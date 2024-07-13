/* eslint-disable import/no-extraneous-dependencies */
import './lib/i18n/i18n';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NotFound from './pages/NotFound';
import Homepage from './pages/Homepage/Homepage';

export function App() {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route index element={<Homepage t={t} />} />

      <Route path="*" element={<NotFound t={t} />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
