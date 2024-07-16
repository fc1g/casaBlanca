import { Dispatch } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import Children from '../../types/Children';

interface DropDownMenuProps extends Children {
  text: string;
  className: string;
  openMenu: string;
  setOpenMenu: Dispatch<'sort' | 'limits' | ''>;
}

function DropDownMenu({
  text,
  className,
  openMenu,
  setOpenMenu,
  children,
}: DropDownMenuProps) {
  return (
    <div className="relative">
      <div>
        <button
          onClick={() =>
            setOpenMenu(
              openMenu === (text.toLowerCase() as 'sort' | 'limits')
                ? ''
                : (text.toLowerCase() as 'sort' | 'limits')
            )
          }
          type="button"
          className="group inline-flex items-center justify-center text-sm font-medium text-dark dark:text-white"
        >
          {text}
          <ChevronDownIcon className="h-4 w-4 text-lightDark group-hover:text-dark dark:text-gray-300 group-hover:dark:text-white" />
        </button>
      </div>

      <div
        className={`absolute ${openMenu === (text.toLowerCase() as 'sort' | 'limits') ? 'flex' : 'hidden'} flex-col items-center justify-center ${className} z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        {children}
      </div>
    </div>
  );
}

export default DropDownMenu;
