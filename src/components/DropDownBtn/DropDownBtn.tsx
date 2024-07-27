import Children from '../../types/Children';

type DropDownBtnProps = {
  onClick: () => void;
} & Children;

function DropDownBtn({ onClick, children }: DropDownBtnProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="block px-4 py-2 text-sm text-gray-500"
    >
      {children}
    </button>
  );
}

export default DropDownBtn;
