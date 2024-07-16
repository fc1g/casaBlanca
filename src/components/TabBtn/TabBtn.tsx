import { Dispatch } from 'react';
import Children from '../../types/Children';

interface TabProps extends Children {
  active: number;
  data: number;
  onClick: Dispatch<number>;
}

function Tab({ children, active, onClick, data }: TabProps) {
  return (
    <li>
      <button
        data-tab={data}
        onClick={e =>
          onClick(+(e.target as HTMLButtonElement).getAttribute('data-tab')!)
        }
        className={`inline-block rounded-t-lg border-b-2 p-4 transition duration-300 ${active === data ? 'border-primary-800 text-primary-800 dark:border-primary-300 dark:text-primary-300' : 'hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300'}`}
        type="button"
        role="tab"
      >
        {children}
      </button>
    </li>
  );
}

export default Tab;
