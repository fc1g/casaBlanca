import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import T from '../../types/T';
import Btn from '../Btn/Btn';
import VicinityPlace from '../../types/VcinityPlace';

interface CardProps extends T {
  data: VicinityPlace;
}

function Card({ t, data }: CardProps) {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-lightGrayish shadow dark:border-lightDark dark:bg-dark">
      <div>
        <img
          className="w-full rounded-t-lg"
          src={data.imgSource}
          alt={data.info.imgAlt.eng}
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark dark:text-white">
          {data.info.title.eng}
        </h5>

        <p className="mb-3 font-normal text-gray-600 dark:text-gray-300">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
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
