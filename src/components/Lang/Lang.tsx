import T from '../../types/T';

interface LangProps extends T {
  src: string;
  translatePath: string;
  onClick: () => void;
}

function Lang({ t, src, translatePath, onClick }: LangProps) {
  return (
    <li>
      <button
        onClick={onClick}
        type="button"
        className="group block px-4 py-2 text-sm"
      >
        <div className="inline-flex items-center space-x-2">
          <img
            src={src}
            alt={t(`${translatePath}.imgAltText`)}
            className="h-4 w-4"
          />
          <span className="group-hover:text-primary-300">
            {t(`${translatePath}.text`)}
          </span>
        </div>
      </button>
    </li>
  );
}

export default Lang;
