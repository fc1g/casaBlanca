import { XMarkIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import DropDownBtn from '../../components/DropDownBtn/DropDownBtn';
import useGlobal from '../../hooks/useGlobal';

export default function OcolicaMenu() {
  const { t } = useGlobal()!;
  const [search, setSearch] = useSearchParams();
  const [openMenu, setOpenMenu] = useState<'sort' | 'limits' | ''>('');

  document.body.addEventListener('click', e => {
    const target = (e.target as HTMLElement).closest('.dropDownBtn');

    setOpenMenu(
      target && openMenu !== target.getAttribute('data-type')
        ? (target.getAttribute('data-type') as 'sort' | 'limits')
        : ''
    );
  });

  function setSearchParamsHandler(type: 'sort' | 'limit', searchParam: string) {
    search.set(type, searchParam);
    search.set('page', '1');
    setSearch(search, {
      replace: true,
    });
  }

  return (
    <div className="mb-12 flex flex-col">
      <div className="flex items-center justify-end p-6 text-white [&>div:nth-child(odd)]:border-r [&>div:nth-child(odd)]:border-gray-300 [&>div:nth-child(odd)]:dark:border-gray-600">
        <div className="px-4">
          <DropDownMenu text="Sort" openMenu={openMenu} className="left-0">
            <>
              <DropDownBtn
                onClick={() => setSearchParamsHandler('sort', 'distance')}
              >
                {t('vicinity.sort.low')}
              </DropDownBtn>
              <DropDownBtn
                onClick={() => setSearchParamsHandler('sort', '-distance')}
              >
                {t('vicinity.sort.high')}
              </DropDownBtn>
            </>
          </DropDownMenu>
        </div>

        <div className="px-4">
          <DropDownMenu text="Limits" openMenu={openMenu} className="right-0">
            <>
              <DropDownBtn onClick={() => setSearchParamsHandler('limit', '3')}>
                {t('vicinity.limit.first')}
              </DropDownBtn>
              <DropDownBtn onClick={() => setSearchParamsHandler('limit', '9')}>
                {t('vicinity.limit.third')}
              </DropDownBtn>
            </>
          </DropDownMenu>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-600" />

      <div className="flex items-center p-6">
        <div className="mr-4 border-r border-gray-300 pr-4 text-lightDark dark:border-gray-600 dark:text-gray-300">
          Filters
        </div>

        <ul className="flex items-center space-x-4">
          {search
            .toString()
            .split('&')
            .map(param => {
              if (!param || param.includes('limit=6') || param.includes('page'))
                return '';

              let paramData = param;
              if (paramData.includes('-distance'))
                paramData = paramData.replace('-distance', 'high');
              if (paramData.includes('distance'))
                paramData = paramData.replace('distance', 'low');

              return (
                <li key={paramData}>
                  <div className="flex items-center space-x-1 rounded-full border border-gray-300 px-4 py-1 text-sm dark:border-gray-600">
                    <span className="text-dark dark:text-white">
                      {paramData.split('=').join(': ')}
                    </span>
                    <XMarkIcon
                      onClick={() => {
                        search.set('page', '1');
                        search.delete(
                          paramData.split('=')[0] as 'sort' | 'limit'
                        );
                        setSearch(search, {
                          replace: true,
                        });
                      }}
                      className="h-4 w-4 cursor-pointer rounded-full p-[1px] text-gray-600 hover:bg-gray-300 hover:text-dark dark:text-gray-300 hover:dark:bg-gray-600 hover:dark:text-white"
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
