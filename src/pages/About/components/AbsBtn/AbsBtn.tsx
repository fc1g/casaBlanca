import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Dispatch } from 'react';
import Children from '../../../../types/Children';

interface AbsBtnProps extends Children {
  position: string;
  onClick: Dispatch<number>;
}

function AbsBtn({ children, position, onClick }: AbsBtnProps) {
  return (
    <button
      onClick={() => onClick(0)}
      type="button"
      className={`group absolute ${position === 'left' ? 'left-0' : 'right-0'} top-2/4 z-30 flex -translate-y-2/4 cursor-pointer items-center justify-center px-4 focus:outline-none`}
    >
      <span className="duration-400 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 transition hover:bg-gray-400 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-700 dark:hover:bg-lightDark dark:group-focus:ring-gray-800/70">
        {position === 'left' && (
          <ChevronLeftIcon className="h-6 w-6 text-dark lg:h-8 lg:w-8 dark:text-white" />
        )}
        {position === 'right' && (
          <ChevronRightIcon className="h-6 w-6 text-dark lg:h-8 lg:w-8 dark:text-white" />
        )}
        <span className="sr-only">{children}</span>
      </span>
    </button>
  );
}

export default AbsBtn;
