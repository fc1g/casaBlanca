/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';

import Loader from '../../../components/Loader/Loader';
import Card from '../../../components/Card/Card';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

import useGlobal from '../../../hooks/globalStore';
import useVicinity from '../../../hooks/vicinityStore';

import STORE_STATE_STATUS from '../../../types/STORE_STATUS';

type VicinityContentProps = {
  searchParams: URLSearchParams;
  navHandler: (searchString: string, type: 'sort' | 'limit' | 'page') => void;
};

function VicinityContent({ searchParams, navHandler }: VicinityContentProps) {
  const useTranslation = useGlobal(store => store.useTranslation);
  const { t } = useTranslation();
  const status = useVicinity(store => store.status);
  const errorMessage = useVicinity(store => store.errorMessage);
  const vicinityPlaces = useVicinity(store => store.vicinityPlaces);
  const getAllPlaces = useVicinity(store => store.getAllPlaces);

  const queryStr: string = location.href.split('/vicinity')[1];
  const currPage = +searchParams.get('page')!;

  if (location.href.includes('vicinity'))
    document.body.style.paddingRight =
      status === STORE_STATE_STATUS.READY ? '0px' : '15px';

  useEffect(() => {
    getAllPlaces(queryStr);
  }, [queryStr, getAllPlaces]);
  return (
    <div>
      {status === STORE_STATE_STATUS.LOADING ? (
        <Loader />
      ) : status === STORE_STATE_STATUS.ERROR ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <main>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {vicinityPlaces ? (
              vicinityPlaces.map(place => <Card key={place._id} data={place} />)
            ) : (
              <ErrorMessage errorMessage={errorMessage} />
            )}
          </div>

          <div className="mb-16 mt-8 flex items-center justify-center">
            <button
              onClick={() =>
                navHandler(
                  `${currPage === 1 ? currPage : currPage - 1}`,
                  'page'
                )
              }
              type="button"
              className="rounded-l-md border-r border-gray-100 bg-lightGrayish px-3 py-2 text-dark dark:bg-dark dark:text-white"
            >
              <div className="flex items-center">
                <ArrowLeftIcon className="mr-2 w-5" />
                <p className="ml-2">{t('vicinity.btns.prev')}</p>
              </div>
            </button>

            <button
              onClick={() =>
                navHandler(`${errorMessage ? currPage : currPage + 1}`, 'page')
              }
              type="button"
              className="rounded-r-md border-l border-gray-100 bg-lightGrayish px-3 py-2 text-dark dark:bg-dark dark:text-white"
            >
              <div className="flex items-center">
                <span className="mr-2">{t('vicinity.btns.next')}</span>
                <ArrowRightIcon className="ml-2 w-5" />
              </div>
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default VicinityContent;
