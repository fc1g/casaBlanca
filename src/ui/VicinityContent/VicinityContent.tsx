import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { getAllPlaces } from '../../services/apiVicinity';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import OcolicaNavBtn from '../../components/VicinityNavBtn/VicinityNavBtn';

export default function OcolicaPlaces() {
  const [search, setSearch] = useSearchParams({
    page: '1',
  });
  const { isPending, error, data } = useQuery({
    queryKey: [`vicinity?${search.toString()}`],
    queryFn: () => getAllPlaces(`?${search.toString()}`),
  });
  const currPage = search.get('page')!;

  function paginationHandler(searchParam: number) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    search.set('page', `${searchParam}`);
    setSearch(search, {
      replace: true,
    });
  }

  return (
    <>
      {isPending && <Loader />}
      {error && <ErrorMessage errorMessage={error.message} />}
      {data?.places && (
        <>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.places.map(place => (
              <Card key={place._id} place={place} />
            ))}
          </ul>

          <div className="mt-8 flex items-center justify-center">
            <OcolicaNavBtn
              disabled={currPage === '1'}
              onClick={() => paginationHandler(+currPage - 1)}
              type="prev"
            />

            <OcolicaNavBtn
              disabled={
                +currPage * (+search.get('limit')! || 6) >= data.results
              }
              onClick={() => paginationHandler(+currPage + 1)}
              type="next"
            />
          </div>
        </>
      )}
    </>
  );
}
