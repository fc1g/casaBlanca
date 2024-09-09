import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import Link from '../../components/Link/Link';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Title from '../Title/Title';

import useGlobal from '../../hooks/useGlobal';
import { getPlace } from '../../services/apiVicinity';
import LeafMap from '../LeafMap/LeafMap';
import Api from '../../services/Api';

function Place() {
  const { vicinityId } = useParams() as { vicinityId: string };
  const { t, currLang } = useGlobal()!;

  const {
    isPending,
    error,
    data: place,
  } = useQuery({
    queryKey: [`${vicinityId}`],
    queryFn: () => getPlace(vicinityId),
  });

  return (
    <>
      {isPending && <Loader />}
      {error && <ErrorMessage errorMessage={error.message} />}
      {place && (
        <div className="px-4 text-center 2xl:container sm:px-6 lg:px-12 2xl:mx-auto">
          <div className="my-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <img
              className="h-64 w-full object-cover object-center md:h-96"
              src={`${Api.UPLOAD_URL}${place.img}`}
              alt={place.info.imgAlt[currLang]}
            />

            <div className="flex flex-col">
              <Title title={place.info.title[currLang]} subtitle="" />
              <p className="mb-3 text-dark lg:mb-6 dark:text-white">
                {place.info.text[currLang]}
              </p>

              <div className="flex items-center justify-center border-primary-800 text-primary-800 dark:border-primary-300 dark:text-primary-300">
                <Link href={place.routeLink}>
                  <>{t('place.route')} &rarr;</>
                </Link>
              </div>
            </div>
          </div>

          <LeafMap coords={place.coords} title={place.info.title} />
        </div>
      )}
    </>
  );
}

export default Place;
