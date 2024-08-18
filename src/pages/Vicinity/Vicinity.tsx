/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DropDownBtn from '../../components/DropDownBtn/DropDownBtn';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import useGlobal from '../../hooks/useGlobal';
import Page from '../../ui/Page/Page';
import Title from '../../ui/Title/Title';
import VicinityContent from '../../ui/VicinityContent/VicinityContent';

function Vicinity() {
  const { t } = useGlobal()!;
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<'sort' | 'limits' | ''>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const queryStr: string = location.href.split('/vicinity')[1];
  const currPage = +searchParams.get('page')!;
  const limit = +searchParams.get('limit')! || null;

  function navHandler(searchString: string, type: 'sort' | 'limit' | 'page') {
    if (queryStr.includes(`${type}=${searchString}`)) return;

    let navStr = queryStr.includes(type)
      ? queryStr.replace(
          `${type}=${searchParams.get(type)}`,
          `${type}=${searchString}`
        )
      : `${queryStr}&${type}=${searchString}`;

    if ((type === 'sort' || type === 'limit') && currPage > 1) {
      navStr = navStr.replace(`page=${currPage}`, 'page=1');
      setSearchParams({ page: '1' });
    }

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

  document.body.addEventListener('click', e => {
    const target = (e.target as HTMLElement).closest('.dropDownBtn');

    setOpenMenu(
      target && openMenu !== target.getAttribute('data-type')
        ? (target.getAttribute('data-type') as 'sort' | 'limits')
        : ''
    );
  });

  return (
    <Page logoStyles="dark:text-white text-dark" navStyles="relative mb-6">
      <div className="mx-auto max-w-screen-xl py-8 text-center lg:py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <Title
            title={`${t('vicinity.title')}`}
            subtitle={`${t('vicinity.subtitle')}`}
          />
        </div>

        <div className="mb-12 flex flex-col">
          <div className="flex items-center justify-end p-6 text-white [&>div:nth-child(odd)]:border-r [&>div:nth-child(odd)]:border-gray-300 [&>div:nth-child(odd)]:dark:border-gray-600">
            <div className="px-4">
              <DropDownMenu text="Sort" openMenu={openMenu} className="left-0">
                <>
                  <DropDownBtn onClick={() => navHandler('distance', 'sort')}>
                    {t('vicinity.sort.low')}
                  </DropDownBtn>
                  <DropDownBtn onClick={() => navHandler('-distance', 'sort')}>
                    {t('vicinity.sort.high')}
                  </DropDownBtn>
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
                  <DropDownBtn onClick={() => navHandler('3', 'limit')}>
                    {t('vicinity.limit.first')}
                  </DropDownBtn>
                  <DropDownBtn onClick={() => navHandler('6', 'limit')}>
                    {t('vicinity.limit.second')}
                  </DropDownBtn>
                  <DropDownBtn onClick={() => navHandler('9', 'limit')}>
                    {t('vicinity.limit.third')}
                  </DropDownBtn>
                </>
              </DropDownMenu>
            </div>
          </div>
          <hr className="border-gray-200 dark:border-gray-600" />
        </div>

        <VicinityContent
          currPage={currPage}
          queryStr={queryStr}
          navHandler={navHandler}
          limit={limit}
        />
      </div>
    </Page>
  );
}

export default Vicinity;
