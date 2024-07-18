/* eslint-disable no-nested-ternary */
import { useEffect, useRef, useState } from 'react';
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
import VicinityProductsNav from '../../components/VicinityProductsNav/VicinityProductsNav';

function Vicinity({ t }: T) {
  const wrapper = useRef<HTMLDivElement>(null);
  const queryStr: string = location.href.split('/vicinity')[1];

  const { data, isLoading, error } = useData<{
    vicinityPlaces: VicinityPlace[];
  }>(`vicinity${queryStr}`);

  const [searchParams, setSearchParams] = useSearchParams();
  const [openMenu, setOpenMenu] = useState<'sort' | 'limits' | ''>('');
  const currPage = +searchParams.get('page')!;
  const navigate = useNavigate();

  function navHandler(searchString: string, type: 'sort' | 'limit' | 'page') {
    if (queryStr.includes(`${type}=${searchString}`)) return;

    const navStr = queryStr.includes(type)
      ? queryStr.replace(
          `${type}=${searchParams.get(type)}`,
          `${type}=${searchString}`
        )
      : `${queryStr}&${type}=${encodeURIComponent(searchString)}`;

    setSearchParams(
      type === 'sort'
        ? { sort: searchString }
        : type === 'limit'
          ? { limit: searchString }
          : { page: searchString }
    );
    navigate(
      navStr ? `${navStr}` : `&${type}=${encodeURIComponent(searchString)}`
    );
  }

  useEffect(() => {
    if (!wrapper.current) return;

    wrapper.current.addEventListener('click', e => {
      const target = (e.target as HTMLElement).closest('.dropDownBtn');

      setOpenMenu(
        target && openMenu !== target.getAttribute('data-type')
          ? (target.getAttribute('data-type') as 'sort' | 'limits')
          : ''
      );
    });
  }, [wrapper, setOpenMenu, openMenu]);

  return (
    <Page
      pageStyles="relative mb-12"
      logoStyles="text-dark dark:text-white"
      t={t}
      wrapper={wrapper}
    >
      <div className="w-full">
        <div className="mx-auto max-w-screen-xl px-4 text-center lg:px-6">
          <Title
            title={t('vicinity.title')}
            subtitle={t('vicinity.subtitle')}
          />
        </div>

        <div className="mb-12 flex flex-col">
          <div className="flex items-center justify-end p-6 [&>div:nth-child(odd)]:border-r [&>div:nth-child(odd)]:border-gray-300 [&>div:nth-child(odd)]:dark:border-gray-600">
            <div className="px-4">
              <DropDownMenu text="Sort" openMenu={openMenu} className="left-0">
                <>
                  <button
                    onClick={() => navHandler('distance', 'sort')}
                    type="button"
                    className="block px-4 py-2 text-sm text-gray-500"
                  >
                    Distance: Low to High
                  </button>
                  <button
                    onClick={() => navHandler('-distance', 'sort')}
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
                className="right-0"
              >
                <>
                  <button
                    onClick={() => navHandler('3', 'limit')}
                    type="button"
                    className="block px-4 py-2 text-sm text-gray-500"
                  >
                    3 Items on page
                  </button>

                  <button
                    onClick={() => navHandler('6', 'limit')}
                    type="button"
                    className="block px-4 py-2 text-sm text-gray-500"
                  >
                    6 Items on page
                  </button>

                  <button
                    onClick={() => navHandler('9', 'limit')}
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

        {isLoading ? (
          <Loader />
        ) : error ? (
          <main>
            <ErrorMessage errorMessage={error} t={t} />

            <VicinityProductsNav
              error={error}
              currPage={currPage}
              // eslint-disable-next-line react/jsx-no-bind
              navHandler={navHandler}
            />
          </main>
        ) : (
          <main>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data?.vicinityPlaces ? (
                data.vicinityPlaces.map(place => (
                  <Card key={place._id} data={place} t={t} />
                ))
              ) : (
                <ErrorMessage errorMessage={error} t={t} />
              )}
            </div>

            <VicinityProductsNav
              error={error}
              currPage={currPage}
              // eslint-disable-next-line react/jsx-no-bind
              navHandler={navHandler}
            />
          </main>
        )}
      </div>
    </Page>
  );
}

export default Vicinity;
