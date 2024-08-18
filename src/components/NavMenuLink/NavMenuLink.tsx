import { NavLink } from 'react-router-dom';
import Children from '../../types/Children';

type NavMenuLinkProps = {
  to: string;
  setIsOpen?: () => void;
} & Children;

function NavMenuLink({ to, children, setIsOpen = () => {} }: NavMenuLinkProps) {
  return (
    <li className="group rounded px-3 py-3 md:p-0">
      <NavLink
        onClick={setIsOpen}
        className="block px-2 transition duration-300 group-hover:text-primary-800 group-hover:dark:text-primary-300"
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavMenuLink;
