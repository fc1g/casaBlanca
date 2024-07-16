import Children from '../../../../types/Children';

function Dots({ children }: Children) {
  return (
    <div className="absolute bottom-5 left-2/4 flex -translate-x-2/4 space-x-4 sm:space-x-6">
      {children}
    </div>
  );
}

export default Dots;
