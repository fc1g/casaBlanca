import {
  ChevronDownIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  MapIcon,
  PhoneIcon,
} from '@heroicons/react/16/solid';
import { Dispatch } from 'react';
import useGlobal from '../../hooks/useGlobal';
import Link from '../Link/Link';
import Children from '../../types/Children';

type Active = 'top' | 'middle' | 'bottom';

type ContactsAccordionItemProps = {
  active: Active | null;
  type: Active;
  i18Code: string;
  setActive: Dispatch<Active | null>;
  children: React.ReactNode;
};

export default function ContactsAccordionItem({
  active,
  setActive,
  type,
  i18Code,
  children,
}: ContactsAccordionItemProps) {
  const { t } = useGlobal()!;

  return (
    <>
      <h3>
        <button
          onClick={() => setActive(active === type ? null : type)}
          type="button"
          className={`flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium hover:bg-lightGrayish focus:ring-4 focus:ring-gray-200 rtl:text-right dark:border-gray-700 ${active === type ? 'text-dark dark:text-white' : 'text-gray-600 dark:text-gray-300'} ${type === 'top' && 'rounded-t-xl'} dark:hover:bg-dark dark:focus:ring-dark`}
        >
          <span>{t(`${i18Code}.title`)}</span>
          <ChevronDownIcon
            className={`h-6 w-6 shrink-0 ${active === type ? 'rotate-180 text-dark dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}
          />
        </button>
      </h3>

      <div className={`${!(active === type) && 'hidden'}`}>
        <div className="border border-gray-200 p-5 dark:border-gray-700">
          <div className="mb-2 text-center text-gray-600 lg:text-left dark:text-gray-300">
            {children}
          </div>

          <p className="text-center text-xs text-lightDark sm:text-sm dark:text-gray-300">
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

type PhoneProps = {
  tel: string;
};

function Phone({ tel }: PhoneProps) {
  const { t } = useGlobal()!;

  return (
    <li className="flex w-44 space-x-2 sm:flex-1">
      <div className="rounded-xl bg-lightGrayish p-4 dark:bg-dark">
        <PhoneIcon className="size-6 dark:text-white" />
      </div>

      <div className="border-primary-600 dark:border-primary-300">
        <h3 className="text-left text-lg font-semibold">
          {t('contacts.accordion.phone')}:
        </h3>
        <Link
          className="text-left text-xs text-primary-600 md:text-sm dark:text-primary-300"
          href={`tel:${tel}`}
        >
          {tel}
        </Link>
      </div>
    </li>
  );
}

type EmailProps = {
  email: string;
};

function Email({ email }: EmailProps) {
  const { t } = useGlobal()!;

  return (
    <li className="flex w-44 space-x-2 sm:flex-1">
      <div className="rounded-xl bg-lightGrayish p-4 dark:bg-dark">
        <EnvelopeIcon className="size-6 dark:text-white" />
      </div>
      <div className="border-primary-600 dark:border-primary-300">
        <h3 className="text-left text-lg font-semibold">
          {t('contacts.accordion.mail')}:
        </h3>
        <Link
          className="text-left text-xs text-primary-600 md:text-sm dark:text-primary-300"
          href={`mailto:${email}`}
        >
          {email.includes('espaniol') ? email.replace('espaniol', '') : email}
        </Link>
      </div>
    </li>
  );
}

type CustomeDataProps = {
  i18Code: string;
  customeData: string;
  customeText: string;
  icon?: 'address' | 'webpage';
};

function CustomeData({
  icon = 'address',
  i18Code,
  customeData,
  customeText,
}: CustomeDataProps) {
  const { t } = useGlobal()!;

  return (
    <li className="flex w-44 space-x-2 sm:flex-1">
      <div className="rounded-xl bg-lightGrayish p-4 dark:bg-dark">
        {icon === 'webpage' ? (
          <GlobeAltIcon className="size-6 dark:text-white" />
        ) : (
          <MapIcon className="size-6 dark:text-white" />
        )}
      </div>

      <div className="border-primary-600 dark:border-primary-300">
        <h3 className="text-left text-lg font-semibold">
          {t(`${i18Code}.customeText`)}:
        </h3>
        <Link
          className="text-left text-xs text-primary-600 md:text-sm dark:text-primary-300"
          href={customeData}
        >
          {customeText}
        </Link>
      </div>
    </li>
  );
}

function Container({ children }: Children) {
  return (
    <ul className="flex flex-col items-center justify-center space-y-6 p-3 sm:flex-row sm:space-x-8 sm:space-y-0">
      {children}
    </ul>
  );
}

ContactsAccordionItem.Phone = Phone;
ContactsAccordionItem.Email = Email;
ContactsAccordionItem.CustomeData = CustomeData;
ContactsAccordionItem.Container = Container;
