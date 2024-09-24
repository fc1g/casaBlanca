import Chart from '../../ui/Chart/Chart';
import Title from '../../ui/Title/Title';
import TextCard from '../../components/TextCard/TextCard';
import Link from '../../components/Link/Link';

import useGlobal from '../../hooks/useGlobal';
import Calendar from '../../ui/Calendar/Calendar';
import Page from '../../ui/Page/Page';
import ContactsAccordion from '../../ui/ContactsAccordion/ContactsAccordion';

function Contacts() {
  const { t } = useGlobal()!;

  return (
    <Page logoStyles="dark:text-white text-dark" navStyles="relative mb-6">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <Title title={t('contacts.title')} subtitle={t('contacts.subtitle')} />

        <div className="my-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
          <div>
            <Chart />

            <section className="my-8">
              <Title title={t('contacts.monthPriceTitle')} subtitle="" />

              <ul className="space-y-2 text-left text-gray-700 lg:-mt-8 dark:text-gray-300">
                <li>
                  <span className="font-semibold text-dark dark:text-white">
                    {t('contacts.months.october')}:
                  </span>{' '}
                  2500 euro — {t('contacts.fullPrice')}
                </li>
                <li>
                  <span className="font-semibold text-dark dark:text-white">
                    {t('contacts.months.november')}:
                  </span>{' '}
                  2300 euro — {t('contacts.fullPrice')}
                </li>
                <li>
                  <span className="font-semibold text-dark dark:text-white">
                    {t('contacts.months.christmasNewYear')}:
                  </span>{' '}
                  2500 euro — {t('contacts.fullPrice')}
                </li>
                <li>
                  <span className="font-semibold text-dark dark:text-white">
                    {t('contacts.months.march')}:
                  </span>{' '}
                  2200 euro — {t('contacts.fullPrice')}
                </li>
                <li>
                  <span className="font-semibold text-dark dark:text-white">
                    {t('contacts.months.april')}:
                  </span>{' '}
                  2500 euro — {t('contacts.fullPrice')}
                </li>
              </ul>

              <p className="mt-4 text-left font-semibold text-primary-300">
                {t('contacts.deposit')}
              </p>
            </section>
          </div>
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
          <TextCard>
            <p>
              <span>{t('contacts.cleaning')}:</span> {t('contacts.cleaningFee')}{' '}
              <br />
              <span>{t('contacts.linen')}:</span> {t('contacts.linenFee')}
            </p>
          </TextCard>

          <TextCard>
            <p>
              <span>{t('contacts.discount')}:</span>{' '}
              {t('contacts.discountDetails')} <br />
              {t('contacts.individualDiscounts')}
            </p>
          </TextCard>
          <TextCard>
            <p>
              <span>{t('contacts.extraPerson')}:</span>{' '}
              {t('contacts.extraPersonFee')}
            </p>
          </TextCard>

          <TextCard>{t('contacts.paymentSchedule.firstCol')}</TextCard>

          <TextCard>{t('contacts.paymentSchedule.secondCol')}</TextCard>
          <TextCard>{t('contacts.paymentSchedule.thirdCol')}</TextCard>
        </ul>

        <ContactsAccordion />
      </div>
    </Page>
  );
}

export default Contacts;
