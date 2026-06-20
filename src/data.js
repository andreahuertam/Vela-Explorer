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
            image: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=1200&q=80"
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
            price: "€",
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
            description: "Famoso por su delicioso ramen de caldo de cerdo concentrado y cabinas de consumo individual."
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
            price: "€",
            rating: 4.7,
            coords: [35.0089, 135.7712],
            description: "Mundialmente famoso por el carismático chef Motokichi Yukimura y su espectáculo al cortar la tortilla de arroz."
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
  },
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
            name: "Recorrido por el Centro Histórico y Museo de Antropología",
            description: "Visita la Catedral, el Zócalo y explora siglos de historia en el museo más importante de México.",
            duration: "3 horas",
            price: "25 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour Gastronómico: Tacos y Mercados",
            description: "Prueba tacos tradicionales, antojitos y conoce mercados emblemáticos como Coyoacán.",
            duration: "3 horas",
            price: "20 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Teotihuacán y Pirámides desde el Cielo",
            description: "Camina por la Calzada de los Muertos y admira las Pirámides del Sol y la Luna con guía local.",
            duration: "5 horas",
            price: "45 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1512813583145-baaa340ef29f?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Pujol",
            cuisine: "Alta Cocina Mexicana",
            price: "€€€€",
            rating: 4.9,
            coords: [19.4329, -99.1967],
            description: "Innovadora cocina de autor del chef Enrique Olvera, valorada entre los mejores del mundo."
          },
          {
            name: "Contramar",
            cuisine: "Mariscos",
            price: "€€",
            rating: 4.8,
            coords: [19.4196, -99.1744],
            description: "Famoso por su pescado a la talla y ambiente costero en plena colonia Roma."
          },
          {
            name: "El Huequito",
            cuisine: "Tacos Tradicionales",
            price: "€",
            rating: 4.6,
            coords: [19.4285, -99.1272],
            description: "Templo del taco al pastor fundado en 1959. Sabor auténtico de calle."
          }
        ]
      },
      cancun: {
        name: "Cancún",
        description: "El portal al Caribe Mexicano, conocido por sus arenas blancas de coral y aguas turquesas cristalinas.",
        coords: [21.1619, -86.8515],
        tours: [
          {
            name: "Excursión a Chichén Itzá y Cenote Sagrado",
            description: "Visita una de las nuevas siete maravillas del mundo moderno y refréscate en un místico cenote maya.",
            duration: "10 horas",
            price: "69 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1512813583145-baaa340ef29f?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Catamarán a Isla Mujeres y Snorkel",
            description: "Navega por las aguas caribeñas, realiza snorkel en arrecifes de coral y relájate en un club de playa privado.",
            duration: "7 horas",
            price: "55 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Aventura de Selva y Tirolesas en Cenote",
            description: "Vuela sobre las copas de los árboles en tirolesa y lánzate en clavado en un cenote abierto de aguas puras.",
            duration: "4 horas",
            price: "49 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Lorenzillo's",
            cuisine: "Mariscos y Langosta",
            price: "€€€",
            rating: 4.7,
            coords: [21.1215, -86.7584],
            description: "Restaurante icónico construido sobre la laguna con los mejores platillos de langosta fresca de Cancún."
          },
          {
            name: "La Habichuela Sunset",
            cuisine: "Fusión Maya-Caribeña",
            price: "€€",
            rating: 4.6,
            coords: [21.1285, -86.7548],
            description: "Cocina tradicional y mariscos refinados en un ambiente decorado con arte prehispánico maya."
          },
          {
            name: "Du Mexique By Sonya Grimond",
            cuisine: "Fusión Francesa-Mexicana",
            price: "€€€€",
            rating: 4.9,
            coords: [21.1610, -86.8252],
            description: "Restaurante íntimo de pocas mesas que fusiona técnicas francesas con ingredientes endémicos mexicanos."
          }
        ]
      }
    }
  },
  alemania: {
    name: "Alemania",
    flag: "🇩🇪",
    description: "Paisajes de castillos de cuento, selvas profundas, historia medieval y una potente vida urbana de vanguardia.",
    cities: {
      berlin: {
        name: "Berlín",
        description: "Capital cultural y creativa de Europa, con una intensa historia reciente y una escena artística única.",
        coords: [52.5200, 13.4050],
        tours: [
          {
            name: "Puerta de Brandenburgo e Historia del Muro de Berlín",
            description: "Descubre los monumentos clave de la Guerra Fría y la historia que unificó a la ciudad alemana.",
            duration: "2.5 horas",
            price: "25 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1508050919630-b135583b29d4?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Isla de los Museos e Historia del Pergamon",
            description: "Explora la cuna cultural de Berlín visitando colecciones históricas y templos de la antigüedad clásica.",
            duration: "3 horas",
            price: "35 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1505577058444-a3dab1e48f86?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Recorrido de Arte Urbano y Kreuzberg",
            description: "Camina por el Berlín alternativo y conoce la historia detrás de los grafitis del East Side Gallery.",
            duration: "2.5 horas",
            price: "20 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Restaurant Tim Raue",
            cuisine: "Alta Cocina Fusión Asiática",
            price: "€€€€",
            rating: 4.9,
            coords: [52.5025, 13.3789],
            description: "Cocina con dos estrellas Michelin inspirada en técnicas asiáticas aplicadas a ingredientes de clase mundial."
          },
          {
            name: "Mustafa's Gemüse Kebap",
            cuisine: "Street Food Turco-Alemán",
            price: "€",
            rating: 4.6,
            coords: [52.4941, 13.3888],
            description: "El kebab de verduras más famoso de Berlín. Filas largas que valen la pena por su sazón e historia."
          },
          {
            name: "Curry 36",
            cuisine: "Tradicional de Berlín",
            price: "€",
            rating: 4.4,
            coords: [52.4938, 13.3880],
            description: "El mejor currywurst tradicional en una de las esquinas más concurridas de Kreuzberg."
          }
        ]
      },
      munich: {
        name: "Múnich",
        description: "La capital de Baviera, famosa por su arquitectura gótica, hermosos jardines y la celebración del Oktoberfest.",
        coords: [48.1351, 11.5820],
        tours: [
          {
            name: "Paseo por Marienplatz y el Jardín Inglés",
            description: "Camina por el centro histórico, observa el famoso carillón y contempla a los surfistas del río Eisbach.",
            duration: "3 horas",
            price: "22 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Excursión al Castillo de Neuschwanstein",
            description: "Viaja a los Alpes bávaros para visitar el majestuoso castillo que inspiró el cuento de la Bella Durmiente.",
            duration: "10 horas",
            price: "75 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour de la Cerveza Bávara y Gastronomía",
            description: "Prueba cervezas artesanales y pretzels tradicionales en las tabernas históricas más emblemáticas de la ciudad.",
            duration: "3.5 horas",
            price: "39 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Hofbräuhaus Múnich",
            cuisine: "Bávara Clásica",
            price: "€€",
            rating: 4.6,
            coords: [48.1375, 11.5801],
            description: "La cervecería más famosa del mundo fundada en 1589. Comida bávara abundante y música folclórica en vivo."
          },
          {
            name: "Tantris",
            cuisine: "Francesa Clásica Moderna",
            price: "€€€€",
            rating: 4.9,
            coords: [48.1685, 11.5888],
            description: "Templo gastronómico de dos estrellas Michelin con un diseño retro setentero espectacular."
          },
          {
            name: "Alois - Dallmayr Fine Dining",
            cuisine: "Contemporánea Europea",
            price: "€€€€",
            rating: 4.8,
            coords: [48.1387, 11.5768],
            description: "Elegante espacio gourmet con estrella Michelin en la planta superior de la famosa tienda de delicatessen Dallmayr."
          }
        ]
      }
    }
  },
  colombia: {
    name: "Colombia",
    flag: "🇨🇴",
    description: "Diversidad desbordante, ritmo tropical, plantaciones del mejor café del mundo y tesoros coloniales.",
    cities: {
      cartagena: {
        name: "Cartagena",
        description: "Joyel colonial amurallado al borde del mar Caribe, con coloridos balcones e intensa vida nocturna.",
        coords: [10.3910, -75.4794],
        tours: [
          {
            name: "Paseo Histórico por el Corralito de Piedra",
            description: "Explora las murallas medievales, plazas coloniales y la historia de los piratas del Caribe.",
            duration: "2 horas",
            price: "20 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Día de Sol en las Islas del Rosario",
            description: "Navega en lancha rápida hacia playas de arena blanca y realiza snorkel en arrecifes caribeños.",
            duration: "8 horas",
            price: "65 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour de Comida Callejera y Degustación de Café",
            description: "Degusta arepas de huevo, carimañolas y aprende a catar el café de origen premium en Getsemaní.",
            duration: "3 horas",
            price: "25 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Carmen Cartagena",
            cuisine: "Fusión Caribeña de Autor",
            price: "€€€",
            rating: 4.8,
            coords: [10.4231, -75.5359],
            description: "Espectacular restaurante en patio colonial con platos contemporáneos basados en la pesca y frutas del Caribe."
          },
          {
            name: "La Mulata",
            cuisine: "Caribeña Tradicional",
            price: "€",
            rating: 4.6,
            coords: [10.4235, -75.5432],
            description: "Comida costeña de excelente calidad con platos tradicionales como arroz con coco y pescado frito."
          },
          {
            name: "Restaurante 1621",
            cuisine: "Gourmet Franco-Colombiana",
            price: "€€€€",
            rating: 4.7,
            coords: [10.4239, -75.5437],
            description: "Ubicado en el antiguo convento de las Clarisas, ofrece una experiencia culinaria premium de maridajes históricos."
          }
        ]
      },
      medellin: {
        name: "Medellín",
        description: "La Ciudad de la Eterna Primavera, ubicada en un cañón de los Andes, pionera en innovación social y cultura.",
        coords: [6.2442, -75.5812],
        tours: [
          {
            name: "Graffitour por la Comuna 13",
            description: "Recorre las escaleras eléctricas urbanas, admira los grafitis históricos y escucha la transformación de la comunidad.",
            duration: "3 horas",
            price: "15 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Excursión a Guatapé y Piedra del Peñol",
            description: "Sube los 740 escalones de la colosal roca monolítica y navega por el embalse verde esmeralda.",
            duration: "9 horas",
            price: "35 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour del Café Tradicional en Finca Cafetera",
            description: "Viaja a un pueblo de montaña para recolectar granos y conocer el proceso artesanal del café de alta montaña.",
            duration: "5 horas",
            price: "29 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "El Cielo",
            cuisine: "Cocina Neuronal de Vanguardia",
            price: "€€€€",
            rating: 4.9,
            coords: [6.2087, -75.5684],
            description: "El chef Juan Manuel Barrientos crea un menú de degustación que estimula los cinco sentidos a través de la neurogastronomía."
          },
          {
            name: "Carmen Medellín",
            cuisine: "Contemporánea de Autor",
            price: "€€€",
            rating: 4.8,
            coords: [6.2062, -75.5658],
            description: "Platos vibrantes en el barrio El Poblado que celebran la biodiversidad colombiana con toques modernos."
          },
          {
            name: "Mondongo's El Poblado",
            cuisine: "Criolla Tradicional",
            price: "€€",
            rating: 4.7,
            coords: [6.2093, -75.5672],
            description: "Famoso restaurante local donde se degusta la mejor sopa de mondongo y la icónica bandeja paisa tradicional."
          }
        ]
      }
    }
  },
  argentina: {
    name: "Argentina",
    flag: "🇦🇷",
    description: "Tierra de pasiones: tango apasionado, glaciares colosales en la Patagonia, excelentes cortes de carne y viñedos andinos.",
    cities: {
      buenos_aires: {
        name: "Buenos Aires",
        description: "Capital cosmopolita apodada la 'París de América del Sur', cuna del tango e intensa vida cultural de teatros y cafés.",
        coords: [-34.6037, -58.3816],
        tours: [
          {
            name: "Show de Tango Clásico y Recorrido por San Telmo",
            description: "Camina por calles empedradas, visita mercados antiguos y disfruta de un show de tango de primer nivel.",
            duration: "4 horas",
            price: "45 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Paseo por La Boca, Caminito y Recoleta",
            description: "Conoce las coloridas fachadas de los conventillos de chapa en Caminito y la historia del cementerio de la Recoleta.",
            duration: "3 horas",
            price: "22 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Experiencia Histórica en el Teatro Colón",
            description: "Visita guiada por el interior de uno de los cinco teatros de ópera con mejor acústica del mundo.",
            duration: "1.5 horas",
            price: "18 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Don Julio Parrilla",
            cuisine: "Parrilla Argentina Premium",
            price: "€€€",
            rating: 4.9,
            coords: [-34.5862, -58.4244],
            description: "Mundialmente famosa parrilla en Palermo Viejo. Selección inigualable de cortes de carne madurada y vinos Malbec."
          },
          {
            name: "Tegui",
            cuisine: "Vanguardia Argentina",
            price: "€€€€",
            rating: 4.8,
            coords: [-34.5833, -58.4442],
            description: "Menú degustación sofisticado del chef Germán Martitegui tras una misteriosa fachada con grafitis."
          },
          {
            name: "La Cabrera",
            cuisine: "Parrilla Tradicional Portea",
            price: "€€€",
            rating: 4.7,
            coords: [-34.5885, -58.4231],
            description: "Famosa por sus cortes gigantescos de ojo de bife servidos con infinitas cazuelas de guarniciones frías y calientes."
          }
        ]
      },
      bariloche: {
        name: "San Carlos de Bariloche",
        description: "La Suiza argentina, rodeada de lagos glaciares y montañas nevadas, famosa por su chocolate y deportes de invierno.",
        coords: [-41.1335, -71.3103],
        tours: [
          {
            name: "Circuito Chico y Telesilla al Cerro Campanario",
            description: "Recorre la costa del lago Nahuel Huapi y sube en telesilla para contemplar una de las mejores vistas panorámicas del mundo.",
            duration: "4 horas",
            price: "25 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Navegación a Isla Victoria y Bosque de Arrayanes",
            description: "Cruza las aguas azules del lago hacia un bosque único de árboles de corteza color canela y textura fría.",
            duration: "7 horas",
            price: "60 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour de Aventura al Cerro Catedral",
            description: "Explora la base del centro de esquí más grande del hemisferio sur y disfruta de actividades de nieve o senderismo.",
            duration: "5 horas",
            price: "30 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "El Boliche de Alberto",
            cuisine: "Carnes a la Brasa",
            price: "€€",
            rating: 4.8,
            coords: [-41.1345, -71.3090],
            description: "Parrilla rústica emblemática donde los asadores cocinan cortes jugosos de bife de chorizo frente a las mesas."
          },
          {
            name: "Cassis",
            cuisine: "Patagónica de Autor",
            price: "€€€€",
            rating: 4.9,
            coords: [-41.1558, -71.3958],
            description: "Restaurante de cocina centroeuropea-patagónica con vistas al lago Gutiérrez. Platos refinados basados en flores y frutos silvestres."
          },
          {
            name: "Alto el Fuego",
            cuisine: "Asador Criollo",
            price: "€€",
            rating: 4.7,
            coords: [-41.1378, -71.3045],
            description: "Ubicado en una acogedora cabaña de madera en lo alto de la loma, ofrece un ambiente íntimo para degustar mollejas y entraña."
          }
        ]
      }
    }
  },
  brasil: {
    name: "Brasil",
    flag: "🇧🇷",
    description: "Alegría de vivir irresistible, playas infinitas de palmeras, el majestuoso Amazonas y el mayor carnaval del planeta.",
    cities: {
      rio: {
        name: "Río de Janeiro",
        description: "Ciudad maravillosa encajonada entre imponentes picos de granito y las famosas playas de Copacabana e Ipanema.",
        coords: [-22.9068, -43.1729],
        tours: [
          {
            name: "Cristo Redentor del Corcovado y Pan de Azúcar",
            description: "Sube en el tren histórico al Corcovado para ver al Cristo y toma el teleférico del Pan de Azúcar para el atardecer.",
            duration: "5 horas",
            price: "49 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Paseo en Velero por la Bahía de Guanabara",
            description: "Navega por las tranquilas aguas contemplando el skyline de Río, Niterói y el Fuerte de São João.",
            duration: "3 horas",
            price: "35 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour Histórico en Santa Teresa y Selarón",
            description: "Recorre los pintorescos talleres de artistas y los coloridos azulejos de los famosos escalones del artista Jorge Selarón.",
            duration: "3 horas",
            price: "20 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Aprazível",
            cuisine: "Brasileña de Autor",
            price: "€€€",
            rating: 4.8,
            coords: [-22.9298, -43.1945],
            description: "Espectacular restaurante con mesas en cabañas de madera rodeadas de vegetación tropical y vistas al atardecer de la bahía."
          },
          {
            name: "Churrascaria Palace",
            cuisine: "Churrasco Rodizio Tradicional",
            price: "€€",
            rating: 4.6,
            coords: [-22.9642, -43.1764],
            description: "Histórico rodizio de Copacabana donde los meseros sirven cortes de picanha y costilla directamente a la mesa."
          },
          {
            name: "Confeitaria Colombo Centenaria",
            cuisine: "Cafetería e Historia",
            price: "€",
            rating: 4.5,
            coords: [-22.9056, -43.1797],
            description: "Espectacular salón de té de estilo Belle Époque con vidrieras belgas y mármol italiano en el centro de Río."
          }
        ]
      },
      sao_paulo: {
        name: "São Paulo",
        description: "El gigante financiero y capital de la moda y la gastronomía de Sudamérica, un hervidero cultural incesante.",
        coords: [-23.5505, -46.6333],
        tours: [
          {
            name: "Caminata por la Avenida Paulista y el MASP",
            description: "Recorre el corazón cosmopolita de la ciudad y admira la arquitectura suspendida del Museo de Arte de São Paulo.",
            duration: "3 horas",
            price: "18 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1543059080-f092dca5c309?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour de Comida en el Mercado Municipal",
            description: "Prueba el famoso sándwich de mortadela gigante y pasteles de bacalao en el histórico mercado central.",
            duration: "2.5 horas",
            price: "22 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Exploración del Parque Ibirapuera y Monumentos",
            description: "Camina por el pulmón verde diseñado por Roberto Burle Marx y visita el Auditorio diseñado por Oscar Niemeyer.",
            duration: "2 horas",
            price: "15 €",
            rating: 4.6,
            image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "D.O.M. Restaurante",
            cuisine: "Alta Cocina Amazónica",
            price: "€€€€",
            rating: 4.9,
            coords: [-23.5658, -46.6684],
            description: "El aclamado chef Alex Atala utiliza técnicas modernas para explorar ingredientes raros traídos de la selva del Amazonas."
          },
          {
            name: "Maní",
            cuisine: "Contemporánea Brasileña",
            price: "€€€",
            rating: 4.8,
            coords: [-23.5593, -46.6858],
            description: "Elegante estrella Michelin en una casa de campo urbana dirigida por la galardonada chef Helena Rizzo."
          },
          {
            name: "Famiglia Mancini",
            cuisine: "Italiana Tradicional",
            price: "€€",
            rating: 4.7,
            coords: [-23.5489, -46.6432],
            description: "Legendario restaurante italiano en el animado pasaje de Bixiga. Decoración maximalista y porciones gigantes."
          }
        ]
      }
    }
  },
  portugal: {
    name: "Portugal",
    flag: "🇵🇹",
    description: "Castillos que miran al Atlántico, azulejos de colores brillantes, melancólico fado y el sabor del bacalao.",
    cities: {
      lisboa: {
        name: "Lisboa",
        description: "Capital atlántica de colinas adoquinadas, tranvías amarillos antiguos y el encanto melancólico de los miradores.",
        coords: [38.7223, -9.1393],
        tours: [
          {
            name: "Paseo en Tranvía 28 y Recorrido por Alfama",
            description: "Sube por las colinas empinadas en el tranvía de madera y camina por las callejuelas del barrio más antiguo.",
            duration: "3 horas",
            price: "25 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1505765056433-0d7a6f3b6f6f?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Excursión de un día al Palacio da Pena en Sintra",
            description: "Visita el palacio real más colorido y romántico de Europa y contempla el mar en Cabo da Roca.",
            duration: "8 horas",
            price: "55 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Noche de Fado en Bairro Alto con Cena",
            description: "Disfruta de una cena portuguesa tradicional mientras escuchas la canción tradicional de los marineros.",
            duration: "3 horas",
            price: "45 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Belcanto by José Avillez",
            cuisine: "Alta Cocina Portuguesa",
            price: "€€€€",
            rating: 4.9,
            coords: [38.7093, -9.1416],
            description: "Dos estrellas Michelin ubicadas en el Chiado. Platos poéticos que revisitan los clásicos portugueses."
          },
          {
            name: "Time Out Market Lisboa",
            cuisine: "Food Hall / Gastro-Market",
            price: "€",
            rating: 4.6,
            coords: [38.7062, -9.1458],
            description: "Mercado gourmet repleto de puestos dirigidos por los chefs más premiados de la capital portuguesa."
          },
          {
            name: "Cervejaria Ramiro",
            cuisine: "Marisquería de Mar",
            price: "€€",
            rating: 4.7,
            coords: [38.7215, -9.1352],
            description: "Mítica taberna de mariscos frescos famosa por sus carabineros gigantes, percebes y filetes de ternera finales."
          }
        ]
      },
      oporto: {
        name: "Oporto",
        description: "Ciudad del norte a orillas del río Duero, con puentes de hierro espectaculares y bodegas de vino centenarias.",
        coords: [41.1579, -8.6291],
        tours: [
          {
            name: "Crucero de los Seis Puentes en el Río Duero",
            description: "Navega a bordo de un barco rabelo tradicional contemplando los puentes metálicos históricos de Oporto.",
            duration: "1 hora",
            price: "15 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Visita Guiada y Catas en Bodegas Sandeman",
            description: "Cruza a Vila Nova de Gaia, recorre las bodegas oscuras y degusta tres variedades de vino de Oporto.",
            duration: "1.5 horas",
            price: "20 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Paseo a Pie por Ribeira y la librería Lello",
            description: "Explora la catedral medieval, admira los azulejos de la estación São Bento y visita la librería más famosa.",
            duration: "3.5 horas",
            price: "28 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "The Yeatman Restaurant",
            cuisine: "Gastronómica de Autor",
            price: "€€€€",
            rating: 4.9,
            coords: [41.1332, -8.6135],
            description: "Dos estrellas Michelin con vistas incomparables a Oporto. Carta de vinos portugueses galardonada internacionalmente."
          },
          {
            name: "Cantinho do Avillez Oporto",
            cuisine: "Portuguesa Contemporánea",
            price: "€€",
            rating: 4.7,
            coords: [41.1448, -8.6158],
            description: "Restaurante informal en el centro de la ciudad del renombrado chef José Avillez en un ambiente acogedor."
          },
          {
            name: "Café Santiago",
            cuisine: "Francesinhas Tradicionales",
            price: "€",
            rating: 4.6,
            coords: [41.1467, -8.6045],
            description: "Considerado el mejor lugar para degustar la tradicional Francesinha, el abundante sándwich bañado en salsa de cerveza."
          }
        ]
      }
    }
  },
  marruecos: {
    name: "Marruecos",
    flag: "🇲🇦",
    description: "Una sinfonía de colores y aromas en las medinas medievales, oasis fértiles y las dunas doradas del desierto.",
    cities: {
      marrakech: {
        name: "Marrakech",
        description: "La Ciudad Roja, donde los encantadores de serpientes se reúnen en la plaza Jemaa el-Fna junto a palacios antiguos.",
        coords: [31.6295, -7.9811],
        tours: [
          {
            name: "Paseo por los Zocos y Plaza Jemaa el-Fna",
            description: "Aprende a regatear en los laberintos de zocos de alfombras, especias y linternas metálicas hechas a mano.",
            duration: "3 horas",
            price: "18 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Visita del Jardín Majorelle y Palacio de la Bahía",
            description: "Visita los jardines de color azul cobalto de Yves Saint Laurent y explora la hermosa arquitectura andalusí del palacio.",
            duration: "2.5 horas",
            price: "15 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Excursión al Desierto de Agafay al Atardecer",
            description: "Viaja al desierto de piedra de Agafay para pasear en camello y cenar bajo las estrellas en un campamento nómada.",
            duration: "6 horas",
            price: "55 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1542332606-b2d1c6124140?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Le Jardin",
            cuisine: "Marroquí en Jardín Escondido",
            price: "€€",
            rating: 4.6,
            coords: [31.6312, -7.9875],
            description: "Espectacular oasis de plantas dentro de un riad del siglo XVII con platos de cuscús y tajines refinados."
          },
          {
            name: "Nomad Marrakech",
            cuisine: "Moderna Marroquí",
            price: "€€",
            rating: 4.7,
            coords: [31.6288, -7.9858],
            description: "Espectacular terraza con vistas a la Plaza de las Especias. Platos tradicionales con toques occidentales modernos."
          },
          {
            name: "Dar Moha",
            cuisine: "Alta Gastronomía Marroquí",
            price: "€€€€",
            rating: 4.8,
            coords: [31.6342, -7.9912],
            description: "Ubicado en un fastuoso palacio antiguo alrededor de una piscina, ofrece platos clásicos cantados con violín en vivo."
          }
        ]
      },
      fez: {
        name: "Fez",
        description: "El corazón espiritual de Marruecos, con la zona peatonal urbana más grande del mundo y curtiderías históricas.",
        coords: [34.0181, -5.0078],
        tours: [
          {
            name: "Paseo Histórico en la Medina de Fez el-Bali",
            description: "Camina junto a un guía local por los laberintos de la medina y conoce la histórica madraza Bou Inania.",
            duration: "4 horas",
            price: "22 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Curtiduría Chouara e Historia del Cuero",
            description: "Contempla los colosales pozos de piedra de colores donde los artesanos tiñen el cuero de manera medieval.",
            duration: "2 horas",
            price: "12 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Clase de Cerámica y Alfarería en Fez",
            description: "Visita una cooperativa tradicional, aprende a moldear la arcilla gris local y pintar los típicos azulejos azules.",
            duration: "3 horas",
            price: "25 €",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1565192647048-f997ded87958?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Dar Riad Al Bartal",
            cuisine: "Casera Marroquí",
            price: "€€",
            rating: 4.9,
            coords: [34.0625, -4.9812],
            description: "Cena íntima en el patio de un riad cubierto de flores y azulejos antiguos. Platos vegetarianos excepcionales."
          },
          {
            name: "Restaurant Nur",
            cuisine: "Vanguardia de Fez",
            price: "€€€€",
            rating: 4.8,
            coords: [34.0648, -4.9785],
            description: "La chef Najat Kaanache ofrece un menú degustación contemporáneo que rinde tributo a las recetas andalusíes."
          },
          {
            name: "Café Clock",
            cuisine: "Fusión Informal",
            price: "€",
            rating: 4.6,
            coords: [34.0620, -4.9832],
            description: "Famoso café de la medina conocido por su hamburguesa de camello, batidos de dátiles y ambiente multicultural."
          }
        ]
      }
    }
  },
  italia: {
    name: "Italia",
    flag: "🇮🇹",
    description: "El tesoro del arte mundial, monumentos de piedra antigua, viñedos de ensueño y la gastronomía más influyente.",
    cities: {
      roma: {
        name: "Roma",
        description: "La Ciudad Eterna, museo viviente repleto de ruinas clásicas, iglesias barrocas y románticas plazas.",
        coords: [41.9028, 12.4964],
        tours: [
          {
            name: "Acceso Sin Colas al Coliseo y Foro Romano",
            description: "Entra a la arena del mayor anfiteatro del mundo romano y camina por la Vía Sacra con un historiador.",
            duration: "3 horas",
            price: "49 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Museos Vaticanos y Capilla Sixtina de Miguel Ángel",
            description: "Contempla los frescos de la Creación y el Juicio Final y visita la monumental Basílica de San Pedro.",
            duration: "3 horas",
            price: "55 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1541088648397-c8541630999f?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Tour Nocturno de Plazas, Fuentes y Gelato",
            description: "Pasea por el Panteón iluminado, lanza una moneda en la Fontana de Trevi y degusta un auténtico helado artesanal.",
            duration: "2.5 horas",
            price: "25 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "La Pergola",
            cuisine: "Alta Cocina Italiana de Autor",
            price: "€€€€",
            rating: 4.9,
            coords: [41.9189, 12.4468],
            description: "El único restaurante con tres estrellas Michelin en Roma, ubicado en la terraza superior del Rome Cavalieri."
          },
          {
            name: "Roscioli Salumeria con Cucina",
            cuisine: "Romana Tradicional Refinada",
            price: "€€€",
            rating: 4.8,
            coords: [41.8943, 12.4721],
            description: "Templo gastronómico famoso por servir la mejor pasta Carbonara de Roma y una cava de quesos impresionante."
          },
          {
            name: "Gelateria del Teatro",
            cuisine: "Heladería Artesanal",
            price: "€",
            rating: 4.7,
            coords: [41.9006, 12.4695],
            description: "Helados espectaculares hechos a mano con ingredientes naturales como pistacho de Sicilia y limón de Amalfi."
          }
        ]
      },
      florencia: {
        name: "Florencia",
        description: "Cuna del Renacimiento, hogar de la dinastía Médici, de la monumental cúpula de Brunelleschi y obras inmortales.",
        coords: [43.7696, 11.2558],
        tours: [
          {
            name: "Visita Guiada a la Galería Uffizi y David de Miguel Ángel",
            description: "Evita las colas y admira obras maestras como el Nacimiento de Venus de Botticelli y el David original.",
            duration: "3 horas",
            price: "55 €",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1541088648397-c8541630999f?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Cúpula de Brunelleschi y Duomo de Florencia",
            description: "Sube al interior de la cúpula para contemplar de cerca los frescos del Juicio Final y las vistas de la ciudad.",
            duration: "2 horas",
            price: "35 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?auto=format&fit=crop&w=600&q=80"
          },
          {
            name: "Excursión a la Región de Chianti y Catas de Vinos",
            description: "Viaja por las colinas cubiertas de viñedos de la Toscana, visita bodegas locales y degusta Chianti Classico.",
            duration: "6 horas",
            price: "59 €",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80"
          }
        ],
        restaurants: [
          {
            name: "Enoteca Pinchiorri",
            cuisine: "Clásica Toscana de Vanguardia",
            price: "€€€€",
            rating: 4.9,
            coords: [43.7687, 11.2625],
            description: "Tres estrellas Michelin con una de las bodegas de vinos finos más valiosas y completas de Europa."
          },
          {
            name: "Trattoria Mario",
            cuisine: "Toscana Casera",
            price: "€",
            rating: 4.6,
            coords: [43.7785, 11.2542],
            description: "Pequeña trattoria familiar abierta desde 1953 cerca del Mercado Central. Sabor clásico y bife a la Fiorentina."
          },
          {
            name: "All'Antico Vinaio",
            cuisine: "Street Food de Focaccia",
            price: "€",
            rating: 4.8,
            coords: [43.7685, 11.2587],
            description: "Las focaccias rellenas de embutidos toscanos más famosas del mundo. Las colas se mueven rápido."
          }
        ]
      }
    }
  }
};

