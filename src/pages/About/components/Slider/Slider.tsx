import { useMemo } from 'react';

import Slide from '../Slide/Slide';
import AbsBtn from '../AbsBtn/AbsBtn';
import Dots from '../Dots/Dots';
import Dot from '../Dot/Dot';

import useInterval from '../../../../hooks/useInterval';

import { Images } from '../../../../types/Images';
import config from '../../../../utils/config';

import loungeFromOutsideDesktop from '../../../../assets/images/desktop/loungeFromOutside.webp';
import loungeFromOutsideMobile from '../../../../assets/images/mobile/loungeFromOutside.webp';
import loungeDesktop from '../../../../assets/images/desktop/lounge.webp';
import loungeMobile from '../../../../assets/images/mobile/lounge.webp';
import diningRoomDesktop from '../../../../assets/images/desktop/diningRoom.webp';
import diningRoomMobile from '../../../../assets/images/mobile/diningRoom.webp';
import kitchenDesktop from '../../../../assets/images/desktop/kitchen.webp';
import kitchenMobile from '../../../../assets/images/mobile/kitchen.webp';
import doubleRoomDesktop from '../../../../assets/images/desktop/doubleRoom.webp';
import doubleRoomMobile from '../../../../assets/images/mobile/doubleRoom.webp';
import twinRoomDarkDesktop from '../../../../assets/images/desktop/twinRoomDark.webp';
import twinRoomDarkMobile from '../../../../assets/images/mobile/twinRoomDark.webp';
import twinRoomLightDesktop from '../../../../assets/images/desktop/twinRoomLight.webp';
import twinRoomLightMobile from '../../../../assets/images/mobile/twinRoomLight.webp';
import bathFirstDesktop from '../../../../assets/images/desktop/bathFirst.webp';
import bathFirstMobile from '../../../../assets/images/mobile/bathFirst.webp';
import bathSecondDesktop from '../../../../assets/images/desktop/bathSecond.webp';
import bathSecondMobile from '../../../../assets/images/mobile/bathSecond.webp';
import terasaEnterDesktop from '../../../../assets/images/desktop/terasaEnter.webp';
import terasaEnterMobile from '../../../../assets/images/mobile/terasaEnter.webp';
import terasaDesktop from '../../../../assets/images/desktop/terasa.webp';
import terasaMobile from '../../../../assets/images/mobile/terasa.webp';
import poolDesktop from '../../../../assets/images/desktop/pool.webp';
import poolMobile from '../../../../assets/images/mobile/pool.webp';
import useGlobal from '../../../../hooks/useGlobal';

function Slider() {
  const { t } = useGlobal()!;
  const images: Images[] = useMemo(
    () => [
      {
        source: {
          desktop: loungeFromOutsideDesktop,
          mobile: loungeFromOutsideMobile,
        },
        imgAltText: t('about.slider.loungeFromOutside'),
      },
      {
        source: {
          desktop: loungeDesktop,
          mobile: loungeMobile,
        },
        imgAltText: t('about.slider.lounge'),
      },
      {
        source: {
          desktop: diningRoomDesktop,
          mobile: diningRoomMobile,
        },
        imgAltText: t('about.slider.diningRoom'),
      },
      {
        source: {
          desktop: kitchenDesktop,
          mobile: kitchenMobile,
        },
        imgAltText: t('about.slider.kitchen'),
      },
      {
        source: {
          desktop: doubleRoomDesktop,
          mobile: doubleRoomMobile,
        },
        imgAltText: t('about.slider.doubleRoom'),
      },
      {
        source: {
          desktop: twinRoomDarkDesktop,
          mobile: twinRoomDarkMobile,
        },
        imgAltText: t('about.slider.twinRoomDark'),
      },
      {
        source: {
          desktop: twinRoomLightDesktop,
          mobile: twinRoomLightMobile,
        },
        imgAltText: t('about.slider.twinRoomLight'),
      },
      {
        source: {
          desktop: bathFirstDesktop,
          mobile: bathFirstMobile,
        },
        imgAltText: t('about.slider.bathFirst'),
      },
      {
        source: {
          desktop: bathSecondDesktop,
          mobile: bathSecondMobile,
        },
        imgAltText: t('about.slider.bathSecond'),
      },
      {
        source: {
          desktop: terasaEnterDesktop,
          mobile: terasaEnterMobile,
        },
        imgAltText: t('about.slider.terasaEnter'),
      },
      {
        source: {
          desktop: terasaDesktop,
          mobile: terasaMobile,
        },
        imgAltText: t('about.slider.terasa'),
      },
      {
        source: {
          desktop: poolDesktop,
          mobile: poolMobile,
        },
        imgAltText: t('about.slider.pool'),
      },
    ],
    [t]
  );

  const maxLength = images.length;

  const sec = config.SLIDER_INTERVAL;
  const { value: active, setValue: setActive } = useInterval({
    maxLength,
    sec,
  });

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
