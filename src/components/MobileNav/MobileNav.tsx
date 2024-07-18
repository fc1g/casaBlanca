import { NavLink } from 'react-router-dom';
import SocialList from '../layouts/SocialList/SocialList';
import T from '../../types/T';

interface MobileNavProps extends T {
  isOpen: boolean;
}

function MobileNav({ isOpen, t }: MobileNavProps) {
  return (
    <div
      className={`${isOpen ? 'absolute inset-x-0 top-0 z-[99999] mt-12 flex' : 'hidden'}`}
    >
      <ul className="nav mt-4 flex w-full flex-col rounded-lg border border-gray-100 bg-lightGrayish p-4 font-medium text-lightDark md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-lightDark dark:text-gray-300 [&>lin]:w-full">
        <li className="group block rounded px-3 py-3 md:p-0">
          <NavLink
            className="px-2 transition duration-300 group-hover:text-primary-800 group-hover:dark:text-primary-300"
            to="/"
          >
            {t('page.navigation.home')}
          </NavLink>
        </li>

        <li className="group block rounded px-3 py-3 md:p-0">
          <NavLink
            className="px-2 transition duration-300 group-hover:text-primary-800 group-hover:dark:text-primary-300"
            to="/about"
          >
            {t('page.navigation.about')}
          </NavLink>
        </li>

        <li className="group block rounded px-3 py-3 md:p-0">
          <NavLink
            className="px-2 transition duration-300 group-hover:text-primary-800 group-hover:dark:text-primary-300"
            to="/vicinity?page=1"
          >
            {t('page.navigation.vicinity')}
          </NavLink>
        </li>

        <li className="group block rounded px-3 py-3 md:p-0">
          <NavLink
            className="px-2 transition duration-300 group-hover:text-primary-800 group-hover:dark:text-primary-300"
            to="/cta"
          >
            {t('page.navigation.contacts')}
          </NavLink>
        </li>

        <li>
          <SocialList />
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
