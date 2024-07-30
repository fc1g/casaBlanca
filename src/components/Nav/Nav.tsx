import { NavLink } from 'react-router-dom';
import useGlobal from '../../hooks/globalStore';

function Nav() {
  const useTranslation = useGlobal(store => store.useTranslation);
  const { t } = useTranslation();

  return (
    <ul className="nav hidden items-center justify-center space-x-8 rounded-lg bg-lightGrayish px-5 py-2 text-dark md:flex dark:bg-dark dark:text-white">
      <li className="group">
        <NavLink
          className="px-2 transition duration-300 group-hover:text-primary-800 group-hover:dark:text-primary-300"
          to="/"
        >
          {t('page.navigation.home')}
        </NavLink>
      </li>

      <li className="group">
        <NavLink
          className="px-2 transition duration-300 group-hover:text-primary-800 group-hover:dark:text-primary-300"
          to="/about"
        >
          {t('page.navigation.about')}
        </NavLink>
      </li>

      <li className="group">
        <NavLink
          className="px-2 transition duration-300 group-hover:text-primary-800 group-hover:dark:text-primary-300"
          to="/vicinity?page=1"
        >
          {t('page.navigation.vicinity')}
        </NavLink>
      </li>

      <li className="group">
        <NavLink
          className="px-2 transition duration-300 group-hover:text-primary-800 group-hover:dark:text-primary-300"
          to="/cta"
        >
          {t('page.navigation.contacts')}
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
