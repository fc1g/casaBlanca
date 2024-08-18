import { useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';

import useGlobal from '../../hooks/useGlobal';
import useSlider from './sliderStore';

import Children from '../../types/Children';
import config from '../../utils/config';

function Slider({ children }: Children) {
  const nextSlide = useSlider(store => store.nextSlide);
  const active = useSlider(store => store.active);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, config.SLIDER_INTERVAL * 1000);

    return () => clearInterval(interval);
  }, [nextSlide, active]);

  return (
    <div className="relative mb-8 h-[90vh] w-full overflow-hidden 2xl:container md:h-screen 2xl:mx-auto 2xl:h-[90vh]">
      {children}
    </div>
  );
}

function Slides() {
  const { t } = useGlobal()!;

  const images = useSlider(store => store.images);
  const active = useSlider(store => store.active);

  return (
    <ul>
      {images.map((image, i) => (
        <li
          key={image.imgAltText}
          className="transtion absolute top-0 grid h-screen w-full items-center justify-center duration-1000"
          style={{
            transform: `translateX(${(i - active) * 100}%)`,
          }}
        >
          <picture>
            <source media="(max-width: 720px)" srcSet={image.source.mobile} />
            <img
              className="h-full w-full object-cover object-center dark:brightness-75"
              src={image.source.desktop}
              alt={t(`${image.imgAltText}`)}
            />
          </picture>
        </li>
      ))}
    </ul>
  );
}

type AbsBtnProps = {
  position: 'left' | 'right';
} & Children;

function AbsBtn({ position, children }: AbsBtnProps) {
  const prevSlide = useSlider(store => store.prevSlide);
  const nextSlide = useSlider(store => store.nextSlide);

  return (
    <button
      onClick={position === 'left' ? prevSlide : nextSlide}
      type="button"
      className={`group absolute ${position === 'left' ? 'left-0' : 'right-0'} top-2/4 z-30 flex -translate-y-2/4 cursor-pointer items-center justify-center px-4 focus:outline-none`}
    >
      <span className="duration-400 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 transition hover:bg-gray-400 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-700 dark:hover:bg-lightDark dark:group-focus:ring-gray-800/70">
        {position === 'left' && (
          <ChevronLeftIcon className="h-6 w-6 text-dark lg:h-8 lg:w-8 dark:text-white" />
        )}
        {position === 'right' && (
          <ChevronRightIcon className="h-6 w-6 text-dark lg:h-8 lg:w-8 dark:text-white" />
        )}
        <span className="sr-only">{children}</span>
      </span>
    </button>
  );
}

function Dots() {
  const active = useSlider(store => store.active);
  const goToSlide = useSlider(store => store.goToSlide);
  const maxLength = useSlider(store => store.maxLength);

  return (
    <div className="absolute bottom-5 left-2/4 flex -translate-x-2/4 space-x-4 sm:space-x-6">
      {Array.from({ length: maxLength() }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => goToSlide(i)}
          className={`h-3 w-3 cursor-pointer rounded-full transition duration-300 hover:bg-primary-800 md:h-3 md:w-3 dark:hover:bg-primary-300 ${active === i ? 'bg-primary-800 dark:bg-primary-300' : 'bg-gray-300 dark:bg-gray-300'}`}
        >
          <span className="sr-only">Dot</span>
        </button>
      ))}
    </div>
  );
}

Slider.Slides = Slides;

Slider.AbsBtn = AbsBtn;

Slider.Dots = Dots;

export default Slider;
