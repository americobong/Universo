// BASE DE DATOS DEL UNIVERSO - IMÁGENES UNSPLASH (FUNCIONAN 100%)
const universo = {
sistemaSolar: [
    {
        nombre: "Sol",
        imagen: "https://images.unsplash.com/photo-1534234828563-0254170f0060?w=400",
        descripcion: "El Sol es una estrella gigante que está en el centro de nuestro sistema solar. Es una enorme bola de gas caliente que brilla y da luz a todos los planetas. Sin el Sol, no existiría la vida en la Tierra. Tiene más de 4 mil millones de años y es tan grande que cabrían un millón de planetas Tierra dentro de él.",
        curiosidades: [
            "El Sol es 109 veces más grande que la Tierra",
            "La temperatura del Sol es de 5 mil 500 grados en su superficie",
            "La luz del Sol tarda 8 minutos en llegar a la Tierra",
            "El Sol es una estrella mediana, hay estrellas mucho más grandes"
        ]
    },
    {
        nombre: "Mercurio",
        imagen: "https://images.unsplash.com/photo-1614730341194-75c607400070?w=400",
        descripcion: "Mercurio es el planeta más cercano al Sol y también el más pequeño del sistema solar. Es un planeta rocoso y gris, muy parecido a nuestra Luna. Durante el día hace muchísimo calor, pero por la noche hace muchísimo frío. No tiene atmósfera que lo proteja.",
        curiosidades: [
            "Un año en Mercurio dura solo 88 días terrestres",
            "Mercurio no tiene lunas ni satélites",
            "Es el planeta que viaja más rápido alrededor del Sol",
            "La temperatura puede bajar a 180 grados bajo cero por la noche"
        ]
    },
    {
        nombre: "Venus",
        imagen: "https://images.unsplash.com/photo-1614728853970-c2f217759b1f?w=400",
        descripcion: "Venus es el segundo planeta desde el Sol y es el más caliente de todos. Se le llama la estrella de la mañana o la estrella de la tarde porque brilla mucho en el cielo. Está cubierto de nubes amarillentas que atrapan el calor, como un invernadero gigante.",
        curiosidades: [
            "Venus gira al revés que los otros planetas",
            "Un día en Venus dura más que un año en Venus",
            "Es tan brillante que se puede ver durante el día",
            "Tiene volcanes y montañas muy altas"
        ]
    },
    {
        nombre: "Tierra",
        imagen: "https://images.unsplash.com/photo-1614732414444-096e6f3d2d96?w=400",
        descripcion: "La Tierra es nuestro hogar, el único planeta conocido donde hay vida. Es un planeta azul porque tiene mucha agua. Tiene aire para respirar, agua para beber y la temperatura perfecta para que existan plantas, animales y personas.",
        curiosidades: [
            "La Tierra tiene 4 mil 500 millones de años",
            "Es el único planeta con océanos de agua líquida",
            "La Luna es nuestro único satélite natural",
            "La Tierra no es una esfera perfecta, está achatada en los polos"
        ]
    },
    {
        nombre: "Luna",
        imagen: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=400",
        descripcion: "La Luna es el único satélite natural de la Tierra. Es un cuerpo rocoso gris que nos acompaña siempre. No tiene luz propia, solo refleja la luz del Sol. Los astronautas llegaron a la Luna en 1969 y dejaron huellas que siguen ahí porque no hay viento.",
        curiosidades: [
            "La Luna se está alejando de la Tierra 3 centímetros cada año",
            "Siempre nos muestra la misma cara, la otra cara está oculta",
            "En la Luna pesas 6 veces menos que en la Tierra",
            "Hay montañas en la Luna más altas que las de la Tierra"
        ]
    },
    {
        nombre: "Marte",
        imagen: "https://images.unsplash.com/photo-1614726365723-49cfae927846?w=400",
        descripcion: "Marte es el planeta rojo, llamado así por su color de óxido de hierro, como el óxido. Es un planeta frío y seco con desiertos de polvo rojo. Tiene el volcán más grande del sistema solar y científicos creen que pudo haber tenido agua hace mucho tiempo.",
        curiosidades: [
            "Marte tiene dos lunas pequeñas: Fobos y Deimos",
            "Tiene el volcán más alto del sistema solar, el Monte Olimpo",
            "Los días en Marte duran casi lo mismo que en la Tierra",
            "Hay robots explorando Marte ahora mismo"
        ]
    },
    {
        nombre: "Júpiter",
        imagen: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400",
        descripcion: "Júpiter es el planeta más grande del sistema solar. Es un gigante de gas, no tiene superficie sólida donde pisar. Tiene una gran mancha roja que es una tormenta gigante que lleva siglos girando. Tiene más de 90 lunas.",
        curiosidades: [
            "Júpiter es tan grande que cabrían mil 300 Tierras dentro",
            "Su gran mancha roja es del tamaño de la Tierra",
            "Tiene un anillo muy tenue que casi no se ve",
            "Gira tan rápido que un día dura solo 10 horas"
        ]
    },
    {
        nombre: "Saturno",
        imagen: "https://images.unsplash.com/photo-1614732414444-096e6f3d2d96?w=400",
        descripcion: "Saturno es famoso por sus hermosos anillos que parecen un sombrero. Es un gigante de gas amarillento. Sus anillos están hechos de millones de pedazos de hielo y roca, algunos del tamaño de una casa, otros del tamaño de un grano de arena.",
        curiosidades: [
            "Saturno es menos denso que el agua, flotaría en una bañera gigante",
            "Sus anillos tienen más de 100 mil millones de partículas",
            "Tiene una luna llamada Titán que tiene lagos de metano",
            "Los vientos en Saturno pueden llegar a 1.800 kilómetros por hora"
        ]
    },
    {
        nombre: "Urano",
        imagen: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=400",
        descripcion: "Urano es un planeta gigante de hielo de color azul verdoso. Es muy especial porque gira acostado, como si rodara en su órbita. Está muy lejos del Sol y hace muchísimo frío, 200 grados bajo cero. Tiene anillos oscuros que son difíciles de ver.",
        curiosidades: [
            "Un año en Urano dura 84 años terrestres",
            "Tiene 27 lunas conocidas",
            "Es el planeta más frío del sistema solar",
            "Gira acostado, probablemente por un choque gigante hace mucho tiempo"
        ]
    },
    {
        nombre: "Neptuno",
        imagen: "https://images.unsplash.com/photo-1614728423169-3f65fd723619?w=400",
        descripcion: "Neptuno es el planeta más lejano del Sol y es de color azul intenso. Es un gigante de hielo con los vientos más rápidos del sistema solar, hasta 2 mil kilómetros por hora. Es tan lejos que la luz del Sol tarda 4 horas en llegar.",
        curiosidades: [
            "Neptuno fue el primer planeta descubierto con matemáticas",
            "Tiene una gran mancha oscura como Júpiter, pero desaparece y aparece",
            "Un año en Neptuno dura 165 años terrestres",
            "Tiene 14 lunas conocidas, la más grande se llama Tritón"
        ]
    },
    {
        nombre: "Plutón",
        imagen: "https://images.unsplash.com/photo-1614728894747-a63ba4d54e76?w=400",
        descripcion: "Plutón era considerado el noveno planeta, pero ahora se le llama planeta enano. Es un mundo pequeño, frío y helado en el borde del sistema solar. Tiene un corazón gigante en su superficie y cinco lunas, siendo Caronte la más grande.",
        curiosidades: [
            "Plutón es más pequeño que la Luna de la Tierra",
            "Su corazón es una llanura de hielo del tamaño de Texas",
            "Un día en Plutón dura 6 días y 9 horas terrestres",
            "La sonda New Horizons lo visitó en 2015 y tomó fotos increíbles"
        ]
    },
    {
        nombre: "Cinturón de Asteroides",
        imagen: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=400",
        descripcion: "Entre Marte y Júpiter hay un cinturón lleno de rocas espaciales llamadas asteroides. Son restos de cuando se formó el sistema solar. El más grande se llama Ceres, que es tan grande que también se considera planeta enano.",
        curiosidades: [
            "Hay millones de asteroides en el cinturón",
            "Algunos asteroides tienen sus propias lunas pequeñas",
            "Los asteroides pueden ser de roca, metal o hielo",
            "A veces asteroides salen del cinturón y pueden acercarse a la Tierra"
        ]
    }
],
    exoplanetas: [
        {
            nombre: "Kepler-452b",
            imagen: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400",
            descripcion: "Kepler 452b es llamado la Tierra 2.0 porque es muy parecida a nuestro planeta. Está a 1.400 años luz de distancia, lo que significa que si viajáramos en una nave espacial rápida, tardaríamos millones de años en llegar. Orbita una estrella muy parecida al Sol.",
            curiosidades: [
                "Tiene 60 por ciento más tamaño que la Tierra",
                "Su estrella tiene 6 mil millones de años, más vieja que el Sol",
                "Podría tener océanos y montañas como la Tierra",
                "Está en la zona habitable donde podría existir agua líquida"
            ]
        },
        {
            nombre: "HD 189733b",
            imagen: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400",
            descripcion: "Este planeta es un mundo azul profundo, pero no es agua, es vidrio. Sí, llueve vidrio fundido a 8 mil kilómetros por hora. Es un gigante de gas que orbita muy cerca de su estrella y tiene vientos supersónicos de color azul.",
            curiosidades: [
                "Es del color azul cobalto más intenso conocido",
                "La temperatura llega a 900 grados",
                "El vidrio que llueve es horizontal por los vientos",
                "Está a 63 años luz de la Tierra"
            ]
        },
        {
            nombre: "WASP-12b",
            imagen: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=400",
            descripcion: "WASP 12b es un planeta que está siendo devorado por su estrella. Es un gigante de gas en forma de huevo porque la gravedad de la estrella lo estira. Está tan cerca de su estrella que un año dura solo un día terrestre.",
            curiosidades: [
                "Su estrella lo está comiendo poco a poco",
                "Tiene la forma de un balón de rugby americano",
                "La temperatura superficial es de 2.200 grados",
                "En 10 millones de años desaparecerá completamente"
            ]
        },
        {
            nombre: "Proxima Centauri b",
            imagen: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400",
            descripcion: "Este es el exoplaneta más cercano a nosotros, solo a 4 años luz. Orbita la estrella más cercana al Sol. Es un planeta rocoso que podría tener agua líquida y quizás vida. Es nuestro vecino cósmico.",
            curiosidades: [
                "Está tan cerca que podríamos enviarle mensajes y tardarían 8 años en llegar",
                "Su estrella es una enana roja muy pequeña y tenue",
                "El planeta podría estar bloqueado por marea, siempre mostrando la misma cara",
                "Es el primer objetivo para futuras misiones interestelares"
            ]
        },
        {
            nombre: "Trappist-1e",
            imagen: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400",
            descripcion: "Trappist 1e es uno de siete planetas que orbitan una estrella enana roja muy pequeña. Todos los planetas están muy juntos y si estuvieras en uno, verías los otros planetas tan grandes como la Luna en el cielo. Es uno de los mejores lugares para buscar vida.",
            curiosidades: [
                "El sistema tiene 7 planetas del tamaño de la Tierra",
                "Tres de ellos están en la zona habitable",
                "Su estrella es del tamaño de Júpiter pero mucho más masiva",
                "Está a 39 años luz de nosotros"
            ]
        },
        {
            nombre: "55 Cancri e",
            imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
            descripcion: "Este planeta podría estar hecho de diamante. Es un mundo rocoso dos veces más grande que la Tierra y tan caliente que la superficie es lava. Los científicos creen que bajo la superficie hay mucho carbono que se convirtió en diamante por la presión.",
            curiosidades: [
                "Podría valer 27 nonillones de dólares si fuera de diamante",
                "Un año dura solo 18 horas",
                "La temperatura es de 2.400 grados",
                "Está a 40 años luz en la constelación del Cáncer"
            ]
        }
    ],
    galaxias: [
        {
            nombre: "Vía Láctea",
            imagen: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=400",
            descripcion: "La Vía Láctea es nuestra galaxia hogar. Es una espiral gigante con brazos que giran como un carrusel cósmico. Contiene entre 200 y 400 mil millones de estrellas, incluyendo nuestro Sol. De noche, podemos ver una franja blanca en el cielo que son millones de estrellas.",
            curiosidades: [
                "Tiene 100 mil años luz de diámetro",
                "En el centro hay un agujero negro supermasivo",
                "La Vía Láctea chocará con Andrómeda en 4 mil millones de años",
                "Hacemos una rotación completa cada 225 millones de años"
            ]
        },
        {
            nombre: "Andrómeda",
            imagen: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400",
            descripcion: "Andrómeda es la galaxia más cercana a nosotros y es gigante, incluso más grande que la Vía Láctea. Está a 2.5 millones de años luz. Es la única galaxia que podemos ver a simple vista desde la Tierra, en las noches oscuras parece una mancha borrosa.",
            curiosidades: [
                "Tiene un billón de estrellas",
                "Se acerca a nosotros a 110 kilómetros por segundo",
                "Tiene dos galaxias satélite pequeñas",
                "En el futuro se fusionará con nuestra galaxia"
            ]
        },
        {
            nombre: "Galaxia del Sombrero",
            imagen: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=400",
            descripcion: "La Galaxia del Sombrero es famosa por su forma. Tiene un brillante núcleo amarillo y un anillo oscuro de polvo que parece el ala de un sombrero. Es una galaxia espiral vista de lado, a 28 millones de años luz de nosotros.",
            curiosidades: [
                "Tiene 800 mil millones de estrellas",
                "El anillo oscuro es polvo y gas donde nacen estrellas",
                "Fue descubierta en el siglo 18",
                "Es favorita de los astrónomos por su belleza"
            ]
        },
        {
            nombre: "Galaxia del Remolino",
            imagen: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400",
            descripcion: "La Galaxia del Remolino es una espiral perfecta que está chocando con una galaxia más pequeña. Se ve como un remolino en el espacio con brazos espirales azules llenos de estrellas jóvenes. Está a 23 millones de años luz.",
            curiosidades: [
                "Fue la primera galaxia espiral descubierta",
                "Está chocando con la galaxia NGC 5195",
                "Los brazos azules son estrellas recién nacidas",
                "Charles Messier la descubrió en 1773"
            ]
        },
        {
            nombre: "Galaxia del Triángulo",
            imagen: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400",
            descripcion: "Es la tercera galaxia más grande de nuestro vecindario. Es una espiral pequeña pero muy bonita, llena de regiones donde nacen estrellas. Está a 3 millones de años luz y es visible a simple vista en cielos muy oscuros.",
            curiosidades: [
                "Tiene 40 mil millones de estrellas",
                "Tiene una nebulosa gigante llamada NGC 604",
                "No tiene agujero negro supermasivo en el centro",
                "Es la galaxia espiral más pequeña del grupo local"
            ]
        },
        {
            nombre: "Galaxias Antennae",
            imagen: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400",
            descripcion: "Son dos galaxias en proceso de colisión. Se llaman Antennae porque las colas de estrellas y gas que forman parecen antenas de insecto. Están creando miles de nuevas estrellas en el choque. Están a 70 millones de años luz.",
            curiosidades: [
                "Se están fusionando desde hace 500 millones de años",
                "Formarán una galaxia elíptica gigante",
                "El choque crea estrellas masivas que explotan rápido",
                "Son las galaxias en colisión más cercanas a nosotros"
            ]
        }
    ],
    agujerosNegros: [
        {
            nombre: "Sagitario A*",
            imagen: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400",
            descripcion: "Sagitario A es el agujero negro supermasivo en el centro de nuestra galaxia, la Vía Láctea. Tiene la masa de 4 millones de soles pero cabría dentro de la órbita de Mercurio. En 2022 los científicos tomaron su primera fotografía real.",
            curiosidades: [
                "Está a 26 mil años luz de nosotros",
                "Estrellas giran alrededor de él a velocidades increíbles",
                "No es peligroso para nosotros, está muy lejos",
                "Tiene 4 millones de veces la masa de nuestro Sol"
            ]
        },
        {
            nombre: "TON 618",
            imagen: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400",
            descripcion: "TON 618 es el agujero negro más masivo conocido. Tiene la masa de 66 mil millones de soles. Es tan brillante que se puede ver desde miles de millones de años luz. Es un quasar, lo que significa que está devorando materia a gran velocidad.",
            curiosidades: [
                "Es 15 mil veces más masivo que el agujero de nuestra galaxia",
                "Brilla más que toda su galaxia junta",
                "Está a 18 mil millones de años luz",
                "Su disco de acreción es del tamaño del sistema solar"
            ]
        },
        {
            nombre: "M87*",
            imagen: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400",
            descripcion: "M87 fue el primer agujero negro fotografiado en la historia, en 2019. Está en el centro de una galaxia gigante a 55 millones de años luz. Se ve como un anillo brillante naranja alrededor de una sombra negra perfecta.",
            curiosidades: [
                "Tiene 6.5 mil millones de veces la masa del Sol",
                "Lanza un chorro de plasma de 5 mil años luz de largo",
                "La foto fue tomada por 8 telescopios juntos",
                "Su sombra es 2.5 veces más grande que el horizonte de eventos"
            ]
        },
        {
            nombre: "Cygnus X-1",
            imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
            descripcion: "Cygnus X1 fue el primer agujero negro descubierto. Es un agujero estelar, nacido del colapso de una estrella masiva. Está robando gas de una estrella compañera y formando un disco super caliente que brilla en rayos X.",
            curiosidades: [
                "Fue descubierto en 1964 por detectores de rayos X",
                "Tiene 21 veces la masa del Sol",
                "Está a 6 mil años luz en la constelación del Cisne",
                "Stephen Hawking perdió una apuesta sobre su existencia"
            ]
        },
        {
            nombre: "Agujeros Negros Primordiales",
            imagen: "https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=400",
            descripcion: "Son agujeros negros hipotéticos que se formaron justo después del Big Bang. Podrían ser del tamaño de un átomo pero con la masa de una montaña. Algunos científicos creen que podrían ser la materia oscura del universo.",
            curiosidades: [
                "Podrían ser tan pequeños como un átomo",
                "Hawking propuso que se evaporan por radiación",
                "Podrían atravesar la Tierra sin que nos demos cuenta",
                "Aún no se ha detectado ninguno con certeza"
            ]
        }
    ],
    otros: [
        {
            nombre: "Quásar",
            imagen: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400",
            descripcion: "Los quásares son los objetos más brillantes del universo. Son agujeros negros supermasivos en el centro de galaxias jóvenes, devorando enormes cantidades de gas y estrellas. Brillan más que 100 galaxias juntas y se pueden ver desde el otro lado del universo.",
            curiosidades: [
                "El nombre viene de quasi-stellar radio source",
                "Son galaxias bebé con agujeros negros hambrientos",
                "La luz que vemos puede tener 13 mil millones de años",
                "Algunos son 100 veces más brillantes que nuestra galaxia"
            ]
        },
        {
            nombre: "Púlsar",
            imagen: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400",
            descripcion: "Los púlsares son estrellas de neutrones que giran muy rápido y emiten rayos de luz como faros. Pueden girar cientos de veces por segundo. Son tan densos que una cucharadita de material de púlsar pesaría mil millones de toneladas.",
            curiosidades: [
                "El primer púlsar se llamó LGM-1 porque pensaron que era alienígena",
                "Giran tan rápido que hacen tic-tac perfectos",
                "Algunos púlsares giran 716 veces por segundo",
                "Son estrellas de neutrones de 20 kilómetros de diámetro"
            ]
        },
        {
            nombre: "Nebulosa",
            imagen: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400",
            descripcion: "Las nebulosas son nubes gigantes de gas y polvo en el espacio. Son las guarderías del universo donde nacen las estrellas. Algunas son rosadas, otras azules o verdes, dependiendo de los gases que contengan. La más famosa es la Nebulosa de Orión.",
            curiosidades: [
                "La Nebulosa de Orión está a 1.300 años luz",
                "Las nebulosas pueden ser miles de veces más grandes que el sistema solar",
                "Algunas nebulosas son restos de estrellas que explotaron",
                "El polvo de nebulosas contiene los elementos que forman planetas y vida"
            ]
        },
        {
            nombre: "Supernova",
            imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
            descripcion: "Una supernova es la explosión más grande del universo. Ocurre cuando una estrella masiva muere. Brilla tanto que puede superar a toda su galaxia. En la explosión se crean elementos pesados como el oro y el hierro que luego forman planetas.",
            curiosidades: [
                "Una supernova puede brillar 10 mil millones de veces más que el Sol",
                "El hierro de tu sangre vino de una supernova",
                "La última supernova visible en nuestra galaxia fue en 1604",
                "Pueden dejar agujeros negros o estrellas de neutrones"
            ]
        },
        {
            nombre: "Estrella de Neutrones",
            imagen: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400",
            descripcion: "Son los restos de estrellas masivas que colapsaron. Son esferas del tamaño de una ciudad pero con la masa de 1.4 soles. Son tan densas que una cucharadita pesa mil millones de toneladas. Algunas giran y se llaman púlsares.",
            curiosidades: [
                "Tienen campos magnéticos billones de veces más fuertes que la Tierra",
                "La superficie es tan lisa que no tiene montañas de más de 5 milímetros",
                "Algunas giran 700 veces por segundo",
                "Son más densas que núcleos atómicos"
            ]
        },
        {
            nombre: "Agujero de Gusano",
            imagen: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400",
            descripcion: "Los agujeros de gusano son túneles hipotéticos que conectarían dos puntos lejanos del espacio-tiempo. Serían como atajos para viajar millones de años luz en segundos. Einstein dijo que podrían existir, pero aún no se ha encontrado ninguno.",
            curiosidades: [
                "Se llaman agujeros de gusano porque parecen un gusano atravesando una manzana",
                "Podrían permitir viajes en el tiempo",
                "Se cerrarían muy rápido a menos que tuvieran materia extraña",
                "Aparecen en muchas películas de ciencia ficción"
            ]
        },
        {
            nombre: "Materia Oscura",
            imagen: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400",
            descripcion: "La materia oscura es invisible pero sabemos que existe porque afecta la gravedad de las galaxias. Representa el 85 por ciento de toda la materia del universo. No emite luz, no brilla, pero sin ella las galaxias se desarmarían.",
            curiosidades: [
                "No podemos verla pero sabemos que está ahí por la gravedad",
                "Representa 5 veces más masa que la materia normal",
                "Podría ser partículas desconocidas llamadas WIMPs",
                "Los científicos la detectan porque las galaxias giran muy rápido"
            ]
        },
        {
            nombre: "Energía Oscura",
            imagen: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=400",
            descripcion: "La energía oscura es una fuerza misteriosa que hace que el universo se expanda cada vez más rápido. Representa el 68 por ciento de todo el universo. Nadie sabe qué es exactamente, pero sin ella el universo se colapsaría.",
            curiosidades: [
                "Fue descubierta en 1998 y sorprendió a todos los científicos",
                "Hace que galaxias distantes se alejen más rápido que la velocidad de la luz",
                "Podría destruir el universo en el Big Rip",
                "Es la mayor pregunta sin resolver de la física moderna"
            ]
        },
        {
            nombre: "Big Bang",
            imagen: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400",
            descripcion: "El Big Bang fue el inicio de todo hace 13.8 mil millones de años. No fue una explosión en el espacio, sino una expansión del propio espacio. En un principio todo estaba concentrado en un punto más pequeño que un átomo, y de repente empezó a crecer.",
            curiosidades: [
                "En los primeros 3 minutos se formaron los átomos de hidrógeno y helio",
                "El universo se enfrió de billones de grados a miles en minutos",
                "Todavía podemos ver el resplandor del Big Bang en el cielo",
                "El universo sigue expandiéndose desde entonces"
            ]
        }
    ]
};

