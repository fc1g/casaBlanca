import { Translate } from '../../../types/Translate';

const en = JSON.parse(`{
  "page": {
    "navigation": {
      "home": "Home",
      "about": "About",
      "vicinity": "Vicinity",
      "contacts": "Contacts"
    },
    "hamburger": "Mobile menu",
    "copyrights": "All Rights Reserverd. Built with",
    "notFound": {
      "back": "Back to Homepage",
      "missing": "Something's missing.",
      "info": "Sorry, we can't find that page. You'll find lots to explore on the home page."
    },
    "loading": "Loading"
  },
  "langList": {
    "english": {
      "text": "English",
      "imgAltText": ""
    },
    "polish": {
      "text": "Polish",
      "imgAltText": ""
    },
    "spanish": {
      "text": "Spanish",
      "imgAltText": ""
    }
  },
  "homepage": {
    "title": {
      "firstPart": "We make your",
      "vacation": "vacation",
      "lastPart": "better"
    },
    "subtitle": "Rent a Slice of Spain: Your Ideal Home Awaits",
    "btn": "More info",
    "testimonials": {
      "title": "Our testimonials",
      "subtitle": "Check out our testimonials from our Facebook page",
      "btn": "Show more...",
      "kuba": {
        "title": "House very well maintained",
        "text": "Highly recommend, includes all the necessary things to stay with a child! Very nice and quick contact with the owners, who will help solve any possible problem.",
        "userName": "Kuba",
        "imgAltText": ""
      },
      "monika": {
        "title": "Luxuriously furnished house",
        "text": "I highly recommend a vacation in this beautiful house. Charming town, beach, and plenty of water activities. Perfect place to relax and get away from everyday life.",
        "userName": "Monika",
        "imgAltText": ""
      },
      "nik": {
        "title": "Literally everything you need",
        "text": "The neighborhood is quiet. Lots of restaurants. Very helpful staff. The owner to get along in every subject. Ms. Anita very helpful you can always ask for help.",
        "userName": "Nik",
        "imgAltText": ""
      },
      "adam": {
        "title": "A great place for vacation",
        "text": "You live comfortably, conveniently, two bathrooms, there is internet, well, and there is a warm pool, close to markets, close to the sea, there is a place to park a car.",
        "userName": "Adam",
        "imgAltText": ""
      }
    }
  },
  "about": {
    "title": "Information about the house with photos",
    "infoBtn": {
      "house": "House",
      "vicinity": "Vicinity",
      "rentInfo": "Rent info"
    },
    "infoText": {
      "house": {
        "firstPart": "The house has everything you need for a carefree vacation. There are three bedrooms (for 8 people), two bathrooms, a huge and spacious terrace, and a heated swimming pool. Even in winter, you can relax and swim in water with a temperature of 30 degrees.",
        "secondPart": "The house has all the necessary equipment. If you have a small child, there are toys, strollers, a high chair, and a bottle warmer for them. Unfortunately, we do not allow pets."
      },
      "vicinity": {
        "firstPart": "Our beautiful house is in the well-developed town of San Pedro del Pinatar. It offers everything for an unforgettable vacation, with shopping centers, restaurants, parks, and the beach all within walking distance. Information about nearby attractions is available below.",
        "secondPart": "There are many parking spaces near the house. The nearest airports are Alicante and Murcia. If you need a car, you can arrange a transfer with the Calma company."
      },
      "rentInfo": {
        "firstPart": "It's worth mentioning that we are on both Booking and Airbnb. If you don't feel confident, you can book the property through these two services. However, to save money, feel free to book directly with us by sending a message or giving us a call to arrange the dates.",
        "secondPart": "Once you are ready to make a reservation, contact Mrs. Anita Kołodziejczyk. She is responsible for your booking and will be on-site to assist you with your reservation."
      }
    },
    "slider": {
      "loungeFromOutside": "A contemporary living room featuring a white couch and table, creating a sleek and minimalist ambiance.",
      "lounge": "A modern living room with white walls and a large television",
      "diningRoom": "Clean and modern dining room setup with elegant furniture.",
      "kitchen": "A well-lit kitchen with a wooden table and chairs, creating a cozy and inviting dining area.",
      "doubleRoom": "Luxurious bedroom featuring a large bed",
      "twinRoomDark": "Two beds in a room with a colorful wall mural. A vibrant and cozy space for relaxation and rest.",
      "twinRoomLight": "A cozy bedroom with two beds and a stylish rug, creating a comfortable and inviting atmosphere.",
      "bathFirst": "A luxurious bathroom with elegant marble walls and pristine white fixtures.",
      "bathSecond": "Luxurious white bathroom featuring marble walls and floor.",
      "terasaEnter": "A modern home with a patio and stairs leading to the entrance.",
      "terasa": "Rooftop patio with lounge chairs and table, perfect for relaxing outdoors.",
      "pool": "Stylish villa with swimming pool and patio, offering a serene and elegant outdoor space."
    }
  },
  "vicinity": {
    "title": "Places we recommend to visit",
    "subtitle": "Must-See Destinations for Your Next Adventure",
    "filters": "Filters",
    "sort": "Sort",
    "limit": "Limit",
    "sortTypes": {
      "low": "Distance: Low to High",
      "high": "Distance: High to Low"
    },
    "limitTypes": {
      "first": "3 Items on page",
      "third": "9 Items on page"
    },
    "btns": {
      "next": "Next",
      "prev": "Prev"
    }
  },
  "contacts": {
    "title": "Booking Procedure",
    "monthPriceTitle": "Month price (monthly)",
    "months": {
      "october": "October",
      "november": "November",
      "christmasNewYear": "Christmas and New Year (2 weeks)",
      "march": "March",
      "april": "April"
    },
    "fullPrice": "full price",
    "deposit": "Deposit: Refundable after the stay, 300 euros.",
     "cleaning": "Cleaning",
    "cleaningFee": "140 euro (one-time fee).",
    "linen": "Linen set with washing",
    "linenFee": "13 euro per person.",
    "discount": "Over 10 days",
    "discountDetails": "5% discount from the total cost.",
    "individualDiscounts": "Individual discounts are possible with fewer people in exceptional cases.",
    "extraPerson": "9th person",
    "extraPersonFee": "Additional payment 40 euro/day (only in exceptional cases).",
    "bookProcedure": {
      "firstCol": {
        "firstPart": "We are available on",
        "secondPart": "and",
        "thirdPart": "If you prefer, you can book through these services. To save money, contact us directly to arrange dates or for assistance with connections."
      },
      "secondCol": "Check the details: which airlines, departure city, and flight times. Book your dates accordingly. Without this information, standard check-in is at 16:00 and check-out at 11:00.",
      "thirdCol": "You can always contact us after purchasing your ticket. If possible, we will try to accommodate your schedule. If you know your flight times, we will adjust the calendar to your requirements."
    },
    "subtitle": "How to Book Your Reservation: Step-by-Step Guide",
    "paymentSchedule": {
      "firstCol": "The first transfer is about 20-30% of the total amount and we expect it within 72 hours.",
      "secondCol": "The second transfer is half of the remaining amount, due about halfway to your arrival date.",
      "thirdCol": "The third transfer is the final installment before your arrival. To check in, the total amount must be credited to our account."
    },
    "accordion": {
      "phone": "Phone",
      "mail": "Mail",
      "firstPart": {
        "title": "Still have questions ? Call Ewelina Kwaśna",
        "customeText": "Address",
        "phoneNumber": "+48661128981",
        "email": "Casablancaespaniol@gmail.com",
        "customeData": "San Pedro"
      },
      "secondPart": {
        "title": "For reservations, contact Anita Kolodziejczyk",
        "customeText": "Web page",
        "phoneNumber": "+34659901386",
        "email": "Info@avsinmo.com",
        "customeData": "Avsinmo.com"
      },
      "important": {
        "firstPart": "Please be patient;",
        "secondPart": "each of us, besides renting, has another job."
      }
    },
    "calendar": {
      "prev": "Prev month",
      "next": "Next month"
    }
  },
  "place": {
    "route": "Generate route"
  },
  "errorMessage": "We are already working to solve the problem."
}`) as Translate;

export default en;
