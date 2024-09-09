import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Btn from '../Btn/Btn';
import { VicinityPlace } from '../../types/VcinityPlace';
import useGlobal from '../../hooks/useGlobal';
import Api from '../../services/Api';

type CardProps = {
  place: VicinityPlace;
};

function Card({ place }: CardProps) {
  const { t, currLang } = useGlobal()!;

  return (
    <li className="w-full rounded-lg border border-gray-200 bg-lightGrayish shadow dark:border-lightDark dark:bg-dark">
      <div>
        <img
          className="h-72 w-full rounded-t-lg object-cover object-center"
          src={`${Api.UPLOAD_URL}${place.img}`}
          alt={place.info.imgAlt[currLang]}
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark dark:text-white">
          {place.info.title[currLang]}
        </h5>

        <p className="mb-3 font-normal text-gray-600 dark:text-gray-300">
          {place.info.briefInfo[currLang]}
        </p>

        <Link to={`/vicinity/${place._id}`}>
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
    </li>
  );
}

export default Card;
