import { Link } from 'react-router-dom';

type LogoProps = {
  logoStyles: string;
};

function Logo({ logoStyles }: LogoProps) {
  return (
    <Link className={logoStyles} to="/">
      <span className="text-xl focus:outline-none focus:ring-4 focus:ring-blue-300 xs:text-3xl md:text-4xl focus:dark:ring-blue-800">
        casaBlanca
      </span>
    </Link>
  );
}

export default Logo;
