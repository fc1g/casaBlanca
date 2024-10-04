import { Translate } from '../../../types/Translate';

const es = JSON.parse(`{
  "page": {
    "navigation": {
      "home": "Casa",
      "about": "Acerca de",
      "vicinity": "Vecindad",
      "contacts": "Contactos"
    },
    "hamburger": "Menú móvil",
    "copyrights": "Todos los derechos reservados. Construido con",
    "notFound": {
      "back": "Volver a la página principal",
      "missing": "Falta algo.",
      "info": "Lo sentimos, no podemos encontrar esa página. Encontrarás mucho para explorar en la página principal."
    },
    "loading": "Cargando"
  },
  "langList": {
    "english": {
      "text": "Inglés",
      "imgAltText": ""
    },
    "polish": {
      "text": "Polaco",
      "imgAltText": ""
    },
    "spanish": {
      "text": "Español",
      "imgAltText": ""
    }
  },
  "homepage": {
    "title": {
      "firstPart": "Hacemos que tus",
      "vacation": "vacaciones",
      "lastPart": "mejores"
    },
    "subtitle": "Alquila un pedazo de España: Tu hogar ideal te espera.",
    "btn": "Más info",
    "testimonials": {
      "title": "Nuestros testimonios",
      "subtitle": "Consulte los testimonios de nuestra página de Facebook",
      "btn": "Ver más...",
      "kuba": {
        "title": "Casa muy bien mantenida",
        "text": "Muy recomendable, gran lugar, incluye todas las cosas necesarias para alojarse con un niño. Contacto muy agradable y rápido con los propietarios, quienes sugerirán y ayudarán a resolver cualquier problema posible.",
        "userName": "Kuba",
        "imgAltText": ""
      },
      "monika": {
        "title": "Casa nueva y lujosamente amueblada",
        "text": "Recomiendo encarecidamente unas vacaciones en esta hermosa casa. Encantador pueblo, playa y muchas actividades acuáticas. Lugar perfecto para relajarse y escapar de la vida cotidiana.",
        "userName": "Monika",
        "imgAltText": ""
      },
      "nik": {
        "title": "Literalmente todo lo que necesitas",
        "text": "El vecindario es tranquilo. Hay muchos restaurantes. El personal es muy servicial. El propietario se lleva bien en todos los temas. La Sra. Anita es muy servicial en el lugar, siempre puedes pedir ayuda.",
        "userName": "Nik",
        "imgAltText": ""
      },
      "adam": {
        "title": "Un lugar excelente para vacaciones",
        "text": "Se vive cómodamente, convenientemente, hay dos baños, hay internet, además hay una piscina climatizada, cerca de mercados, cerca del mar, hay lugar para estacionar un auto.",
        "userName": "Adam",
        "imgAltText": ""
      }
    }
  },
  "about": {
    "title": "Información sobre la casa con fotos.",
    "infoBtn": {
      "house": "Casa",
      "vicinity": "Vecindario",
      "rentInfo": "Info de alquiler"
    },
    "infoText": {
      "house": {
        "firstPart": "La casa tiene todo lo que necesitas para unas vacaciones sin preocupaciones. Hay tres dormitorios (para 8 personas), dos baños, una enorme y espaciosa terraza y una piscina climatizada. Incluso en invierno, puedes relajarte y nadar en agua a 30 grados.",
        "secondPart": "La casa cuenta con todo el equipamiento necesario. Si tienes un niño pequeño, hay juguetes, cochecitos, una trona y un calienta biberones para ellos. Lamentablemente, no permitimos mascotas."
      },
      "vicinity": {
        "firstPart": "Nuestra hermosa casa está ubicada en la bien desarrollada ciudad de San Pedro del Pinatar. Ofrece todo para unas vacaciones inolvidables, con centros comerciales, cafeterías, restaurantes, parques y la playa, todo a poca distancia. Información sobre atracciones cercanas está disponible a continuación.",
        "secondPart": "Hay muchos espacios de estacionamiento cerca de la casa. Los aeropuertos más cercanos son Alicante (a 1 hora de distancia) y Murcia (a 36 minutos de distancia). Si necesitas un coche, puedes organizar un traslado con la empresa Calma."
      },
      "rentInfo": {
        "firstPart": "Vale la pena mencionar que estamos presentes tanto en Booking.com como en Airbnb. Si no te sientes seguro, puedes reservar la propiedad a través de estos dos servicios populares. Sin embargo, para ahorrar dinero, siéntete libre de reservar directamente con nosotros enviando un mensaje o llamándonos para coordinar las fechas.",
        "secondPart": "Una vez que estés listo para hacer una reserva, por favor contacta con la Sra. Anita Violetta Kołodziejczyk. Ella es responsable de tu reserva y estará en el lugar para ayudarte con la misma."
      }
    },
    "slider": {
      "loungeFromOutside": "Sala de estar contemporánea con un sofá y una mesa blancos, creando un ambiente elegante y minimalista.",
      "lounge": "Una sala de estar moderna con paredes blancas y un televisor grande.",
      "diningRoom": "Configuración de comedor limpia y moderna con muebles elegantes.",
      "kitchen": "Una cocina bien iluminada con una mesa de madera y sillas, creando un área de comedor acogedora e invitadora.",
      "doubleRoom": "Dormitorio lujoso con una cama grande.",
      "twinRoomDark": "Dos camas en una habitación con un mural de pared colorido. Un espacio vibrante y acogedor para relajarse y descansar.",
      "twinRoomLight": "Un dormitorio acogedor con dos camas y una alfombra elegante, creando una atmósfera cómoda y acogedora.",
      "bathFirst": "Un lujoso baño con elegantes paredes de mármol y accesorios blancos impecables.",
      "bathSecond": "Baño de lujo en blanco con paredes y suelo de mármol.",
      "terasaEnter": "Una casa moderna con un patio y escaleras que conducen a la entrada.",
      "terasa": "Terraza en la azotea con sillones y mesa, perfecta para relajarse al aire libre.",
      "pool": "Villa elegante con piscina y patio, ofreciendo un espacio exterior sereno y elegante."
    }
  },
  "vicinity": {
    "title": "Lugares que recomendamos visitar",
    "subtitle": "Destinos imprescindibles para tu próxima aventura",
    "filters": "Filtros",
    "sort": "Ordenar",
    "limit": "Límite",
    "sortTypes": {
      "low": "Distancia: Bajo a Alto",
      "high": "Distancia: Alto a Bajo"
    },
    "limitTypes": {
      "first": "3 Elementos de la página",
      "third": "9 Elementos de la página"
    },
    "btns": {
      "next": "Siguiente",
      "prev": "Anterior"
    }
  },
  "contacts": {
    "title": "Procedimiento de reserva","monthPriceTitle": "Precio mensual",
    "months": {
      "october": "Octubre",
      "november": "Noviembre",
      "christmasNewYear": "Navidad y Año Nuevo (2 semanas)",
      "march": "Marzo",
      "april": "Abril"
    },
    "fullPrice": "precio completo",
    "deposit": "Depósito: Reembolsable después de la estancia, 300 euros.",
    "cleaning": "Limpieza",
    "cleaningFee": "140 euros (pago único).",
    "linen": "Juego de sábanas con lavado",
    "linenFee": "13 euros por persona.",
    "discount": "Más de 10 días",
    "discountDetails": "Descuento del 5% sobre el costo total.",
    "individualDiscounts": "Descuentos individuales posibles con menos personas en casos excepcionales.",
    "extraPerson": "9ª persona",
    "extraPersonFee": "Pago adicional de 40 euros/día (solo en casos excepcionales).",
    "bookProcedure": {
      "firstCol": {
        "firstPart": "Estamos disponibles en",
        "secondPart": "y",
        "thirdPart": "Si prefieres, reserva a través de estos servicios. Para ahorrar, contáctanos directamente para organizar fechas o recibir ayuda."
      },
      "secondCol": "Revisa los detalles: qué aerolíneas, ciudad de salida y horarios de vuelo. Reserva tus fechas en consecuencia. Sin esta información, el check-in estándar es a las 16:00 y el check-out a las 11:00.",
      "thirdCol": "Siempre puedes contactarnos después de comprar tu billete. Si es posible, intentaremos adaptarnos a tu horario. Si conoces los horarios de tus vuelos, ajustaremos el calendario a tus requisitos."
    },
    "subtitle": "Calendario de pagos",
    "paymentSchedule": {
      "firstCol": "El primer pago es de aproximadamente el 20-30% del monto total y lo esperamos dentro de las 72 horas.",
      "secondCol": "El segundo pago es la mitad del monto restante y vence aproximadamente a mitad de camino hasta tu fecha de llegada.",
      "thirdCol": "El tercer pago es la última cuota antes de tu llegada. Para hacer el check-in, el monto total debe estar acreditado en nuestra cuenta."
    },
    "accordion": {
      "phone": "Teléfono",
      "mail": "Correo",
      "firstPart": {
        "title": "¿Todavía tienes preguntas? Llama a Ewelina Kwaśna.",
        "customeText": "Dirección",
        "phoneNumber": "+48661128981",
        "email": "Casablancaespaniol@gmail.com",
        "customeData": "San Pedro",
        "importantLang": {
          "firstPart": "La Sra. Ewelina",
          "only": "solo",
          "secondPart": "habla polaco, por lo que si tienes alguna pregunta, es mejor escribir en polaco."
        }
      },
      "secondPart": {
        "title": "Para reservas, contacta con Anita Kolodziejczyk.",
        "customeText": "Página web",
        "phoneNumber": "+34659901386",
        "email": "Info@avsinmo.com",
        "customeData": "Avsinmo.com",
        "importantLang": {
          "firstPart": "La Sra. Anita",
          "only": "solo",
          "secondPart": "habla polaco, español e inglés, por lo que si tienes alguna pregunta, es mejor escribir."
        }
      },
      "important": {
        "firstPart": "Por favor, ten paciencia;",
        "secondPart": "Cada uno de nosotros, además de alquilar, tiene otro trabajo."
      }
    },
    "calendar": {
      "prev": "Prev month",
      "next": "Next month"
    }
  },
  "place": {
    "route": "Generar ruta"
  },
  "errorMessage": "Ya estamos trabajando para resolver el problema."
}
`) as Translate;

export default es;
