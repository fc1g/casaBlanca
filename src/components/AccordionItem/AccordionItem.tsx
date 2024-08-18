import {
  ChevronDownIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';
import { Dispatch } from 'react';
import Link from '../Link/Link';
import useGlobal from '../../hooks/useGlobal';

type AccordionItemProps = {
  content: string;
  active: number | null;
  onClick: Dispatch<number | null>;
  data: number;
};

function AccordionItem({ content, active, onClick, data }: AccordionItemProps) {
  const { t } = useGlobal()!;

  return (
    <>
      <h3>
        <button
          onClick={() => onClick(active === data ? null : data)}
          type="button"
          className={`flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium hover:bg-lightGrayish focus:ring-4 focus:ring-gray-200 rtl:text-right dark:border-gray-700 ${active === data ? 'text-dark dark:text-white' : 'text-gray-600 dark:text-gray-300'} ${data === 0 && 'rounded-t-xl'} dark:hover:bg-dark dark:focus:ring-dark`}
        >
          <span>{t(`${content}.title`)}</span>
          <ChevronDownIcon
            className={`h-6 w-6 shrink-0 ${active === data ? 'rotate-180 text-dark dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}
          />
        </button>
      </h3>

      <div className={`${!(active === data) && 'hidden'}`}>
        <div className="border border-gray-200 p-5 dark:border-gray-700">
          <div className="mb-2 text-center text-gray-600 lg:text-left dark:text-gray-300">
            <ul className="flex flex-col items-center justify-center space-y-6 p-5 sm:flex-row sm:space-x-8 sm:space-y-0">
              <li className="flex w-44 space-x-2">
                <div className="rounded-xl bg-lightGrayish p-4 dark:bg-dark">
                  <PhoneIcon className="size-6 dark:text-white" />
                </div>

                <div className="border-primary-600 dark:border-primary-300">
                  <h3 className="text-left text-lg font-semibold">
                    {t('contacts.accordion.phone')}:
                  </h3>
                  <Link
                    className="text-primary-600 dark:text-primary-300"
                    href="tel:+4800000000"
                  >
                    +4800000000
                  </Link>
                </div>
              </li>

              <li className="flex w-44 space-x-2">
                <div className="rounded-xl bg-lightGrayish p-4 dark:bg-dark">
                  <EnvelopeIcon className="size-6 dark:text-white" />
                </div>
                <div className="border-primary-600 dark:border-primary-300">
                  <h3 className="text-left text-lg font-semibold">
                    {t('contacts.accordion.mail')}:
                  </h3>
                  <Link
                    className="text-primary-600 dark:text-primary-300"
                    href="mailto:test@gmail.com"
                  >
                    test@gmail.com
                  </Link>
                </div>
              </li>

              <li className="flex w-44 space-x-2">
                <div className="rounded-xl bg-lightGrayish p-4 dark:bg-dark">
                  {data === 1 ? (
                    <GlobeAltIcon className="size-6 dark:text-white" />
                  ) : (
                    <MapIcon className="size-6 dark:text-white" />
                  )}
                </div>

                <div className="border-primary-600 dark:border-primary-300">
                  <h3 className="text-left text-lg font-semibold">
                    {t(`${content}.customeText`)}:
                  </h3>
                  <Link
                    className="text-primary-600 dark:text-primary-300"
                    href="https://www.google.com/maps/place/C.+R%C3%ADo+Mi%C3%B1o,+66,+30740+San+Pedro+del+Pinatar,+Murcia,+Spain/@37.828265,-0.7925334,17z/data=!3m1!4b1!4m6!3m5!1s0xd630fb5690c36d1:0x1b3f1d8d7030922f!8m2!3d37.8282608!4d-0.7899585!16s%2Fg%2F11l5l2j47s?hl=en&entry=ttu"
                  >
                    San Pedro
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <p className="text-center text-sm text-lightDark dark:text-gray-300">
            <strong>
              <span className="text-red-800 dark:text-red-300">
                {t('contacts.accordion.important.firstPart')}
              </span>{' '}
              {t('contacts.accordion.important.secondPart')}
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default AccordionItem;