// VARIABLES GLOBALES
let categoriaActual = null;
let astroActual = null;
let puntosJuego = 0;
let preguntaActual = null;
let opcionesJuego = [];
let todosLosAstros = [];

// INICIALIZAR
function init() {
    // Combinar todos los astros para el juego
    Object.values(universo).forEach(categoria => {
        todosLosAstros = todosLosAstros.concat(categoria);
    });
}

// NAVEGACIÓN
function mostrarPantalla(id) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');
    window.speechSynthesis.cancel();
}

function volverInicio() {
    mostrarPantalla('pantalla-inicio');
}

function mostrarMenu() {
    mostrarPantalla('pantalla-menu');
}

function volverMenu() {
    mostrarPantalla('pantalla-menu');
}

function volverCategoria() {
    mostrarPantalla('pantalla-categoria');
}

// MOSTRAR CATEGORÍA
function mostrarCategoria(categoria) {
    categoriaActual = categoria;
    const contenedor = document.getElementById('lista-astros');
    const titulo = document.getElementById('titulo-categoria');
    const lista = universo[categoria];
    
    const nombresCategorias = {
        sistemaSolar: "Sistema Solar",
        exoplanetas: "Exoplanetas",
        galaxias: "Galaxias",
        agujerosNegros: "Agujeros Negros",
        otros: "Misterios del Universo"
    };
    
    titulo.textContent = nombresCategorias[categoria];
    contenedor.innerHTML = '';
    
    lista.forEach(astro => {
        const div = document.createElement('div');
        div.className = 'astro-item';
        div.innerHTML = `
            <img src="${astro.imagen}" alt="${astro.nombre}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400'">
            <p>${astro.nombre}</p>
        `;
        div.onclick = () => mostrarDetalle(astro);
        contenedor.appendChild(div);
    });
    
    mostrarPantalla('pantalla-categoria');
}