export const CHATBOT_RESPONSES = {
  global: {
    saludo: "¡Hola! Soy tu asistente de viajes inteligente de **dbv-specs-ops**. Estoy aquí para ayudarte a planificar tu aventura. Puedes preguntarme sobre qué ver, los mejores tours o recomendaciones de restaurantes de nuestros destinos en Francia, Japón, España, México, Alemania, Colombia, Argentina, Brasil, Portugal, Marruecos e Italia. ¿Hacia dónde te gustaría viajar hoy?",
    desconocido: "Disculpa, no he comprendido del todo tu consulta. ¿Podrías reformularla? Recuerda que puedo darte detalles específicos de clima, restaurantes populares, consejos de viaje y actividades de la ciudad que tengas seleccionada en la pantalla.",
    tours_general: "Ofrecemos tours increíbles en París, Niza, Tokio, Kioto, Madrid, Barcelona, Ciudad de México, Cancún, Berlín, Múnich, Cartagena, Medellín, Buenos Aires, Bariloche, Río, São Paulo, Lisboa, Oporto, Marrakech, Fez, Roma y Florencia."
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
          "Barcelona": "goza de un clima costero muy agradable todo el año. Primavera y principios de otoño son perfectos para pasear por el Barrio Gótico con temperaturas de unos 20-25°C.",
          "Ciudad de México": "tiene un clima templado durante todo el año. La mejor época es de noviembre a abril (estación seca), con temperaturas agradables de unos 22°C.",
          "Cancún": "posee un clima tropical semi-húmedo. Los meses de diciembre a abril son ideales con menos lluvias y temperaturas muy agradables. Cuidado con la temporada de huracanes de agosto a octubre.",
          "Berlín": "tiene un clima templado continental. La primavera y el verano (mayo a septiembre) son fantásticos para disfrutar de cafés al aire libre y parques. Los inviernos son bastante fríos.",
          "Múnich": "cuenta con inviernos fríos y veranos templados. El otoño es fresco y seco, ideal para el Oktoberfest, mientras que de mayo a septiembre hay temperaturas agradables de unos 22°C.",
          "Cartagena": "goza de un clima tropical cálido durante todo el año, con promedios de 28°C. Es húmedo, por lo que la brisa de la tarde en las murallas es maravillosa.",
          "Medellín": "cuenta con el clima ideal de 'Eterna Primavera', oscilando entre los 22°C y 25°C todo el año. La temporada seca (diciembre a febrero y julio a agosto) es ideal para paseos al aire libre.",
          "Buenos Aires": "tiene cuatro estaciones bien definidas. La primavera (septiembre a noviembre) y el otoño (marzo a mayo) son perfectos por sus temperaturas medias de 18-22°C y jacarandás florecidos.",
          "San Carlos de Bariloche": "cuenta con inviernos fríos ideales para el esquí y veranos secos y templados (diciembre a marzo, con unos 20-25°C) perfectos para el senderismo y lagos.",
          "Río de Janeiro": "goza de un clima tropical cálido todo el año. De mayo a octubre las temperaturas son más frescas e ideales para recorrer (22-25°C), mientras que el verano carnavalesco es muy caluroso.",
          "São Paulo": "tiene un clima templado húmedo. El invierno (junio a agosto) es suave y seco, ideal para recorrer sus museos y gastronomía. La lluvia suele concentrarse en los meses de verano.",
          "Lisboa": "goza de inviernos suaves y veranos cálidos y secos. La primavera y el otoño son perfectos para subir sus empinadas colinas sin calor excesivo.",
          "Oporto": "cuenta con un clima atlántico templado. Los veranos son agradables y soleados, mientras que en invierno y otoño las lluvias son más comunes que en Lisboa.",
          "Marrakech": "posee un clima mediterráneo seco. Los veranos son extremadamente calurosos (pueden superar los 40°C). Se recomienda visitar en primavera u otoño, cuando las temperaturas son de 25°C.",
          "Fez": "cuenta con veranos calurosos e inviernos frescos. La primavera (abril-mayo) y el otoño son las mejores épocas para recorrer su enorme medina medieval con clima agradable.",
          "Roma": "tiene inviernos frescos y veranos muy calurosos. Primavera (abril-junio) y otoño son magníficos para recorrer las ruinas con temperaturas muy agradables.",
          "Florencia": "cuenta con inviernos fríos y veranos calurosos. La mejor época es de abril a junio y de septiembre a octubre para disfrutar de los paisajes de la Toscana."
        };
        return `El clima en **${city.name}** ${climaInfo[city.name] || "es ideal durante la primavera y el otoño. Te recomendamos revisar el pronóstico antes de empacar."}`;
      }
    },
    {
      keywords: ["consejo", "tip", "recomendacion", "seguridad", "transporte"],
      response: (city) => {
        if (!city) return "Elige una ciudad y te daré consejos valiosos para moverte por ella.";
        const consejos = {
          "París": "Te aconsejamos comprar el abono de metro 'Paris Visite' o usar tarjetas Navigo Easy. Ten cuidado con tus pertenencias en zonas de alta concurrencia.",
          "Niza": "Niza es muy transitable a pie. Para ir a pueblos cercanos como Eze o Mónaco, el autobús 100 o el tren TER son económicos y ofrecen vistas espectaculares.",
          "Tokio": "El metro de Tokio es eficiente pero complejo; descarga la tarjeta digital Suica o Pasmo en tu móvil. Recuerda que no se acostumbra dejar propina.",
          "Kioto": "La mejor forma de recorrer Kioto es en autobús o alquilando una bicicleta. Respeta las señales en Gion y no fotografíes geishas sin permiso.",
          "Madrid": "El metro es la forma más rápida de moverse. Aprovecha las visitas gratuitas del Museo del Prado (lunes a sábado de 18:00 a 20:00). La cena suele ser tarde, a partir de las 21:30.",
          "Barcelona": "Camina por el Paseo de Gracia y el Gótico. Ten mucha precaución con carteristas en Las Ramblas y el metro. Reserva la entrada a la Sagrada Familia con anticipación.",
          "Ciudad de México": "Utiliza servicios de transporte privado por aplicación para moverte con seguridad de noche. Prueba el agua embotellada y ten cuidado con los picantes si no estás acostumbrado.",
          "Cancún": "Usa bloqueador solar biodegradable para proteger los arrecifes. Para moverte de la Zona Hotelera al centro utiliza los autobuses de ruta R-1 o R-2, son muy económicos.",
          "Berlín": "El transporte público (S-Bahn y U-Bahn) funciona con sistema de honor; recuerda validar tu boleto antes de subir al vagón para evitar multas. Las propinas de unos 5-10% son habituales.",
          "Múnich": "Alquila una bicicleta para cruzar el Jardín Inglés. Si visitas tabernas tradicionales de cerveza como Hofbräuhaus, puedes compartir mesas grandes con otros clientes, es la costumbre.",
          "Cartagena": "Viste ropa fresca de algodón y mantente hidratado. Acuerda siempre los precios de taxis o servicios antes de subirte para evitar cobros excesivos.",
          "Medellín": "El sistema Metro de Medellín cuenta con Metrocable integrado que ofrece vistas increíbles. Es una ciudad muy innovadora; respeta las normas de convivencia urbana local.",
          "Buenos Aires": "Consigue la tarjeta SUBE para viajar en colectivo y subte. Ten precaución en las zonas turísticas con el cambio de divisas y usa taxis oficiales de radiotaxi.",
          "San Carlos de Bariloche": "Alquila un auto o toma el autobús de línea 20 para hacer el Circuito Chico por tu cuenta. No dejes de probar el chocolate en rama en las chocolaterías de la calle Mitre.",
          "Río de Janeiro": "Mantén un perfil bajo, no uses joyas llamativas en la playa de Copacabana. Para ir al Cristo, compra los boletos del tren oficial online con antelación.",
          "São Paulo": "Evita moverte a pie de noche en el centro histórico. El tráfico de São Paulo es legendario; prefiere viajar en metro o fuera de horas pico.",
          "Lisboa": "Viste calzado cómodo con buen agarre, las aceras de piedra lisas pueden ser resbaladizas. Evita los taxis en zonas hiper-turísticas, prefiere el metro.",
          "Oporto": "Prueba la Francesinha con una cerveza local 'Super Bock'. Cruza a pie por el piso superior del Puente Don Luis I para tener las mejores fotografías.",
          "Marrakech": "Si te pierdes en la medina, pregunta por el camino en tiendas locales o restaurantes en vez de aceptar guías callejeros espontáneos que te cobrarán.",
          "Fez": "La medina es un laberinto gigante de calles estrechas donde no hay autos. Mantente a la derecha cuando escuches la palabra '¡Balak!' (¡Cuidado!), ya que pasa un burro cargado.",
          "Roma": "Lleva una botella de agua rellenable; Roma tiene cientos de fuentes de agua potable fría ('nasoni') por toda la ciudad. Cubre hombros y rodillas al visitar iglesias.",
          "Florencia": "Compra la tarjeta Firenze Card si planeas visitar muchos museos. Para cenar, reserva una mesa en trattorias tradicionales alejadas del Duomo para un sabor más auténtico."
        };
        return `**Consejo de viaje para ${city.name}:** ${consejos[city.name] || "Usa zapatos cómodos para caminar, mantén una copia digital de tu pasaporte y compra pases de transporte diario."}`;
      }
    }
  ]
};
