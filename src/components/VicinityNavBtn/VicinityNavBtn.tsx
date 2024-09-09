import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';
import useGlobal from '../../hooks/useGlobal';

type OcolicaNavBtnProps = {
  type: 'prev' | 'next';
  disabled: boolean;
  onClick: () => void;
};

export default function OcolicaNavBtn({
  type,
  onClick,
  disabled,
}: OcolicaNavBtnProps) {
  const { t } = useGlobal()!;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={`border-gray-100 bg-lightGrayish px-3 py-2 text-dark dark:bg-dark dark:text-white ${type === 'prev' ? 'rounded-l-md border-r' : 'rounded-r-md border-l'}`}
    >
      <div className="flex items-center">
        {type === 'prev' ? (
          <>
            <ArrowLeftIcon className="mr-2 w-5" />
            <p className="ml-2">{t('vicinity.btns.prev')}</p>
          </>
        ) : (
          <>
            <span className="mr-2">{t('vicinity.btns.next')}</span>
            <ArrowRightIcon className="ml-2 w-5" />
          </>
        )}
      </div>
    </button>
  );
}