// MOSTRAR DETALLE
function mostrarDetalle(astro) {
    astroActual = astro;
    document.getElementById('detalle-imagen').src = astro.imagen;
    document.getElementById('detalle-nombre').textContent = astro.nombre;
    
    const infoDiv = document.getElementById('detalle-info');
    infoDiv.innerHTML = `<p>${astro.descripcion}</p>`;
    
    mostrarPantalla('pantalla-detalle');
    
    // Reproducir automáticamente después de un momento
    setTimeout(() => reproducirTodo(), 800);
}

// REPRODUCIR INFORMACIÓN
function reproducirTodo() {
    if (!('speechSynthesis' in window) || !astroActual) return;
    
    window.speechSynthesis.cancel();
    
    const texto = `${astroActual.nombre}. ${astroActual.descripcion}`;
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'es-ES';
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    
    window.speechSynthesis.speak(utterance);
}

function reproducirCuriosidad() {
    if (!('speechSynthesis' in window) || !astroActual) return;
    
    window.speechSynthesis.cancel();
    
    const curiosidad = astroActual.curiosidades[Math.floor(Math.random() * astroActual.curiosidades.length)];
    const texto = `¿Sabías qué? ${curiosidad}`;
    
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'es-ES';
    utterance.rate = 0.85;
    utterance.pitch = 1.2;
    
    // Mostrar visualmente también
    const infoDiv = document.getElementById('detalle-info');
    infoDiv.innerHTML += `<p style="margin-top: 15px; color: #ffd700; font-weight: bold;">💡 ¿Sabías qué? ${curiosidad}</p>`;
    
    window.speechSynthesis.speak(utterance);
}

