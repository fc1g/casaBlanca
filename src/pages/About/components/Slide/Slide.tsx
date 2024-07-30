import useGlobal from '../../../../hooks/globalStore';
import { Source } from '../../../../types/Images';

type SlideProps = {
  alt: string;
  percentage: number;
} & Source;

function Slide({ source, alt, percentage }: SlideProps) {
  const useTranslation = useGlobal(store => store.useTranslation);
  const { t } = useTranslation();
  return (
    <li
      className="transtion absolute top-0 grid h-screen w-full items-center justify-center duration-1000"
      style={{
        transform: `translateX(${percentage}%)`,
      }}
    >
      <picture>
        <source media="(max-width: 720px)" srcSet={source.mobile} />
        <img
          className="h-full w-full object-cover object-center dark:brightness-75"
          src={source.desktop}
          alt={t(`${alt}`)}
        />
      </picture>
    </li>
  );
}

export default Slide;
