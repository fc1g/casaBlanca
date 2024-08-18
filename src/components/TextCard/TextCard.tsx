import Children from '../../types/Children';

function TextCard({ children }: Children) {
  return (
    <li className="border-b border-gray-200 bg-lightGrayish p-8 text-center md:p-12 lg:border-r dark:border-gray-600 dark:bg-dark dark:text-white">
      {children}
    </li>
  );
}

export default TextCard;
