/* eslint-disable import/no-extraneous-dependencies */
import './lib/i18n/i18n';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NotFound from './pages/NotFound';
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Vicinity from './pages/Vicinity/Vicinity';
import Contacts from './pages/Contacts/Contacts';
import Place from './components/layouts/Place/Place';

export function App() {
  const { t } = useTranslation();

  return (
    <Routes>
      <Route index element={<Homepage t={t} />} />

      <Route path="about" element={<About t={t} />} />

      <Route path="vicinity" element={<Vicinity t={t} />}>
        <Route index element={<Navigate to="?page=1" />} />
        <Route path="?page=1" />
      </Route>

      <Route path="place/:id" element={<Place t={t} />} />

      <Route path="cta" element={<Contacts t={t} />} />

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
