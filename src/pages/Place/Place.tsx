import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Page from '../../components/layouts/Page/Page';
import Title from '../../components/Title/Title';
import LeafMap from '../../components/layouts/LeafMap/LeafMap';
import Link from '../../components/Link/Link';

import useVicinity from '../../hooks/useVicinity';
import useGlobal from '../../hooks/useGlobal';

import { REDUCER_STATE_STATUS } from '../../types/reducer';
import { Lang } from '../../types/VcinityPlace';

function Place() {
  const { t, i18next } = useGlobal()!;
  const { getPlace, currPlace, status, errorMessage } = useVicinity()!;
  const currLang = i18next.language as keyof Lang;
  const { id } = useParams() as { id: string };

  useEffect(() => {
    getPlace(id);
  }, [id, getPlace]);

  return (
    <Page pageStyles="relative mb-12" logoStyles="dark:text-white text-dark">
      <>
        {status === REDUCER_STATE_STATUS.LOADING && <Loader />}
        {status === REDUCER_STATE_STATUS.ERROR && (
          <ErrorMessage errorMessage={errorMessage} />
        )}
        {currPlace && currPlace.info && (
          <div className="px-3 text-center sm:px-6 lg:px-12">
            <div className="my-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <img
                className="h-64 w-full object-cover object-center md:h-96"
                src={currPlace.imgSource}
                alt={currPlace.info.imgAlt[currLang]}
              />

              <div className="flex flex-col">
                <Title title={currPlace.info.title[currLang]} subtitle="" />
                <p className="mb-3 text-dark lg:mb-6 dark:text-white">
                  {currPlace.info.text[currLang]}
                </p>

                <div className="flex items-center justify-center border-primary-800 text-primary-800 dark:border-primary-300 dark:text-primary-300">
                  <Link href={currPlace.routeLink!}>
                    <>{t('place.route')} &rarr;</>
                  </Link>
                </div>
              </div>
            </div>

            {/* TODO: Change wrong coords on correct with leaf map */}
            <LeafMap data={currPlace} />
          </div>
        )}
      </>
    </Page>
  );
}

export default Place;
