import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { lazy, Suspense } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Loader from './ui/Loader/Loader';

import GlobalProvider from './context/globalContext';
import Page from './ui/Page/Page';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const About = lazy(() => import('./pages/About/About'));
const Vicinity = lazy(() => import('./pages/Vicinity/Vicinity'));
const Place = lazy(() => import('./ui/Place/Place'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route
        path="/vicinity"
        element={
          <Page
            logoStyles="dark:text-white text-dark"
            navStyles="relative mb-6"
          >
            <Outlet />
          </Page>
        }
      >
        <Route index element={<Vicinity />} />
        <Route path=":vicinityId" element={<Place />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalProvider>
        <Suspense
          fallback={
            <div className="flex min-h-screen w-full items-center justify-center">
              <Loader />
            </div>
          }
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Suspense>
      </GlobalProvider>
    </QueryClientProvider>
  );
}
