import { useParams } from 'react-router-dom';
import useData from '../../../hooks/useData';
import VicinityPlace from '../../../types/VcinityPlace';
import Loader from '../../Loader/Loader';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import T from '../../../types/T';
import Page from '../Page/Page';
import Title from '../../Title/Title';

function Place({ t }: T) {
  const { id } = useParams() as { id: string };
  const { data, isLoading, error } = useData<{
    vicinityPlace: VicinityPlace;
  }>(`vicinity/${id}`);
  return (
    <Page
      t={t}
      pageStyles="relative mb-12"
      logoStyles="dark:text-white text-dark"
    >
      <>
        {isLoading && <Loader />}
        {error && <ErrorMessage errorMessage={error} t={t} />}
        {data?.vicinityPlace && (
          <div className="text-center">
            <Title
              title={data.vicinityPlace.info.title.eng}
              subtitle={data.vicinityPlace.info.briefInfo.eng}
            />

            <div className="grid grid-cols-1 md:grid-cols-2">
              <img
                className="w-full"
                src={data.vicinityPlace.imgSource}
                alt={data.vicinityPlace.info.imgAlt.eng}
              />
              <p className="text-dark dark:text-white">
                {data.vicinityPlace.info.text.eng}
              </p>
            </div>
          </div>
        )}
      </>
    </Page>
  );
}

export default Place;
