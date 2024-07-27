import SocialList from '../SocialList/SocialList';
import Link from '../../Link/Link';

import config from '../../../utils/config';
import useGlobal from '../../../hooks/useGlobal';

function Footer() {
  const { t } = useGlobal()!;

  return (
    <footer className="mb-2 mt-8 flex-col items-center justify-center py-4 text-xs text-gray-600 sm:px-0 sm:text-sm lg:text-base dark:bg-dark dark:text-white">
      <div className="border-primary-600 text-center dark:border-primary-300">
        &copy; {config.CUR_DATE.getFullYear()} casaBlanca.{' '}
        {t('page.copyrights')}{' '}
        <Link
          className="text-primary-600 dark:text-primary-300"
          href="https://react.dev/"
        >
          React
        </Link>{' '}
        &{' '}
        <Link
          className="text-primary-600 dark:text-primary-300"
          href="https://tailwindcss.com/"
        >
          Tailwind CSS
        </Link>
        <SocialList />
      </div>
    </footer>
  );
}

export default Footer;
