import { create } from 'zustand';
import { Images } from '../../../../types/Images';

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

type State = {
  active: number;
  images: Images[];
};
type Action = {
  prevSlide: () => void;
  nextSlide: () => void;
  goToSlide: (slide: number) => void;
};

const useSlider = create<State & Action>()(set => ({
  active: 0,
  goToSlide: slide => set({ active: slide }),
  prevSlide: () =>
    set(state => ({
      active: state.active < 1 ? state.images.length - 1 : state.active - 1,
    })),
  nextSlide: () =>
    set(state => ({
      active: state.active === state.images.length - 1 ? 0 : state.active + 1,
    })),
  images: [
    {
      source: {
        desktop: loungeFromOutsideDesktop,
        mobile: loungeFromOutsideMobile,
      },
      imgAltText: 'about.slider.loungeFromOutside',
    },
    {
      source: {
        desktop: loungeDesktop,
        mobile: loungeMobile,
      },
      imgAltText: 'about.slider.lounge',
    },
    {
      source: {
        desktop: diningRoomDesktop,
        mobile: diningRoomMobile,
      },
      imgAltText: 'about.slider.diningRoom',
    },
    {
      source: {
        desktop: kitchenDesktop,
        mobile: kitchenMobile,
      },
      imgAltText: 'about.slider.kitchen',
    },
    {
      source: {
        desktop: doubleRoomDesktop,
        mobile: doubleRoomMobile,
      },
      imgAltText: 'about.slider.doubleRoom',
    },
    {
      source: {
        desktop: twinRoomDarkDesktop,
        mobile: twinRoomDarkMobile,
      },
      imgAltText: 'about.slider.twinRoomDark',
    },
    {
      source: {
        desktop: twinRoomLightDesktop,
        mobile: twinRoomLightMobile,
      },
      imgAltText: 'about.slider.twinRoomLight',
    },
    {
      source: {
        desktop: bathFirstDesktop,
        mobile: bathFirstMobile,
      },
      imgAltText: 'about.slider.bathFirst',
    },
    {
      source: {
        desktop: bathSecondDesktop,
        mobile: bathSecondMobile,
      },
      imgAltText: 'about.slider.bathSecond',
    },
    {
      source: {
        desktop: terasaEnterDesktop,
        mobile: terasaEnterMobile,
      },
      imgAltText: 'about.slider.terasaEnter',
    },
    {
      source: {
        desktop: terasaDesktop,
        mobile: terasaMobile,
      },
      imgAltText: 'about.slider.terasa',
    },
    {
      source: {
        desktop: poolDesktop,
        mobile: poolMobile,
      },
      imgAltText: 'about.slider.pool',
    },
  ],
}));

export default useSlider;
