import { Dispatch } from 'react';
import './Hamburger.css';

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}

function Hamburger({ isOpen, setIsOpen }: HamburgerProps) {
  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={`hamburger z-[99999999] block md:hidden ${isOpen ? 'open' : ''}`}
    >
      <span className="hamburger-top" />
      <span className="hamburger-middle" />
      <span className="hamburger-bottom" />
      <span className="sr-only">Mobile menu</span>
    </button>
  );
}

export default Hamburger;
