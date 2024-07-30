/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Page from '../../components/layouts/Page/Page';
import Title from '../../components/Title/Title';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import DropDownBtn from '../../components/DropDownBtn/DropDownBtn';
import VicinityContent from './components/VicinityContent';
import useGlobal from '../../hooks/globalStore';

function Vicinity() {
  const useTranslation = useGlobal(store => store.useTranslation);
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState<'sort' | 'limits' | ''>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const queryStr: string = location.href.split('/vicinity')[1];
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

  document.body.addEventListener('click', e => {
    const target = (e.target as HTMLElement).closest('.dropDownBtn');

    setOpenMenu(
      target && openMenu !== target.getAttribute('data-type')
        ? (target.getAttribute('data-type') as 'sort' | 'limits')
        : ''
    );
  });

  return (
    <Page pageStyles="relative mb-12" logoStyles="text-dark dark:text-white">
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
                  <DropDownBtn
                    onClick={() => {
                      navHandler('distance', 'sort');
                      navHandler('1', 'page');
                    }}
                  >
                    {t('vicinity.sort.low')}
                  </DropDownBtn>

                  <DropDownBtn
                    onClick={() => {
                      navHandler('-distance', 'sort');
                      navHandler('1', 'page');
                    }}
                  >
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
                  <DropDownBtn
                    onClick={() => {
                      navHandler('3', 'limit');
                      navHandler('1', 'page');
                    }}
                  >
                    {t('vicinity.limit.first')}
                  </DropDownBtn>

                  <DropDownBtn
                    onClick={() => {
                      navHandler('6', 'limit');
                      navHandler('1', 'page');
                    }}
                  >
                    {t('vicinity.limit.second')}
                  </DropDownBtn>

                  <DropDownBtn
                    onClick={() => {
                      navHandler('9', 'limit');
                      navHandler('1', 'page');
                    }}
                  >
                    {t('vicinity.limit.third')}
                  </DropDownBtn>
                </>
              </DropDownMenu>
            </div>
          </div>

          <hr className="border-gray-200 dark:border-gray-600" />
        </div>
        <VicinityContent searchParams={searchParams} navHandler={navHandler} />
      </div>
    </Page>
  );
}

export default Vicinity;
