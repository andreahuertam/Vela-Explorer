// =============================================================================
// dbv-specs-ops — Spec-Driven Development (SDD) engineering system for AI-assisted coding
// Copyright (c) 2026 Andrea Huerta
// Licensed under the MIT License. See LICENSE for details.
// Built with dbv-specs-ops · https://github.com/davidbuenov/dbv-specs-ops
// =============================================================================

export const TOURISM_DATA = {
  francia: {
    name: "Francia",
    flag: "🇫🇷",
    description: "Descubre el romance, el arte, la gastronomía exquisita y los hermosos paisajes de la costa francesa.",
    cities: {
      paris: {
        name: "París",
        description: "La Ciudad de la Luz, centro mundial del arte, la moda, la gastronomía y la cultura.",
        coords: [48.8566, 2.3522],
        tours: [
          {
            name: "Tour de la Torre Eiffel y Acceso a la Cima",
            description: "Evita las largas colas y sube al monumento más famoso del mundo con un guía experto.",
            duration: "2.5 horas",
            price: "55 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Visita Guiada al Museo del Louvre",
            description: "Contempla de cerca la Mona Lisa, la Venus de Milo y miles de obras maestras sin perderte.",
            duration: "3 horas",
            price: "69 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Crucero por el Sena con Cena Gourmet",
            description: "Navega bajo los puentes iluminados de París mientras disfrutas de una cena francesa de 3 platos.",
            duration: "2 horas",
            price: "89 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1524338198850-8a2ff63aaca5?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Le Jules Verne",
            cuisine: "Alta Cocina Francesa",
            price: "€€€€",
            rating: 4.8,
            coords: [48.8584, 2.2945],
            description: "Restaurante con estrella Michelin ubicado en el segundo piso de la Torre Eiffel con vistas espectaculares."
          },
          {
            name: "Septime",
            cuisine: "Moderna / Neo-bistró",
            price: "€€€",
            rating: 4.7,
            coords: [48.8507, 2.3776],
            description: "Aclamado bistró con un menú de degustación creativo basado en ingredientes frescos de temporada."
          },
          {
            name: "L'Ambroisie",
            cuisine: "Clásica Francesa",
            price: "€€€€",
            rating: 4.9,
            coords: [48.8552, 2.3656],
            description: "Un templo de la gastronomía clásica en la hermosa Place des Vosges. Tres estrellas Michelin."
          }
        ]
      },
      niza: {
        name: "Niza",
        description: "La joya de la Costa Azul, famosa por sus playas de piedras, Promenade des Anglais y encanto provenzal.",
        coords: [43.7102, 7.2620],
        tours: [
          {
            name: "Paseo a Pie por el Casco Antiguo y Colina del Castillo",
            description: "Explora las coloridas calles del Vieux Nice y disfruta de vistas panorámicas incomparables de la bahía.",
            duration: "2 horas",
            price: "25 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour Gastronómico de Niza",
            description: "Prueba especialidades locales como la socca, la ensalada niçoise y exquisitos aceites de oliva locales.",
            duration: "3.5 horas",
            price: "45 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Excursión a Mónaco, Eze y Menton",
            description: "Viaja a lo largo de la costa de la Riviera Francesa y visita el lujoso casino de Montecarlo y el pueblo medieval de Eze.",
            duration: "8 horas",
            price: "95 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1527237887309-847243c3d523?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Le Chantecler",
            cuisine: "Provenzal Gastronómico",
            price: "€€€€",
            rating: 4.8,
            coords: [43.6946, 7.2582],
            description: "Ubicado en el Hotel Negresco, ofrece una versión refinada e imaginativa de los sabores de la Provenza."
          },
          {
            name: "JAN",
            cuisine: "Fusión Sudafricana-Francesa",
            price: "€€€",
            rating: 4.9,
            coords: [43.6999, 7.2845],
            description: "Cocina creativa con estrella Michelin inspirada en las raíces sudafricanas del chef combinadas con la técnica francesa."
          },
          {
            name: "La Merenda",
            cuisine: "Tradicional de Niza",
            price: "€€",
            rating: 4.6,
            coords: [43.6967, 7.2721],
            description: "Un pequeño local legendario dirigido por el exchef del Negresco. Sin teléfono, cocina tradicional impecable."
          }
        ]
      }
    }
  },
  japon: {
    name: "Japón",
    flag: "🇯🇵",
    description: "Una mezcla única de templos antiguos, rascacielos futuristas, naturaleza majestuosa y gastronomía legendaria.",
    cities: {
      tokio: {
        name: "Tokio",
        description: "La metrópolis más poblada del mundo, donde la tecnología de vanguardia convive con la tradición.",
        coords: [35.6762, 139.6503],
        tours: [
          {
            name: "Tour de Templos y Tradición en Senso-ji",
            description: "Recorre el templo más antiguo de Tokio en Asakusa, cruza la icónica puerta Kaminarimon y aprende su historia.",
            duration: "3 horas",
            price: "35 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Cultura Pop y Moda en Harajuku y Shibuya",
            description: "Camina por la calle Takeshita, descubre tiendas de moda extravagantes y experimenta el cruce de peatones de Shibuya.",
            duration: "3 horas",
            price: "30 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour Nocturno de Comida y Bares en Shinjuku",
            description: "Adéntrate en los callejones de Omoide Yokocho y Golden Gai para degustar yakitori, ramen y sake local.",
            duration: "3.5 horas",
            price: "65 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Sukiyabashi Jiro Roppongi",
            cuisine: "Sushi Premium",
            price: "€€€€",
            rating: 4.9,
            coords: [35.6593, 139.7294],
            description: "Dirigido por el hijo del legendario maestro de sushi Jiro Ono. Una experiencia omakase excepcional."
          },
          {
            name: "Narisawa",
            cuisine: "Sostenible / Franco-Japonesa",
            price: "€€€€",
            rating: 4.8,
            coords: [35.6713, 139.7214],
            description: "Cocina vanguardista inspirada en la naturaleza (Satoyama). Clasificado constantemente entre los mejores del mundo."
          },
          {
            name: "Ichiran Shibuya",
            cuisine: "Tonkotsu Ramen",
            price: "€",
            rating: 4.6,
            coords: [35.6619, 139.7003],
            description: "Famoso por su delicioso ramen de caldo de cerdo concentrado y cabinas de consumo individual que eliminan distracciones."
          }
        ]
      },
      kioto: {
        name: "Kioto",
        description: "El corazón cultural de Japón, famoso por sus miles de templos budistas clásicos, jardines y geishas.",
        coords: [35.0116, 135.7681],
        tours: [
          {
            name: "Sendero de Toriis en Fushimi Inari-Taisha",
            description: "Sube por el monte Inari a través de miles de senderos flanqueados por hermosas puertas torii de color naranja brillante.",
            duration: "3 horas",
            price: "25 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Bosque de Bambú de Arashiyama y Templo Tenryu-ji",
            description: "Camina entre los altísimos tallos de bambú y relájate en los históricos jardines zen del templo adyacente.",
            duration: "3.5 horas",
            price: "35 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Paseo del Atardecer en Gion (Distrito de Geishas)",
            description: "Aprende la historia de las geishas y maiko mientras caminas junto a las casas de té de madera tradicionales en Gion.",
            duration: "2 horas",
            price: "28 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Kichi Kichi Omurice",
            cuisine: "Yoshoku (Fusión Occidental)",
            price: "€€",
            rating: 4.7,
            coords: [35.0089, 135.7712],
            description: "Mundialmente famoso por el carismático chef Motokichi Yukimura y su espectáculo al cortar la esponjosa tortilla de arroz."
          },
          {
            name: "Gion Sasaki",
            cuisine: "Kaiseki de Vanguardia",
            price: "€€€€",
            rating: 4.9,
            coords: [35.0003, 135.7758],
            description: "Tres estrellas Michelin. Reinterpreta la comida tradicional kaiseki en un animado mostrador de madera de 24 asientos."
          },
          {
            name: "Monk",
            cuisine: "Farm-to-Table a la Leña",
            price: "€€€",
            rating: 4.8,
            coords: [35.0256, 135.7958],
            description: "Restaurante íntimo de 7 asientos junto al Camino del Filósofo, famoso por su menú degustación centrado en pizzas a la leña."
          }
        ]
      }
    }
  },
  espana: {
    name: "España",
    flag: "🇪🇸",
    description: "Tierra de sol, arte, arquitectura cautivadora, festivales vibrantes e inigualables tapas.",
    cities: {
      madrid: {
        name: "Madrid",
        description: "Capital española, conocida por sus museos de arte de primer nivel, amplios bulevares y animada vida nocturna.",
        coords: [40.4168, -3.7038],
        tours: [
          {
            name: "Museo del Prado y Obras Maestras del Arte",
            description: "Admira obras de Velázquez, Goya, El Bosco y El Greco de la mano de un historiador de arte calificado.",
            duration: "2.5 horas",
            price: "38 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Palacio Real de Madrid Sin Filas",
            description: "Descubre la historia de la monarquía española visitando los salones oficiales, la armería y los jardines reales.",
            duration: "2 horas",
            price: "32 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1509840144524-f679051874b2?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour Histórico de Tapas y Espectáculo Flamenco",
            description: "Disfruta de las mejores tapas locales en el centro de Madrid antes de ver un show de flamenco lleno de pasión.",
            duration: "4 horas",
            price: "79 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Sobrino de Botín",
            cuisine: "Castellana Tradicional",
            price: "€€€",
            rating: 4.6,
            coords: [40.4137, -3.7077],
            description: "Fundado en 1725, certificado por el Libro Guinness como el restaurante en funcionamiento continuo más antiguo del mundo."
          },
          {
            name: "DiverXO",
            cuisine: "Creativa / Vanguardia",
            price: "€€€€",
            rating: 4.9,
            coords: [40.4582, -3.6896],
            description: "El transgresor menú del chef Dabiz Muñoz, tres estrellas Michelin. Un viaje hedonista de sabores intensos."
          },
          {
            name: "Amazónico",
            cuisine: "Fusión / Brasileña-Asiática",
            price: "€€€",
            rating: 4.5,
            coords: [40.4237, -3.6846],
            description: "Un oasis selvático en el barrio de Salamanca, famoso por su espectacular decoración, carnes a la brasa y jazz en vivo."
          }
        ]
      },
      barcelona: {
        name: "Barcelona",
        description: "La metrópolis costera y capital de Cataluña, famosa por la arquitectura modernista de Gaudí y su estilo cosmopolita.",
        coords: [41.3851, 2.1734],
        tours: [
          {
            name: "Templo de la Sagrada Familia de Gaudí",
            description: "Admira el bosque de columnas interiores de piedra y las espectaculares vidrieras de colores de la obra maestra inacabada.",
            duration: "2 horas",
            price: "45 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1583779457094-0dccf82c54e5?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour Guiado en el Park Güell",
            description: "Recorre el parque modernista de Gaudí, contempla la famosa salamandra de mosaico de colores y disfruta de las vistas al mar.",
            duration: "1.5 horas",
            price: "29 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1523531294919-4bea7c65e894?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Paseo a Pie por el Barrio Gótico e Historia Romana",
            description: "Explora la catedral medieval de Barcelona, los restos de murallas romanas y la magia oculta en las plazas del barrio viejo.",
            duration: "2 horas",
            price: "20 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Disfrutar",
            cuisine: "Vanguardia Mediterránea",
            price: "€€€€",
            rating: 4.9,
            coords: [41.3879, 2.1555],
            description: "Dirigido por tres exchefs de El Bulli. Clasificado como uno de los mejores restaurantes del mundo, tres estrellas Michelin."
          },
          {
            name: "Cera 23",
            cuisine: "Gastro-bar Creativo",
            price: "€€",
            rating: 4.7,
            coords: [41.3789, 2.1662],
            description: "Escondido en El Raval, ofrece platos fusión innovadores como el pulpo sobre espuma de patata trufada en un ambiente animado."
          },
          {
            name: "Botafumeiro",
            cuisine: "Marisquería Gallega",
            price: "€€€€",
            rating: 4.8,
            coords: [41.4019, 2.1558],
            description: "La marisquería más famosa de Barcelona, conocida por la frescura inigualable de sus bogavantes y pescados traídos a diario de Galicia."
          }
        ]
      }
    }
  }
  ,
  mexico: {
    name: "México",
    flag: "🇲🇽",
    description: "Riqueza histórica, sabores vibrantes y paisajes que van desde ruinas prehispánicas hasta playas caribeñas.",
    cities: {
      ciudad_de_mexico: {
        name: "Ciudad de México",
        description: "Una metrópolis cultural con museos de clase mundial, barrios bohemios y una escena gastronómica única.",
        coords: [19.4326, -99.1332],
        tours: [
          {
            name: "Recorrido por el Centro Histórico y Museo Nacional de Antropología",
            description: "Visita la Catedral, el Zócalo y explora siglos de historia en el museo más importante de México.",
            duration: "3 horas",
            price: "MX$600",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour Gastronómico: Tacos y Mercados",
            description: "Prueba tacos tradicionales, antojitos y conoce mercados emblemáticos como la Merced o Coyoacán.",
            duration: "3 horas",
            price: "MX$550",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1544025162-1d6a1a9f7b1e?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Teotihuacán y Paseo en Globo",
            description: "Sube en globo sobre las pirámides y completa la visita guiada por las impresionantes estructuras prehispánicas.",
            duration: "6 horas",
            price: "MX$2200",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1526403224731-2f9b2b1f1b6b?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          { name: "Pujol", cuisine: "Alta Cocina Mexicana", price: "MX$MX$€€€", rating: 4.9, coords: [19.4329, -99.1967], description: "Innovadora cocina mexicana del chef Enrique Olvera." },
          { name: "Contramar", cuisine: "Mariscos", price: "MX$€€", rating: 4.8, coords: [19.4196, -99.1744], description: "Famoso por su pescado a la talla y ambiente costero en CDMX." },
          { name: "El Huequito", cuisine: "Tacos", price: "MX$", rating: 4.6, coords: [19.4285, -99.1272], description: "Tacos al pastor tradicionales y rápidos." }
        ]
      }
    }
  },
  alemania: {
    name: "Alemania",
    flag: "🇩🇪",
    description: "Histórica, moderna y repleta de museos, música y arquitectura diversa.",
    cities: {
      berlin: {
        name: "Berlín",
        description: "Capital cultural y creativa, con una intensa historia y vida nocturna vibrante.",
        coords: [52.52, 13.4050],
        tours: [
          { name: "Puerta de Brandenburgo y Reichstag", description: "Paseo histórico por los monumentos más simbólicos de Berlín.", duration: "2 horas", price: "€35", rating: 4.8, image: "https://images.unsplash.com/photo-1508050919630-b135583b29d4?auto=format&fit=crop&w=600&q=80" },
          { name: "Isla de los Museos (Museumsinsel)", description: "Visita Pergamon y el Altes Museum con un guía experto.", duration: "3 horas", price: "€45", rating: 4.9, image: "https://images.unsplash.com/photo-1505577058444-a3dab1e48f86?auto=format&fit=crop&w=600&q=80" },
          { name: "Ruta de Street Art y Kreuzberg", description: "Explora el arte urbano y la escena alternativa berlinesa.", duration: "2.5 horas", price: "€30", rating: 4.7, image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=600&q=80" }
        ],
        restaurants: [
          { name: "Restaurant Tim Raue", cuisine: "Alta Cocina Alemana / Asiática", price: "€€€€", rating: 4.9, coords: [52.5025, 13.3789], description: "Alta cocina contemporánea con influencias asiáticas." },
          { name: "Mustafá's Gemüse Kebab", cuisine: "Street Food", price: "€", rating: 4.6, coords: [52.5076, 13.3862], description: "Kebab legendario entre locales y turistas." },
          { name: "Curry 36", cuisine: "Fast Food Alemán", price: "€", rating: 4.4, coords: [52.4996, 13.4036], description: "Currywurst icónica de Berlín." }
        ]
      }
    }
  },
  colombia: {
    name: "Colombia",
    flag: "🇨🇴",
    description: "Paisajes diversos desde playas caribeñas hasta montañas andinas y cultura vibrante.",
    cities: {
      cartagena: {
        name: "Cartagena",
        description: "Ciudad amurallada con encanto colonial, playas y vida nocturna caribeña.",
        coords: [10.3910, -75.4794],
        tours: [
          { name: "Paseo por la Ciudad Amurallada", description: "Recorre plazas, murallas y fortalezas históricas con guía local.", duration: "2 horas", price: "$60", rating: 4.8, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
          { name: "Islas del Rosario y Playa Blanca", description: "Excursión de día a islas cristalinas y snorkel.", duration: "8 horas", price: "$80", rating: 4.9, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
          { name: "Tour Gastronómico y Café Local", description: "Degusta platos costeños y conoce pequeños productores de café.", duration: "3 horas", price: "$45", rating: 4.7, image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80" }
        ],
        restaurants: [
          { name: "Carmen Cartagena", cuisine: "Fusión", price: "$€€", rating: 4.8, coords: [10.4231, -75.5359], description: "Alta cocina de autor con ingredientes locales." },
          { name: "La Mulata", cuisine: "Costeña", price: "$", rating: 4.6, coords: [10.4235, -75.5432], description: "Sabores auténticos de la costa caribeña." },
          { name: "Restaurante 1621", cuisine: "Gourmet", price: "$€€€", rating: 4.7, coords: [10.4239, -75.5437], description: "Ubicado en un hotel boutique dentro de la ciudad amurallada." }
        ]
      }
    }
  },
  argentina: {
    name: "Argentina",
    flag: "🇦🇷",
    description: "Tierra de paisajes contrastantes, cultura gauchesca, tango y una reconocida tradición gastronómica.",
    cities: {
      buenos_aires: {
        name: "Buenos Aires",
        description: "Capital cosmopolita famosa por el tango, barrios históricos y una intensa vida cultural.",
        coords: [-34.6037, -58.3816],
        tours: [
          { name: "Show de Tango y Barrio de La Boca", description: "Experiencia cultural con show de tango y paseo por las coloridas calles.", duration: "3 horas", price: "$45", rating: 4.8, image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=600&q=80" },
          { name: "Estancia y Experiencia Gaucha", description: "Un día en el campo con demostraciones de doma y asado tradicional.", duration: "8 horas", price: "$120", rating: 4.9, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" },
          { name: "Tour Gastronómico de Parrillas", description: "Degustación de cortes y vinos locales en parrillas históricas.", duration: "3 horas", price: "$60", rating: 4.7, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" }
        ],
        restaurants: [
          { name: "Don Julio", cuisine: "Parrilla", price: "$€€", rating: 4.9, coords: [-34.5901, -58.4233], description: "Parrilla de renombre con cortes clásicos argentinos." },
          { name: "Tegui", cuisine: "Alta Cocina", price: "$€€€€", rating: 4.8, coords: [-34.5933, -58.4442], description: "Menú de degustación contemporáneo en Palermo." },
          { name: "La Cabrera", cuisine: "Parrilla", price: "$€€", rating: 4.7, coords: [-34.5867, -58.4301], description: "Parrilla popular entre locales y visitantes." }
        ]
      }
    }
  },
  brasil: {
    name: "Brasil",
    flag: "🇧🇷",
    description: "Playas icónicas, música contagiosa y naturaleza exuberante.",
    cities: {
      rio: {
        name: "Río de Janeiro",
        description: "Ciudad de playas, samba y vistas impresionantes desde sus montañas.",
        coords: [-22.9068, -43.1729],
        tours: [
          { name: "Cristo Redentor y Pan de Azúcar", description: "Iconos de Río con vistas panorámicas y teleférico.", duration: "4 horas", price: "R$180", rating: 4.9, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
          { name: "Playas de Ipanema y Copacabana", description: "Paseo guiado por las playas más famosas y sus kioscos.", duration: "2 horas", price: "R$60", rating: 4.7, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" },
          { name: "Favela Tour Cultural", description: "Visita responsable con guía local para comprender la vida en comunidades urbanas.", duration: "3 horas", price: "R$80", rating: 4.6, image: "https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=600&q=80" }
        ],
        restaurants: [
          { name: "Aprazível", cuisine: "Brasileña Contemporánea", price: "R$R$€€", rating: 4.8, coords: [-22.9496, -43.1876], description: "Restaurante con vistas y cocina basada en ingredientes brasileños." },
          { name: "Churrascaria Palace", cuisine: "Churrasco", price: "R$€€", rating: 4.5, coords: [-22.9056, -43.1797], description: "Clásica experiencia de carnes a la parrilla." },
          { name: "Confeitaria Colombo", cuisine: "Cafetería Histórica", price: "R$", rating: 4.6, coords: [-22.9070, -43.1726], description: "Pastelería y café tradicional con historia." }
        ]
      }
    }
  },
  portugal: {
    name: "Portugal",
    flag: "🇵🇹",
    description: "Cultura marítima, ciudades históricas y costas impresionantes.",
    cities: {
      lisboa: {
        name: "Lisboa",
        description: "Capital llena de colinas, tranvías y barrios con encanto como Alfama y Bairro Alto.",
        coords: [38.7223, -9.1393],
        tours: [
          { name: "Tram 28 y Alfama", description: "Recorrido clásico por los barrios más tradicionales de Lisboa.", duration: "2 horas", price: "€30", rating: 4.8, image: "https://images.unsplash.com/photo-1505765056433-0d7a6f3b6f6f?auto=format&fit=crop&w=600&q=80" },
          { name: "Excursión a Sintra", description: "Visita palacios románticos y jardines de ensueño en un día.", duration: "7 horas", price: "€65", rating: 4.9, image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=600&q=80" },
          { name: "Noche de Fado y Gastronomía", description: "Cena con espectáculo de fado en un local tradicional.", duration: "3 horas", price: "€50", rating: 4.8, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" }
        ],
        restaurants: [
          { name: "Belcanto", cuisine: "Alta Cocina Portuguesa", price: "€€€€", rating: 4.9, coords: [38.7071, -9.1399], description: "Chef José Avillez, cocina contemporánea portuguesa." },
          { name: "Time Out Market", cuisine: "Variedad", price: "€", rating: 4.6, coords: [38.7075, -9.1426], description: "Mercado gastronómico con lo mejor de la ciudad." },
          { name: "CERVEJARIA Ramiro", cuisine: "Marisquería", price: "€€", rating: 4.7, coords: [38.7159, -9.1416], description: "Mariscos frescos y ambiente popular." }
        ]
      }
    }
  },
  marruecos: {
    name: "Marruecos",
    flag: "🇲🇦",
    description: "Puertas al Sahara, medinas históricas y mercados sensoriales.",
    cities: {
      marrakech: {
        name: "Marrakech",
        description: "Ciudad de zocos, palacios y plazas vibrantes como Jemaa el-Fna.",
        coords: [31.6295, -7.9811],
        tours: [
          { name: "Plaza Jemaa el-Fna y Zocos", description: "Explora la plaza principal, mercados y artesanía local.", duration: "2.5 horas", price: "€25", rating: 4.8, image: "https://images.unsplash.com/photo-1502741126161-b048400d3d1f?auto=format&fit=crop&w=600&q=80" },
          { name: "Jardines Majorelle y Palacio", description: "Visita los jardines de Yves Saint Laurent y palacios cercanos.", duration: "2 horas", price: "€20", rating: 4.7, image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80" },
          { name: "Excursión al Desierto (dunas y campamento)", description: "Aventura de noche en el desierto con cena y música tradicional.", duration: "14 horas", price: "€120", rating: 4.9, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80" }
        ],
        restaurants: [
          { name: "Le Jardin", cuisine: "Marroquí/Internacional", price: "€€", rating: 4.6, coords: [31.6290, -7.9891], description: "Patio con vegetación y cocina local moderna." },
          { name: "Nomad", cuisine: "Contemporánea Marroquí", price: "€€", rating: 4.7, coords: [31.6281, -7.9879], description: "Terraza con vistas a la medina y platos contemporáneos." },
          { name: "Café des Épices", cuisine: "Café y Tapas", price: "€", rating: 4.5, coords: [31.6297, -7.9884], description: "Pequeño lugar con buena cocina local y especias." }
        ]
      }
    }
  },
  italia: {
    name: "Italia",
    flag: "🇮🇹",
    description: "Historia milenaria, arte, paisajes y una gastronomía insuperable.",
    cities: {
      roma: {
        name: "Roma",
        description: "La Ciudad Eterna: monumentos, plazas y una gastronomía clásica.",
        coords: [41.9028, 12.4964],
        tours: [
          { name: "Coliseo y Foro Romano", description: "Visita guiada por las ruinas emblemáticas del Imperio Romano.", duration: "3 horas", price: "€50", rating: 4.9, image: "https://images.unsplash.com/photo-1503314885795-6f6f4e1f3d8f?auto=format&fit=crop&w=600&q=80" },
          { name: "Ciudad del Vaticano y Museos", description: "Recorrido por la Basílica de San Pedro y la Capilla Sixtina.", duration: "3 horas", price: "€60", rating: 4.9, image: "https://images.unsplash.com/photo-1505765056433-0d7a6f3b6f6f?auto=format&fit=crop&w=600&q=80" },
          { name: "Tour Gastronómico: Pasta y Gelato", description: "Clase y degustación de platos italianos artesanales.", duration: "2.5 horas", price: "€40", rating: 4.8, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80" }
        ],
        restaurants: [
          { name: "La Pergola", cuisine: "Alta Cocina Italiana", price: "€€€€", rating: 4.9, coords: [41.9154, 12.4468], description: "Restaurante con estrellas Michelin y vistas panorámicas." },
          { name: "Roscioli", cuisine: "Tradicional", price: "€€", rating: 4.8, coords: [41.8955, 12.4723], description: "Antipasti, pastas y bodega excelente en el centro histórico." },
          { name: "Gelateria del Teatro", cuisine: "Helados Artísticos", price: "€", rating: 4.7, coords: [41.9007, 12.4693], description: "Helados artesanales con sabores tradicionales." }
        ]
      }
    }
  }
};

export const CHATBOT_RESPONSES = {
  global: {
    saludo: "¡Hola! Soy tu asistente de viajes inteligente de **dbv-specs-ops**. Estoy aquí para ayudarte a planificar tu aventura. Puedes preguntarme sobre qué ver, los mejores tours o recomendaciones de restaurantes de nuestros destinos en Francia, Japón o España. ¿Hacia dónde te gustaría viajar hoy?",
    desconocido: "Disculpa, no he comprendido del todo tu consulta. ¿Podrías reformularla? Recuerda que puedo darte detalles específicos de clima, restaurantes populares, consejos de viaje y actividades de la ciudad que tengas seleccionada en la pantalla.",
    tours_general: "Ofrecemos tours increíbles en París, Niza, Tokio, Kioto, Madrid y Barcelona. Para verlos a detalle, solo haz clic en el país correspondiente arriba y luego selecciona la ciudad que te interese."
  },
  patrones: [
    {
      keywords: ["hola", "buenos dias", "buenas tardes", "saludos"],
      response: (city) => {
        if (city) {
          return `¡Hola! Qué gusto saludarte. Veo que estás explorando la maravillosa ciudad de **${city.name}**. ¿En qué puedo ayudarte hoy sobre este destino?`;
        }
        return "¡Hola! Qué gusto saludarte. Estoy listo para ayudarte a descubrir los mejores destinos del mundo. ¿Hay algún país o ciudad que te interese explorar hoy?";
      }
    },
    {
      keywords: ["tours", "actividades", "que hacer", "visitas", "excursiones"],
      response: (city) => {
        if (!city) return "Selecciona un país y una ciudad para mostrarte los tours disponibles. Por ejemplo, en París tenemos tours a la Torre Eiffel y paseos por el Sena.";
        const tourList = city.tours.map(t => `- **${t.name}**: ${t.description} (Precio: ${t.price}, Duración: ${t.duration}, Valoración: ⭐ ${t.rating})`).join("\n");
        return `En **${city.name}** te recomendamos realizar los siguientes tours destacados:\n\n${tourList}\n\nPuedes reservar o ver los detalles interactivos en el panel de actividades.`;
      }
    },
    {
      keywords: ["comer", "restaurante", "cena", "almorzar", "comida", "hambre"],
      response: (city) => {
        if (!city) return "Si seleccionas una ciudad, podré mostrarte los restaurantes recomendados y ubicarlos en el mapa en tiempo real.";
        const restList = city.restaurants.map(r => `- **${r.name}** (${r.cuisine}): ${r.description} (Rango de precios: ${r.price}, Valoración: ⭐ ${r.rating})`).join("\n");
        return `Para comer en **${city.name}**, hemos seleccionado los restaurantes mejor valorados. Se muestran en el mapa interactivo en pantalla:\n\n${restList}\n\n¡Haz clic en los marcadores del mapa para ver sus ubicaciones exactas!`;
      }
    },
    {
      keywords: ["clima", "tiempo", "temperatura", "cuando ir", "mejor epoca"],
      response: (city) => {
        if (!city) return "Por favor, selecciona una ciudad para darte la previsión climática y sugerencias de viaje correspondientes.";
        const climaInfo = {
          "París": "tiene un clima templado. La mejor época es primavera (abril-junio) u otoño (septiembre-octubre) para evitar las aglomeraciones y disfrutar de temperaturas agradables de unos 15-20°C.",
          "Niza": "cuenta con un maravilloso clima mediterráneo. Los veranos son soleados y cálidos (perfectos para la playa) y los inviernos son muy suaves. La mejor época es de mayo a octubre.",
          "Tokio": "es ideal en primavera (marzo-mayo) por los cerezos en flor (Sakura) u otoño (noviembre) por las hojas rojas. El verano es bastante húmedo y caluroso, con lluvias ocasionales.",
          "Kioto": "destaca por sus otoños templados y coloridos y sus primaveras llenas de flores. El invierno es frío pero muy hermoso, ideal para fotos sin multitudes.",
          "Madrid": "tiene un clima continental: veranos muy calurosos (pueden superar los 38°C) e inviernos fríos. Se recomienda visitar en primavera u otoño, cuando la ciudad y las terrazas están en su esplendor.",
          "Barcelona": "goza de un clima costero muy agradable todo el año. Primavera y principios de otoño son perfectos para pasear por el Barrio Gótico con temperaturas de unos 20-25°C."
        };
        return `El clima en **${city.name}** ${climaInfo[city.name] || "es ideal durante la primavera y el otoño. Te recomendamos revisar el pronóstico antes de empacar."}`;
      }
    },
    {
      keywords: ["consejo", "tip", "recomendacion", "seguridad", "transporte"],
      response: (city) => {
        if (!city) return "Elige una ciudad y te daré consejos valiosos para moverte por ella.";
        const consejos = {
          "París": "Te aconsejamos comprar el abono de metro 'Paris Visite' o usar tarjetas Navigo Easy. Ten cuidado con tus pertenencias en zonas concurridas como la Torre Eiffel y el metro.",
          "Niza": "Niza es muy transitable a pie. Para ir a pueblos cercanos como Eze o Mónaco, el autobús 100 o el tren regional TER son económicos y ofrecen vistas hermosas de la costa.",
          "Tokio": "El metro de Tokio es increíblemente eficiente pero puede ser complejo. Descarga la tarjeta digital Suica o Pasmo en tu móvil. Recuerda que no se acostumbra dejar propina en los restaurantes.",
          "Kioto": "La mejor forma de recorrer Kioto es en autobús o alquilando una bicicleta. Compra el pase de autobús de un día para ahorrar. Respeta las señales en Gion y no fotografíes geishas sin permiso.",
          "Madrid": "El metro es la forma más rápida de moverse. Aprovecha las visitas gratuitas del Museo del Prado (lunes a sábado de 18:00 a 20:00). La cena suele ser tarde, a partir de las 21:30.",
          "Barcelona": "Camina todo lo que puedas por el Paseo de Gracia y el Gótico. Ten mucha precaución con los carteristas en Las Ramblas y el metro. Reserva las entradas a la Sagrada Familia con semanas de antelación."
        };
        return `**Consejo de viaje para ${city.name}:** ${consejos[city.name] || "Usa zapatos cómodos para caminar, mantén una copia digital de tu pasaporte y compra tarjetas de transporte diario para ahorrar."}`;
      }
    }
  ]
};
