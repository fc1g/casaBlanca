import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Btn from '../Btn/Btn';
import { Lang, VicinityPlace } from '../../types/VcinityPlace';
import useGlobal from '../../hooks/useGlobal';

type CardProps = {
  data: VicinityPlace;
};

function Card({ data }: CardProps) {
  const { t, i18next } = useGlobal()!;

  const currLang = i18next.language as keyof Lang;

  return (
    <div className="w-full rounded-lg border border-gray-200 bg-lightGrayish shadow dark:border-lightDark dark:bg-dark">
      <div>
        <img
          className="h-80 w-full rounded-t-lg object-cover object-center"
          src={data.imgSource}
          alt={data.info.imgAlt[currLang]}
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark dark:text-white">
          {data.info.title[currLang]}
        </h5>

        <p className="mb-3 font-normal text-gray-600 dark:text-gray-300">
          {data.info.briefInfo[currLang]}
        </p>

        <Link to={`/place/${data._id}`}>
          <Btn
            size="default"
            variant="default"
            className="flex items-center justify-center"
          >
            {t('homepage.btn')}{' '}
            <ArrowRightIcon className="ms-2 h-3.5 w-3.5 rtl:rotate-180" />
          </Btn>
        </Link>
      </div>
    </div>
  );
}

export default Card;
