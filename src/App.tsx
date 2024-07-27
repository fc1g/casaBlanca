import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import GlobalProvider from './context/GlobalContext';
import VicinityProvider from './context/VIcinityContext';
import CalendarProvider from './context/CalendarContext';
import Loader from './components/Loader/Loader';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const About = lazy(() => import('./pages/About/About'));
const Vicinity = lazy(() => import('./pages/Vicinity/Vicinity'));
const Place = lazy(() => import('./pages/Place/Place'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const NotFound = lazy(() => import('./pages/NotFound'));

export function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />

      <Route path="about" element={<About />} />

      <Route
        path="vicinity"
        element={
          <VicinityProvider>
            <Vicinity />
          </VicinityProvider>
        }
      >
        <Route index element={<Navigate replace to="?page=1" />} />
        <Route path="?page=1" />
      </Route>

      <Route
        path="place/:id"
        element={
          <VicinityProvider>
            <Place />
          </VicinityProvider>
        }
      />

      <Route
        path="cta"
        element={
          <CalendarProvider>
            <Contacts />
          </CalendarProvider>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Suspense
          fallback={
            <div className="flex h-screen w-full items-center justify-center">
              <Loader />
            </div>
          }
        >
          <App />
        </Suspense>
      </GlobalProvider>
    </BrowserRouter>
  );
}
