import Children from '../../types/Children';

function TabContent({ children }: Children) {
  return (
    <div className="mb-12 flex items-center justify-center p-4" role="tabpanel">
      <div className="mt-4 flex max-w-max flex-col items-center justify-center rounded-lg bg-lightGrayish px-6 py-3 text-center text-sm tracking-tight text-gray-600 sm:mt-6 md:mt-8 md:text-left dark:bg-dark dark:text-white">
        {children}
      </div>
    </div>
  );
}

export default TabContent;
