import Page from '../../components/layouts/Page/Page';
import Chart from './components/Chart/Chart';
import Calendar from './components/Calendar/Calendar';
import Title from '../../components/Title/Title';
import TextCard from '../../components/TextCard/TextCard';
import Link from '../../components/Link/Link';
import Accordion from '../../components/layouts/Accordion/Accordion';

import useGlobal from '../../hooks/globalStore';

function Contacts() {
  const useTranslation = useGlobal(store => store.useTranslation);
  const { t } = useTranslation();

  return (
    <Page pageStyles="relative" logoStyles="dark:text-white text-dark">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
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
