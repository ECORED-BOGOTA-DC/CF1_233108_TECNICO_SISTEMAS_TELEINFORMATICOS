<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Implementación de componentes
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La era de la informática introdujo un nuevo elemento en las empresas, las universidades y una multitud de otras organizaciones: un conjunto de componentes denominado sistema de información, que se ocupan de recopilar y organizar datos e información.
          br
          br
          | Un sistema de información es una combinación de #[i hardware] y #[i software] y redes de telecomunicaciones que las personas crean para recopilar, crear y distribuir datos útiles, por lo general en una organización, además permite definir el flujo de información.
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-auto.bg-c21.shadow
        .p-2
          p.text-center.text-white.mb-0 #[b Los componentes del sistema de información son los siguientes:]
    .tarjeta.tarjeta--azul2(data-aos="fade-left")
      .p-4
        SlyderA(tipo="b")
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b #[i Hardware] de la computadora]
              p.mb-0 Esta es la tecnología física que trabaja con la información. El #[i hardware] puede ser tan pequeño como un teléfono inteligente que cabe en un bolsillo o tan grande como una supercomputadora que llena un edificio. El #[i hardware] también incluye los dispositivos periféricos que funcionan con computadoras, como teclados, unidades de disco externas y enrutadores. Con el auge del Internet de las cosas, en el que cualquier cosa, desde electrodomésticos hasta automóviles y ropa, podrá recibir y transmitir datos, los sensores que interactúan con las computadoras están impregnando el entorno humano. Por tanto, es aquel equipo físico utilizado para la entrada, salida y procesamiento. La estructura del #[i hardware] depende del tipo y tamaño de la organización. Consiste en un dispositivo de entrada y salida, sistema operativo, procesador y dispositivos de medios. Esto también incluye dispositivos periféricos de computadora.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/img2.png', style="width: 470px", alt='Imágen decorativa').m-auto
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b #[i Software] de ordenador]
              p.mb-0 El #[i hardware] necesita saber qué hacer, y ese es el papel del #[i software]. El #[i software] se puede dividir en dos tipos: #[i software] de sistema y #[i software] de aplicación. La pieza principal del #[i software] del sistema es el sistema operativo, como Windows o iOS, que administra el funcionamiento del #[i hardware]. El #[i software] de aplicación está diseñado para tareas específicas, como manejar una hoja de cálculo, crear un documento o diseñar una página web. Los programas de aplicación utilizados para controlar y coordinar los componentes de #[i hardware]. Se utiliza para el análisis y procesamiento de los datos. Estos programas incluyen un conjunto de instrucciones utilizadas para procesar información.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/img3.png', style="width: 470px", alt='Imágen decorativa').m-auto
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Telecomunicaciones]
              p.mb-0 Este componente conecta el #[i hardware] para formar una red. Las conexiones pueden ser a través de cables, como Ethernet o fibra óptica, o inalámbricas, como a través de Wi-Fi. Se puede diseñar una red para unir computadoras en un área específica, como una oficina o una escuela, a través de una red de área local (LAN). Si las computadoras están más dispersas, la red se denomina red de área amplia (WAN). Internet puede considerarse una red de redes.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/img4.png', style="width: 470px", alt='Imágen decorativa').m-auto
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Bases de datos]
              p Los datos son los hechos y cifras sin procesar que no están organizados y que luego se procesan para generar información. Los #[i software] se utilizan para organizar y entregar datos al usuario, administrar el almacenamiento físico de medios y recursos virtuales. Como el #[i hardware] no puede funcionar sin el #[i software], al igual que el #[i software] necesita datos para su procesamiento. Los datos se gestionan mediante el sistema de gestión de base de datos.
              p.mb-0 Una base de datos es un lugar donde se recopilan datos y desde el cual se pueden consultar utilizando algunos criterios específicos. Las bases de datos han adquirido una importancia en los sistemas de información con la aparición de "big data", un término que se refiere a las cantidades realmente masivas de datos que se pueden recopilar y analizar.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/img5.png', style="width: 470px", alt='Imágen decorativa').m-auto
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b La red]
              p.mb-0 Los recursos de redes se refieren a las redes de telecomunicaciones como la intranet, extranet e internet, estos recursos facilitan el flujo de información en la organización; las redes abarcan dispositivos físicos, como tarjetas de red, enrutadores, concentradores y cables, y #[i software], como sistemas operativos, servidores web, servidores de datos y servidores de aplicaciones. Las redes de telecomunicaciones están conformadas por computadoras, procesadores de comunicaciones y otros dispositivos interconectados por medios de comunicación y controlados por #[i software].
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/img6.png', style="width: 470px", alt='Imágen decorativa').m-auto
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Recursos humanos y procedimientos]
              p.mb-0 Está asociado con la mano de obra requerida para operar y administrar el sistema. Las personas son el usuario final del sistema de información, el usuario final utiliza la información producida para sus propios fines, el objetivo principal del sistema de información es beneficiar a las personas. Los usuarios finales pueden ser contadores, ingenieros, vendedores, clientes, empleados o gerentes, etc. Las personas también son responsables de desarrollar y operar los sistemas de información. Incluyen analistas de sistemas, operadores de computadoras, programadores y otro personal administrativo de SÍ y técnicas gerenciales.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/img7.png', style="width: 470px", alt='Imágen decorativa').m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-acento-botones
      h2 2.1 Instalación de herramientas informáticas
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img1.svg', style="width: 270px", alt='Imágen decorativa').m-auto
      .col-lg-9(data-aos="fade-left")
        .cajon.color-acento-contenido.p-4
          p.mb-0 El #[i hardware] de la computadora es prácticamente inútil sin el #[i software]. Los #[i software] son los programas que se necesitan para realizar las actividades de entrada, procesamiento, salida, almacenamiento y control de los sistemas de información. El #[i software] generalmente se clasifica en dos tipos principales de programas: #[i software] de sistema y #[i software] de aplicación:
    .row.bg-c22.mb-5
      .col-12
        .px-5
          .row.justify-content-center(data-aos="fade-down")
            .col-xl-5.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/tema2/img8.png", alt="alt")
                .crd_hover_txt--body1
                  p.text-center #[b #[i Software] de sistemas]
                  p.text-center.mb-0 Son programas que administran los recursos del sistema informático y simplifican la programación de aplicaciones. Incluyen #[i software] como el sistema operativo, sistemas de administración de bases de datos, #[i software] de red, traductores y utilidades de #[i software].
            .col-xl-5.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/tema2/img9.png", alt="alt")
                .crd_hover_txt--body
                  p.text-center.text-white #[b #[i Software] de aplicación]
                  p.text-center.text-white.mb-0 Son programas que dirigen el desempeño de un uso o aplicación particular de las computadoras para satisfacer las necesidades de procesamiento de información de los usuarios finales.
    p.mb-5(data-aos="fade-right") Las tendencias de #[i software] se han alejado de los programas exclusivos diseñados a medida desarrollados por programadores profesionales o usuarios finales de una organización hacia el uso de paquetes de #[i software] estándar adquiridos por los usuarios finales de los proveedores de #[i software].
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-lg-auto.bg-c21.shadow
        .p-2
          p.text-center.text-white.mb-0 #[b Hay dos tipos de paquetes disponibles:]
    .row.justify-content-center.mb-5
      .col-10.col-lg-6.bg-c23(data-aos="fade-right")
        .p-4.p-lg-5
          figure.mb-4
            img(src='@/assets/curso/tema2/img3.svg', style="width: 170px", alt='Imágen decorativa').m-auto
          p.text-center.text-white #[b Paquetes verticales]
          p.text-center.text-white Ayudan a los usuarios dentro de un segmento industrial específico. Los ejemplos incluyen paquetes que ayudan a administrar proyectos de construcción, realizar un seguimiento del inventario de hospitales o puntos de venta de comida rápida.
      .col-10.col-lg-6.bg-c24(data-aos="fade-left")
        .p-4.p-lg-5
          figure.mb-4
            img(src='@/assets/curso/tema2/img4.svg', style="width: 170px", alt='Imágen decorativa').m-auto
          p.text-center.text-white #[b Paquetes horizontales]
          p.text-center.text-white Pueden realizar una determinada función general, como contabilidad o automatización de oficinas, para una variedad de negocios.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Sistemas operativos
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img5.svg', style="width: 350px", alt='Imágen decorativa').m-auto
      .col-lg-8(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img6.svg', style="width: 850px", alt='El paquete de software de sistema más importante para cualquier ordenador es su sistema operativo. Todo sistema informático se ejecuta bajo el control de un sistema operativo. Los sistemas operativos para computadoras compartidas por muchos usuarios son considerablemente más complejos que los sistemas operativos para computadoras personales. Para profundizar un poco más en la importancia del sistema operativo revise con atención el siguiente material:').m-auto
    .row.mb-5
      .col-12.bg-c18(data-aos="fade-right")
        .px-4.py-5
          .row
            .col-12.bg-c19
              .p-4
                SlyderE(indicadores="derecha")
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b ¿Qué hace un sistema operativo?]
                      p El sistema operativo es el #[i software] que controla todos los recursos de un sistema informático. Por ejemplo:
                      ul.lista-ul--color.mb-0
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Asigna el #[i hardware] necesario a los programas.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Programa programas para su ejecución en el procesador.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Asigna la memoria necesaria para cada programa.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Asigna los dispositivos de entrada y salida necesarios.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Administra los archivos de datos y programas almacenados en el almacenamiento secundario.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Mantiene directorios de archivos y proporciona acceso a los datos en los archivos.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Interactúa con los usuarios.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img10.png', style="width: 450px", alt='Imágen decorativa').m-auto
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b ¿Qué es la multiprogramación?]
                      p Es la capacidad de una computadora para ejecutar varios programas simultáneamente en el mismo procesador al tener uno de los programas usando el procesador mientras otros realizan la entrada o salida. La multiprogramación requiere que las partes activas de los programas que compiten por el procesador estén disponibles en la memoria principal. La memoria virtual es la capacidad aparentemente expandida de la memoria principal de la computadora, y se logra al mantener en la memoria principal solo las partes de los programas que se necesitan de inmediato, con los programas completos guardados en el almacenamiento secundario.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img11.png', style="width: 450px", alt='Imágen decorativa').m-auto
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Modos de operación del sistema informático]
                      p Los sistemas operativos permiten que el sistema que administran opere en varios modos. Estos incluyen el procesamiento por lotes, el tiempo compartido y el procesamiento en tiempo real.
                      ul.lista-ul--color
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Procesamiento por lotes, procesamiento de programas o transacciones por lotes, sin la interacción del usuario.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Sistemas de tiempo compartido que brindan procesamiento interactivo al asignar un segmento de tiempo corto para el uso del servidor a cada usuario por turno.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Sistemas de procesamiento en tiempo real que responden a un evento dentro de un intervalo de tiempo fijo; se utiliza, por ejemplo, en plantas de fabricación o para recopilar datos de varios equipos en un laboratorio.
                      p.mb-0 Los sistemas operativos de multiprocesamiento se han diseñado para asignar el trabajo a los múltiples procesadores. Estos sistemas también admiten la multiprogramación, lo que permite que muchos programas compitan por los procesadores.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img12.png', style="width: 450px", alt='Imágen decorativa').m-auto
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Sistemas operativos computadoras personales]
                      p Los sistemas operativos de las computadoras personales que están dedicadas a un solo usuario son mucho más simples que los sistemas operativos que ejecutan máquinas más grandes, a las que cientos o miles de usuarios pueden tener acceso simultáneo. Una capacidad importante que puede ofrecer un sistema operativo en un entorno informático personal es la multitarea: la capacidad de ejecutar varias tareas a la vez en nombre de un usuario.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img13.png', style="width: 450px", alt='Imágen decorativa').m-auto
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Sistemas operativos de microcomputadoras]
                      p DOS: sistema operativo más antiguo que se usaba en microcomputadoras.
                      ul.lista-ul--color
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Es un sistema operativo de un solo usuario y una sola tarea.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Puede agregar una interfaz GUI y capacidades multitarea mediante el uso de un entorno operativo como.
                      p Microsoft Windows.
                      ul.lista-ul--color.mb-0
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 OS/2 Warp - interfaz gráfica de usuario.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Multitarea.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Capacidades de memoria virtual.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Capacidades de telecomunicaciones.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img14.png', style="width: 450px", alt='Imágen decorativa').m-auto
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p Windows NT: sistema operativo de red multitarea.
                      ul.lista-ul--color
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Sistema operativo de red multiusuario.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Instalado en servidores de red para administrar redes de área local con requisitos informáticos de alto rendimiento.
                      p UNIX: sistema operativo popular que está disponible para sistemas informáticos micros, minis y mainframe.
                      ul.lista-ul--color
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Sistema multitarea y multiusuario.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Se instala en servidores de red.
                      p Macintosh System 7 - multitarea.
                      ul.lista-ul--color.mb-0
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Capacidades de memoria virtual.
                        li.d-flex
                          i.fas.fa-check-circle(style="color: #4ADBD1")
                          |
                          p.mb-0 Interfaz gráfica del usuario.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img15.png', style="width: 450px", alt='Imágen decorativa').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Interfaz de usuario
    .row.bg-c1
      .col-12
        .px-5
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema2/img16.png', style="width: 1200px", alt='Imágen decorativa').m-auto
          .row.justify-content-center.mb-5(data-aos="fade-down")
            .col-lg-10.bg-c2.shadow-sm.p-4
              p.mb-0 Una interfaz de usuario es una combinación de medios por los cuales un usuario interactúa con el sistema informático. Permite que el usuario final se comunique con el sistema operativo para que pueda cargar programas, acceder a archivos y realizar otras tareas.
          .row.mb-5
            .col-lg-7
              p Los tres tipos principales de interfaces de usuario son:
              .row.mb-4
                .col-auto.bg-c25.mx-1
                  p.mb-0 #[b Unidad de comando.]
                .col-auto.bg-c25.mx-1
                  p.mb-0 #[b Unidad de menú.]
                .col-auto.bg-c25.mx-1
                  p.mb-0 #[b Interfaz gráfica de usuario (GUI).]
              .cajon.color-acento-botones.p-4.mb-3
                p.mb-0 La interfaz gráfica de usuario más popular es la proporcionada por Windows. El entorno de Windows se ha convertido en una plataforma estándar para las computadoras.
            .col-lg-3
              figure
                img(src='@/assets/curso/tema2/img7.svg', style="width: 350px", alt='Imágen decorativa').m-auto
          .row.mb-4(data-aos="fade-right")
            .col-auto.px-4.py-3.bg-c3
              h3.mb-0 El objetivo de los sistemas abiertos
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema2/img17.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Un impulso es usar sistemas abiertos en la computación organizacional, de modo que el #[i software] y el #[i hardware] de cualquier proveedor puedan operar conjuntamente.
                br
                br
                | El término un sistema abierto se utiliza como opuesto a los sistemas propietarios de un fabricante específico, además permite la portabilidad, escalabilidad e interoperabilidad de las aplicaciones.
    .row.bg-c26.mb-5(data-aos="fade-down")
      .col-12
        .p-5
          .titulo-sexto.color-acento-botones
            p.mb-0 #[b Figura 1]. Características del sistema abierto
          figure
            img(src='@/assets/curso/tema2/img8.svg', style="width: 1150px", alt='La imagen muestra las características del sistema abierto, entre las que se encuentran: Portabilidad: se puede mover de un sistema informático a otro. Interoperabilidad: significa que las máquinas de varios proveedores y capacidades pueden trabajar juntas para producir la información necesaria. Escalabilidad: es aquella que se puede mover sin una repr5ogramación significativa').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 #[i Software] de productividad personal
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este #[i software] mejora el rendimiento de su usuario en una gama específica de tareas comunes, es compatible con la gestión y el análisis de bases de datos, la creación y presentación, y el seguimiento de actividades y notas. La gestión de datos está respaldada por sistemas de gestión de bases de datos, mientras que el #[i software] de hoja de cálculo ayuda en el análisis de datos. Para las necesidades de autoría y presentación, los usuarios emplean el #[i software] de aplicaciones para procesamiento de textos, autoedición, presentación y autoría multimedia.
    .tarjeta.tarjeta--azul2.mb-5(data-aos="fade-right")
      .p-4
        SlyderA(tipo="b")
          .row.align-items-center.justify-content-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img19.png', style="width: 350px", alt='Imágen decorativa').m-auto
            .col-lg-6
              p #[b Gestión de base de datos]
              p Facilitan el almacenamiento, el mantenimiento y la utilización de datos en una base de datos compartida por muchos usuarios. Los DBM de microcomputadoras permiten a los usuarios:
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check-circle(style="color: #4ADBD1")
                  |
                  p.mb-0 Crear y mantener una base de datos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #4ADBD1")
                  |
                  p.mb-0 Consultar una base de datos con un lenguaje de consulta.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #4ADBD1")
                  |
                  p.mb-0 Preparar informes formateados.
              p.mb-0 Además, los paquetes ofrecen funciones de seguridad, conectividad de red y la capacidad de presentar resultados gráficos, así como realizar cálculos tipo hoja de cálculo.
          .row.align-items-center.justify-content-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img20.png', style="width: 350px", alt='Imágen decorativa').m-auto
            .col-lg-6
              p #[b Procesamiento de textos]
              p Son programas que informatizan la creación, edición e impresión de documentos mediante el procesamiento electrónico de datos de texto. El procesamiento de textos es una aplicación importante de la automatización de oficinas. El procesamiento de textos es la actividad de creación y presentación más popular. De hecho, es la aplicación informática personal más común.
          .row.align-items-center.justify-content-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img21.png', style="width: 350px", alt='Imágen decorativa').m-auto
            .col-lg-6
              p #[b Autoedición]
              p Las organizaciones utilizan #[i software] de autoedición para producir sus propios materiales impresos, como boletines, folletos, manuales y libros con varios estilos de letra, gráficos y colores en cada página. Los componentes necesarios para configurar un sistema de autoedición modesto incluyen: una pantalla de alta resolución, una impresora láser, #[i software] de autoedición y quizás un escáner.
          .row.align-items-center.justify-content-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img22.png', style="width: 350px", alt='Imágen decorativa').m-auto
            .col-lg-6
              p #[b #[i Software] de presentación]
              p El objetivo de los gráficos de presentación es proporcionar información en forma gráfica que ayude a los usuarios finales y gerentes a comprender las propuestas comerciales y el rendimiento y tomar mejores decisiones al respecto. Es importante tener en cuenta que los gráficos de presentación no reemplazan los informes y las pantallas de números y material de texto.
          .row.align-items-center.justify-content-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img23.png', style="width: 350px", alt='Imágen decorativa').m-auto
            .col-lg-6
              p #[b #[i Software] de autoría multimedia]
              p Permite a sus usuarios diseñar presentaciones multimedia. Con estos paquetes, puede desarrollar cursos atractivos de capacitación basada en computadora (CBT) o presentaciones para clientes. Este #[i software] tiene imágenes gráficas superiores, animación por computadora y video en movimiento que se pueden combinar con sonido de alta fidelidad en combinación con el texto.
          .row.align-items-center.justify-content-center
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img24.png', style="width: 350px", alt='Imágen decorativa').m-auto
            .col-lg-6
              p #[b Los hipermedios]
              p Son documentos electrónicos que contienen múltiples formas de medios, incluidos texto, gráficos, video, mensajes de voz u otras unidades de información, como hojas de trabajo. En el método hipermedia de entrega de información, se pueden establecer vínculos entre varios elementos en un gran documento multimedia. Estos enlaces permiten al usuario pasar de un tema directamente a otro relacionado, en lugar de escanear la información de manera secuencial. El hipertexto es una metodología para la construcción y uso interactivo de bases de datos de texto. Por definición, el hipertexto contiene solo texto y una cantidad limitada de gráficos.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Gestión de información personal
    .row.align-items-center.mb-5
      .col-auto(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width: 30px", alt='Imágen decorativa').m-auto
      .col(data-aos="fade-left")
        p.mb-0 Los paquetes de gestión de información personal (PIM) son herramientas que ayudan a los trabajadores del conocimiento a realizar un seguimiento de tareas, personas, proyectos, compromisos e ideas. Estos paquetes ayudan a los usuarios finales a almacenar, organizar y recuperar texto y datos numéricos en forma de notas, listas, recortes, tablas, memorandos, cartas, informes, etc.
    TabsB.color-acento-contenido(data-aos="fade-right")
      .py-4.py-md-5(titulo="<i>Software</i> de comunicaciones y navegador web" :icono="require('@/assets/curso/tema1/img20.svg')")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p Permite al usuario conectarse a una red de telecomunicaciones para intercambiar información con otros usuarios o sistemas. El #[i software] proporciona las siguientes capacidades:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #4ADBD1")
                |
                p.mb-0 Envío y recepción de correo electrónico.
              li.d-flex
                i.fas.fa-check-circle(style="color: #4ADBD1")
                |
                p.mb-0 Transferencia de archivos. Puede descargar un programa o un archivo de datos desde una computadora remota a su propia estación de trabajo o cargar un archivo a la computadora remota.
              li.d-flex
                i.fas.fa-check-circle(style="color: #4ADBD1")
                |
                p.mb-0 Emulación de terminal: permitir que la computadora personal actúe como terminal cuando se requiera en una aplicación en particular.
              li.d-flex
                i.fas.fa-check-circle(style="color: #4ADBD1")
                |
                p.mb-0 Enviar y recibir un fax.
            p.mb-0  Los navegadores web se están convirtiendo rápidamente en una de las categorías más populares de paquetes de #[i software].
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img9.svg', style="width: 280px", alt='Imágen decorativa').m-auto
      .py-4.py-md-5(titulo="Lenguajes de programación y sus traductores" :icono="require('@/assets/curso/tema1/img20.svg')")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p  Gran parte del #[i software] de aplicaciones utilizado en una organización debe programarse o personalizarse. Un lenguaje de programación permite a un programador o usuario final desarrollar conjuntos de instrucciones que constituyen un programa de computadora. Estos idiomas han evolucionado a lo largo de cuatro generaciones y se pueden agrupar en cinco categorías principales.
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #4ADBD1")
                |
                p.mb-0 Lenguajes de máquina.
              li.d-flex
                i.fas.fa-check-circle(style="color: #4ADBD1")
                |
                p.mb-0 Lenguajes ensambladores.
              li.d-flex
                i.fas.fa-check-circle(style="color: #4ADBD1")
                |
                p.mb-0 Lenguajes de alto nivel.
              li.d-flex
                i.fas.fa-check-circle(style="color: #4ADBD1")
                |
                p.mb-0 Lenguajes de cuarta generación.
              li.d-flex
                i.fas.fa-check-circle(style="color: #4ADBD1")
                |
                p.mb-0 Lenguajes orientados a objetos.
            p  En el siguiente documento podrá profundizar en cada uno de ellos:
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/tema1/img51.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.text-white.mb-0 #[b Anexo]. Lenguajes de programación.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/lenguajes_de_programacion.pdf')" target="_blank")
                        span(style="color:#000 !important") Descargar
                        i.fas.fa-file-download(style="color:#000 !important")
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img10.svg', style="width: 280px", alt='Imágen decorativa').m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-acento-botones
      h2 2.2 Búsqueda de información técnica
    .row.justify-content-center.mb-5
      .col-lg-auto.px-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img25.png', style="width: 485px", alt='Imágen decorativa').m-auto
      .col-md-9.col-lg.bg-c27(data-aos="fade-left")
        .p-3
          .row.mb-3
            .col-12.bg-c28
              .p-3
                p.mb-0 Después de haber visto en detalle qué es un SI, es importante echar un vistazo más de cerca a sus funciones que, como recordatorio, son recopilar, almacenar, procesar y difundir información de su entorno.
          ul.lista-ul--color.mb-0
            li.d-flex.mb-0
              i.fas.fa-check-circle(style="color: #4ADBD1")
              |
              p.text-white.mb-0 El SI tiene 4 funciones: recopilar, almacenar, procesar y difundir información.
            li.d-flex.mb-0
              i.fas.fa-check-circle(style="color: #4ADBD1")
              |
              p.text-white.mb-0 La información recolectada puede provenir de flujos internos o externos al SI de la organización.
            li.d-flex.mb-0
              i.fas.fa-check-circle(style="color: #4ADBD1")
              |
              p.text-white.mb-0 La información se puede almacenar en forma de una base de datos o archivos.
            li.d-flex.mb-0
              i.fas.fa-check-circle(style="color: #4ADBD1")
              |
              p.text-white.mb-0 Las bases de datos y los archivos se pueden almacenar físicamente en un servidor, un área de almacenamiento dentro de la organización o en la nube.
            li.d-flex.mb-0
              i.fas.fa-check-circle(style="color: #4ADBD1")
              |
              p.text-white.mb-0 Son posibles 4 formas de procesamiento de la información: consulta, organización, actualización y  creación de nueva información.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        .tarjeta-naranja-borde.p-2.justify-content-center.mb-4
          h5.mb-0.text-center Esta información puede provenir de dos fuentes distintas:

    .row.bg-c22.mb-5(data-aos="fade-right")
      .col-12
        .px-5
          .row.justify-content-center(data-aos="fade-down")
            .col-xl-5.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/tema2/img26.png", alt="alt")
                .crd_hover_txt--body
                  p.text-center #[b Fuente interna]
                  p.text-center.mb-0 Es el flujo de información que generan las entidades internas de la organización (suministros, producción, gestión de empleados, contabilidad, ventas, etc.), por su funcionamiento (procesos, métodos), pero también el flujo de información informal (clima social, bienestar de los empleados, saber hacer, etc.) menos sencilla de destacar, pero decisiva, etc.
            .col-xl-5.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
              .crd_hover_txt
                .crd_hover_txt--img
                  figure
                    img(src="@/assets/curso/tema2/img27.png", alt="alt")
                .crd_hover_txt--body1
                  p.text-center.text-white #[b Fuente externa]
                  p.text-center.text-white.mb-0 Este es el flujo de información generado por partes interesadas externas a la empresa (clientes, proveedores, Estado, etc.) y que son esenciales para anticipar cambios y adaptar los SI para servir a la organización. Al establecer un monitoreo (tecnológico, social, legal, comercial, etc.), la empresa se da cuenta de que es fundamental para ella estar particularmente atenta a la información de fuentes externas.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Memorización de la información
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img28.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez recolectada e ingresada, la información debe almacenarse de manera duradera, estable y segura para que pueda ser utilizada posteriormente o simplemente para cumplir con obligaciones legales. Para organizar el almacenamiento de la información, se implementan medios técnicos y organizativos tales como métodos de archivo, técnicas de respaldo, protección contra la piratería o métodos para evitar la destrucción de datos. Como la información es valiosa, es imperativo que SI la asegure bien.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Organización de almacenamiento
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img29.png', style="width: 350px", alt='Imágen decorativa').m-auto
      .col-lg-9(data-aos="fade-left")
        .cajon.color-primario.p-4
          p.mb-0 Por lo tanto, la información se recopila y almacena en archivos o en lo que se denomina una base de datos (o BDD). El archivo es una colección, un conjunto de datos reunidos bajo el mismo nombre. Técnicamente, es información digital compuesta por una secuencia de bytes, es decir, una secuencia de números. La base de datos (BDD) es una estructura de almacenamiento de información que toma la forma de grandes tablas, como una tabla de Excel. Cada columna se utiliza para ordenar un tipo de datos y cada fila representa un registro y, por ende, puede encontrar en la columna el número del contacto, su nombre, su nombre, su función y su número de teléfono. Cada línea representa un registro.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Zona de almacenamiento
    p.mb-5(data-aos="fade-right") Finalmente, todos los archivos y bases de datos deben almacenarse. Se pueden encontrar las siguientes zonas de almacenamiento:
    .row.bg-c26.mb-5(data-aos="fade-down")
      .col-12
        .px-5.pb-5.pt-1
          figure
            img(src='@/assets/curso/tema2/img11.svg', style="width: 1150px", alt='Directamente en los discos duros de los servidores SI de la organización. En este contexto, la información solo es accesible desde este servidor. En la Nube. En este contexto, la información es accesible desde cualquier parte del mundo.	En áreas de almacenamiento dentro del SI de la organización. Estos son discos duros muy grandes accesibles a través de la red corporativa. En este contexto, la información es accesible desde todos los componentes del SI, pero sólo dentro de la organización.').m-auto

    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Para procesar información
    .row.align-items-center.mb-5
      .col-auto(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width: 30px", alt='Imágen decorativa').m-auto
      .col(data-aos="fade-left")
        p.mb-0 Una vez que la información ha sido recopilada y almacenada, está disponible para su procesamiento, este proceso consiste en producir nueva información a partir de la información existente a través de programas de computadora u operaciones manuales.
    .row.bg-c12.mb-5(data-aos="fade-left")
      .col-12
        .p-5
          .row.justify-content-center.mb-5
            .col-lg-auto.bg-c29.shadow
              .p-2
                p.text-center.text-white.mb-0 #[b El procesamiento de la información puede tomar 4 formas diferentes, obsérvelas a continuación:]
          .row.justify-content-center
            .col-lg-11
              PasosA.color-acento-contenido.mb-5(tipo="l")
                .row.align-items-center
                  .col.mb-4.mb-lg-0
                    p #[b Consultar la información]
                    p Este es el procesamiento más sencillo ya que consiste en acceder a la información tal como fue registrada.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema2/img12.svg', style="width: 270px", alt='Imágen decorativa').m-auto
                .row.align-items-center
                  .col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img13.svg', style="width: 270px", alt='Imágen decorativa').m-auto
                  .col
                    p.txt-c2 #[b Organizar la información]
                    p.txt-c2 Este procesamiento consiste en estructurar la información según criterios específicos. Esta podrá, por ejemplo, agrupar información por cliente, por zona geográfica, por actividad y muchas más.
                .row.align-items-center
                  .col.mb-4.mb-lg-0
                    p #[b Actualización de la información]
                    p Este tratamiento consistirá en tomar información previamente registrada y actualizarla, según los requerimientos o necesidades organizacionales.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema2/img14.svg', style="width: 270px", alt='Imágen decorativa').m-auto
                .row.align-items-center
                  .col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema2/img15.svg', style="width: 270px", alt='Imágen decorativa').m-auto
                  .col
                    p.txt-c2 #[b Producir nueva información]
                    p.txt-c2 A partir de información(es) existente(s), este procesamiento permitirá la creación de nueva información, dicha información toma como base información ya analizada, pero se construye con el fin de suplir las necesidades organizacionales, se encamina hacia la búsqueda de diferentes soluciones, cuestionamientos, e intereses propios de la empresa.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Transmitir las noticias
    .cajon.color-primario.p-4(data-aos="fade-down")
      p.mb-0 Cualquiera que sea su origen o lo que representa, la información solo tiene valor si se comunica a los destinatarios correctos, en el momento adecuado y en una forma directamente utilizable.
    Separador
    #t_2_3
    .titulo-segundo.color-acento-botones
      h2 2.3 Gestión de cuentas corporativas de sistemas informáticos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img30.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El director de información o el director de tecnología suele supervisar la gestión de los sistemas de TI. El departamento responsable de diseñar y administrar los sistemas a veces se conoce como sistemas de información de administración, sistemas de información corporativos o infraestructura y operaciones de TI.
    .row.bg-c30.mb-5
      .col-12
        .p-5
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-lg-auto.bg-c21.shadow
              .p-2
                p.text-center.text-white.mb-0 #[b Las tareas para estos equipos incluyen lo siguiente:]
          .row
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              ul.lista-ul--color.lista-ul--separador
                li.d-flex
                  i.fas.fa-check-circle(style="color: #4ADBD1")
                  |
                  p.mb-0 Recopilación de requisitos del sistema.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #4ADBD1")
                  |
                  p.mb-0 Compra de equipos y #[i software].
                li.d-flex
                  i.fas.fa-check-circle(style="color: #4ADBD1")
                  |
                  p.mb-0 Distribuir, configurar y mantener el equipo.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #4ADBD1")
                  |
                  p.mb-0 Proporcionar mejoras y actualizaciones de servicio a los equipos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #4ADBD1")
                  |
                  p.mb-0 Implementar procesos para abordar problemas.
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema2/img17.svg', style="width: 270px", alt='Imágen decorativa').m-auto
            .col-lg-6(data-aos="fade-left")
              figure.mb-4
                img(src='@/assets/curso/tema2/img18.svg', style="width: 270px", alt='Imágen decorativa').m-auto
              ul.lista-ul--color.lista-ul--separador
                li.d-flex
                  i.fas.fa-check-circle(style="color: #4ADBD1")
                  |
                  p.mb-0 Servicios de aprovisionamiento.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #4ADBD1")
                  |
                  p.mb-0 Monitorear el desempeño de los sistemas de TI.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #4ADBD1")
                  |
                  p.mb-0 Determinar si se están cumpliendo los objetivos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #4ADBD1")
                  |
                  p.mb-0 La Biblioteca de infraestructura de tecnología de la información, proporciona una guía de mejores prácticas para la gestión de operaciones y sistemas en el centro de datos y la nube.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 El espectro de gestión de sistemas
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p La mayoría de las funciones comerciales involucran algún tipo de sistema de TI. Cada sistema o subsistema de TI debe funcionar de forma independiente y estar integrado con los subsistemas relacionados para garantizar el éxito del negocio.
        .cajon.color-acento-botones.p-4
          p.mb-0 Los sistemas de TI deben operar a un cierto nivel de servicio para que el negocio tenga éxito. Una buena gestión de sistemas simplifica la prestación de servicios de TI, permite a los grupos de trabajo ser más eficientes, también contribuye a que las empresas sean más proactivas, dedicando menos tiempo a solucionar problemas y más tiempo a planificar para el futuro y realizar mejoras.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img31.png', style="width: 470px", alt='Imágen decorativa').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Subsistemas de gestión de sistemas de TI
    p.mb-5(data-aos="fade-right") La infraestructura de TI consta de varios subsistemas que cumplen objetivos específicos, como la gestión de datos, la gestión de redes o el almacenamiento. Los subsistemas de TI trabajan juntos como parte del sistema de TI general. Es útil pensar en términos de subsistemas porque TI abarca una variedad de tecnologías. Especificar el subsistema ayuda a definir el contexto. Algunos ejemplos de subsistemas de TI son los siguientes:
    .row.justify-content-center.mb-5
      .col-10.col-lg-6.bg-c31(data-aos="fade-right")
        .p-4.p-lg-5
          figure.mb-4
            img(src='@/assets/curso/tema2/img19.svg', style="width: 170px", alt='Imágen decorativa').m-auto
          p.text-center.text-white #[b Gestión del ciclo de vida de las aplicaciones]
          p.text-center.text-white Esta es la supervisión de todas las etapas de la vida de una aplicación de #[i software], desde la planificación hasta el retiro. ALM implica la documentación y el seguimiento de los cambios en una aplicación, así como la mejora de la experiencia del usuario, la supervisión de la aplicación y la resolución de problemas.
      .col-10.col-lg-6.bg-c32(data-aos="fade-left")
        .p-4.p-lg-5
          figure.mb-4
            img(src='@/assets/curso/tema2/img20.svg', style="width: 170px", alt='Imágen decorativa').m-auto
          p.text-center #[b Gestión del ciclo de vida de los activos]
          p.text-center Esto implica todas las etapas de la vida del #[i hardware] y el #[i software], desde la planificación y la adquisición hasta el desmantelamiento y el retiro. El ciclo de vida de los activos de TI cubre las licencias de #[i software], desde los hipervisores hasta las aplicaciones comerciales, y el análisis del costo de los activos frente al valor o los ingresos generados.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 La gestión del ciclo de vida de los activos de TI
    p.mb-5(data-aos="fade-right") La gestión del ciclo de vida de los activos de TI consta de cinco pasos: planificación, desarrollo o adquisición, integración, mantenimiento y actualización, y retiro.
    .row.mb-5
      .col-12.bg-c33
        .p-4
          .row.align-items-center.justify-content-center
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img32.png', style="width: 400px", alt='Imágen decorativa').m-auto
            .col-lg-6.bg-c19(data-aos="fade-left")
              .p-3
                SlyderA(tipo="b")
                  .row
                    .col-12
                      .p-5
                        p #[b Gestión de la automatización]
                        p Este es el uso de controles automáticos para monitorear y llevar a cabo funciones de gestión de TI.
                  .row
                    .col-12
                      .p-5
                        p #[b Gestión de la planificación de la capacidad]
                        p Esto implica estimar la cantidad de ciertos recursos necesarios durante un período de tiempo futuro. Estos recursos incluyen espacio en el piso del centro de datos, refrigeración, #[i hardware], #[i software], infraestructura de energía y conectividad y computación en la nube.
                  .row
                    .col-12
                      .p-5
                        p #[b Gestión del cambio]
                        p Este es un enfoque sistemático para enfrentar el cambio desde la perspectiva tanto de la organización como del individuo. La gestión de cambios garantiza que los cambios se aprueben y documenten, y mejora la capacidad de una empresa para adaptarse rápidamente.
    .row.mb-5(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Lista de verificación de gestión de cambios

    p.mb-5 Un plan de gestión del cambio comienza con la definición clara del proyecto y la visión de cuáles deberían ser los resultados.

    .row.bg-c34(data-aos="fade-left")
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-9.mb-4
              .row
                .col-auto.bg-c35.px-0
                  .p-3.h-100
                    .row.h-100.align-items-center
                      .col-12
                        p.fs-4.mb-0 #[b 01]
                .col.bg-c36
                  .p-4
                    p.mb-0 #[b Gestión del ciclo de vida de la nube:] es el ejercicio del control administrativo sobre las nubes públicas, privadas e híbridas.
            .col-lg-9.mb-4
              .row
                .col-auto.bg-c25.px-0
                  .p-3.h-100
                    .row.h-100.align-items-center
                      .col-12
                        p.fs-4.mb-0 #[b 02]
                .col.bg-c36
                  .p-4
                    p.mb-0 #[b Gestión de cumplimiento:] esto asegura que una organización se adhiera a las regulaciones gubernamentales y de la industria como se especifica en su marco de cumplimiento.
            .col-lg-9.mb-4
              .row
                .col-auto.bg-c35.px-0
                  .p-3.h-100
                    .row.h-100.align-items-center
                      .col-12
                        p.fs-4.mb-0 #[b 03]
                .col.bg-c36
                  .p-4
                    p.mb-0 #[b Gestión de la configuración:] esto abarca los procesos utilizados para monitorear, controlar y actualizar los recursos y servicios de TI en toda una empresa. La gestión de la configuración le permite a una empresa saber cómo están configurados sus activos tecnológicos y cómo se relacionan entre sí.
            .col-lg-9.mb-4
              .row
                .col-auto.bg-c25.px-0
                  .p-3.h-100
                    .row.h-100.align-items-center
                      .col-12
                        p.fs-4.mb-0 #[b 04]
                .col.bg-c36
                  .p-4
                    p.mb-0 #[b Manejo de costos:] esta es la planificación y el control de los gastos de TI. La gestión de costos permite buenas prácticas presupuestarias y reduce la posibilidad de sobrepasar el presupuesto.
            .col-lg-9
              .row
                .col-auto.bg-c35.px-0
                  .p-3.h-100
                    .row.h-100.align-items-center
                      .col-12
                        p.fs-4.mb-0 #[b 05]
                .col.bg-c36
                  .p-4
                    p.mb-0 #[b Gestión de datos:] esto determina cómo se crean, recuperan, actualizan y almacenan los datos en una organización. La gestión de datos también puede incluir copia de seguridad de datos y recuperación ante desastres.
          .row.mb-4(data-aos="fade-right")
            .col-auto.px-4.py-3.bg-c3
              h3.mb-0 El proceso del ciclo de vida de los datos
    p.mb-5(data-aos="fade-right") La gestión del ciclo de vida de los datos divide dicho ciclo en siete pasos, los cuales se describen a continuación:
    .row.mb-5
      .col-12.bg-c18(data-aos="fade-right")
        .px-4.py-5
          .row
            .col-12.bg-c19
              .p-4
                SlyderE(indicadores="derecha")
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Gestión de la mesa de ayuda]
                      p Esto implica informar y realizar un seguimiento a los problemas que han sido informados a mesa de ayuda, así como gestionar las resoluciones de esos problemas.
                      p.mb-0 Entre ellos se encuentran problemas técnicos, de almacenamiento, de acceso, usuarios, etc.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img33.png', style="width: 450px", alt='Imágen decorativa').m-auto
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Gestión de servicios de TI]
                      p.mb-0 Esta es la creación y gestión de un enfoque estratégico para diseñar, entregar, gestionar y mejorar la forma en que se utiliza la TI para que una organización pueda cumplir sus objetivos comerciales. ITSM permite a las empresas administrar los servicios de TI a lo largo de su ciclo de vida.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img34.png', style="width: 450px", alt='Imágen decorativa').m-auto
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Administración de redes]
                      p.mb-0 Esta es la administración de redes tanto cableadas como inalámbricas. El marco FCAPS (fallo, configuración, contabilidad, rendimiento y seguridad) para el monitoreo y la administración de la red y las mejores prácticas de ITIL son herramientas administrativas populares para este subsistema.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img35.png', style="width: 450px", alt='Imágen decorativa').m-auto
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Gestión del rendimiento]
                      p.mb-0 Esta es la supervisión de la infraestructura de TI de una organización para garantizar que los indicadores clave de rendimiento, los niveles de servicio y los presupuestos cumplan con los objetivos comerciales de la organización.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img36.png', style="width: 450px", alt='Imágen decorativa').m-auto
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Información de seguridad y gestión de eventos]
                      p.mb-0 Esta es una visión holística de la seguridad de TI de una organización. SIEM combina las funciones de gestión de información de seguridad y gestión de eventos de seguridad (SEM) en un solo sistema de gestión de seguridad.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img37.png', style="width: 450px", alt='Imágen decorativa').m-auto
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Gestión de servidores]
                      p.mb-0 Es la consolidación y gestión de servidores en un entorno homogéneo o heterogéneo. Implica la supervisión de la gestión de parches, la eficiencia, el uso y el rendimiento de la energía, así como el mantenimiento predictivo.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img38.png', style="width: 450px", alt='Imágen decorativa').m-auto
                  .row.m-1
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Administración de almacenamiento]
                      p.mb-0 Es el establecimiento y gestión de procedimientos, servicios y estándares para la gestión de la infraestructura de almacenamiento y los servicios de almacenamiento en la nube de terceros.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema2/img39.png', style="width: 450px", alt='Imágen decorativa').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Retos de la gestión de sistemas
    p.mb-5(data-aos="fade-right") La gestión de sistemas de TI implica muchos desafíos, entre ellos se encuentran:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img40.png', alt='Imágen decorativa')
          .tarjeta.color-secundario.p-3(x="5%" y="14%" numero="+")
            p.mb-0 La administración de sistemas cuesta dinero, se debe invertir en el personal de TI, las herramientas de administración de sistemas y la capacitación necesaria para usar dichas herramientas.
          .tarjeta.color-secundario.p-3(x="5%" y="33%" numero="+")
            p.mb-0 La administración de sistemas es una parte clave de cualquier plan de recuperación ante desastres. Cuando ocurren desastres, los datos y los sistemas deben volver a estar en línea lo más rápido posible.
          .tarjeta.color-secundario.p-3(x="5%" y="52%" numero="+")
            p.mb-0 Proteger los sistemas de TI se vuelve más desafiante a medida que la infraestructura se vuelve más compleja. Mantener la seguridad del #[i software] de administración de sistemas es particularmente importante. #[i Software] afecta sistemas TI, riesgo para seguridad de red.
          .tarjeta.color-secundario.p-3(x="95%" y="14%" numero="+")
            p.mb-0 Uno de los mayores desafíos es lograr que todos los subsistemas trabajen juntos en un entorno de TI que cambia constantemente. Puede ser difícil integrar el #[i software] de administración de sistemas con varios #[i hardware] y otro #[i software].
          .tarjeta.color-secundario.p-3(x="95%" y="33%" numero="+")
            p.mb-0 A medida que los sistemas cambian y se vuelven más complejos, es difícil garantizar que el #[i software] de todos los subsistemas esté actualizado. Las actualizaciones de #[i software] pueden causar problemas de compatibilidad y las actualizaciones perdidas pueden crear vulnerabilidades de seguridad.
          .tarjeta.color-secundario.p-3(x="95%" y="52%" numero="+")
            p.mb-0 El personal de TI y los administradores de sistemas deben comprender cómo las herramientas de administración de sistemas se integran entre sí y con la infraestructura existente. Capacitar al personal para hacer esto requiere tiempo y recursos.
    p.mb-5(data-aos="fade-down") En resumen, las organizaciones deben planificar, coordinar y dirigir sus actividades haciendo usos de las TI, esto permitirá cumplir con los objetivos establecidos, por lo tanto, es necesario que:
    .row.bg-c22(data-aos="fade-right")
      .col-12
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.color-acento-botones1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img25.svg' alt='AvatarTop')
              p.text-white Se aplica el conocimiento en negocios y sistemas informáticos para analizar las necesidades de los usuarios/clientes y apoyar la toma de decisiones gerenciales.
            .tarjeta.color-acento-botones2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img26.svg' alt='AvatarTop')
              p Comunicar de manera efectiva con una variedad de partes interesadas sobre las áreas funcionales de la administración de sistemas, incluido el #[i hardware], las redes, el #[i software], la seguridad y las aplicaciones en la nube.
            .tarjeta.color-acento-botones1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img27.svg' alt='AvatarTop')
              p.text-white Aplicar los conocimientos para tomar decisiones éticas, profesionales, legales y sociales responsables relacionadas con el manejo de sistemas informáticos.
            .tarjeta.color-acento-botones2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img23.svg' alt='AvatarTop')
              p.text-white Aplicar habilidades de pensamiento crítico y análisis lógico para diseñar, implementar y evaluar soluciones basadas en computación para problemas comerciales complejos.
            .tarjeta.color-acento-botones1.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema2/img24.svg' alt='AvatarTop')
              p Poseer certificaciones de la industria en áreas funcionales de informática, sistemas de información de gestión o gestión de proyectos.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
