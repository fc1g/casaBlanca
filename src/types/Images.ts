export interface Source {
  source: {
    desktop: string;
    mobile: string;
  };
}

export interface Image extends Source {
  imgAltText: string;
}
