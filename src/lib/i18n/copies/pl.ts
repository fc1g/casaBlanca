import { Translate } from '../../../types/Translate';

const pl = JSON.parse(`{
  "page": {
    "navigation": {
      "home": "Dom",
      "about": "O nas",
      "vicinity": "Okolica",
      "contacts": "Kontakty"
    },
    "hamburger": "Menu mobilne",
    "copyrights": "Wszelkie prawa zastrzeżone. Zbudowany przy użyciu",
    "notFound": {
      "back": "Powrót na stronę główną",
      "missing": "Czegoś brakuje.",
      "info": "Przepraszamy, nie możemy znaleźć tej strony. Na stronie głównej znajdziesz wiele do odkrycia."
    },
    "loading": "Ładowanie"
  },
  "langList": {
    "english": {
      "text": "Angielski",
      "imgAltText": ""
    },
    "polish": {
      "text": "Polski",
      "imgAltText": ""
    },
    "spanish": {
      "text": "Hiszpański",
      "imgAltText": ""
    }
  },
  "homepage": {
    "title": {
      "firstPart": "Sprawiamy, że Twoje",
      "vacation": "wakacje",
      "lastPart": "są lepsze"
    },
    "subtitle": "Wynajmij kawałek Hiszpanii: Twoje idealne mieszkanie czeka.",
    "btn": "Więcej info",
    "testimonials": {
      "title": "Nasze referencje",
      "subtitle": "Sprawdź nasze referencje na naszej stronie na Facebooku",
      "btn": "Pokaż więcej...",
      "kuba": {
        "title": "Dom bardzo dobrze utrzymany",
        "text": "Gorąco polecam, świetne miejsce, zawiera wszystkie niezbędne rzeczy do pobytu z dzieckiem! Bardzo miły i szybki kontakt z właścicielami, którzy zaproponują i pomogą rozwiązać każdy możliwy problem.",
        "userName": "Kuba",
        "imgAltText": ""
      },
      "monika": {
        "title": "Nowy, luksusowo urządzony dom",
        "text": "Gorąco polecam wakacje w tym pięknym domu. Urokliwe miasteczko, plaża i wiele aktywności wodnych. Doskonałe miejsce do relaksu i oderwania się od codziennego życia.",
        "userName": "Monika",
        "imgAltText": ""
      },
      "nik": {
        "title": "Dosłownie wszystko, czego potrzebujesz",
        "text": "Okolica jest cicha. Wiele restauracji. Bardzo pomocny personel. Właściciel jest do dogadania we wszystkich sprawach. Pani Anita bardzo pomocna na miejscu, zawsze możesz poprosić o pomoc.",
        "userName": "Nik",
        "imgAltText": ""
      },
      "adam": {
        "title": "Wspaniałe miejsce na wakacje",
        "text": "Mieszka się wygodnie, wygodnie, są dwa łazienki, jest internet, no i jest ciepły basen, blisko rynki, blisko morze, jest miejsce na zaparkowanie samochodu. Polecam",
        "userName": "Adam",
        "imgAltText": ""
      }
    }
  },
  "about": {
    "title": "Informacje o domu z zdjęciami.",
    "infoBtn": {
      "house": "Dom",
      "vicinity": "Okolica",
      "rentInfo": "Info o wynajmie"
    },
    "infoText": {
      "house": {
        "firstPart": "Dom ma wszystko, czego potrzeba do beztroskiego wypoczynku. Są tu trzy sypialnie (dla 8 osób), dwie łazienki, ogromny przestronny taras do relaksu i podgrzewany basen, który zapewnia komfort nawet zimą, pozwalając na relaks i pływanie w 30-stopniowej wodzie",
        "secondPart": "Dom posiada wszystkie niezbędne wyposażenie. Jeśli masz małe dziecko, znajdziesz tam zabawki, wózki, wysokie krzesełko oraz podgrzewacz do butelek. Niestety, nie przyjmujemy zwierząt domowych."
      },
      "vicinity": {
        "firstPart": "Nasz piękny dom znajduje się w dobrze rozwiniętym mieście San Pedro del Pinatar. Oferuje wszystko, czego potrzeba do niezapomnianych wakacji - centra handlowe, kawiarnie, restauracje, parki oraz plaża są wszystkie w zasięgu spaceru. Informacje o pobliskich atrakcjach znajdują się poniżej.",
        "secondPart": "W pobliżu domu znajduje się wiele miejsc parkingowych. Najbliższe lotniska to Alicante (1 godzina drogi) i Murcja (36 minut drogi). Jeśli potrzebujesz samochodu, możesz zorganizować transfery z firmą Calma."
      },
      "rentInfo": {
        "firstPart": "Warto wspomnieć, że jesteśmy obecni zarówno na Booking.com, jak i Airbnb. Jeśli nie masz pewności, możesz zarezerwować naszą nieruchomość przez te dwie popularne usługi. Jednakże, aby zaoszczędzić pieniądze, możesz bezpiecznie zarezerwować bezpośrednio u nas, wysyłając wiadomość lub dzwoniąc, aby ustalić daty.",
        "secondPart": "Gdy będziesz gotowy do dokonania rezerwacji, proszę skontaktować się z panią Anitą Violetta Kołodziejczyk. Ona jest odpowiedzialna za Twoją rezerwację i będzie na miejscu, aby pomóc Ci w dokonaniu rezerwacji."
      }
    },
    "slider": {
      "loungeFromOutside": "Nowoczesny salon z białą sofą i stołem, tworzący elegancką i minimalistyczną atmosferę.",
      "lounge": "Nowoczesny salon z białymi ścianami i dużym telewizorem.",
      "diningRoom": "Czysty i nowoczesny układ jadalni z eleganckimi meblami.",
      "kitchen": "Jasna kuchnia z drewnianym stołem i krzesłami, tworząca przytulny i zachęcający do jedzenia klimat.",
      "doubleRoom": "Luksusowa sypialnia z dużym łóżkiem.",
      "twinRoomDark": "Dwa łóżka w pokoju z kolorowym murallem na ścianie. Energiczna i przytulna przestrzeń do relaksu i odpoczynku.",
      "twinRoomLight": "Przytulna sypialnia z dwoma łóżkami i stylowym dywanem, tworząca komfortową i przyjemną atmosferę.",
      "bathFirst": "Luksusowa łazienka z eleganckimi marmurowymi ścianami i nieskazitelnymi białymi armaturami.",
      "bathSecond": "Luksusowa łazienka w białym kolorze z marmurowymi ścianami i podłogą.",
      "terasaEnter": "Nowoczesny dom z tarasem i schodami prowadzącymi do wejścia.",
      "terasa": "Dachowy taras z leżakami i stołem, idealny do relaksu na świeżym powietrzu.",
      "pool": "Stylowa willa z basenem i patio, oferująca spokojną i elegancką przestrzeń na zewnątrz."
    }
  },
  "vicinity": {
    "title": "Miejsca, które polecamy odwiedzić",
    "subtitle": "Miejsca, które musisz zobaczyć podczas swojej następnej przygody",
    "filters": "Filtry",
    "sort": "Sortuj",
    "limit": "Limit",
    "sortTypes": {
      "low": "Odległość: Niski do Wysokiego",
      "high": "Odległość: Od wysokiego do niskiego"
    },
    "limitTypes": {
      "first": "3 Pozycje na stronie",
      "third": "9 Pozycje na stronie"
    },
    "btns": {
      "next": "Następny",
      "prev": "Poprzedni"
    }
  },
  "contacts": {
    "title": "Procedura rezerwacji",
    "monthPriceTitle": "Cena za miesiąc (miesięcznie)",
    "months": {
      "october": "Październik",
      "november": "Listopad",
      "christmasNewYear": "Święta Bożego Narodzenia i Nowy Rok (2 tygodnie)",
      "march": "Marzec",
      "april": "Kwiecień"
    },
    "fullPrice": "całkowity koszt",
    "deposit": "Kaucja: Zwracana po pobycie, 300 euro.",
    "cleaning": "Sprzątanie",
    "cleaningFee": "140 euro (jednorazowa opłata).",
    "linen": "Komplet pościeli z praniem",
    "linenFee": "13 euro za osobę.",
    "discount": "Powyżej 10 dni",
    "discountDetails": "5% rabatu od całkowitego kosztu.",
    "individualDiscounts": "Indywidualne rabaty możliwe przy mniejszej liczbie osób w wyjątkowych przypadkach.",
    "extraPerson": "9-ta osoba",
    "extraPersonFee": "Dodatkowa opłata 40 euro/doba (tylko w wyjątkowych przypadkach).",
    "bookProcedure": {
      "firstCol": {
        "firstPart": "Jesteśmy dostępni na",
        "secondPart": "i",
        "thirdPart": "Jeśli wolisz, możesz zarezerwować przez te usługi. Aby zaoszczędzić pieniądze, skontaktuj się z nami bezpośrednio, aby ustalić terminy lub uzyskać pomoc w zakresie połączeń."
      },
      "secondCol": "Sprawdź szczegóły: które linie lotnicze, miasto wylotu i godziny lotów. Zarezerwuj swoje daty odpowiednio. Bez tych informacji standardowe zameldowanie jest o godzinie 16:00, a wymeldowanie o 11:00.",
      "thirdCol": "Zawsze możesz skontaktować się z nami po zakupie biletu. Jeśli to możliwe, postaramy się dostosować do Twojego harmonogramu. Jeśli znasz godziny swoich lotów, dostosujemy kalendarz do Twoich wymagań."
    },
    "subtitle": "Harmonogram płatności",
    "paymentSchedule": {
      "firstCol": "Pierwsza wpłata wynosi około 20-30% całkowitej kwoty i oczekujemy jej w ciągu 72 godzin.",
      "secondCol": "Druga wpłata wynosi połowę pozostałej kwoty i jest wymagana mniej więcej w połowie drogi do daty Twojego przyjazdu.",
      "thirdCol": "Trzecia wpłata to ostatnia rata przed Twoim przyjazdem. Aby się zameldować, cała kwota musi być zaksięgowana na naszym koncie."
    },
    "accordion": {
      "phone": "Telefon",
      "mail": "E-mail",
      "firstPart": {
        "title": "Masz jeszcze pytania? Zadzwoń do Eweliny Kwaśnej",
        "customeText": "Adres",
        "phoneNumber": "+48661128981",
        "email": "Casablancaespaniol@gmail.com",
        "customeData": "San Pedro",
        "importantLang": {
          "firstPart": "Pani Ewelina mówi",
          "only": "tylko",
          "secondPart": "po polsku, więc jeśli masz jakieś pytania, lepiej napisać po polsku."
        }
      },
      "secondPart": {
        "title": "W sprawie rezerwacji skontaktuj się z Anitą Kołodziejczyk.",
        "customeText": "Strona",
        "phoneNumber": "+34659901386",
        "email": "Info@avsinmo.com",
        "customeData": "Avsinmo.com",
        "importantLang": {
          "firstPart": "Pani Anita mówi",
          "only": "tylko",
          "secondPart": "po polsku, hiszpańsku i angielsku, więc jeśli masz jakieś pytania, lepiej napisać."
        }
      },
      "important": {
        "firstPart": "Prosimy o cierpliwość;",
        "secondPart": "Każdy z nas, oprócz wynajmu, ma inne zajęcie."
      }
    },
    "calendar": {
      "prev": "Prev month",
      "next": "Next month"
    }
  },
  "place": {
    "route": "Generowanie trasy"
  },
  "errorMessage": "Już pracujemy nad rozwiązaniem problemu."
}
`) as Translate;

export default pl;
