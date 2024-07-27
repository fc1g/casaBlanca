import Link from '../Link/Link';

type SocialProps = {
  href: string;
  icon: string;
  desc: string;
};

function Social({ href, icon, desc }: SocialProps) {
  return (
    <li className="border-transparent">
      <Link
        className="duratin-300 fill-gray-600 transition hover:fill-dark dark:fill-gray-400 dark:hover:fill-white"
        href={href}
      >
        <>
          <svg className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6">
            <use xlinkHref={icon}>&nbsp;</use>
          </svg>

          <span className="sr-only">{desc}</span>
        </>
      </Link>
    </li>
  );
}

export default Social;
