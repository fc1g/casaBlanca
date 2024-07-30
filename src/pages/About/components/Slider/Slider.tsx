import { useEffect } from 'react';

import Slide from '../Slide/Slide';
import AbsBtn from '../AbsBtn/AbsBtn';
import Dots from '../Dots/Dots';
import Dot from '../Dot/Dot';

import useSlider from './sliderStore';

import config from '../../../../utils/config';

function Slider() {
  const images = useSlider(store => store.images);
  const active = useSlider(store => store.active);
  const prevSlide = useSlider(store => store.prevSlide);
  const nextSlide = useSlider(store => store.nextSlide);
  const goToSlide = useSlider(store => store.goToSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, config.SLIDER_INTERVAL * 1000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative mb-8 h-[90vh] w-full overflow-hidden 2xl:container md:h-screen 2xl:mx-auto 2xl:h-[90vh]">
      <ul>
        {images.map((image, i) => (
          <Slide
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            source={image.source}
            alt={image.imgAltText}
            percentage={(i - active) * 100}
          />
        ))}
      </ul>

      <AbsBtn position="left" onClick={() => prevSlide()}>
        prev
      </AbsBtn>
      <AbsBtn position="right" onClick={() => nextSlide()}>
        next
      </AbsBtn>

      <Dots>
        <>
          {Array.from({ length: 12 }, (_, i) => (
            <Dot
              key={i}
              slide={i}
              active={active}
              onClick={() => goToSlide(i)}
            />
          ))}
        </>
      </Dots>
    </div>
  );
}

export default Slider;
