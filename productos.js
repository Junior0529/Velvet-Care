const productos = [
  // --- ELVIVE / L'ORÉAL ---
  {
    id: "champu-color-vive",
    nombre: "Champú Color Vive Elvive",
    categoria: "capilar",
    descripcion: "Cuidado protector para prolongar el brillo y color en cabellos teñidos.",
    precioPVP: 600.00,
    imagen: "img/champu-color-vive.png"
  },
  {
    id: "acondicionador-color-vive",
    nombre: "Acondicionador Color Vive Elvive",
    categoria: "capilar",
    descripcion: "Protector del color con vitamina Cg y filtro UV para cabellos teñidos.",
    precioPVP: 450.00,
    imagen: "img/acondicionador-color-vive.png"
  },

  // --- PANTENE ---
  {
    id: "champu-pantene-repara",
    nombre: "Champú Pantene Repara & Protege",
    categoria: "capilar",
    descripcion: "Limpieza y reparación intensiva contra los daños de peinado.",
    precioPVP: 600.00,
    imagen: "img/champu-pantene-repara.png"
  },
  {
    id: "espuma-pantene-rizos",
    nombre: "Espuma Pantene Pro-V Rizos Definidos",
    categoria: "capilar",
    descripcion: "Definición y fijación nivel 5 para rizos perfectos con aceite de coco.",
    precioPVP: 650.00,
    imagen: "img/espuma-pantene-rizos.png"
  },
  {
    id: "mascarilla-pantene-keratina",
    nombre: "Mascarilla Pantene Keratina Repara & Protege",
    categoria: "capilar",
    descripcion: "Tratamiento intensivo Active Nutri-Plex que ayuda a reparar el daño del cabello.",
    precioPVP: 570.00,
    imagen: "img/mascarilla-pantene-keratina.png"
  },

  // --- NATURAL HONEY ---
  {
    id: "gel-natural-honey",
    nombre: "Gel Natural Honey Derma Care Hidratante",
    categoria: "corporal",
    descripcion: "Con extracto de almendras y 95% ingredientes de origen natural.",
    precioPVP: 590.00,
    imagen: "img/gel-natural-honey.png"
  },

  // --- 7TH HEAVEN ---
  {
    id: "mascarilla-carbon-peeling",
    nombre: "Mascarilla de Peeling Carbón 7th Heaven",
    categoria: "depilacion",
    descripcion: "Mascarilla facial Peel-Off con carbón y ácido salicílico para todo tipo de pieles.",
    precioPVP: 450.00,
    imagen: "img/mascarilla-carbon-peeling.png"
  },

  // --- DELIPLUS: CUIDADO CAPILAR ---
  {
    id: "champu-curl-perfect",
    nombre: "Champú Curl Perfect",
    categoria: "capilar",
    descripcion: "Fórmula hidratante para definir rizos y ondas con suavidad.",
    precioPVP: 450.00,
    imagen: "img/champu-curl-perfect.png"
  },
  {
    id: "mask-curl-perfect",
    nombre: "Mascarilla Sin Aclarado Curl Perfect",
    categoria: "capilar",
    descripcion: "Tratamiento intensivo para definir e hidratar los rizos sin aclarado.",
    precioPVP: 700.00,
    imagen: "img/mask-curl-perfect.png"
  },
  {
    id: "mascarilla-curl-perfect-del",
    nombre: "Mascarilla Curl Perfect Deliplus",
    categoria: "capilar",
    descripcion: "Tratamiento con aceite de coco y manteca de karité, apto para método curly.",
    precioPVP: 700.00,
    imagen: "img/mascarilla-curl-perfect.png"
  },
  {
    id: "mask-argan-oil",
    nombre: "Mascarilla Sin Aclarado Argan Oil",
    categoria: "capilar",
    descripcion: "Nutrición profunda con aceite de argán para cabello seco o dañado.",
    precioPVP: 725.00,
    imagen: "img/mask-argan-oil.png"
  },
  {
    id: "mascarilla-argan-oil-del",
    nombre: "Mascarilla Argan Oil Deliplus",
    categoria: "capilar",
    descripcion: "Nutrición y brillo intenso con aceite de argán, karité, queratina y jojoba.",
    precioPVP: 525.00,
    imagen: "img/mascarilla-argan-oil.png"
  },
  {
    id: "mask-repair-nutrition",
    nombre: "Mascarilla Sin Aclarado Repair & Nutrition",
    categoria: "capilar",
    descripcion: "Reparación completa e hidratación intensa para el cabello.",
    precioPVP: 720.00,
    imagen: "img/mask-repair-nutrition.png"
  },
  {
    id: "champu-repair-nutrition",
    nombre: "Champú Repair & Nutrition Deliplus",
    categoria: "capilar",
    descripcion: "Reparación e hidratación profunda con Repair Complex para cabello seco y dañado.",
    precioPVP: 450.00,
    imagen: "img/champu-repair-nutrition.png"
  },
  {
    id: "acondicionador-repair-nutrition",
    nombre: "Acondicionador Repair & Nutrition Deliplus",
    categoria: "capilar",
    descripcion: "Nutrición instantánea para restaurar cabellos castigados.",
    precioPVP: 400.00,
    imagen: "img/acondicionador-repair-nutrition.png"
  },
  {
    id: "gel-activador-rizos",
    nombre: "Gel Activador de Rizos",
    categoria: "capilar",
    descripcion: "Fijación flexible y definición natural para cabellos rizados.",
    precioPVP: 590.00,
    imagen: "img/gel-activador-rizos.png"
  },
  {
    id: "espuma-ondas-curly",
    nombre: "Espuma Ondas Curly Deliplus",
    categoria: "capilar",
    descripcion: "Fijación y definición nivel 3 para moldear ondas flexibles y naturales.",
    precioPVP: 450.00,
    imagen: "img/espuma-ondas-curly.png"
  },
  {
    id: "champu-natural",
    nombre: "Champú Natural Deliplus",
    categoria: "capilar",
    descripcion: "Aporta suavidad y brillo natural con extracto de tilo y aceites esenciales.",
    precioPVP: 450.00,
    imagen: "img/champu-natural.png"
  },
  {
    id: "mascarilla-natural",
    nombre: "Mascarilla Natural Deliplus",
    categoria: "capilar",
    descripcion: "Suavidad y brillo natural con aceite de abisinia y aceites esenciales de salvia y cedro.",
    precioPVP: 525.00,
    imagen: "img/mascarilla-natural.png"
  },
  {
    id: "champu-liss-frizz",
    nombre: "Champú Liss Frizz Control Deliplus",
    categoria: "capilar",
    descripcion: "Control del encrespamiento con vitamina E y queratina vegetal.",
    precioPVP: 450.00,
    imagen: "img/champu-liss-frizz.png"
  },
  {
    id: "mascarilla-liss-frizz",
    nombre: "Mascarilla Liss Frizz Control Deliplus",
    categoria: "capilar",
    descripcion: "Efecto antiencrespamiento y alisado con Liss Complex para cabello rebelde.",
    precioPVP: 525.00,
    imagen: "img/mascarilla-liss-frizz.png"
  },
  {
    id: "champu-argan-oil",
    nombre: "Champú Argan Oil Deliplus",
    categoria: "capilar",
    descripcion: "Nutrición y brillo con aceite de argán, manteca de karité, queratina y jojoba.",
    precioPVP: 450.00,
    imagen: "img/champu-argan-oil.png"
  },
  {
    id: "acondicionador-suavidad-brillo",
    nombre: "Acondicionador Suavidad y Brillo Deliplus",
    categoria: "capilar",
    descripcion: "Fórmula de 1L con queratina para facilitar el desenredo en todo tipo de cabello.",
    precioPVP: 400.00,
    imagen: "img/acondicionador-suavidad-brillo.png"
  },

  // --- DELIPLUS: HIGIENE & CORPORAL ---
  {
    id: "locion-repara",
    nombre: "Loción Corporal Repara Deliplus",
    categoria: "corporal",
    descripcion: "Fórmula con Urea 10% y Dexpantenol para piel muy seca.",
    precioPVP: 500.00,
    imagen: "img/locion-repara.png"
  },
  {
    id: "locion-nutre",
    nombre: "Loción Corporal Nutre Deliplus",
    categoria: "corporal",
    descripcion: "Nutrición profunda con Almendras y Cica para piel seca.",
    precioPVP: 530.00,
    imagen: "img/locion-nutre.png"
  },
  {
    id: "locion-calm",
    nombre: "Loción Corporal Calm Deliplus",
    categoria: "corporal",
    descripcion: "Cuidado calmante con Omega 3, 6, 9 y Niacinamida para piel sensible.",
    precioPVP: 530.00,
    imagen: "img/locion-calm.png"
  },
  {
    id: "gel-avena",
    nombre: "Gel de Baño Avena Deliplus",
    categoria: "corporal",
    descripcion: "Cuidado dermoprotector y suave para pieles sensibles.",
    precioPVP: 400.00,
    imagen: "img/gel-avena.png"
  },
  {
    id: "gel-frutal",
    nombre: "Gel de Baño Frutal",
    categoria: "corporal",
    descripcion: "Fragancia fresca y frutal para una ducha revitalizante.",
    precioPVP: 370.00,
    imagen: "img/gel-frutal.png"
  },
  {
    id: "gel-coco-lichi",
    nombre: "Gel de Baño Coco y Lichi",
    categoria: "corporal",
    descripcion: "Aroma exótico e hidratación suave para todo tipo de piel.",
    precioPVP: 400.00,
    imagen: "img/gel-coco-lichi.png"
  },
  {
    id: "gel-vainilla-miel",
    nombre: "Gel de Baño Vainilla y Miel",
    categoria: "corporal",
    descripcion: "Textura cremosa con un toque dulce e hidratante.",
    precioPVP: 400.00,
    imagen: "img/gel-vainilla-miel.png"
  },
  {
    id: "gel-exfoliante-te-chai",
    nombre: "Gel Exfoliante Té Chai",
    categoria: "corporal",
    descripcion: "Limpia y elimina células muertas dejando la piel suave y renovada.",
    precioPVP: 560.00,
    imagen: "img/gel-exfoliante-te-chai.png"
  },
  {
    id: "gel-classic-magno",
    nombre: "Gel de Baño Classic Magno",
    categoria: "corporal",
    descripcion: "Fragancia clásica e inconfundible con gran poder de hidratación.",
    precioPVP: 525.00,
    imagen: "img/gel-classic-magno.png"
  },
  {
    id: "gel-olive",
    nombre: "Gel de Baño Olive Deliplus",
    categoria: "corporal",
    descripcion: "Cuidado protector con prebióticos ideal para piel seca.",
    precioPVP: 400.00,
    imagen: "img/gel-olive.png"
  },
  {
    id: "gel-marino-cedro",
    nombre: "Gel de Baño Marino & Cedro",
    categoria: "corporal",
    descripcion: "Limpieza fresca con aroma marino y toques de cedro.",
    precioPVP: 400.00,
    imagen: "img/gel-marino-cedro.png"
  },
  {
    id: "gel-frescor-azul",
    nombre: "Gel de Baño Frescor Azul",
    categoria: "corporal",
    descripcion: "Fórmula dermo aroma para una sensación refrescante de limpieza.",
    precioPVP: 350.00,
    imagen: "img/gel-frescor-azul.png"
  },
  {
    id: "gel-argan",
    nombre: "Gel de Baño Argán Deliplus",
    categoria: "corporal",
    descripcion: "Hidratación y nutrición con aceite de argán para piel muy seca.",
    precioPVP: 400.00,
    imagen: "img/gel-argan.png"
  },
  {
    id: "aceite-almendras",
    nombre: "Aceite Corporal de Almendras",
    categoria: "corporal",
    descripcion: "Nutrición intensa e hidratación profunda para pieles secas.",
    precioPVP: 670.00,
    imagen: "img/aceite-almendras.png"
  },
  {
    id: "aceite-romero",
    nombre: "Aceite Corporal de Romero",
    categoria: "corporal",
    descripcion: "Efecto tonificante y relajante para el cuidado corporal.",
    precioPVP: 670.00,
    imagen: "img/aceite-romero.png"
  },
  {
    id: "aceites-crema-fussion-oriental",
    nombre: "Crema Corporal Fussion Cream & Oil Oriental",
    categoria: "corporal",
    descripcion: "Textura rica con aceites hidratantes y aroma oriental para una piel sedosa.",
    precioPVP: 625.00,
    imagen: "img/crema-fussion-oriental.png"
  },

  // --- DELIPLUS: DEPILACIÓN, FACIAL & BIENESTAR ---
  {
    id: "crema-depilatoria-hombre",
    nombre: "Crema Depilatoria Hombre",
    categoria: "depilacion",
    descripcion: "Remoción eficaz y rápida del vello corporal masculino.",
    precioPVP: 530.00,
    imagen: "img/crema-depilatoria-hombre.png"
  },
  {
    id: "crema-depilatoria-mujer",
    nombre: "Crema Depilatoria Mujer",
    categoria: "depilacion",
    descripcion: "Fórmula suave para una depilación delicada y piel sedosa.",
    precioPVP: 530.00,
    imagen: "img/crema-depilatoria-mujer.png"
  },
  {
    id: "parches-hidrogel-ojos",
    nombre: "Parches de Hidrogel para Ojos",
    categoria: "depilacion",
    descripcion: "Tratamiento descongestionante e hidratante para la zona de las ojeras.",
    precioPVP: 450.00,
    imagen: "img/parches-hidrogel-ojos.png"
  },
  {
    id: "colageno-limon",
    nombre: "Colágeno Soluble Sabor Limón",
    categoria: "bienestar",
    descripcion: "Suplemento nutricional sabor a limón para la piel, cabello y articulaciones.",
    precioPVP: 900.00,
    imagen: "img/colageno-limon.png"
  },
  {
    id: "barritas-proteina-coco",
    nombre: "Barritas con Proteínas Sabor Coco",
    categoria: "bienestar",
    descripcion: "Snack nutritivo y proteico ideal para energía y recuperación diaria.",
    precioPVP: 690.00,
    imagen: "img/barritas-coco.png"
  }
];