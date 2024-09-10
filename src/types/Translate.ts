export type Translate = {
  page: {
    navigation: {
      home: string;
      about: string;
      vicinity: string;
      contacts: string;
    };
    hamburger: string;
    copyrights: string;
    notFound: {
      back: string;
      missing: string;
      info: string;
    };
    loading: string;
  };

  langList: {
    english: {
      text: 'English';
      imgAltText: string;
    };
    polish: {
      text: string;
      imgAltText: 'Polish';
    };
    spanish: {
      text: 'Spanish';
      imgAltText: string;
    };
  };

  homepage: {
    title: {
      firstPart: string;
      vacation: string;
      lastPart: string;
    };
    subtitle: string;
    btn: string;
    testimonials: {
      title: string;
      subtitle: string;
      btn: string;
      kuba: {
        title: string;
        text: string;
        userName: string;
        imgAltText: string;
      };
      monika: {
        title: string;
        text: string;
        userName: string;
        imgAltText: string;
      };
      nik: {
        title: string;
        text: string;
        userName: string;
        imgAltText: string;
      };
      adam: {
        title: string;
        text: string;
        userName: string;
        imgAltText: string;
      };
    };
  };

  about: {
    title: string;
    infoBtn: {
      house: string;
      vicinity: string;
      rentInfo: string;
    };
    infoText: {
      house: {
        firstPart: string;
        secondPart: string;
      };
      vicinity: {
        firstPart: string;
        secondPart: string;
      };
      rentInfo: {
        firstPart: string;
        secondPart: string;
      };
    };
    slider: {
      loungeFromOutside: string;
      lounge: string;
      diningRoom: string;
      kitchen: string;
      doubleRoom: string;
      twinRoomDark: string;
      twinRoomLight: string;
      bathFirst: string;
      bathSecond: string;
      terasaEnter: string;
      terasa: string;
      pool: string;
    };
  };

  vicinity: {
    title: string;
    subtitle: string;
    sort: {
      low: string;
      high: string;
    };
    limit: {
      first: string;
      third: string;
    };
    btns: {
      next: string;
      prev: string;
    };
  };

  contacts: {
    title: string;
    bookProcedure: {
      firstCol: {
        firstPart: string;
        secondPart: string;
        thirdPart: string;
      };
      secondCol: string;
      thirdCol: string;
    };
    subtitle: string;
    paymentSchedule: {
      firstCol: string;
      secondCol: string;
      thirdCol: string;
    };
    accordion: {
      phone: string;
      mail: string;
      firstPart: {
        title: string;
        customeText: string;
      };
      secondPart: {
        title: string;
        customeText: string;
      };
      important: {
        firstPart: string;
        secondPart: string;
      };
    };
    calendar: {
      prev: 'Prev month';
      next: 'Next month';
    };
    months: {
      abbr: {
        january: 'Jan';
        february: 'Feb';
        march: 'Mar';
        april: 'Apr';
        may: 'May';
        june: 'Jun';
        july: 'Jul';
        august: 'Aug';
        september: 'Sep';
        october: 'Oct';
        november: 'Nov';
        december: 'Dec';
      };
    };
  };

  place: {
    route: string;
  };

  errorMessage: string;
};
