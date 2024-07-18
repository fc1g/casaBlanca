import { useRef } from 'react';

import AboutTabs from './components/AboutTabs/AboutTabs';
import Page from '../../components/layouts/Page/Page';
import Slider from './components/Slider/Slider';

import useInterval from '../../hooks/useInterval';

import config from '../../utils/config';
import T from '../../types/T';
import { Images } from '../../types/Images';

import loungeFromOutsideDesktop from '../../assets/images/desktop/loungeFromOutside.webp';
import loungeFromOutsideMobile from '../../assets/images/mobile/loungeFromOutside.webp';
import loungeDesktop from '../../assets/images/desktop/lounge.webp';
import loungeMobile from '../../assets/images/mobile/lounge.webp';
import diningRoomDesktop from '../../assets/images/desktop/diningRoom.webp';
import diningRoomMobile from '../../assets/images/mobile/diningRoom.webp';
import kitchenDesktop from '../../assets/images/desktop/kitchen.webp';
import kitchenMobile from '../../assets/images/mobile/kitchen.webp';
import doubleRoomDesktop from '../../assets/images/desktop/doubleRoom.webp';
import doubleRoomMobile from '../../assets/images/mobile/doubleRoom.webp';
import twinRoomDarkDesktop from '../../assets/images/desktop/twinRoomDark.webp';
import twinRoomDarkMobile from '../../assets/images/mobile/twinRoomDark.webp';
import twinRoomLightDesktop from '../../assets/images/desktop/twinRoomLight.webp';
import twinRoomLightMobile from '../../assets/images/mobile/twinRoomLight.webp';
import bathFirstDesktop from '../../assets/images/desktop/bathFirst.webp';
import bathFirstMobile from '../../assets/images/mobile/bathFirst.webp';
import bathSecondDesktop from '../../assets/images/desktop/bathSecond.webp';
import bathSecondMobile from '../../assets/images/mobile/bathSecond.webp';
import terasaEnterDesktop from '../../assets/images/desktop/terasaEnter.webp';
import terasaEnterMobile from '../../assets/images/mobile/terasaEnter.webp';
import terasaDesktop from '../../assets/images/desktop/terasa.webp';
import terasaMobile from '../../assets/images/mobile/terasa.webp';
import poolDesktop from '../../assets/images/desktop/pool.webp';
import poolMobile from '../../assets/images/mobile/pool.webp';

function About({ t }: T) {
  const wrapper = useRef<HTMLDivElement>(null);
  const images: Images[] = [
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
  ];
  const maxLength = images.length;

  const sec = config.SLIDER_INTERVAL;
  const { value: activeSlide, setValue: setActiveSlide } = useInterval({
    maxLength,
    sec,
  });

  return (
    <Page wrapper={wrapper} logoStyles="text-transparent" t={t}>
      <>
        <Slider
          active={activeSlide}
          setActive={setActiveSlide}
          images={images}
          maxLength={maxLength}
        />

        <AboutTabs t={t} />
      </>
    </Page>
  );
}

export default About;
