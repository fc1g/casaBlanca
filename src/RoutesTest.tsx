import { useNavigate, useSearchParams } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/16/solid';

import DropDownMenu from './components/DropDownMenu/DropDownMenu';

function RoutesTest() {
  const queryStr: string = location.href.split('/test')[1];

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function sortBtnClickHandler(sortString: string) {
    if (queryStr.includes(`sort=${sortString}`)) return;

    const mark = queryStr.includes('?') ? '&' : '?';

    const navStr = queryStr.includes('sort')
      ? queryStr.replace(
          `sort=${searchParams.get('sort')}`,
          `sort=${sortString}`
        )
      : `${queryStr}${mark}sort=${encodeURIComponent(sortString)}`;

    setSearchParams({ sort: sortString });
    navigate(
      navStr ? `${navStr}` : `${mark}sort=${encodeURIComponent(sortString)}`
    );
  }

  function limitBtnClickHandler(limitString: string) {
    if (queryStr.includes(`limit=${limitString}`)) return;

    const mark = queryStr.includes('?') ? '&' : '?';

    const navStr = queryStr.includes('limit')
      ? queryStr.replace(
          `limit=${searchParams.get('limit')}`,
          `limit=${limitString}`
        )
      : `${queryStr}${mark}limit=${encodeURIComponent(limitString)}`;

    setSearchParams({ sort: limitString });
    navigate(
      navStr ? `${navStr}` : `${mark}limit=${encodeURIComponent(limitString)}`
    );
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-6">
          <DropDownMenu text="Sort" className="left-0">
            <>
              <button
                onClick={() => sortBtnClickHandler('distance')}
                type="button"
                className="block px-4 py-2 text-sm text-gray-500"
              >
                Distance: Low to High
              </button>
              <button
                onClick={() => sortBtnClickHandler('-distance')}
                type="button"
                className="block px-4 py-2 text-sm text-gray-500"
              >
                Distance: High to Low
              </button>
            </>
          </DropDownMenu>

          <div className="flex items-center [&>div:nth-child(odd)]:border-r [&>div:nth-child(odd)]:border-gray-300 [&>div:nth-child(odd)]:dark:border-gray-600">
            <div className="px-4">
              <DropDownMenu text="Distance" className="right-0">
                <form
                  onSubmit={e => submitHandler(e)}
                  className="flex flex-col items-center space-y-4 p-4"
                >
                  <div className="flex">
                    <input
                      className="w-full border-b border-gray-600 text-center text-sm focus:outline-none"
                      type="number"
                      placeholder="From"
                    />
                    -
                    <input
                      className="w-full border-b border-gray-600 text-center text-sm focus:outline-none"
                      type="number"
                      placeholder="To"
                    />
                  </div>
                  <button type="submit">Search</button>
                </form>
              </DropDownMenu>
            </div>
            <div className="px-4">
              <DropDownMenu text="Limits" className="right-0">
                <>
                  <button
                    onClick={() => limitBtnClickHandler('3')}
                    type="button"
                    className="block px-4 py-2 text-sm text-gray-500"
                  >
                    3 Items on page
                  </button>

                  <button
                    onClick={() => limitBtnClickHandler('6')}
                    type="button"
                    className="block px-4 py-2 text-sm text-gray-500"
                  >
                    6 Items on page
                  </button>

                  <button
                    onClick={() => limitBtnClickHandler('9')}
                    type="button"
                    className="block px-4 py-2 text-sm text-gray-500"
                  >
                    9 Items on page
                  </button>
                </>
              </DropDownMenu>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 dark:border-gray-600" />

      <div className="flex items-center p-6">
        <div className="mr-4 border-r border-gray-300 pr-4 text-lightDark dark:border-gray-600 dark:text-gray-300">
          Filters
        </div>

        <div className="flex items-center">
          <div className="flex items-center space-x-1 rounded-full border border-gray-300 px-4 py-1 text-sm dark:border-gray-600">
            <span className="text-dark dark:text-white">Objects</span>
            <XMarkIcon className="h-4 w-4 cursor-pointer rounded-full p-[1px] text-gray-600 hover:bg-gray-300 hover:text-dark dark:text-gray-300 hover:dark:bg-gray-600 hover:dark:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoutesTest;
