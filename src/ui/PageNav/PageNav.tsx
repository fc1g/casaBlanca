import { useState } from 'react';

import Logo from '../../components/Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import Hamburger from '../../components/Hamburger/Hamburger';
import SocialList from '../SocialList/SocialList';
import LangMenu from '../LangMenu/LangMenu';

type PageNavProps = {
  logoStyles: string;
  navStyles: string;
};

function PageNav({ logoStyles, navStyles }: PageNavProps) {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  return (
    <nav
      className={`${navStyles || 'absolute inset-x-0 top-0 z-[999999]'} 2xl:container 2xl:mx-auto`}
    >
      <div className="flex items-center justify-between p-4 lg:px-6">
        <Logo logoStyles={logoStyles} />

        <NavMenu className="hidden items-center justify-center space-x-8 px-5 py-2 text-dark md:flex dark:bg-dark dark:text-white" />

        <div className="flex items-center justify-center space-x-4">
          <LangMenu />

          <div className="md:hidden">
            <Hamburger
              isOpen={isOpenMobileMenu}
              setIsOpen={setIsOpenMobileMenu}
            />
          </div>
        </div>

        <div
          className={`${isOpenMobileMenu ? 'absolute inset-x-0 top-0 z-[99999] mt-12' : 'hidden'}`}
        >
          <NavMenu
            setIsOpenMobileMenu={() => setIsOpenMobileMenu(false)}
            className="mt-4 flex w-full flex-col border border-gray-100 p-4 font-medium text-lightDark md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-lightDark dark:text-gray-300 [&>lin]:w-full"
          >
            <SocialList />
          </NavMenu>
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
