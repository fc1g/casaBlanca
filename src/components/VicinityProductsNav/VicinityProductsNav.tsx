import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

interface VicinityProductsNavProps {
  error: string;
  currPage: number;
  navHandler: (searchString: string, type: 'sort' | 'limit' | 'page') => void;
}

function VicinityProductsNav({
  navHandler,
  currPage,
  error,
}: VicinityProductsNavProps) {
  return (
    <div className="mb-16 mt-8 flex items-center justify-center">
      <button
        onClick={() =>
          navHandler(`${currPage === 1 ? currPage : currPage - 1}`, 'page')
        }
        type="button"
        className="rounded-l-md border-r border-gray-100 bg-lightGrayish px-3 py-2 text-dark dark:bg-dark dark:text-white"
      >
        <div className="flex items-center">
          <ArrowLeftIcon className="mr-2 w-5" />
          <p className="ml-2">Prev</p>
        </div>
      </button>

      <button
        onClick={() => navHandler(`${error ? currPage : currPage + 1}`, 'page')}
        type="button"
        className="rounded-r-md border-l border-gray-100 bg-lightGrayish px-3 py-2 text-dark dark:bg-dark dark:text-white"
      >
        <div className="flex items-center">
          <span className="mr-2">Next</span>
          <ArrowRightIcon className="ml-2 w-5" />
        </div>
      </button>
    </div>
  );
}

export default VicinityProductsNav;