// JUEGO
function mostrarJuego() {
    puntosJuego = 0;
    document.getElementById('puntos-juego').textContent = puntosJuego;
    mostrarPantalla('pantalla-juego');
    nuevaPreguntaJuego();
}

function nuevaPreguntaJuego() {
    // Resetear UI
    document.getElementById('imagen-juego-contenedor').style.display = 'none';
    document.getElementById('resultado-juego').innerHTML = '';
    document.getElementById('btn-siguiente-juego').style.display = 'none';
    document.getElementById('btn-pregunta-juego').style.display = 'inline-block';
    document.querySelector('.instruccion-juego').textContent = 'Toca el botón 👆';
    
    // Seleccionar astro aleatorio
    const indice = Math.floor(Math.random() * todosLosAstros.length);
    preguntaActual = todosLosAstros[indice];
    
    // Seleccionar 3 opciones incorrectas
    opcionesJuego = [preguntaActual];
    while (opcionesJuego.length < 4) {
        const random = todosLosAstros[Math.floor(Math.random() * todosLosAstros.length)];
        if (!opcionesJuego.find(o => o.nombre === random.nombre)) {
            opcionesJuego.push(random);
        }
    }
    
    // Mezclar
    opcionesJuego.sort(() => Math.random() - 0.5);
    
    // Crear botones
    const contenedor = document.getElementById('opciones-juego');
    contenedor.innerHTML = '';
    
    opcionesJuego.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.className = 'opcion-juego';
        btn.innerHTML = `🔊 Opción ${index + 1}`;
        btn.onclick = () => reproducirOpcionJuego(opcion, btn);
        btn.dataset.nombre = opcion.nombre;
        contenedor.appendChild(btn);
    });
}

