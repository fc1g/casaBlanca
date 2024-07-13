export default interface VicinityPlace {
  _id: string;
  info: {
    title: {
      eng: string;
      pl: string;
      sp: string;
    };
    text: {
      eng: string;
      pl: string;
      sp: string;
    };
    briefInfo: {
      eng: string;
      pl: string;
      sp: string;
    };
    imgAlt: {
      eng: string;
      pl: string;
      sp: string;
    };
  };
  imgSource: string;
  routeLink: string;
  distance: number;
  coords: [number, number];
}
