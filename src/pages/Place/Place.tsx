import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import Link from '../../components/Link/Link';
import Loader from '../../ui/Loader/Loader';
import ErrorMessage from '../../ui/ErrorMessage/ErrorMessage';
import Title from '../../ui/Title/Title';

import useGlobal from '../../hooks/useGlobal';
import { getPlace } from '../../services/apiVicinity';
import LeafMap from '../../ui/LeafMap/LeafMap';
import Api from '../../services/Api';
import Page from '../../ui/Page/Page';

function Place() {
  const { placeId } = useParams() as { placeId: string };
  const { t, currLang } = useGlobal()!;

  const {
    isPending,
    error,
    data: place,
  } = useQuery({
    queryKey: [`${placeId}`],
    queryFn: () => getPlace(placeId),
  });

  return (
    <Page logoStyles="dark:text-white text-dark" navStyles="relative mb-6">
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
    </Page>
  );
}

export default Place;