function reproducirPreguntaJuego() {
    if (!('speechSynthesis' in window)) {
        alert('Tu dispositivo no soporta audio');
        return;
    }
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance('¿Qué objeto espacial es este? Escucha las opciones y elige la correcta.');
    utterance.lang = 'es-ES';
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    
    utterance.onend = () => {
        document.getElementById('imagen-juego-contenedor').style.display = 'block';
        document.getElementById('imagen-juego').src = preguntaActual.imagen;
        document.querySelector('.instruccion-juego').textContent = 'Toca los botones para escuchar';
        
        // Reproducir opciones automáticamente
        setTimeout(() => reproducirOpcionesJuego(), 500);
    };
    
    window.speechSynthesis.speak(utterance);
    document.getElementById('btn-pregunta-juego').style.display = 'none';
}

function reproducirOpcionesJuego() {
    let delay = 0;
    
    opcionesJuego.forEach((opcion, index) => {
        setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(`Opción ${index + 1}: ${opcion.nombre}`);
            utterance.lang = 'es-ES';
            utterance.rate = 0.85;
            utterance.pitch = 1.1;
            window.speechSynthesis.speak(utterance);
        }, delay);
        delay += 2000;
    });
}

function reproducirOpcionJuego(opcion, boton) {
    if (!('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(opcion.nombre);
    utterance.lang = 'es-ES';
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    
    utterance.onend = () => {
        setTimeout(() => {
            verificarRespuestaJuego(opcion.nombre === preguntaActual.nombre, boton);
        }, 300);
    };
    
    window.speechSynthesis.speak(utterance);
}

function verificarRespuestaJuego(esCorrecta, boton) {
    const resultado = document.getElementById('resultado-juego');
    const botones = document.querySelectorAll('.opcion-juego');
    
    botones.forEach(b => {
        b.disabled = true;
        b.style.opacity = '0.5';
    });
    
    boton.disabled = false;
    boton.style.opacity = '1';
    
    if (esCorrecta) {
        puntosJuego += 10;
        document.getElementById('puntos-juego').textContent = puntosJuego;
        boton.classList.add('correcto');
        
        let mensajeTexto = '';
        let mensajeVoz = '';
        let clase = '';
        
        if (puntosJuego < 30) {
            mensajeTexto = '¡BIEN! 🚀';
            mensajeVoz = '¡Bien hecho, astronauta!';
            clase = 'resultado-bien';
        } else if (puntosJuego < 60) {
            mensajeTexto = '¡EXCELENTE! ⭐⭐';
            mensajeVoz = '¡Excelente, eres un experto espacial!';
            clase = 'resultado-excelente';
        } else {
            mensajeTexto = '¡ÉPICO! 🌟👨‍🚀🏆';
            mensajeVoz = '¡Épico! Eres un maestro del universo.';
            clase = 'resultado-epico';
        }
        
        resultado.innerHTML = `<span class="${clase}">${mensajeTexto}</span>`;
        
        const utterance = new SpeechSynthesisUtterance(`${mensajeVoz} Era ${preguntaActual.nombre}`);
        utterance.lang = 'es-ES';
        utterance.rate = 0.85;
        utterance.pitch = 1.2;
        window.speechSynthesis.speak(utterance);
        
    } else {
        boton.classList.add('incorrecto');
        resultado.innerHTML = '<span style="color: #ff7675; font-size: 1.3em;">❌ Intenta de nuevo</span>';
        
        botones.forEach(b => {
            if (b.dataset.nombre === preguntaActual.nombre) {
                b.style.opacity = '1';
                b.style.background = 'linear-gradient(45deg, #00b894, #55efc4)';
                b.style.transform = 'scale(1.05)';
            }
        });
        
        const utterance = new SpeechSynthesisUtterance(`No era esa. La respuesta correcta es ${preguntaActual.nombre}`);
        utterance.lang = 'es-ES';
        utterance.rate = 0.85;
        utterance.pitch = 1.1;
        window.speechSynthesis.speak(utterance);
    }
    
    document.getElementById('btn-siguiente-juego').style.display = 'inline-block';
}

// Iniciar
init();
