import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import { useQuery } from '@tanstack/react-query';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Card from '../../components/Card/Card';
import useGlobal from '../../hooks/useGlobal';
import { getAllPlaces } from '../../services/apiVicinity';

type VicinityContentProps = {
  currPage: number;
  queryStr: string;
  limit: number | null;
  navHandler: (searchString: string, type: 'sort' | 'limit' | 'page') => void;
};

function VicinityContent({
  currPage,
  queryStr,
  limit,
  navHandler,
}: VicinityContentProps) {
  const { t } = useGlobal()!;

  const { isPending, error, data } = useQuery({
    queryKey: [`vicinity${queryStr}`],
    queryFn: () => getAllPlaces(queryStr),
  });

  return (
    <>
      {isPending && <Loader />}
      {error && <ErrorMessage errorMessage={error.message} />}
      {data?.places && (
        <>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.places.map(place => (
              <Card key={place._id} place={place} />
            ))}
          </div>

          <div className="mb-16 mt-8 flex items-center justify-center">
            <button
              disabled={currPage === 1}
              onClick={() => {
                navHandler(`${currPage - 1}`, 'page');
                window.scroll({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              type="button"
              className="rounded-l-md border-r border-gray-100 bg-lightGrayish px-3 py-2 text-dark dark:bg-dark dark:text-white"
            >
              <div className="flex items-center">
                <ArrowLeftIcon className="mr-2 w-5" />
                <p className="ml-2">{t('vicinity.btns.prev')}</p>
              </div>
            </button>

            <button
              disabled={currPage * (limit || 6) > data.results}
              onClick={() => {
                navHandler(`${currPage + 1}`, 'page');
                window.scroll({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              type="button"
              className="rounded-r-md border-l border-gray-100 bg-lightGrayish px-3 py-2 text-dark dark:bg-dark dark:text-white"
            >
              <div className="flex items-center">
                <span className="mr-2">{t('vicinity.btns.next')}</span>
                <ArrowRightIcon className="ml-2 w-5" />
              </div>
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default VicinityContent;
