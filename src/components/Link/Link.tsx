import Children from '../../types/Children';

type LinkProps = {
  href: string;
  className?: string;
  onClick?: () => void;
} & Children;

function Link({
  href,
  children,
  className = 'text-inherit',
  onClick = () => {},
}: LinkProps) {
  return (
    <div className="group inline-block border-inherit">
      <a
        onClick={onClick}
        target="blank"
        href={href}
        className={className}
        rel="noreferrer"
      >
        {children}
      </a>
      <div className="mx-2 border-b border-transparent transition duration-300 group-hover:border-inherit" />
    </div>
  );
}

export default Link;
