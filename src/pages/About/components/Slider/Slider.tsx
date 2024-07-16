import { Dispatch } from 'react';

import Slide from '../Slide/Slide';
import AbsBtn from '../AbsBtn/AbsBtn';
import Dots from '../Dots/Dots';
import Dot from '../Dot/Dot';

import { Images } from '../../../../types/Images';

interface SliderProps {
  active: number;
  setActive: Dispatch<number>;
  images: Images[];
  maxLength: number;
}

function Slider({ active, setActive, images, maxLength }: SliderProps) {
  function prevSlideHandler() {
    setActive(active < 1 ? maxLength - 1 : active - 1);
  }
  function nextSlideHandler() {
    setActive(active === maxLength - 1 ? 0 : active + 1);
  }
  function goToSlideHandler(slide: number) {
    if (slide === active) return;
    setActive(slide);
  }

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

      <AbsBtn position="left" onClick={() => prevSlideHandler()}>
        prev
      </AbsBtn>
      <AbsBtn position="right" onClick={() => nextSlideHandler()}>
        next
      </AbsBtn>

      <Dots>
        <>
          {Array.from({ length: 12 }, (_, i) => (
            <Dot
              key={i}
              slide={i}
              active={active}
              onClick={() => goToSlideHandler(i)}
            />
          ))}
        </>
      </Dots>
    </div>
  );
}

export default Slider;
