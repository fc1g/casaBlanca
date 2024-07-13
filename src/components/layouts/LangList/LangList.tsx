import Children from '../../../types/Children';

interface LangListProps extends Children {
  isOpen: boolean;
}

function LangList({ isOpen, children }: LangListProps) {
  return (
    <ul
      className={`absolute top-[125%] z-[999999] transition-opacity duration-300 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} rounded-lg bg-gray-600 text-white dark:bg-dark`}
    >
      {children}
    </ul>
  );
}

export default LangList;
