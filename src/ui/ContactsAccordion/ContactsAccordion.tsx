import { useState } from 'react';
import ContactsAccordionItem from '../../components/ContactsAccordionItem/ContactsAccordionItem';
import useGlobal from '../../hooks/useGlobal';

export default function ContactsAccordion() {
  const { t } = useGlobal()!;
  const [active, setActive] = useState<'top' | 'middle' | 'bottom' | null>(
    null
  );

  return (
    <>
      <ContactsAccordionItem
        active={active}
        setActive={setActive}
        type="top"
        i18Code="contacts.accordion.firstPart"
      >
        <ContactsAccordionItem.Container>
          <>
            <ContactsAccordionItem.Phone tel="+48661128981" />
            <ContactsAccordionItem.Email email="Casablancaespaniol@gmail.com" />
            <ContactsAccordionItem.CustomeData
              i18Code="contacts.accordion.firstPart"
              customeText="San Pedro"
              customeData="https://www.google.com/maps/place/C.+R%C3%ADo+Mi%C3%B1o,+66,+30740+San+Pedro+del+Pinatar,+Murcia,+Spain/@37.828265,-0.7925334,17z/data=!3m1!4b1!4m6!3m5!1s0xd630fb5690c36d1:0x1b3f1d8d7030922f!8m2!3d37.8282608!4d-0.7899585!16s%2Fg%2F11l5l2j47s?hl=en&entry=ttu"
            />
          </>
        </ContactsAccordionItem.Container>

        <p className="mb-2 mt-4 text-center text-xs text-lightDark sm:text-sm dark:text-gray-300">
          <strong>
            {t('contacts.accordion.firstPart.importantLang.firstPart')}{' '}
            <span className="text-red-800 dark:text-red-300">
              {t('contacts.accordion.firstPart.importantLang.only')}
            </span>{' '}
            {t('contacts.accordion.firstPart.importantLang.secondPart')}
          </strong>
        </p>

        <hr />
      </ContactsAccordionItem>

      <ContactsAccordionItem
        active={active}
        setActive={setActive}
        type="bottom"
        i18Code="contacts.accordion.secondPart"
      >
        <ContactsAccordionItem.Container>
          <>
            <ContactsAccordionItem.Phone tel="+34659901386" />
            <ContactsAccordionItem.Email email="Info@avsinmo.com" />
            <ContactsAccordionItem.CustomeData
              i18Code="contacts.accordion.secondPart"
              icon="webpage"
              customeText="Avsinmo.com"
              customeData="https://Avsinmo.com"
            />
          </>
        </ContactsAccordionItem.Container>

        <p className="mb-2 mt-4 text-center text-xs text-lightDark sm:text-sm dark:text-gray-300">
          <strong>
            {t('contacts.accordion.secondPart.importantLang.firstPart')}{' '}
            <span className="text-red-800 dark:text-red-300">
              {t('contacts.accordion.secondPart.importantLang.only')}
            </span>{' '}
            {t('contacts.accordion.secondPart.importantLang.secondPart')}
          </strong>
        </p>

        <hr />
      </ContactsAccordionItem>
    </>
  );
}
