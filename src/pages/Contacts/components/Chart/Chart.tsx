import Children from '../../../../types/Children';
import T from '../../../../types/T';

interface ChartProps extends T, Children {}

function Chart({ t, children }: ChartProps) {
  return (
    <div className="mb-12 px-1 md:mb-0">
      <div
        className="h-44 gap-x-[3px] border-b border-[#3f3f46] md:gap-x-[6px] [&>*:nth-child(even)]:bg-secondary-300 [&>*:nth-child(odd)]:bg-primary-500"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(35, 1fr)',
          gridTemplateRows: 'repeat(10, 1fr)',
        }}
      >
        <div style={{ gridArea: '11 / 1 / 3 / 1' }} />
        <div style={{ gridArea: '11 / 2 / 1 / 2' }} />

        <div style={{ gridArea: '11 / 4 / 5 / 4' }} />
        <div style={{ gridArea: '11 / 5 / 3 / 5' }} />

        <div style={{ gridArea: '11 / 7 / 6 / 7' }} />
        <div style={{ gridArea: '11 / 8 / 7 / 8' }} />

        <div style={{ gridArea: '11 / 10 / 1 / 10' }} />
        <div style={{ gridArea: '11 / 11 / 3 / 11' }} />

        <div style={{ gridArea: '11 / 13 / 5 / 13' }} />
        <div style={{ gridArea: '11 / 14 / 2 / 14' }} />

        <div style={{ gridArea: '11 / 16 / 6 / 16' }} />
        <div style={{ gridArea: '11 / 17 / 7 / 17' }} />

        <div style={{ gridArea: '11 / 19 / 8 / 19' }} />
        <div style={{ gridArea: '11 / 20 / 10 / 20' }} />

        <div style={{ gridArea: '11 / 22 / 6 / 22' }} />
        <div style={{ gridArea: '11 / 23 / 7 / 23' }} />

        <div style={{ gridArea: '11 / 25 / 9 / 25' }} />
        <div style={{ gridArea: '11 / 26 / 4 / 26' }} />

        <div style={{ gridArea: '11 / 28 / 8 / 28' }} />
        <div style={{ gridArea: '11 / 29 / 7 / 29' }} />

        <div style={{ gridArea: '11 / 31 / 4 / 31' }} />
        <div style={{ gridArea: '11 / 32 / 8 / 32' }} />

        <div style={{ gridArea: '11 / 34 / 9 / 34' }} />
        <div style={{ gridArea: '11 / 35 / 2 / 35' }} />
      </div>

      <div
        className="[&>div]:text-gray-lightDark md:gap-x-[6px] [&>*:nth-child(odd)]:col-span-2 [&>*:nth-child(odd)]:pt-3 [&>*:nth-child(odd)]:text-center [&>*:nth-child(odd)]:text-xs [&>*:nth-child(odd)]:opacity-50 [&>div]:dark:text-gray-300"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(35, 1fr)',
        }}
      >
        <div>{t('contacts.months.abbr.january')}</div>
        <div />
        <div>{t('contacts.months.abbr.february')}</div>
        <div />
        <div>{t('contacts.months.abbr.march')}</div>
        <div />
        <div>{t('contacts.months.abbr.april')}</div>
        <div />
        <div>{t('contacts.months.abbr.may')}</div>
        <div />
        <div>{t('contacts.months.abbr.june')}</div>
        <div />
        <div>{t('contacts.months.abbr.july')}</div>
        <div />
        <div>{t('contacts.months.abbr.august')}</div>
        <div />
        <div>{t('contacts.months.abbr.september')}</div>
        <div />
        <div>{t('contacts.months.abbr.october')}</div>
        <div />
        <div>{t('contacts.months.abbr.november')}</div>
        <div />
        <div>{t('contacts.months.abbr.december')}</div>
      </div>

      {children}
    </div>
  );
}

export default Chart;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="mb-12 px-1 md:mb-0">
  <div
    className="h-44 gap-x-[3px] border-b border-[#3f3f46] md:gap-x-[6px] [&>*:nth-child(even)]:bg-secondary-300 [&>*:nth-child(odd)]:bg-primary-500"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(35, 1fr)',
      gridTemplateRows: 'repeat(10, 1fr)',
    }}
  >
    <div style={{ gridArea: '11 / 1 / 3 / 1' }} />
    <div style={{ gridArea: '11 / 2 / 1 / 2' }} />

    <div style={{ gridArea: '11 / 4 / 5 / 4' }} />
    <div style={{ gridArea: '11 / 5 / 3 / 5' }} />

    <div style={{ gridArea: '11 / 7 / 6 / 7' }} />
    <div style={{ gridArea: '11 / 8 / 7 / 8' }} />

    <div style={{ gridArea: '11 / 10 / 1 / 10' }} />
    <div style={{ gridArea: '11 / 11 / 3 / 11' }} />

    <div style={{ gridArea: '11 / 13 / 5 / 13' }} />
    <div style={{ gridArea: '11 / 14 / 2 / 14' }} />

    <div style={{ gridArea: '11 / 16 / 6 / 16' }} />
    <div style={{ gridArea: '11 / 17 / 7 / 17' }} />

    <div style={{ gridArea: '11 / 19 / 8 / 19' }} />
    <div style={{ gridArea: '11 / 20 / 10 / 20' }} />

    <div style={{ gridArea: '11 / 22 / 6 / 22' }} />
    <div style={{ gridArea: '11 / 23 / 7 / 23' }} />

    <div style={{ gridArea: '11 / 25 / 9 / 25' }} />
    <div style={{ gridArea: '11 / 26 / 4 / 26' }} />

    <div style={{ gridArea: '11 / 28 / 8 / 28' }} />
    <div style={{ gridArea: '11 / 29 / 7 / 29' }} />

    <div style={{ gridArea: '11 / 31 / 4 / 31' }} />
    <div style={{ gridArea: '11 / 32 / 8 / 32' }} />

    <div style={{ gridArea: '11 / 34 / 9 / 34' }} />
    <div style={{ gridArea: '11 / 35 / 2 / 35' }} />
  </div>

  <div
    className="[&>div]:text-gray-lightDark md:gap-x-[6px] [&>*:nth-child(odd)]:col-span-2 [&>*:nth-child(odd)]:pt-3 [&>*:nth-child(odd)]:text-center [&>*:nth-child(odd)]:text-xs [&>*:nth-child(odd)]:opacity-50 [&>div]:dark:text-gray-300"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(35, 1fr)',
    }}
  >
    <div>{t('contacts.months.abbr.january')}</div>
    <div />
    <div>{t('contacts.months.abbr.february')}</div>
    <div />
    <div>{t('contacts.months.abbr.march')}</div>
    <div />
    <div>{t('contacts.months.abbr.april')}</div>
    <div />
    <div>{t('contacts.months.abbr.may')}</div>
    <div />
    <div>{t('contacts.months.abbr.june')}</div>
    <div />
    <div>{t('contacts.months.abbr.july')}</div>
    <div />
    <div>{t('contacts.months.abbr.august')}</div>
    <div />
    <div>{t('contacts.months.abbr.september')}</div>
    <div />
    <div>{t('contacts.months.abbr.october')}</div>
    <div />
    <div>{t('contacts.months.abbr.november')}</div>
    <div />
    <div>{t('contacts.months.abbr.december')}</div>
  </div>

  {children}
</div> */
}
