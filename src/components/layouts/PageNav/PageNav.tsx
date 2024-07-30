import { useEffect, useState } from 'react';

import Nav from '../../Nav/Nav';
import MobileNav from '../../MobileNav/MobileNav';
import Logo from '../../Logo/Logo';
import Hamburger from '../../Hamburger/Hamburger';

import engFlag from '/flags/united-kingdom.webp';
import plFlag from '/flags/poland.webp';
import spFlag from '/flags/spain.webp';
import LangMenu from '../LangMenu/LangMenu';
import useGlobal from '../../../hooks/globalStore';
import { Langs } from '../../../types/Langs';

type PageNavProps = {
  pageStyles?: string;
  logoStyles: string;
};

function PageNav({ pageStyles = '', logoStyles = '' }: PageNavProps) {
  const setCurrLang = useGlobal(store => store.setCurrLang);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const flags: {
    engFlag: string;
    plFlag: string;
    spFlag: string;
  } = {
    engFlag,
    plFlag,
    spFlag,
  };

  useEffect(() => {
    const data = localStorage.getItem('i18nextLng') as Langs;
    if (!data) return;

    setCurrLang(data);
  }, [setCurrLang]);

  return (
    <nav
      className={`2xl:container 2xl:mx-auto ${pageStyles || 'absolute inset-x-0 top-0 z-[999999]'}`}
    >
      <div className="flex items-center justify-between p-4">
        <Logo className={logoStyles} />

        <Nav />

        <LangMenu flags={flags} />

        <div className="flex items-center justify-center space-x-4 md:hidden">
          <LangMenu flags={flags} />

          <Hamburger
            isOpen={isOpenMobileMenu}
            setIsOpen={setIsOpenMobileMenu}
          />
        </div>

        <MobileNav isOpen={isOpenMobileMenu} />
      </div>
    </nav>
  );
}

export default PageNav;
