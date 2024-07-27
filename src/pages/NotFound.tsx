import { Link } from 'react-router-dom';
import useGlobal from '../hooks/useGlobal';

function NotFound() {
  const { t } = useGlobal()!;

  return (
    <section className="h-screen w-full bg-lightGrayish dark:bg-dark">
      <div className="flex h-full items-center justify-center px-4 py-8 lg:px-6 lg:py-16">
        <div className="text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary-600 lg:text-9xl dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-dark md:text-4xl dark:text-white">
            {t('page.notFound.missing')}
          </p>
          <p className="mb-4 text-lg font-light text-gray-600 dark:text-gray-300">
            {t('page.notFound.info')}
          </p>
          <Link
            to="/"
            className="my-4 inline-flex rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            {t('page.notFound.back')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
