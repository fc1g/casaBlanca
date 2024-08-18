export type Place = {
  _id: string;
  info: {
    briefInfo: Lang;
    title: Lang;
    text: Lang;
    imgAlt: Lang;
  };
  img: string;
  routeLink: string;
  distance: number;
  coords: [number, number];
};

export type VicinityPlace = {
  _id: string;
  img: string;
  info: {
    briefInfo: Lang;
    title: Lang;
    imgAlt: Lang;
  };
};

interface Lang {
  en: string;
  pl: string;
  es: string;
}
