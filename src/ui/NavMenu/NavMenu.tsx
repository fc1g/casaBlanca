import useGlobal from '../../hooks/useGlobal';

import NavMenuLink from '../../components/NavMenuLink/NavMenuLink';

type NavMenuProps = {
  className: string;
  children?: React.JSX.Element | string;
  setIsOpenMobileMenu?: () => void;
};

function NavMenu({ children, className, setIsOpenMobileMenu }: NavMenuProps) {
  const { t } = useGlobal()!;

  return (
    <ul className={`nav rounded-lg bg-lightGrayish ${className}`}>
      <NavMenuLink setIsOpen={setIsOpenMobileMenu} to="/">
        {t('page.navigation.home')}
      </NavMenuLink>

      <NavMenuLink setIsOpen={setIsOpenMobileMenu} to="/about">
        {t('page.navigation.about')}
      </NavMenuLink>

      <NavMenuLink setIsOpen={setIsOpenMobileMenu} to="/vicinity?page=1">
        {t('page.navigation.vicinity')}
      </NavMenuLink>

      <NavMenuLink setIsOpen={setIsOpenMobileMenu} to="/contacts">
        {t('page.navigation.contacts')}
      </NavMenuLink>

      {children && <li>{children}</li>}
    </ul>
  );
}

export default NavMenu;
