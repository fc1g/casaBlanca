/* eslint-disable no-nested-ternary */
import { enGB, es, pl } from 'date-fns/locale';
import { format } from 'date-fns';
import useGlobal from '../../hooks/useGlobal';
import LOCALS from '../../lib/i18n/constants';

function Chart() {
  const { currLang } = useGlobal()!;
  const lang = currLang === LOCALS.PL ? pl : currLang === LOCALS.SP ? es : enGB;

  return (
    <div className="px-1 md:mb-0">
      <div
        className="h-44 gap-x-[3px] border-b border-[#3f3f46] text-center text-xs sm:gap-x-2 md:gap-x-[3px] md:text-sm [&:nth-child(odd)]:text-[0.6rem] [&:nth-child(odd)]:xs:text-xs [&:nth-child(odd)]:md:text-[0.5rem] [&:nth-child(odd)]:lg:text-sm"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(35, 1fr)',
          gridTemplateRows: 'repeat(10, 1fr)',
        }}
      >
        {/* 1 */}
        <div
          className="bg-primary-800 dark:bg-primary-300"
          style={{ gridArea: '11 / 1 / 7 / 3' }}
        />
        <div
          className="text-lightDark dark:text-white"
          style={{ gridArea: '11 / 1 / 6 / 3' }}
        >
          150€
        </div>

        {/* 2 */}
        <div
          className="bg-primary-800 dark:bg-primary-300"
          style={{ gridArea: '11 / 4 / 7 / 6' }}
        />
        <div
          className="text-lightDark dark:text-white"
          style={{ gridArea: '11 / 4 / 6 / 6' }}
        >
          150€
        </div>
        {/* 3 */}
        <div
          className="bg-primary-800 dark:bg-primary-300"
          style={{ gridArea: '11 / 7 / 7 / 9' }}
        />
        <div
          className="text-lightDark dark:text-white"
          style={{ gridArea: '11 / 7 / 6 / 9' }}
        >
          150€
        </div>
        {/* 4 */}
        <div
          className="bg-primary-800 dark:bg-primary-300"
          style={{ gridArea: '11 / 10 / 5 / 12' }}
        />
        <div
          className="text-lightDark dark:text-white"
          style={{ gridArea: '11 / 10 / 4 / 12' }}
        >
          170€
        </div>
        {/* 5 */}
        <div
          className="bg-primary-800 dark:bg-primary-300"
          style={{ gridArea: '11 / 13 / 5 / 15' }}
        />
        <div
          className="text-lightDark dark:text-white"
          style={{ gridArea: '11 / 13 / 4 / 15' }}
        >
          170€
        </div>
        {/* 6 */}
        <div
          className="bg-primary-800 dark:bg-primary-300"
          style={{ gridArea: '11 / 16 / 4 / 18' }}
        />
        <div
          className="text-lightDark dark:text-white"
          style={{ gridArea: '11 / 16 / 3 / 18' }}
        >
          200€
        </div>
        {/* 7 */}
        <div
          className="bg-primary-800 dark:bg-primary-300"
          style={{ gridArea: '11 / 19 / 3 / 21' }}
        />
        <div
          className="text-lightDark dark:text-white"
          style={{ gridArea: '11 / 19 / 2 / 21' }}
        >
          250€
        </div>
        {/* 8 */}
        <div
          className="bg-primary-800 dark:bg-primary-300"
          style={{ gridArea: '11 / 22 / 2 / 24' }}
        />
        <div
          className="text-lightDark dark:text-white"
          style={{ gridArea: '11 / 22 / 1 / 24' }}
        >
          280€
        </div>
        {/* 9 */}
        <div
          className="bg-primary-800 dark:bg-primary-300"
          style={{ gridArea: '11 / 25 / 4 / 27' }}
        />
        <div
          className="text-lightDark dark:text-white"
          style={{ gridArea: '11 / 25 / 3 / 27' }}
        >
          200€
        </div>
        {/* 10 */}
        <div
          className="bg-primary-800 dark:bg-primary-300"
          style={{ gridArea: '11 / 28 / 5 / 30' }}
        />
        <div
          className="text-lightDark dark:text-white"
          style={{ gridArea: '11 / 28 / 4 / 30' }}
        >
          170€
        </div>
        {/* 11 */}
        <div
          className="bg-primary-800 dark:bg-primary-300"
          style={{ gridArea: '11 / 31 / 7 / 33' }}
        />
        <div
          className="text-lightDark dark:text-white"
          style={{ gridArea: '11 / 31 / 6 / 33' }}
        >
          150€
        </div>
        {/* 12 */}
        <div
          className="bg-primary-800 dark:bg-primary-300"
          style={{ gridArea: '11 / 34 / 7 / 36' }}
        />

        <div
          className="text-lightDark dark:text-white"
          style={{ gridArea: '11 / 34 / 6 / 36' }}
        >
          150€
        </div>
      </div>

      <div
        className="[&>div]:text-gray-lightDark md:gap-x-[6px] [&>*:nth-child(odd)]:col-span-2 [&>*:nth-child(odd)]:pt-3 [&>*:nth-child(odd)]:text-center [&>*:nth-child(odd)]:text-xs [&>*:nth-child(odd)]:opacity-50 [&>div]:dark:text-gray-300"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(35, 1fr)',
        }}
      >
        <div>{format(new Date(2024, 0), 'MMM', { locale: lang })}</div>
        <div />
        <div>{format(new Date(2024, 1), 'MMM', { locale: lang })}</div>
        <div />
        <div>{format(new Date(2024, 2), 'MMM', { locale: lang })}</div>
        <div />
        <div>{format(new Date(2024, 3), 'MMM', { locale: lang })}</div>
        <div />
        <div>{format(new Date(2024, 4), 'MMM', { locale: lang })}</div>
        <div />
        <div>{format(new Date(2024, 5), 'MMM', { locale: lang })}</div>
        <div />
        <div>{format(new Date(2024, 6), 'MMM', { locale: lang })}</div>
        <div />
        <div>{format(new Date(2024, 7), 'MMM', { locale: lang })}</div>
        <div />
        <div>{format(new Date(2024, 8), 'MMM', { locale: lang })}</div>
        <div />
        <div>{format(new Date(2024, 9), 'MMM', { locale: lang })}</div>
        <div />
        <div>{format(new Date(2024, 10), 'MMM', { locale: lang })}</div>
        <div />
        <div>{format(new Date(2024, 11), 'MMM', { locale: lang })}</div>
        <div />
      </div>
    </div>
  );
}

export default Chart;
