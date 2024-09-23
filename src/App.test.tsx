import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { Suspense } from 'react';
import App from './App';

import GlobalProvider from './context/globalContext';
import Loader from './ui/Loader/Loader';

describe('App', () => {
  it('should render notFound page if landing on a bad page', async () => {
    /* Arrange */
    const badRoute = '/this-route-does-not-exist';

    /* Act */
    render(
      <MemoryRouter initialEntries={[badRoute]}>
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
      </MemoryRouter>
    );

    /* Assert */
    expect(screen.queryByText(/Loading/gi)).toBeInTheDocument();

    expect(
      await screen.findByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/404/gi);
  });

  it('should render homepage', async () => {
    /* Arrange */

    /* Act */
    render(
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

    /* Assert */
    expect(screen.queryByText(/Loading/gi)).toBeInTheDocument();

    expect(
      await screen.findByRole('heading', {
        level: 1,
      })
    ).toBeInTheDocument();
  });
});
