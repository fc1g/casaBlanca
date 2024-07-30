import { Link } from 'react-router-dom';
import Btn from '../../../../components/Btn/Btn';

import bgDesc from '../../../../assets/images/desktop/terasaEnter.webp';
import bgMob from '../../../../assets/images/mobile/terasaEnter.webp';
import useGlobal from '../../../../hooks/globalStore';

function Hero() {
  const useTranslation = useGlobal(store => store.useTranslation);
  const { t } = useTranslation();

  return (
    <div className="relative mx-auto mb-8 flex h-[91vh] w-full text-white 2xl:container before:absolute before:inset-0 before:z-10 before:block before:bg-gradient-to-r before:from-[#00000080] before:to-[#00000080] before:opacity-75 before:content-[''] md:mb-16">
      <picture>
        <source media="(max-width: 720px)" srcSet={bgMob} />
        <img
          className="absolute inset-0 z-[1] h-full w-full object-cover object-center dark:brightness-75"
          src={bgDesc}
          alt={t('about.slider.terasaEnter')}
        />
      </picture>

      <div className="relative z-20 flex flex-col justify-center px-3 sm:px-6">
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
  );
}

export default Hero;
