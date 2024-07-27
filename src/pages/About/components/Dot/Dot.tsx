type DotProps = {
  slide: number;
  active: number;
  onClick: () => void;
};

function Dot({ slide, active, onClick }: DotProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-3 w-3 cursor-pointer rounded-full transition duration-300 hover:bg-primary-800 sm:h-4 sm:w-4 md:h-3 md:w-3 dark:hover:bg-primary-300 ${active === slide ? 'bg-primary-800 dark:bg-primary-300' : 'bg-lightGrayish dark:bg-gray-300'}`}
    >
      <span className="sr-only">Dot</span>
    </button>
  );
}

export default Dot;
