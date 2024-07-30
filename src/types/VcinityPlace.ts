export interface VicinityPlace {
  _id: string;
  info: {
    briefInfo: Lang;
    title: Lang;
    text: Lang;
    imgAlt: Lang;
  };
  imgSource: string;
  routeLink: string;
  distance: number;
  coords: [number, number];
}

interface Lang {
  en: string;
  pl: string;
  es: string;
}
