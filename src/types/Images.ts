export interface Source {
  source: {
    desktop: string;
    mobile: string;
  };
}

export interface Images extends Source {
  imgAltText: string;
}
