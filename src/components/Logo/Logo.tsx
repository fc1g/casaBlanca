import { Link } from 'react-router-dom';

interface LogoProps {
  className: string;
}

/* eslint-disable no-restricted-globals */
function Logo({ className }: LogoProps) {
  return (
    <Link to="/">
      <span className={`text-xl xs:text-3xl md:text-4xl ${className}`}>
        casaBlanca
      </span>
    </Link>
  );
}

export default Logo;
