import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Page from '../../components/layouts/Page/Page';
import Loader from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';

import useData from '../../hooks/useData';

import VicinityPlace from '../../types/VcinityPlace';
import T from '../../types/T';

function Vicinity({ t }: T) {
  const [openMenu, setOpenMenu] = useState<'sort' | 'limits' | ''>('');

  const queryStr: string = location.href.split('/vicinity')[1];

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useData<{
    vicinityPlaces: VicinityPlace[];
  }>(`vicinity${queryStr}`);

  function dropDownMenuHandler(searchString: string, type: 'sort' | 'limit') {
    if (queryStr.includes(`${type}=${searchString}`)) return;

    const mark = queryStr.includes('?') ? '&' : '?';

    const navStr = queryStr.includes(type)
      ? queryStr.replace(
          `${type}=${searchParams.get(type)}`,
          `${type}=${searchString}`
        )
      : `${queryStr}${mark}${type}=${encodeURIComponent(searchString)}`;

    setSearchParams({ sort: searchString });
    navigate(
      navStr
        ? `${navStr}`
        : `${mark}${type}=${encodeURIComponent(searchString)}`
    );
  }

  return (
    <Page
      pageStyles="relative mb-12"
      logoStyles="text-dark dark:text-white"
      t={t}
    >
      <div className="w-full">
        <div className="text-center">
          <Title
            title={t('vicinity.title')}
            subtitle={t('vicinity.subtitle')}
          />
        </div>

        <div className="mb-12 flex flex-col">
          <div className="flex items-center justify-end p-6 [&>div:nth-child(odd)]:border-r [&>div:nth-child(odd)]:border-gray-300 [&>div:nth-child(odd)]:dark:border-gray-600">
            <div className="px-4">
              <DropDownMenu
                text="Sort"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                className="left-0"
              >
                <>
                  <button
                    onClick={() => dropDownMenuHandler('distance', 'sort')}
                    type="button"
                    className="block px-4 py-2 text-sm text-gray-500"
                  >
                    Distance: Low to High
                  </button>
                  <button
                    onClick={() => dropDownMenuHandler('-distance', 'sort')}
                    type="button"
                    className="block px-4 py-2 text-sm text-gray-500"
                  >
                    Distance: High to Low
                  </button>
                </>
              </DropDownMenu>
            </div>

            <div className="px-4">
              <DropDownMenu
                text="Limits"
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                className="right-0"
              >
                <>
                  <button
                    onClick={() => dropDownMenuHandler('3', 'limit')}
                    type="button"
                    className="block px-4 py-2 text-sm text-gray-500"
                  >
                    3 Items on page
                  </button>

                  <button
                    onClick={() => dropDownMenuHandler('6', 'limit')}
                    type="button"
                    className="block px-4 py-2 text-sm text-gray-500"
                  >
                    6 Items on page
                  </button>

                  <button
                    onClick={() => dropDownMenuHandler('9', 'limit')}
                    type="button"
                    className="block px-4 py-2 text-sm text-gray-500"
                  >
                    9 Items on page
                  </button>
                </>
              </DropDownMenu>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-600" />
        </div>

        {isLoading && <Loader />}
        {error && <ErrorMessage errorMessage={error} t={t} />}
        {data?.vicinityPlaces && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.vicinityPlaces.map(place => (
              <Card key={place._id} data={place} t={t} />
            ))}
          </div>
        )}
      </div>
    </Page>
  );
}

export default Vicinity;
