import useGlobal from '../../../../hooks/globalStore';

function Chart() {
  const useTranslation = useGlobal(store => store.useTranslation);
  const { t } = useTranslation();
  return (
    <div className="px-1 md:mb-0">
      <div
        className="h-44 gap-x-[3px] border-b border-[#3f3f46] text-center text-xs md:text-sm"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(35, 1fr)',
          gridTemplateRows: 'repeat(10, 1fr)',
        }}
      >
        {/* 1 */}
        <div className="bg-white" style={{ gridArea: '11 / 1 / 7 / 3' }} />
        <div className="bg-blue-500" style={{ gridArea: '11 / 1 / 10 / 3' }} />
        <div className="bg-yellow-500" style={{ gridArea: '10 / 1 / 9 / 3' }} />
        <div className="text-white" style={{ gridArea: '11 / 1 / 6 / 3' }}>
          130
        </div>

        {/* 2 */}
        <div className="bg-white" style={{ gridArea: '11 / 4 / 7 / 6' }} />
        <div className="bg-blue-500" style={{ gridArea: '11 / 4 / 10 / 6' }} />
        <div className="bg-yellow-500" style={{ gridArea: '10 / 4 / 9 / 6' }} />
        <div className="text-white" style={{ gridArea: '11 / 4 / 6 / 6' }}>
          130
        </div>
        {/* 3 */}
        <div className="bg-white" style={{ gridArea: '11 / 7 / 6 / 9' }} />
        <div className="bg-blue-500" style={{ gridArea: '11 / 7 / 10 / 9' }} />
        <div className="bg-yellow-500" style={{ gridArea: '10 / 7 / 9 / 9' }} />
        <div className="text-white" style={{ gridArea: '11 / 7 / 5 / 9' }}>
          150
        </div>
        {/* 4 */}
        <div className="bg-white" style={{ gridArea: '11 / 10 / 6 / 12' }} />
        <div className="bg-blue-500" style={{ gridArea: '11 / 10 / 9 / 12' }} />
        <div
          className="bg-yellow-500"
          style={{ gridArea: '9 / 10 / 7 / 12' }}
        />
        <div className="text-white" style={{ gridArea: '11 / 10 / 5 / 12' }}>
          150
        </div>
        {/* 5 */}
        <div className="bg-white" style={{ gridArea: '11 / 13 / 5 / 15' }} />
        <div className="bg-blue-500" style={{ gridArea: '11 / 13 / 9 / 15' }} />
        <div
          className="bg-yellow-500"
          style={{ gridArea: '9 / 13 / 7 / 15' }}
        />
        <div className="text-white" style={{ gridArea: '11 / 13 / 4 / 15' }}>
          170
        </div>
        {/* 6 */}
        <div className="bg-white" style={{ gridArea: '11 / 16 / 4 / 18' }} />
        <div className="bg-blue-500" style={{ gridArea: '11 / 16 / 8 / 18' }} />
        <div
          className="bg-yellow-500"
          style={{ gridArea: '8 / 16 / 5 / 18' }}
        />
        <div className="text-white" style={{ gridArea: '11 / 16 / 3 / 18' }}>
          200
        </div>
        {/* 7 */}
        <div className="bg-white" style={{ gridArea: '11 / 19 / 3 / 21' }} />
        <div className="bg-blue-500" style={{ gridArea: '11 / 19 / 8 / 21' }} />
        <div
          className="bg-yellow-500"
          style={{ gridArea: '8 / 19 / 5 / 21' }}
        />
        <div className="text-white" style={{ gridArea: '11 / 19 / 2 / 21' }}>
          250
        </div>
        {/* 8 */}
        <div className="bg-white" style={{ gridArea: '11 / 22 / 2 / 24' }} />
        <div className="bg-blue-500" style={{ gridArea: '11 / 22 / 9 / 24' }} />
        <div
          className="bg-yellow-500"
          style={{ gridArea: '9 / 22 / 7 / 24' }}
        />
        <div className="text-white" style={{ gridArea: '11 / 22 / 1 / 24' }}>
          280
        </div>
        {/* 9 */}
        <div className="bg-white" style={{ gridArea: '11 / 25 / 4 / 27' }} />
        <div className="bg-blue-500" style={{ gridArea: '11 / 25 / 9 / 27' }} />
        <div
          className="bg-yellow-500"
          style={{ gridArea: '9 / 25 / 7 / 27' }}
        />
        <div className="text-white" style={{ gridArea: '11 / 25 / 3 / 27' }}>
          200
        </div>
        {/* 10 */}
        <div className="bg-white" style={{ gridArea: '11 / 28 / 6 / 30' }} />
        <div
          className="bg-blue-500"
          style={{ gridArea: '11 / 28 / 10 / 30' }}
        />
        <div
          className="bg-yellow-500"
          style={{ gridArea: '10 / 28 / 9 / 30' }}
        />
        <div className="text-white" style={{ gridArea: '11 / 28 / 5 / 30' }}>
          150
        </div>
        {/* 11 */}
        <div className="bg-white" style={{ gridArea: '11 / 31 / 6 / 33' }} />
        <div
          className="bg-blue-500"
          style={{ gridArea: '11 / 31 / 10 / 33' }}
        />
        <div
          className="bg-yellow-500"
          style={{ gridArea: '10 / 31 / 9 / 33' }}
        />
        <div className="text-white" style={{ gridArea: '11 / 31 / 5 / 33' }}>
          150
        </div>
        {/* 12 */}
        <div className="bg-white" style={{ gridArea: '11 / 34 / 6 / 36' }} />
        <div
          className="bg-blue-500"
          style={{ gridArea: '11 / 34 / 10 / 36' }}
        />
        <div
          className="bg-yellow-500"
          style={{ gridArea: '10 / 34 / 9 / 36' }}
        />
        <div className="text-white" style={{ gridArea: '11 / 34 / 5 / 36' }}>
          150
        </div>
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
