import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import useData from '../../../hooks/useData';
import VicinityPlace from '../../../types/VcinityPlace';
import Loader from '../../Loader/Loader';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import T from '../../../types/T';
import Page from '../Page/Page';
import Title from '../../Title/Title';
import LeafMap from '../LeafMap/LeafMap';
import Link from '../../Link/Link';

function Place({ t }: T) {
  const { id } = useParams() as { id: string };
  const { data, isLoading, error } = useData<{
    vicinityPlace: VicinityPlace;
  }>(`vicinity/${id}`);
  const wrapper = useRef<HTMLDivElement>(null);

  return (
    <Page
      t={t}
      pageStyles="relative mb-12"
      logoStyles="dark:text-white text-dark"
      wrapper={wrapper}
    >
      <>
        {isLoading && <Loader />}
        {error && <ErrorMessage errorMessage={error} t={t} />}
        {data?.vicinityPlace && (
          <div className="text-center">
            <Title title={data.vicinityPlace.info.title.eng} subtitle="" />
            <div className="my-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              <img
                className="h-96 w-full object-cover object-center"
                src={data.vicinityPlace.imgSource}
                alt={data.vicinityPlace.info.imgAlt.eng}
              />

              <div className="flex flex-col gap-4">
                <p className="text-dark dark:text-white">
                  {data.vicinityPlace.info.text.eng}
                </p>

                <div className="flex items-center justify-center border-primary-800 text-primary-800 dark:border-primary-300 dark:text-primary-300">
                  <Link href={data.vicinityPlace.routeLink}>
                    Generate route &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* TODO: Change wrong coords on correct with leaf map */}
            <LeafMap data={data.vicinityPlace} t={t} />
          </div>
        )}
      </>
    </Page>
  );
}

export default Place;
