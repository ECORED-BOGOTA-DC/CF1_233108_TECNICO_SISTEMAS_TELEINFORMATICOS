export default {
  global: {
    componenteFormativo: 'Herramientas informáticas en las organizaciones',
    descripcionCurso:
      'Este componente formativo tiene como fin dar a conocer cada una de las herramientas informáticas que se requieren para el óptimo manejo de una organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas informáticos en una organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Herramientas informáticas para la organización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Funcionalidades de los dispositivos informáticos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Implementación de componentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Instalación de herramientas informáticas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Búsqueda de información técnica',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Gestión de cuentas corporativas de sistemas informáticos',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Sistemas informáticos en una organización',
      referencia:
        'Prieto, A., Martínez, M. (2004). <i>Sistemas de información en las organizaciones: Una alternativa para mejorar la productividad gerencial en las pequeñas y medianas empresas</i>. Revista de Ciencias Sociales (RCS) Vol. X, No. 2, pp. 322 - 337 FACES - LUZ · ISSN 1315-9518.',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/pdf/280/28010209.pdf',
    },
    {
      tema: 'Herramientas informáticas para la organización',
      referencia:
        'Bautista, L., Abreu, M. (2022). <i>El trabajo colaborativo desde la virtualidad a través de las herramientas tecnológicas. In Libro de Actas del 2. º Congreso Caribeño de Investigación Educativa: Nuevos paradigmas y experiencias emergentes (pp. 577-581)</i>. Instituto Superior de Formación Docente Salomé Ureña (ISFODOSU).',
      tipo: 'Libro',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=8498392',
    },
    {
      tema: 'Funcionalidades de los dispositivos informáticos',
      referencia:
        'Hernández, A (s.f). <i>Los sistemas de información: evolución y desarrollo</i>. departamento de Economía y Dirección de Empresas Universidad de Zaragoza.',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/descarga/articulo/6255073.pdf',
    },
  ],
  glosario: [
    {
      termino: '<i>Software</i>',
      significado:
        'programas de computadora, instrucciones o procedimientos que se ejecutan para operar y satisfacer las necesidades específicas de un usuario.',
    },
    {
      termino: 'Bases de datos',
      significado:
        'conjunto ordenado de datos personales referentes a una persona física identificada o identificable, condicionados a criterios determinados, con independencia de la forma o modalidad de su creación, tipo de soporte, procesamiento, almacenamiento y organización.',
    },
    {
      termino: 'Código abierto',
      significado:
        'se refiere al código fuente del <i>software</i> que es abiertamente accesible y que puede ser cambiado y distribuido por cualquier persona.',
    },
    {
      termino: 'Desarrollo tecnológico',
      significado:
        'trabajo sistemático fundamentado en los conocimientos obtenidos por la investigación o la experiencia práctica, que se dirige a la fabricación de nuevos materiales, productos o dispositivos; a establecer nuevos procedimientos, sistemas y servicios, o a mejorar considerablemente los ya existentes.',
    },
    {
      termino: 'Equipos de Computo',
      significado:
        'dispositivo electrónico que almacena y procesa información para después mostrarla en una interfaz a la disposición del usuario, permite una interacción del <i>hardware</i> (parte tangible) con el software (parte intangible).',
    },
    {
      termino: '<i>Hardware</i>',
      significado:
        'conjunto de elementos físicos o materiales que constituyen una computadora o un sistema informático.',
    },
    {
      termino: 'Licencia de <i>software</i>',
      significado:
        'contrato en donde el usuario acepta los términos y condiciones del fabricante para poder hacer uso del <i>software</i>.',
    },
    {
      termino: 'Mantenimiento de <i>software</i>',
      significado:
        'es la modificación de un producto de software después de la entrega, para corregir errores, mejorar el rendimiento, u otros atributos.',
    },
    {
      termino: 'Producto de <i>software</i>',
      significado:
        'se refiere al sistema (código fuente), documentación asociada y datos necesarios para el funcionamiento del <i>software</i> que se desarrolló y que se entrega a un cliente o usuario.',
    },
    {
      termino: 'Pruebas de <i>software</i>',
      significado:
        'proceso de analizar un componente de <i>software</i> u operar un sistema que ayuda a detectar errores o defectos y a identificar la completitud o diferencias con respecto a los requerimientos y acuerdos establecidos con la finalidad de evaluar la calidad del <i>software</i>.',
    },
    {
      termino: 'Redes de Computadores',
      significado:
        'también llamada red de ordenadores o red informática. Es un conjunto de equipos conectados por medio de cables, señales, ondas o cualquier otro método de transporte de datos, que comparten información (archivos), recursos (CD-ROM, impresoras, etc.)',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'la capacidad de preservar la confidencialidad, integridad y disponibilidad de la información, así como la autenticidad, confiabilidad, trazabilidad y no repudio de la misma.',
    },
    {
      termino: 'Servicio de autenticación',
      significado:
        'servicio de seguridad que verifica la identidad alegada por una entidad.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'conjunto de aplicaciones, servicios, activos de tecnología de la información u otros componentes que manejan información.',
    },
    {
      termino: 'Sistema Operativo',
      significado:
        'un sistema operativo es el <i>software</i> o programa más importante que se ejecuta en un computador, nos permite usarlo y darle órdenes para que haga lo que necesitamos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Las mejores herramientas de software para la gestión de organizaciones. (2021) ',
      link: '',
    },
    {
      referencia:
        'Salem Al-Mamary, Yaser Hasan & Shamsuddin, Alina & Aziati, A. ResearchGate. El papel de los diferentes tipos de sistemas de información en las organizaciones empresariales. (2019). ',
      link:
        'https://www.researchgate.net/publication/264556488_The_Role_of_Different_Types_of_Information_Systems_In_Business_Organizations_A_Review',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ronald Alexander Vacca Ascanio',
          cargo: 'Experto temático',
          centro:
            'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro:
            'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollo fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
