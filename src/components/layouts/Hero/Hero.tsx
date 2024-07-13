import { Link } from 'react-router-dom';
import T from '../../../types/T';

import bg from '../../../assets/images/desktop/terasaEnter.webp';
import Btn from '../../Btn/Btn';

function Hero({ t }: T) {
  return (
    <>
      <div
        className="mx-auto mb-8 flex h-[91vh] w-full text-white 2xl:container md:mb-16 dark:hidden"
        style={{
          background: `linear-gradient(to bottom, transparent 0, #00000080 50%),url(${bg}`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col justify-center px-3 sm:px-6">
          <h1 className="text-3xl xs:max-w-md xs:text-4xl sm:max-w-xl sm:text-5xl md:max-w-2xl md:text-6xl lg:max-w-4xl lg:text-7xl">
            {t('homepage.title.firstPart')}{' '}
            <span className="text-primary-300">
              {t('homepage.title.vacation')}
            </span>{' '}
            {t('homepage.title.lastPart')}
          </h1>

          <p className="mb-6 mt-2 text-xs xs:text-base md:text-lg lg:text-xl">
            {t('homepage.subtitle')}
          </p>

          <div className="inline-block">
            <Link to="/about">
              <Btn size="default" variant="default" className="">
                {t('homepage.btn')} &darr;
              </Btn>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="mx-auto mb-8 hidden h-[91vh] w-full text-white 2xl:container md:mb-16 dark:flex"
        style={{
          background: `linear-gradient(to bottom, #00000080 0, #00000080 50%),url(${bg}`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col justify-center px-3 sm:px-6">
          <h1 className="text-3xl xs:max-w-md xs:text-4xl sm:max-w-xl sm:text-5xl md:max-w-2xl md:text-6xl lg:max-w-4xl lg:text-7xl">
            {t('homepage.title.firstPart')}{' '}
            <span className="text-primary-300">
              {t('homepage.title.vacation')}
            </span>{' '}
            {t('homepage.title.lastPart')}
          </h1>

          <p className="mb-6 mt-2 text-xs xs:text-base md:text-lg lg:text-xl">
            {t('homepage.subtitle')}
          </p>

          <div className="inline-block">
            <Link to="/about">
              <Btn size="default" variant="default" className="">
                {t('homepage.btn')} &darr;
              </Btn>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
