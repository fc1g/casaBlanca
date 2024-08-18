import Chart from '../../ui/Chart/Chart';
import Title from '../../ui/Title/Title';
import TextCard from '../../components/TextCard/TextCard';
import Link from '../../components/Link/Link';
import Accordion from '../../ui/Accordion/Accordion';

import useGlobal from '../../hooks/useGlobal';
import Calendar from '../../ui/Calendar/Calendar';
import Page from '../../ui/Page/Page';

function Contacts() {
  const { t } = useGlobal()!;

  return (
    <Page logoStyles="dark:text-white text-dark" navStyles="relative mb-6">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <Title title={t('contacts.title')} subtitle={t('contacts.subtitle')} />

        <div className="my-24 grid grid-cols-1 gap-16 md:grid-cols-2">
          <Chart />

          <Calendar />
        </div>

        <ul className="mb-8 grid md:grid-cols-2 lg:mb-12 lg:grid-cols-3">
          <TextCard>
            <>
              {t('contacts.bookProcedure.firstCol.firstPart')}{' '}
              <div className="inline-block border-primary-600 text-primary-600 dark:border-primary-300 dark:text-primary-300">
                <Link href="https://www.booking.com/Share-I6EG8y">
                  Booking.com
                </Link>
              </div>{' '}
              {t('contacts.bookProcedure.firstCol.secondPart')}{' '}
              <div className="inline-block border-primary-600 text-primary-600 dark:border-primary-300 dark:text-primary-300">
                <Link href="https://www.airbnb.com">Airbnb</Link>
              </div>{' '}
              {t('contacts.bookProcedure.firstCol.thirdPart')}
            </>
          </TextCard>

          <TextCard>{t('contacts.bookProcedure.secondCol')}</TextCard>

          <TextCard>{t('contacts.bookProcedure.thirdCol')}</TextCard>
          <TextCard>{t('contacts.paymentSchedule.firstCol')}</TextCard>

          <TextCard>{t('contacts.paymentSchedule.secondCol')}</TextCard>
          <TextCard>{t('contacts.paymentSchedule.thirdCol')}</TextCard>
        </ul>

        <Accordion />
      </div>
    </Page>
  );
}

export default Contacts;
