import useGlobal from '../../hooks/globalStore';

type LangProps = {
  src: string;
  translatePath: string;
  onClick: () => void;
};

function Lang({ src, translatePath, onClick }: LangProps) {
  const useTranslation = useGlobal(store => store.useTranslation);
  const { t } = useTranslation();

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
