<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Sistemas informáticos en una organización
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un Sistema de Información (SI) es un conjunto de componentes interrelacionados que trabajan juntos para recopilar, procesar, almacenar y difundir la información necesaria para la toma de decisiones asertivas dentro de la organización.
    .row.align-items-center.mb-3
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img2.png', style="width: 370px", alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p El propósito de un SI es convertir los recursos en bruto en información útil que pueda usarse de manera estratégica en los procesos empresariales.
        .row.align-items-center.mb-3
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img1.svg', style="width: 30px", alt='').m-auto
          .col
            p.mb-0 Por su parte, la tecnología de TI es aquella que impulsa o permite el almacenamiento, el procesamiento y el flujo de comunicación dentro de una organización. Todo lo relacionado con las computadoras, #[i #[i software]], redes, intranets, sitios web, servidores, bases de datos y telecomunicaciones.
        .cajon.color-acento-botones.p-4.mb-3
          p.mb-0 La mayoría de las empresas actualmente dependen de sistemas informáticos para la gestión de sus operaciones, por ejemplo, el correo electrónico, las bases de datos, la administración de sitios web, entre otros, son fundamentales para el óptimo funcionamiento de los procesos organizacionales.
        p.mb-0 Por ejemplo, los hospitales cuentan con grandes bases de datos de pacientes para poder realizar un seguimiento eficiente de las historias clínicas. Las universidades cuentan con sistemas para la gestión de personal, estudiantes y pagos, así como redes en expansión para la administración del campus. Incluso una pequeña empresa de entrega de alimentos a domicilio necesita un sistema de gestión y seguimiento de pedidos.
    p.mb-5(data-aos="fade-right") Si bien los sistemas de información pueden diferir en la forma en que se utilizan dentro de una organización, todos tienen los siguientes componentes:
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='')
          .tarjeta.color-secundario.p-3(x="22.3%" y="36%" numero="+")
            p #[b #[i Hardware]]
            p.mb-0 Conjunto de elementos físicos o materiales que constituyen una computadora o un sistema informático.
          .tarjeta.color-secundario.p-3(x="76%" y="64%" numero="+")
            p #[b #[i #[i Software]]]
            p.mb-0 Son los programas utilizados para la administración, procesamiento y análisis de la información.
          .tarjeta.color-secundario.p-3(x="65%" y="88%" numero="+")
            p #[b Red]
            p.mb-0 Posibilita que muchos recursos deben estar conectados entre sí, especialmente si muchas personas diferentes en una organización usan el mismo sistema.
          .tarjeta.color-secundario.p-3(x="10%" y="80%" numero="+")
            p #[b Procedimiento]
            p.mb-0 Describe cómo se procesan y analizan datos y los recursos específicos lo que permite determinar respuestas a diferentes problemáticas a partir de las cuales fue diseñado el sistema (“lógica de negocio”)
          .tarjeta.color-secundario.p-3(x="50.6%" y="55.6%" numero="+")
            p #[b Base de datos]
            p.mb-0 Todos los sistemas funcionan con recursos organizados en tablas y archivos.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Tipos de sistemas de Información en las organizaciones
    p.mb-5(data-aos="fade-right") Existen diferentes tipos de sistemas de información con funciones diferentes los cuales pueden ser utilizados según requerimientos organizacionales, a continuación, se presentan algunos:
    .tarjeta.tarjeta--azul.p-4(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.justify-content-center.m-1
          .col-11.bg-c4.p-4
            .row.align-items-center.justify-content-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img3.png', style="width: 300px", alt='').m-auto
              .col-lg-6
                p #[b.txt-c1 Sistema de gestión de bases de datos (DBMS)]
                p.mb-0 DataBase Management System, es una combinación de #[i #[i software]] que permite la administración y el análisis de datos. Su función principal es servir de interfaz entre la base de datos, el usuario y las distintas aplicaciones utilizadas.
        .row.justify-content-center.m-1
          .col-11.bg-c4.p-4
            .row.align-items-center.justify-content-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img4.png', style="width: 300px", alt='').m-auto
              .col-lg-6
                p #[b.txt-c1 Hoja de cálculo]
                p.mb-0 Es una herramienta para el análisis básico; se basa en fórmulas que definen relaciones entre recursos. Se puede usar para calcular promedios para un conjunto de valores o para ver cómo cambia un valor con el tiempo.
        .row.justify-content-center.m-1
          .col-11.bg-c4.p-4
            .row.align-items-center.justify-content-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img5.png', style="width: 300px", alt='').m-auto
              .col-lg-6
                p #[b.txt-c1 Enterprise Resource Planning (ERP)]
                p.mb-0 Sistema especializado que ha sido diseñado específicamente para dar soporte a un determinado proceso dentro de una organización o para realizar tareas de análisis muy concreta, este sistema se utiliza para integrar la gestión de todo el proceso interno y la cadena de suministro externa a lo largo de una organización.
        .row.justify-content-center.m-1
          .col-11.bg-c4.p-4
            .row.align-items-center.justify-content-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img6.png', style="width: 300px", alt='').m-auto
              .col-lg-6
                p #[b.txt-c1 Sistema de Información Geográfica (SIG)]
                p.mb-0 También  citado como GIS por sus siglas en inglés Geographical Information System, es un conjunto de herramientas que integra y relaciona diversos componentes que permiten la organización, almacenamiento, manipulación, análisis y modelización de grandes cantidades de datos procedentes del entorno que están vinculados a una referencia espacial, facilitando la incorporación de aspectos sociales-culturales, económicos y ambientales que permiten la  toma de decisiones de una manera más eficaz.
        .row.justify-content-center.m-1
          .col-11.bg-c4.p-4
            .row.align-items-center.justify-content-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img7.png', style="width: 300px", alt='').m-auto
              .col-lg-6
                p #[b.txt-c1 Sistemas de soporte de decisiones (DSS)]
                p.mb-0 Son aplicaciones de #[i software] utilizadas por la gerencia media y alta para recopilar información de una amplia gama de fuentes y procesos para respaldar la resolución de problemas y la toma de decisiones. Un DSS se utiliza principalmente para problemas de decisión no estructurados y semiestructurados.
        .row.justify-content-center.m-1
          .col-11.bg-c4.p-4
            .row.align-items-center.justify-content-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema1/img8.png', style="width: 300px", alt='').m-auto
              .col-lg-6
                p #[b.txt-c1 Sistemas de Información Ejecutiva (EIS)]
                p.mb-0 Son herramientas de informes que brindan acceso rápido a informes y procesos resumidos, provenientes de todos los niveles y departamentos de la empresa, como contabilidad, recursos humanos y operaciones.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-botones
      h2 1.1 Herramientas informáticas para la organización
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Para comenzar a entender el tema de este componente formativo es importante aclarar lo siguiente: 
        ul.lista-ul--color.lista-ul--separador.mb-0
          li.d-flex
            i.fas.fa-check-circle(style="color: #4ADBD1")
            |
            p.mb-0 El #[i software] de aplicación o herramientas está diseñado para cumplir un objetivo específico.
          li.d-flex
            i.fas.fa-check-circle(style="color: #4ADBD1")
            |
            p.mb-0 El #[i software] de productividad es un subconjunto del #[i software] de aplicación que proporciona funcionalidad comercial básica a una computadora personal: procesamiento de textos, hojas de cálculo y presentaciones.
          li.d-flex
            i.fas.fa-check-circle(style="color: #4ADBD1")
            |
            p.mb-0 Un sistema ERP es una aplicación de #[i software] con una base de datos centralizada que se implementa en toda la organización.
          li.d-flex
            i.fas.fa-check-circle(style="color: #4ADBD1")
            |
            p.mb-0 La computación en la nube es un método de entrega de #[i software] que se ejecuta en cualquier computadora que tenga un navegador web y acceso a Internet.
          li.d-flex
            i.fas.fa-check-circle(style="color: #4ADBD1")
            |
            p.mb-0 El #[i software] se desarrolla a través de un proceso llamado programación, en el que un programador usa un lenguaje específico para ejecutarlo. Si bien la mayoría del #[i software] se desarrolla utilizando un modelo de código cerrado, el movimiento de código abierto está ganando más apoyo en la actualidad.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img4.svg', style="width: 470px", alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-xl-4 
            figure
              img(src='@/assets/curso/tema1/img5.svg', style="width: 380px", alt='').m-auto
          .col-xl-auto
            figure.fig-p2
              img(src='@/assets/curso/tema1/img6.svg', style="width: 50px", alt='').m-auto
          .col-md-8.col-xl-7.bg-c5.p-4
            p.text-white.mb-0 #[b Recuerde que el #[i software]] es el conjunto de instrucciones que le dicen al #[i hardware] qué hacer. El #[i software] se puede dividir ampliamente en dos categorías: sistemas operativos y #[i software] de aplicación. Los sistemas operativos administran el #[i hardware] y crean la interfaz entre el #[i hardware] y el usuario. El #[i software] de aplicación es la categoría de programas que hacen algo útil para el usuario.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Sistemas operativos
    p.mb-5(data-aos="fade-right") El sistema operativo proporciona varias funciones esenciales, que incluyen:
    .row.bg-c1.mb-5
      .col-12
        .px-5
          .row.justify-content-center.mb-5(data-aos="fade-right")
            .col-md-8.col-lg.bg-c6.shadow.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img10.svg', style="width: 140px", alt='').m-auto
                p.text-center.text-white.mb-0 #[b Administrar los recursos de #[i hardware] de la computadora.]
            .col-md-8.col-lg.bg-c7.shadow.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img11.svg', style="width: 140px", alt='').m-auto
                p.text-center.mb-0 #[b Proporcionar los componentes de la interfaz de usuario.]
            .col-md-8.col-lg.bg-c8.shadow.m-2
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema1/img12.svg', style="width: 140px", alt='').m-auto
                p.text-center.text-white.mb-0 #[b Proporcionar una plataforma para que los desarrolladores de #[i software] escriban aplicaciones.]
          p.text-center.mb-5(data-aos="fade-down") #[b Para saber más sobre sistemas operativos revise con atención el siguiente recurso:]
          figure(data-aos="fade-left")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/eNG_O4A2Yhs" title="Sistemas operativos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Diferencia entre los sistemas operativos Mac vs. Windows
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="fade-left")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img13.svg', style="width: 280px", alt='').m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p ¿Eres un Mac? ¿Eres un PC? Desde su introducción en 1984, los usuarios de Apple Macintosh han sido bastante sesgados acerca de su preferencia por el sistema operativo Macintosh (ahora llamado OS X) sobre el de Microsoft. Cuando Microsoft introdujo Windows, Apple demandó a Microsoft, alegando que copian la “apariencia” del sistema operativo Macintosh. Al final, Microsoft se defendió con éxito.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img14.svg', style="width: 750px", alt='En los últimos años, Microsoft y Apple han intercambiado críticas entre sí, cada uno afirmando tener un mejor sistema operativo y software. Si bien Microsoft siempre ha tenido la mayor participación de mercado, Apple ha sido el favorito de los artistas, músicos y la élite tecnológica. Apple también proporciona muchas computadoras a las escuelas primarias, ganando así seguidores entre la generación más joven.').m-auto
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img15.svg', style="width: 450px", alt='').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 ¿Por qué el #[i software] de Microsoft es tan dominante en el mundo de los negocios?
    figure(data-aos="fade-right")
      img(src='@/assets/curso/tema1/img9.png', style="width: 1200px", alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.bg-c2.shadow-sm.p-4
        p.mb-0 Si han trabajado en el mundo de los negocios, se habrán dado cuenta de que casi todas las computadoras ejecutan una versión del sistema operativo Windows de Microsoft. ¿Por qué es esto? En casi todos los campus universitarios, se ve una preponderancia de computadoras portátiles Apple Macintosh. En las escuelas primarias, Apple también reina. ¿Por qué esto no se ha extendido al mundo de los negocios?
    .row.align-items-center.mb-3
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img10.png', style="width: 370px", alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p Casi todas las empresas usaban computadoras centrales IBM en las décadas de 1960 y 1970. Estas mismas empresas se alejaron de las computadoras personales hasta que IBM lanzó la PC en 1981. Cuando los ejecutivos tenían que tomar una decisión sobre la compra de computadoras personales para sus empleados, elegían la ruta segura y compraban IBM. El dicho entonces era: “Nunca despidieron a nadie por comprar IBM”. Entonces, durante la siguiente década, las empresas compraron computadoras personales IBM (o aquellas compatibles con ellas), que ejecutaban un sistema operativo llamado DOS. DOS fueron creados por Microsoft, por lo que cuando Microsoft lanzó Windows como la próxima iteración de DOS, las empresas tomaron la ruta segura y comenzaron a comprar Windows.
        .cajon.color-acento-botones.p-4
          p.mb-0 Microsoft pronto se encontró con el sistema operativo de computadora personal dominante para las empresas. 
    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width: 30px", alt='').m-auto
      .col
        p.mb-0 A medida que la computadora personal en red comenzó a reemplazar a la computadora central como la forma principal de computación dentro de las empresas, se volvió esencial para Microsoft brindarles a las empresas la capacidad de administrar y proteger sus redes. Microsoft desarrolló productos de servidor de nivel comercial para acompañar sus productos de computadora personal, proporcionando así una solución comercial completa. Y ahora, dice el dicho: “Nadie fue despedido por comprar Microsoft”.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 #[i software] de la aplicación
    .row.justify-content-end.bg-c9.mb-5
      .col-lg-6.bg-c10.shadow-sm.p-5.my-4(data-aos="fade-right")
        p.mb-0 Este #[i software] permite al usuario lograr algún objetivo o propósito. Por ejemplo, si tiene que escribir un artículo, puede usar el programa de #[i software] de aplicación Microsoft Word. Si quieres escuchar música, puedes usar iTunes. Para navegar por la web, puedes usar Internet Explorer o Firefox. Incluso un juego de computadora podría considerarse #[i software] de aplicación.
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .row.align-items-center
          .col-xl-7.bg-c5.p-4
            p.text-white.mb-0 Sabía que una aplicación “asesina” es aquella que se vuelve tan esencial que un gran número de personas comprará un dispositivo solo para ejecutar esa aplicación. Para la computadora personal, la aplicación asesina fue la hoja de cálculo. En 1979, se presentó VisiCalc, el primer paquete de hoja de cálculo para computadora personal. Fue un éxito e impulsó las ventas del Apple II. También solidificó el valor de la computadora personal más allá del círculo relativamente pequeño de fanáticos de la tecnología. Cuando se lanzó la PC de IBM, otro programa de hoja de cálculo, Lotus 1-2-3, fue la aplicación definitiva para los usuarios comerciales.
          .col-xl-auto
            figure.fig-p1
              img(src='@/assets/curso/tema1/img17.svg', style="width: 50px", alt='').m-auto
          .col-xl-4 
            figure
              img(src='@/assets/curso/tema1/img16.svg', style="width: 380px", alt='').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 #[i software] de productividad
    p.mb-5(data-aos="fade-right") Junto con la hoja de cálculo, varias otras aplicaciones de #[i software] se han convertido en herramientas estándar para el lugar de trabajo. Estas aplicaciones, denominadas #[i software] de productividad, permiten a los empleados de oficina completar su trabajo diario. Muchas veces, estas aplicaciones vienen empaquetadas juntas, como en el paquete Office de Microsoft. Aquí hay una lista de estas aplicaciones y sus funciones básicas:
    TabsB.color-acento-contenido.mb-5(data-aos="fade-left")
      .py-4.py-md-5(titulo="Procesamiento de textos" :icono="require('@/assets/curso/tema1/img18.svg')")
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img12.png', style="width: 180px", alt='').m-auto
          .col-lg-8
            p.mb-0 Esta clase de #[i software] permite la creación de documentos escritos. Las funciones incluyen la capacidad de escribir y editar texto, formatear fuentes y párrafos, y agregar, mover y eliminar texto en todo el documento. La mayoría de los programas de procesamiento de texto modernos también tienen la capacidad de agregar tablas, imágenes y varias funciones de diseño y formato al documento. Los procesadores de texto guardan sus documentos como archivos electrónicos en una variedad de formatos. Con diferencia, el paquete de procesamiento de textos más popular es Microsoft Word, que guarda sus archivos en formato DOCX. Este formato puede ser leído/escrito por muchos otros paquetes de procesadores de texto.
      .py-4.py-md-5(titulo="Hoja de cálculo" :icono="require('@/assets/curso/tema1/img19.svg')")
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img23.svg', style="width: 220px", alt='').m-auto
          .col-lg-8
            p.mb-0 Esta clase de #[i software] proporciona una forma de realizar cálculos y análisis numéricos. El área de trabajo se divide en filas y columnas, donde los usuarios pueden ingresar números, texto o fórmulas. Son las fórmulas las que hacen que una hoja de cálculo sea poderosa, lo que permite al usuario desarrollar cálculos complejos que pueden cambiar según los números ingresados. La mayoría de las hojas de cálculo también incluyen la capacidad de crear gráficos basados en los datos ingresados. El paquete de hojas de cálculo más popular es Microsoft Excel, que guarda sus archivos en formato XLSX. Al igual que con los procesadores de texto, muchos otros paquetes de hojas de cálculo pueden leer y escribir en este formato de archivo.
      .py-4.py-md-5(titulo="Presentación" :icono="require('@/assets/curso/tema1/img20.svg')")
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img24.svg', style="width: 270px", alt='').m-auto
          .col-lg-8
            p.mb-0 Esta clase de #[i software] proporciona la creación de presentaciones de diapositivas. Remontándose a los días de los retroproyectores y las transparencias, el #[i software] de presentación permite a sus usuarios crear un conjunto de diapositivas que se pueden imprimir o proyectar en una pantalla. Los usuarios pueden agregar texto, imágenes y otros elementos multimedia a las diapositivas. PowerPoint de Microsoft es el #[i software] más popular en este momento, guardando sus archivos en formato PPTX.
      .py-4.py-md-5(titulo="Suites ofimáticas" :icono="require('@/assets/curso/tema1/img21.svg')")
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img25.svg', style="width: 220px", alt='').m-auto
          .col-lg-8
            p.mb-0 Algunas suites ofimáticas incluyen otros tipos de #[i software]. Por ejemplo, Microsoft Office incluye Outlook, su paquete de correo electrónico y OneNote, una herramienta de colaboración para recopilar información. La versión profesional de Office también incluye Microsoft Access, un paquete de base de datos.
    p.mb-5(data-aos="fade-right") Microsoft popularizó la idea del paquete de productividad de #[i software] de oficina con el lanzamiento de Microsoft Office.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img26.svg', style="width: 500px", alt='').m-auto
      .col-lg-6(data-aos="fade-left")
        p Este paquete continúa dominando el mercado y la mayoría de las empresas esperan que los empleados sepan cómo usar este #[i software]. Sin embargo, existen muchos competidores de Microsoft Office y son compatibles con los formatos de archivo utilizados por Microsoft. Recientemente, Microsoft ha comenzado a ofrecer una versión web de su paquete de Office.
        .cajon.color-acento-botones.p-4
          p.mb-0 Similar a Google Drive, esta suite permite a los usuarios editar y compartir documentos en línea utilizando tecnología de computación en la nube.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 #[i software] de utilidad y #[i software] de programación
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dos subcategorías de #[i software] de aplicación que vale la pena mencionar son el #[i software] de utilidad y el #[i software] de programación, revise a continuación como se define cada uno de ellos.
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-xl.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img14.png", alt="alt")
          .crd_hover_txt--body
            p.text-center #[b #[i software] de Utilidad]
            p.text-center.mb-0 Permite reparar o modificar una computadora, por ejemplo, los #[i software] antivirus y #[i software] de desfragmentación de disco. Permiten llenar las deficiencias de los sistemas operativos
      .col-xl.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img15.png", alt="alt")
          .crd_hover_txt--body1
            p.text-center.text-white #[b #[i software] de programación]
            p.text-center.text-white.mb-0 Su propósito es hacer más #[i software]. La mayoría de estos programas brindan a los programadores un entorno en el que pueden escribir el código, probarlo y convertirlo al formato que luego se puede ejecutar en una computadora.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 PowerPoint como herramienta
    p(data-aos="fade-right") Este #[i software] de presentación ha ganado aceptación como el método principal para presentar información formalmente en un entorno empresarial, el arte de dar una presentación atractiva se está volviendo raro. Muchos presentadores ahora solo leen las viñetas en la presentación e inmediatamente aburren a los asistentes, quienes ya pueden leerlo por sí mismos.
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p El problema real no es tanto con PowerPoint como con la persona que crea y presenta, el #[i software] utilizado para ayudarlo a comunicarse no debe duplicar la presentación que desea dar, sino que debe respaldarla.
        .cajon.color-acento-botones.p-4
          p.mb-0 Los desarrolladores de #[i software] tienen claro este problema, por ende, se están desarrollando nuevas tecnologías de presentación digital. Una nueva e innovadora aplicación de presentación es Prezi la cual es una herramienta de presentación que permite a los presentadores colocar texto, imágenes y otros medios en un lienzo y luego navegar entre estos objetos a medida que presentan. Al igual que con PowerPoint, Prezi debe usarse para complementar la presentación, se debe recordar que a veces las mejores presentaciones se hacen sin herramientas digitales.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img16.png', style="width: 450px", alt='').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Barra lateral: Soy dueño de este #[i software], ¿verdad? Bueno
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando compra #[i software] y lo instala en su computadora, ¿es usted el propietario de ese #[i software]? ¡Técnicamente, no! Cuando se instala #[i software], en realidad solo se le otorga una licencia para usarlo. Cuando se instala por primera vez un paquete de #[i software], se le pide que acepte los términos de servicio o el acuerdo de licencia. En ese acuerdo, encontrará que sus derechos de uso del #[i software] están limitados. Por ejemplo, en los términos de la licencia del #[i software] Microsoft Office Excel 2010, encontrará la siguiente declaración: “Este #[i software] tiene licencia, no se vende. Este acuerdo solo le otorga algunos derechos para usar las funciones incluidas en la edición de #[i software] que obtuvo con licencia”.
    .row.bg-c11.mb-5
      .col-lg-6.bg-c10.shadow-sm.p-5.my-4(data-aos="fade-right")
        p.mb-0 En su mayor parte, estas restricciones son lo que esperaría: no puede hacer copias ilegales del #[i software] y no puede usarlo para hacer nada ilegal. Sin embargo, existen otros términos más inesperados en estos acuerdos de #[i software]. Por ejemplo, muchos acuerdos de #[i software] le piden que acepte un límite de responsabilidad. Nuevamente, de Microsoft: Limitación y exclusión de daños. Puede recuperar de Microsoft y sus proveedores solo los daños directos hasta el monto que pagó por el #[i software]. No puede recuperar ningún otro daño, incluidos daños consecuentes, pérdida de ganancias, daños especiales, indirectos o incidentales. Lo que esto significa es que, si un problema con el #[i software] causa daño a su empresa, no puede responsabilizar a Microsoft ni al proveedor por los daños.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Aplicaciones para la Empresa
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img27.svg', style="width: 350px", alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        .cajon.color-primario.p-4
          p.mb-0 A medida que la computadora personal proliferaba dentro de las organizaciones, el control sobre la información generada por la organización comenzó a fragmentarse. Digamos que el departamento de servicio al cliente crea una base de datos de clientes para realizar un seguimiento de las llamadas y los informes de problemas, y el departamento de ventas también crea una base de datos para realizar un seguimiento de la información del cliente. ¿Cuál debe utilizarse como lista maestra de clientes? Como otro ejemplo, alguien en ventas podría crear una hoja de cálculo para calcular los ingresos por ventas, mientras que alguien en finanzas crea una diferente que satisfaga las necesidades de su departamento. Sin embargo, es probable que las dos hojas de cálculo presenten diferentes totales de ingresos. ¿Cuál es el correcto? ¿Y quién gestiona toda esta información?
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Planificación de recursos empresariales
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 En la década de 1990, se hizo más evidente la necesidad de volver a poner la información de la organización bajo un control centralizado. El sistema de planificación de recursos empresariales (ERP) (a veces llamado simplemente #[i software] empresarial) se desarrolló para reunir a toda una organización en una aplicación de #[i software]. En pocas palabras, un sistema ERP es una aplicación de #[i software] que utiliza una base de datos central que se implementa en toda la organización. Echemos un vistazo más de cerca a esta definición:
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img19.png', style="width: 550px", alt='').m-auto
    .row.bg-c12
      .col-12
        .p-5
          .row.justify-content-center
            .col-lg-10(data-aos="fade-down")
              PasosA.color-acento-contenido.mb-5(tipo="n")
                .row.align-items-center
                  .col.mb-4.mb-lg-0
                    p Un ERP es una aplicación que utilizan muchos de los empleados de una organización. “utilizando una base de datos central”: Todos los usuarios del ERP editan y guardan su información de la fuente de datos. Lo que esto significa en la práctica es que solo hay una base de datos de clientes, solo hay un cálculo de ingresos, etc.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img28.svg', style="width: 170px", alt='').m-auto
                .row.align-items-center
                  .col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img29.svg', style="width: 170px", alt='').m-auto
                  .col
                    p.txt-c2 Los sistemas ERP incluyen una funcionalidad que cubre todos los componentes esenciales de un negocio. Además, una organización puede adquirir módulos para su sistema ERP que satisfagan necesidades específicas, como la fabricación o la planificación.
                .row.align-items-center
                  .col.mb-4.mb-lg-0
                    p Los sistemas ERP se comercializaron originalmente para grandes corporaciones. Sin embargo, a medida que más y más empresas grandes comenzaron a instalarlos, los proveedores de ERP comenzaron a apuntar a empresas medianas e incluso más pequeñas. Algunos de los sistemas ERP más conocidos incluyen los de SAP, Oracle y Microsoft.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img30.svg', style="width: 170px", alt='').m-auto
                .row.align-items-center
                  .col-lg-auto.mb-4.mb-lg-0
                    figure
                      img(src='@/assets/curso/tema1/img31.svg', style="width: 170px", alt='').m-auto
                  .col
                    p.txt-c2 Para implementar efectivamente un sistema ERP, la organización debe estar lista para comprometerse por completo, pues todos los aspectos de la organización se ven afectados ya que los sistemas antiguos son reemplazados por el sistema ERP. En general, implementar un sistema ERP puede llevar de dos a tres años y varios millones de dólares. En la mayoría de los casos, el costo del #[i software] no es la parte más cara de la implementación: ¡es el costo de los consultores!
                .row.align-items-center
                  .col.mb-4.mb-lg-0
                    p Un sistema ERP puede brindarle a una organización un buen retorno de su inversión. Al consolidar los sistemas de información en toda la empresa y usar el #[i software] para hacer cumplir las mejores prácticas, la mayoría de las organizaciones ven una mejora general después de implementar un ERP.
                  .col-lg-auto
                    figure
                      img(src='@/assets/curso/tema1/img32.svg', style="width: 170px", alt='').m-auto
    .row.justify-content-center.mb-5
      .col-auto.bg-c13.fig-p3(data-aos="fade-right")
        .p-3
          p.fs-4.text-center.mb-0 #[b Gestión de la relación con el cliente ]
      .col-lg-10.bg-c14(data-aos="fade-left")
        .row.justify-content-center
          .col-auto
            figure.fig-p4
              img(src='@/assets/curso/tema1/img34.svg', style="width: 550px", alt='').m-auto
      .col-lg-8.bg-c15(data-aos="fade-down")
        .p-4
          p.mb-0.mt-4 Un sistema de gestión de relaciones con los clientes (CRM) es una aplicación de software diseñada para gestionar los clientes de una organización. En el entorno actual, es importante desarrollar relaciones con sus clientes, y el uso de un CRM bien diseñado puede permitir que una empresa personalice su relación con cada uno de sus clientes. Algunos sistemas de software ERP incluyen módulos CRM. Un ejemplo de un paquete de CRM muy conocido es <i>Salesforce</i>.

    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Gestión de la cadena de suministro

    p.mb-5 Muchas organizaciones deben afrontar la compleja tarea de gestionar sus cadenas de suministro, aclaremos un poco dicho termino:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-xl-4 
            figure
              img(src='@/assets/curso/tema1/img34-2.svg', style="width: 380px", alt='').m-auto
          .col-xl-auto
            figure.fig-p2
              img(src='@/assets/curso/tema1/img6.svg', style="width: 50px", alt='').m-auto
          .col-md-8.col-xl-7.bg-c5.p-5
            p.text-white.mb-0 Es el proceso que da entre diferentes eslabones de en un proceso de producción, proveedores instalaciones de fabricación, distribuidores de los productos, los cuales trabajan en pro de garantizar la satisfacción del cliente.


    .cajon.color-primario.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Un sistema de gestión de la cadena de suministro (SCM) gestiona la interconexión entre estos eslabones, así como el inventario de los productos en sus distintas etapas de desarrollo.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Aplicaciones móviles
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img35.svg', style="width: 170px", alt='').m-auto
      .col-lg-9(data-aos="fade-left")
        .cajon.color-acento-contenido.p-4
          p.mb-0 Al igual que la computadora personal, los dispositivos móviles como tabletas y teléfonos inteligentes también tienen sistemas operativos y #[i software] de aplicación. De hecho, estos dispositivos móviles son, en muchos sentidos, solo versiones más pequeñas de computadoras personales. Una aplicación móvil es una aplicación de #[i software] programada para ejecutarse específicamente en un dispositivo móvil.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Sabía que, actualmente, la mayoría de los dispositivos móviles funcionan con uno de dos sistemas operativos, Android o iOS. Android es un sistema operativo de código abierto comprado y respaldado por Google; iOS es el sistema operativo móvil de Apple. En el cuarto trimestre de 2012, Android se instaló en el 70,1 % de todos los teléfonos móviles enviados, seguido del 21,0 % para iOS. Otros sistemas operativos móviles a destacar son BlackBerry (3,2%) y Windows (2,6%).
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Computación en la nube
    p(data-aos="fade-right") Históricamente, para que un #[i software] funcionara se tenía que instalar una copia individual de este en la computadora, sin embargo, el concepto de computación en la “nube” cambia todo, “la nube” hace referencia a aplicaciones, servicios y almacenamiento de datos que están conectados a través de protocolos de Internet. La computación en la nube es el uso de estos servicios por parte de individuos y organizaciones.
    .row.align-items-start.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img36.svg', style="width: 250px", alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Si se accede al correo electrónico a través de un navegador web, se está utilizando una forma de computación en la nube. Si se utilizan las aplicaciones de Google Drive, se está utilizando la computación en la nube. Si bien estas son versiones gratuitas de computación en la nube, existe un gran negocio al proporcionar aplicaciones y almacenamiento de datos a través de la web.
    p.text-center.mb-5(data-aos="fade-right") #[b A continuación, se describen algunas ventajas y desventajas de la computación en la nube:]
    figure.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/tema1/img37.svg', style="width: 1150px", alt='').m-auto
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img21.png', style="width: 400px", alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        .row.mb-4
          .col-auto.px-4.py-3.bg-c3
            h3.mb-0 Uso de una nube privada
        p.mb-5 Es comprensible que muchas organizaciones estén nerviosas por ceder el control de sus datos y algunas de sus aplicaciones mediante el uso de la computación en la nube. Una solución a este problema radica en el concepto de nube privada en la cual proveedor de servicios en la nube brinda un espacio del servidor web para que determinada organización tenga gran control sobre ese espacio del servidor.
        .row.mb-4
          .col-auto.px-4.py-3.bg-c3
            h3.mb-0 Virtualización
        p.mb-0 La virtualización es el proceso de usar #[i software] para simular una computadora o algún otro dispositivo. Por ejemplo, usando la virtualización, una sola computadora puede realizar las funciones de varias computadoras. Empresas como EMC proporcionan #[i software] de virtualización que permite a los proveedores de servicios en la nube proporcionar servidores web a sus clientes de manera rápida y eficiente. Las organizaciones también están implementando la virtualización para reducir la cantidad de servidores necesarios para brindar sus servicios.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Creación de #[i software]
    p(data-aos="fade-down") ¿Cómo se crea el #[i software]? Si el #[i software] es el conjunto de instrucciones que le dice al #[i hardware] qué hacer, ¿cómo se escriben estas instrucciones? Si una computadora lee todo como unos y ceros, ¿tenemos que aprender a escribir #[i software] de esa manera?
    .row.align-items-center.mb-0.mb-lg-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-3
          p.mb-0 Las aplicaciones de #[i software] modernas se escriben utilizando un lenguaje de programación el cual consta de un conjunto de comandos que se pueden organizar lógicamente para ejecutar funciones específicas.
        p.mb-0 Este lenguaje generalmente consiste en un conjunto de palabras legibles combinadas con símbolos. Con este lenguaje, un programador escribe un programa (llamado código fuente) que luego se puede compilar en un formato legible por máquina, los unos y los ceros necesarios para que la CPU los ejecute. Los ejemplos de lenguajes de programación conocidos en la actualidad incluyen Java, PHP y varias versiones de C (Visual C, C++, C#). Se utilizan lenguajes como HTML y JavaScript para desarrollar páginas web. La mayoría de las veces, la programación se realiza dentro de un entorno de programación; cuando compra una copia de Visual Studio de Microsoft, le proporciona un editor, compilador.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img22.png', style="width: 400px", alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-xl-4 
            figure
              img(src='@/assets/curso/tema1/img38.svg', style="width: 380px", alt='').m-auto
          .col-xl-auto
            figure.fig-p2
              img(src='@/assets/curso/tema1/img6.svg', style="width: 50px", alt='').m-auto
          .col-md-8.col-xl-7.bg-c5.p-4
            p.text-white.mb-0 La programación de #[i software] era originalmente un proceso individual, con cada programador trabajando en un programa completo, o varios programadores trabajando cada uno en una parte de un programa más grande. Sin embargo, los métodos más nuevos de desarrollo de #[i software] incluyen un enfoque más colaborativo, con equipos de programadores que trabajan juntos en el código.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 #[i software] de código abierto
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando se lanzó por primera vez la computadora personal, no cubría ninguna necesidad práctica. Las primeras computadoras eran difíciles de programar y requerían una gran atención a los detalles. Sin embargo, muchos entusiastas de las computadoras personales se unieron de inmediato para crear y compartir aplicaciones para resolver problemas.
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-3
          p.mb-0 Sin embargo, a medida que el #[i software] comenzó a convertirse en un negocio, esta idea de compartir todo cayó en desgracia, al menos entre algunos. Cuando un programa de #[i software] requiere cientos de horas de trabajo para desarrollarse, es comprensible que los programadores no quieran simplemente regalarlo. Esto condujo a un nuevo modelo comercial de licencias de #[i software] restrictivas, que requería el pago por el #[i software], un modelo que todavía es dominante en la actualidad. Este modelo a veces se denomina fuente cerrada, ya que el código fuente no está disponible para otros.
        p.mb-0 Sin embargo, hay muchos que sienten que el #[i software] no debería estar restringido. Al igual que aquellos primeros aficionados en la década de 1970, sienten que la innovación y el progreso pueden lograrse mucho más rápidamente si compartimos lo que aprendemos. En la década de 1990, con el acceso a Internet conectando a más y más personas, el movimiento de código abierto cobró fuerza.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img24.png', style="width: 380px", alt='').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Pero ¿Qué es el #[i software] de código abierto?
    p.mb-5(data-aos="fade-right") Es un #[i software] que hace que el código fuente esté disponible para que cualquiera pueda copiarlo y usarlo. Este puede estar disponible en un formato compilado que simplemente se puede descargar e instalar
    figure.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/tema1/img25.png', style="width: 1150px", alt='').m-auto
    p.mb-5(data-aos="fade-right") El movimiento de código abierto ha llevado al desarrollo del #[i software] más utilizado en el mundo, incluido el navegador Firefox, el sistema operativo Linux y el servidor web Apache.
    .row
      .col-lg.m-2(data-aos="fade-right")
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema1/img26.png', style="width: 650px", alt='').m-auto
        .row
          .col.bg-c16
            .p-4
              p.text-white #[b Algunos beneficios del modelo de código abierto son:]
              ul.lista-ul--color.lista-ul--separador
                li.d-flex
                  i.fas.fa-check-circle
                  |
                  p.text-white.mb-0 El #[i software] está disponible de forma gratuita.
                li.d-flex
                  i.fas.fa-check-circle
                  |
                  p.text-white.mb-0 El código fuente del #[i software] está disponible; se puede examinar y revisar antes de instalarlo.
                li.d-flex
                  i.fas.fa-check-circle
                  |
                  p.text-white.mb-0 La gran comunidad de programadores que trabajan en proyectos de código abierto conduce a una rápida corrección de errores y adiciones de funciones.
      .col-lg.m-2(data-aos="fade-left")
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema1/img27.png', style="width: 650px", alt='').m-auto
        .row
          .col.bg-c17
            .p-4
              p #[b Algunos beneficios del modelo de código cerrado son:]
              ul.lista-ul--color2.lista-ul--separador
                li.d-flex
                  i.fas.fa-check-circle
                  |
                  p.mb-0 Al proporcionar un incentivo financiero para el desarrollo de #[i software], algunas de las mentes más brillantes han elegido el desarrollo de #[i software] como carrera.
                li.d-flex
                  i.fas.fa-check-circle
                  |
                  p.mb-0 Soporte técnico de la empresa que desarrolló el #[i software].
    Separador
    #t_1_2
    .titulo-segundo.color-acento-botones
      h2 1.2 Funcionalidades de los dispositivos informáticos
    .row.bg-c1
      .col-12
        .px-5
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema1/img28.png', style="width: 1200px", alt='').m-auto
          .row.justify-content-center.mb-5(data-aos="fade-down")
            .col-lg-10.bg-c2.shadow-sm.p-4
              p.mb-0 Casi todas las empresas utilizan computadoras para llevar a cabo sus funciones. Desde la generación de informes hasta la comunicación con los clientes, las computadoras hacen mucho por la eficiencia con la que se ejecuta un negocio.
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/tema1/img29.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Existen varios tipos de computadoras para computadoras portátiles, PC, servidores e incluso teléfonos inteligentes. Gracias a las computadoras, conceptos como los horarios de trabajo flexibles y las fuerzas de trabajo remotas se han vuelto posibles, lo que permite a los empleados trabajar desde donde quieran y en el momento que deseen.
                br
                br
                | Revise a continuación las diversas funcionalidades que presentan las computadoras:
    .row.mb-5
      .col-12.bg-c18
        .px-4.py-5
          .row
            .col-12.bg-c19
              .p-4
                SlyderE(indicadores="derecha")
                  .row
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Para la comunicación]
                      p Cuando se trata de establecer contacto con los clientes, las computadoras son una herramienta vital; también son fundamentales a la hora de mantener ese contacto. Este proceso de comunicación se da a través de correo electrónico, mensajería instantánea, Skype, #[i software] de colaboración, entre otras. 
                      p.mb-0 Además, una empresa necesita comunicarse con sus empleados, y las computadoras juegan un papel importante. En lugar de tener reuniones individuales, se puede enviar un correo electrónico o un mensaje en cualquier otra plataforma de comunicación aceptable. Esto ahorra tiempo y también mejora la comunicación interna de la empresa.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema1/img40.svg', style="width: 450px", alt='').m-auto
                  .row
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Para la comercialización]
                      p Las computadoras permiten que una empresa pueda posicionarse, el equipo de desarrolladores de TI de una empresa puede crear un sitio web profesional completo con gráficos atractivos y contenido como texto, imágenes y videos. Pueden hacer optimización de motor de búsqueda (SEO) que le permita ser reconocida por el público objetivo.
                      p.mb-0 Con una computadora, una empresa puede crear, ejecutar o adquirir campañas de marketing completas que abarcan todas las plataformas de redes sociales en Internet, ¡La computadora es probablemente el mejor dispositivo de marketing jamás construido!
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema1/img41.svg', style="width: 450px", alt='').m-auto
                  .row
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Para la contabilidad]
                      p La contabilidad es una función en la que la precisión es de suma importancia. Cuando realiza funciones contables, y no tiene nada más que lápiz y papel, y confía únicamente en el poder del cerebro, se expone a errores. El #[i software] de contabilidad ayuda a evitar que eso suceda, pues este permite que una empresa obtenga de forma rápida y precisa imágenes a gran y pequeña escala de la situación financiera de la empresa.
                      p.mb-0  Las computadoras también son fundamentales para tareas como facturar a los clientes; mantenimiento de datos sobre deudores y acreedores; cálculo de nómina, cálculo y presentación de formularios de impuestos, así como para muchas otras funciones.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema1/img42.svg', style="width: 450px", alt='').m-auto
                  .row
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Para el almacenamiento]
                      p.mb-0 Las empresas pueden almacenar y clasificar millones de archivos con computadoras y servidores, lo que les permite acceder a ellos en cualquier momento. Pueden optar por almacenar los datos de diferentes maneras: centralizados, permitiendo a otras computadoras en la red acceder a ellos con permisos adecuados, o localmente en computadoras individuales. El almacenamiento digital ofrece mayor capacidad y eficiencia que el almacenamiento físico, gracias a la clasificación de archivos. Además, proporciona mayor seguridad al ser más difícil perder archivos en bases de datos bien protegidas.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema1/img43.svg', style="width: 450px", alt='').m-auto
                  .row
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Para producir documentos]
                      p La mayoría de las empresas necesitan manejar gran cantidad de documentos. Las computadoras proporcionan procesadores de texto y #[i software] de hoja de cálculo para ayudar con esto. Con aplicaciones de hojas de cálculo, una empresa tiene el poder de manipular datos alfanuméricos y organizarlos en tablas, gráficos e informes. Otro tipo de #[i software] que utilizan las empresas es el #[i software] de presentación con el que pueden apoyar sus exposiciones. 
                      p.mb-0 En general, una computadora tiene muchos #[i software]s utilizados para facilitar las funciones de la empresa, haciéndola más rápida y eficiente de lo que era hace 20 o 30 años.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema1/img44.svg', style="width: 450px", alt='').m-auto
                  .row
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Con fines educativos]
                      p.mb-0 Una empresa puede usar una computadora para educar a los empleados sobre cosas como la política de la empresa, el uso del #[i software], así como los procedimientos estándar y la seguridad. En lugar de contratar maestros para enseñar a sus empleados, una empresa puede permitir que los empleados aprendan lo que necesitan, aprendiendo a su propio ritmo a través de seminarios web y sesiones de preguntas y respuestas en vivo. Con Internet, se tiene la posibilidad de acceder a un mundo de información a través de diferentes medios, como videos, texto e incluso juegos, lo que les permite comprender mejor el tema.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema1/img45.svg', style="width: 450px", alt='').m-auto
                  .row
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Para la investigación empresarial]
                      p.mb-0 Las computadoras permiten que una empresa haga una variedad de cosas, incluida la investigación sobre la competencia, así como sobre lo que quieren los clientes. Con técnicas modernas de minería de datos, una empresa puede adquirir información importante para la toma de decisiones, incluidos foros, motores de búsqueda, sitios web específicos de la industria e incluso de las redes sociales.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema1/img46.svg', style="width: 450px", alt='').m-auto
                  .row
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Para hacer negocios]
                      p.mb-0 La tecnología cambia la definición de la frase "hacer negocios". Con las computadoras, puede producir más documentos de los que una máquina de escribir y un mimeógrafo podrían producir. Las computadoras simplifican las transacciones comerciales y permiten que los productos y servicios se vendan en todo el mundo En una oficina totalmente equipada con una red informática, tiene la capacidad de comunicarse a través de la intranet de la empresa, así como a través de Internet. Una intranet es extremadamente valiosa; puede manejar información delicada o confidencial dentro de los límites de la red de su empresa sin preocuparse de que usuarios no autorizados accedan a la red privada de su organización. Las computadoras también son necesarias para las organizaciones con empleados que trabajan a distancia o están ubicados de forma remota.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema1/img47.svg', style="width: 450px", alt='').m-auto
                  .row
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Para Recursos Humanos]
                      p Los sistemas de información de recursos humanos, llamados HRIS, son extremadamente populares, permiten un procesamiento eficiente de solicitudes. En su serie de libros blancos E-HR: La revolución tecnológica en recursos humanos: definición y beneficios, Right Team Inc. señala: "Un sistema de recursos humanos de última generación proporciona los datos, las herramientas y la tecnología subyacentes para administrar y ejecutar actividades de recursos humanos en un entorno integrado”.
                      p.mb-0 Los sistemas HRIS recopilan datos para informes, directos, oficiales, federales, estatales y locales, como formularios de igualdad de oportunidades de empleo que algunas empresas deben enviar a las agencias gubernamentales. Los sistemas HRIS también clasifican los datos de empleo, procesan nómina, calculan beneficios de los empleados, realizan auditorías de recursos humanos, analizan tasas de rotación y recopilan las respuestas de los empleados a las encuestas de opinión y las entrevistas de salida.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema1/img48.svg', style="width: 450px", alt='').m-auto
                  .row
                    .col-lg-8.mb-4.mb-lg-0
                      p.txt-c1.fs-5 #[b Para expandir el alcance comercial]
                      p La globalización es una forma moderna de describir hasta qué punto una empresa puede llegar a sus clientes o cómo una organización puede producir materiales o artículos para usuarios finales de cualquier parte del mundo. Las computadoras le permiten comercializar los productos y servicios de su empresa en un área geográfica local o en clientes de todo el mundo. Como dice Ghana Web, "La introducción de las computadoras e Internet ha reducido el mundo a una aldea global donde los individuos, las empresas y los países pueden intercambiar bienes y servicios".
                      p.mb-0 Sin el beneficio de las computadoras en el lugar de trabajo, seleccionar datos demográficos para identificar y acercarse a su mercado consumiría una enorme cantidad de tiempo y energía del personal. Las computadoras proporcionan funciones rentables para la producción, las ventas y el envío.
                    .col-lg-4
                      figure
                        img(src='@/assets/curso/tema1/img49.svg', style="width: 450px", alt='').m-auto
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Funciones TI en una organización
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Con las computadoras y las redes informáticas, las personas han podido lograr en el lapso de unas pocas décadas lo que de otro modo nos hubiera llevado muchos siglos lograr. La gente ha democratizado Internet, ha mejorado enormemente la comunicación, ha aumentado la capacidad de diseñar e inventar por múltiples y ha hecho la vida más fácil en general. Ahora las personas llevan pequeños dispositivos informáticos en sus bolsillos que brindan asistencia en casi todos los aspectos de la vida, ya sea para despertarlos por la mañana, recordarles eventos importantes o ayudarnos a pensar y aprender nueva información.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img30.png', style="width: 450px", alt='').m-auto
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-xl-4 
            figure
              img(src='@/assets/curso/tema1/img50.svg', style="width: 380px", alt='').m-auto
          .col-xl-auto
            figure.fig-p2
              img(src='@/assets/curso/tema1/img6.svg', style="width: 50px", alt='').m-auto
          .col-md-8.col-xl-7.bg-c5.p-4
            p.text-white.mb-0 Se puede decir que los pequeños dispositivos informáticos que la gente lleva consigo se han convertido de alguna manera en parte de nosotros. Se han convertido en órganos adicionales en nuestros cuerpos, como brazos o piernas. Tal vez podamos pensar en ellos como una especie de mejora en nuestro cerebro, permitiéndonos lograr cosas que antes nunca imaginamos posibles. De la misma manera, TI se ha convertido en un órgano adicional en el cuerpo de cualquier negocio, lo que le permite lograr cosas mucho más grandes de lo que podría sin la ayuda de TI.
    p.mb-5(data-aos="fade-down") El departamento de TI es un departamento importante dentro de una organización, que complementa a los demás de muchas maneras, en el siguiente documento, se presenta sus funciones más importantes:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img51.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white.mb-0 #[b Anexo]. Funciones departamento TI en una organización.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/funciones_TI_en_una_organizacion.pdf')" target="_blank")
                    span(style="color:#000 !important") Descargar
                    i.fas.fa-file-download(style="color:#000 !important")
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Tecnología de la información y sus usos en la gestión empresarial
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-3
          p.mb-0 Con más innovación en tecnología, se crean nuevos negocios, con más negocios, la tecnología viene al rescate facilitando las cosas. Los dos existen en una especie de relación simbiótica que asegura que siempre coexistirán. El negocio ha existido desde tiempos prehistóricos. Puede haber comenzado con nada más que el comercio de trueque, si hay que creer en los libros de historia, pero desde entonces se ha transformado en algo mucho más complejo, y nada de eso habría sido posible sin la tecnología.
        p Las principales industrias del mundo colapsarían si la existencia y el uso de la tecnología de la información fueran arrebatados repentinamente a las empresas. Esto se debe a que la mayoría de las transacciones y operaciones comerciales no se pueden realizar en el siglo XXI sin tecnología. 
        p.mb-0 Revise puntualmente la función de la tecnología en las organizaciones:
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img31.png', style="width: 450px", alt='').m-auto
    .row.bg-c12
      .col-12(data-aos="fade-down")
        .p-5
          ImagenInfografica.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img52.svg', alt='')
            .tarjeta.color-acento-contenido.p-3(x="13%" y="45%" numero="+")
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  p.mb-0 Con los años, debido a la tecnología, se revolucionaron muchos modelos comerciales tradicionales. La tecnología abrió la oportunidad de ver las cosas desde una nueva perspectiva pues ha permitido una mayor eficiencia a la hora de  hacer negocios y el uso de las TIC ha influenciado los procesos de gestión, los sistemas de contabilidad y otros aspectos complejos de las actividades comerciales cotidianas.
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img53.svg', style="width: 80px", alt='').m-auto
            .tarjeta.color-acento-contenido.p-3(x="90%" y="30%" numero="+")
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  p.mb-0 La tecnología permite automatizar numerosos procesos, aumentando la productividad. La tecnología facilita el almacenamiento y garantiza la   integridad y confidencialidad de la información, gracias a ella una empresa puede almacenar sus datos de manera segura y tenerla a la mano en cualquier momento para tomar decisiones asertivas que la beneficien y la posicionan frente a la competencia.  
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img54.svg', style="width: 80px", alt='').m-auto
            .tarjeta.color-acento-contenido.p-3(x="60%" y="40%" numero="+")
              .row.align-items-center
                .col-lg.mb-4.mb-lg-0
                  p.mb-0 Con la tecnología, ha sido posible globalizar las operaciones comerciales, ahora, cualquier persona puede hacer negocios desde cualquier lugar, esto ha hecho posible que las empresas tengan un alcance más amplio en el mundo, el Internet es ahora una parte crucial de la campaña de marketing de cualquier empresa, ya que le permite atraer clientes en todo el mundo. Sin embargo, también existen amenazas para los negocios provocadas por la tecnología, estos incluyen actividades maliciosas como por ejemplo la piratería.
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img55.svg', style="width: 80px", alt='').m-auto
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img32.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Revolución Industrial cambió las cosas en el mundo de los negocios, haciendo que muchos procesos fueran más eficientes y aumentando la productividad cien veces. Sin embargo, el mundo de los negocios permaneció algo estancado durante un siglo después. Sin embargo, con la revolución tecnológica y el uso de la tecnología en los negocios, las cosas cambiaron de manera aún más disruptiva que durante la Revolución Industrial y sería seguro decir que las cosas nunca volverán a ser las mismas. La velocidad a la que la tecnología está evolucionando y adaptándose es exponencial hasta el punto en que todas las empresas están siendo barridas por la ola, ya sea que estén listas para ello o no. Puede parecer que no hemos progresado tanto, pero incluso hace solo 5 años, las redes sociales no tenían ningún consumismo, los teléfonos móviles no se usaban para los negocios, las soluciones basadas en la nube no existían.
    .row.align-items-center.mb-5
      .col-auto(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width: 30px", alt='').m-auto
      .col(data-aos="fade-left")
        p.mb-0 La tecnología ha cambiado todos los aspectos de los negocios de manera acelerada y esto nunca había sucedido en la historia. Para ser más específicos, aquí hay algunas formas en que la tecnología de la información ha afectado a los negocios:
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="El advenimiento de las soluciones móviles")
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img57.svg', style="width: 230px", alt='').m-auto
            .col-lg-7
              p.mb-0 La movilidad es fundamental para las empresas ahora los negocios pueden manejarse utilizando una tableta o un teléfono inteligente, desde allí pueden hacer marketing de contenido, establecer relaciones con los clientes, realizar ventas, manejar los aspectos administrativos etc., por su parte los consumidores usan sus teléfonos para comprar, vender y compartir experiencias.
          .row(titulo="El fenómeno de la computación en la nube")
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img58.svg', style="width: 230px", alt='').m-auto
            .col-lg-7
              p.mb-0 Ha hecho posible que las empresas subcontraten muchas de sus funciones a terceros a través de Internet, esto ha permitido que las empresas se expandan rápidamente y adopten la movilidad sin tener que preocuparse por cosas como bloqueos, tiempo de inactividad y pérdida de datos, la computación en la nube a permitido el manejo de información de forma eficiente y segura.
          .row(titulo="Mayor segmentación de clientes")
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img59.svg', style="width: 230px", alt='').m-auto
            .col-lg-7
              p.mb-0 Gracias al análisis de datos se puede obtener una visión más amplia de las necesidades de los clientes. Algo tan simple como tener una cuenta de Google permite a una empresa saber de dónde es un usuario, el tipo de navegador que está usando, qué hace en ese sitio web, sus requerimientos, etc.
          .row(titulo="Mayor conectividad")
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img60.svg', style="width: 230px", alt='').m-auto
            .col-lg-7
              p.mb-0 La tecnología ha facilitado que las personas se mantengan en contacto. Ya sea que esté buscando comunicarse con sus empleados y colegas a través de videochat o enviando correos electrónicos masivos a clientes potenciales, la tecnología móvil y la innovación constante que tiene lugar dentro del espacio han hecho posible que la comunicación adquiera un nuevo nivel de hiperrealismo.
          .row(titulo="Costos decrecientes y utilidad creciente")
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img61.svg', style="width: 230px", alt='').m-auto
            .col-lg-7
              p.mb-0 El "mercado de compradores" se ha hecho posible gracias a la asequibilidad del #[i hardware] y #[i software], y al aumento de empresarios expertos en tecnología. Las soluciones ofrecidas más fácilmente han facilitado el desarrollo del negocio sin grandes inversiones.
          .row(titulo="Mayor consideración por el impacto social de los negocios")
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img62.svg', style="width: 230px", alt='').m-auto
            .col-lg-7
              p.mb-0 Las redes sociales han hecho del mundo un lugar más pequeño donde los usuarios pueden conectarse sin importar quiénes son. Por ende, la empresa ahora debe hacer un esfuerzo adicional si no quiere calificaciones desfavorables en los sitios web. Por lo tanto, se debe tener cuidado con la reputación en línea y se debe trabajar en la huella digital.
          .row(titulo="El fin del tiempo de inactividad")
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/img63.svg', style="width: 230px", alt='').m-auto
            .col-lg-7
              p.mb-0 Esto es en realidad un efecto negativo de la tecnología. Con una mayor conectividad, las personas tienen cada vez menos tiempo para sí mismas. Las vacaciones parecen haberse convertido en algo del pasado, Siempre se puede acceder a los correos electrónicos, mensajes de texto y redes sociales a través de los teléfonos y computadoras, cada vez es más difícil desconectarse.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img56.svg', style="width: 430px", alt='').m-auto
    p.mb-5(data-aos="fade-right") Puede ser un poco difícil comprender la importancia de la tecnología de la información para una organización si no es un profesional de TI. Sin embargo, existen numerosas formas en las que la tecnología de la información es crucial para una organización, revíselas a continuación:
    .row.bg-c12.mb-5
      .col-12(data-aos="fade-right")
        .p-5
          ImagenInfografica.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img64.svg', alt='')
            .tarjeta.color-acento-botones.p-3(x="60%" y="20%" numero="+")
              .row
                .col-12
                  p.mb-0 Es importante que la educación pueda mantenerse al día con el progreso que ocurre en la tecnología, preparando a los estudiantes a prepararse para el futuro. Los estudiantes de nuestras aulas de hoy están destinados a implementar la innovación y la creatividad dentro de su diario vivir, por ende deben conocer y manejar todo tipo de dispositivos que le permitan construir conocimiento como   computadoras, teléfonos móviles y tabletas, deben reconocer uso de Internet como medio de aprendizaje.
            .tarjeta.color-acento-botones.p-3(x="80%" y="42%" numero="+")
              .row
                .col-12
                  p.mb-0 Con las mejoras en la tecnología de la información, cada vez es más fácil reformar el sector de la salud. Los consultorios médicos ahora pueden compartir información entre ellos y pueden obtener datos de salud de médicos anteriores. Esto hace posible que se brinde una atención oportuna, así como que se reduzcan los costos.
            .tarjeta.color-acento-botones.p-3(x="79%" y="73%" numero="+")
              .row
                .col-12
                  p.mb-0 Con un número cada vez mayor de transacciones que se realizan en línea, existe una necesidad cada vez mayor de seguridad. La tecnología de la información es lo que hace posible mantener los datos e información seguros y solo accesibles para el usuario Mediante el uso de encriptación y contraseñas, los datos digitales se ocultan de forma segura y solo aquellos que tienen permiso pueden acceder a ellos.
            .tarjeta.color-acento-botones.p-3(x="19%" y="73%" numero="+")
              .row
                .col-12
                  p.mb-0 El mundo de los negocios cambió para siempre cuando las computadoras entraron en escena. Las empresas pueden utilizar la tecnología de la información mediante el uso de computadoras y diferentes programas para ejecutar sus operaciones de una manera más fluida. Lo usan en diferentes departamentos, incluidos finanzas, fabricación, recursos humanos y seguridad.
            .tarjeta.color-acento-botones.p-3(x="19.3%" y="40%" numero="+")
              .row
                .col-12
                  p.mb-0 Con un número cada vez mayor de transacciones en línea, es importante que las instituciones financieras y de seguridad trabajen juntas para hacer de Internet un lugar seguro. A medida que se realicen más transacciones en Internet, se necesitarán más redes y mayor seguridad, lo que hará posible que los bancos mantengan seguras las compras y las ventas.
    p.mb-5(data-aos="fade-down") Como propietario de un negocio, probablemente se esté preguntando cómo puede utilizar la tecnología en su máximo potencial para su negocio, a continuación, algunos consejos:
    .row.bg-c20.mb-5
      .col-12(data-aos="fade-left")
        .p-5
          figure
            img(src='@/assets/curso/tema1/img66.svg', alt='').m-auto

    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Formas efectivas de comunicación organizacional

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img69.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las diferentes situaciones comerciales y las diferentes necesidades de los empleados exigen el uso de múltiples canales de comunicación para llevar los mensajes a casa de manera efectiva. Una comprensión de los beneficios de varios tipos de comunicación organizacional puede ayudar a los empresarios a comunicarse de manera más efectiva, revíselos a continuación:

    .tarjeta.tarjeta--azul2.mb-5(data-aos="fade-right")
      .p-4
        SlyderA(tipo="b")
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Cara a cara]
              p.mb-0 La tecnología nunca reemplazará el beneficio y el poder de la comunicación cara a cara. Cuando tenga dudas, o cuando una comunicación sea crítica y sea posible reunirse de manera presencial, hágalo. La conexión personal que se produce cuando dos o más personas pueden interactuar en tiempo real es significativa.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img33.png', style="width: 430px", alt='').m-auto
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Correo electrónico]
              p.mb-0 Este probablemente ha cambiado el entorno de comunicación organizacional de manera más significativa que cualquier otra introducción de tecnología en las últimas décadas, según Thinkquest. El correo electrónico es rápido, eficiente y permite un registro de la interacción. Pero, si bien el correo electrónico puede ser muy efectivo, los empresarios deben evitar usarlo en exceso. A veces, el diálogo directo con una persona es lo mejor.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img34.png', style="width: 430px", alt='').m-auto
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Teléfono]
              p.mb-0 Sigue siendo un pilar en cualquier entorno empresarial, aunque cada vez más de estos teléfonos se están convirtiendo en la variedad móvil. A veces, el correo electrónico funciona bien; a veces nada supera la conexión más personal que se puede lograr por teléfono, incluso con colegas a cientos o miles de millas de distancia.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img35.png', style="width: 430px", alt='').m-auto
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Reuniones del Ayuntamiento]
              p.mb-0 La oportunidad de reunir a un grupo de empleados en una sala para una reunión puede ser una forma muy efectiva de comunicación organizacional, según Lin Grensing-Pophal, autora de Employee Management for Small Business. Ofrece el poder de las conexiones interpersonales y brinda una oportunidad para que los empleados se escuchen y aprendan unos de otros.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img36.png', style="width: 430px", alt='').m-auto
          .row.align-items-center.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              p #[b Video conferencia]
              p.mb-0 Puede ser una excelente manera de comunicarse con los empleados, especialmente cuando están separados por la distancia. El Internet ha facilitado las comunicaciones comerciales y la grabación y el acercamiento a través de video. Se espera que el iPad tenga un impacto aún mayor en la facilidad de uso y la prevalencia del video en el entorno empresarial, según Steve Vonder Haar, director de investigación y fundador de Interactive Media Strategies.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema1/img37.png', style="width: 430px", alt='').m-auto
    p.mb-5(data-aos="fade-right") La tecnología ha alterado la vida moderna de muchas maneras, especialmente en el lugar de trabajo. La invención de las computadoras, la miniaturización de la electrónica y el desarrollo de la comunicación inalámbrica han alterado el mundo de los negocios. La comunicación empresarial, en particular, ha experimentado algunos de los mayores avances debido a:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img68.svg', style="width: 430px", alt='').m-auto
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Desarrollo teléfono celular")
            .col-12
              p.mb-0 Uno de los mayores avances en la comunicación ha sido el desarrollo del teléfono celular. En el pasado, su única oportunidad de comunicarse con los empleados era cuando estaban en sus escritorios, lo que provocaba interminables juegos de "etiquetas telefónicas" cuando las personas intentaban conectarse durante los días de trabajo ocupados. Ahora, se puede contactar a los trabajadores sin importar dónde se encuentren, e incluso fuera del horario laboral. El desarrollo de los teléfonos inteligentes también ha ampliado en gran medida los tipos de actividades comerciales que puede realizar cuando está fuera de la oficina, aumentando la productividad y extendiendo la jornada laboral.
          .row(titulo="Dispositivos de comunicación")
            .col-12
              p.mb-0 Por supuesto, los teléfonos no son los únicos dispositivos de comunicación de alta tecnología. Las computadoras vienen en una amplia variedad de configuraciones en estos días, incluidas tabletas, computadoras portátiles pequeñas pero potentes, dispositivos 2 en 1 que sirven como computadora portátil o tableta, y otras variaciones. Todos estos dispositivos tienen capacidades inalámbricas incorporadas y también se pueden configurar con comunicaciones móviles, lo que los convierte, en esencia, en teléfonos celulares grandes. Cualquiera que sea el dispositivo que lleve una persona de negocios, facilita las comunicaciones verbales, de texto y de imágenes.
          .row(titulo="Teleconferencia")
            .col-12
              p.mb-0 Las conexiones de datos de alta velocidad permiten el uso de teleconferencias, reuniones virtuales realizadas a través de enlaces de audio y video. Las teleconferencias pueden ahorrar cantidades sustanciales de dinero que de otro modo se gastarían en viajes al conectar a empleados importantes en sucursales remotas para compartir ideas e información. El uso de pizarras virtuales, plataformas comunitarias de intercambio de datos donde los usuarios remotos pueden interactuar como si estuvieran alrededor de la misma mesa, aumenta aún más las posibilidades del lugar de trabajo virtual.
          .row(titulo="Escaneo de imágenes")
            .col-12
              p.mb-0 Permiten a los trabajadores convertir documentos, planos, diagramas y fotografías en archivos electrónicos rápidamente para su almacenamiento y transmisión. En lugar de depender de la entrega en mano de documentos importantes en toda la ciudad o en todo el país, los empleados pueden escanear y enviar estos archivos en cuestión de segundos a través de Internet. Un estudio de arquitectura podría, por ejemplo, escanear actualizaciones de un plano, transmitirlo al cliente, recibir cambios y realizar modificaciones, todo antes de que un mensajero hubiera podido cruzar la ciudad por primera vez.
          .row(titulo="Etiquetas por radiofrecuencia")
            .col-12
              p.mb-0 El desarrollo de la identificación por radiofrecuencia (RFID) ha cambiado sustancialmente el campo de la logística comercial y, junto con otros avances en comunicación comercial, tiene el potencial de aumentar significativamente la eficiencia de una empresa. Las etiquetas RFID son pequeños chips que responden a las ondas de radio con información codificada, lo que permite a las empresas etiquetar y rastrear artículos y materiales. Cuando un empleado activa un dispositivo de escaneo, todas las etiquetas RFID dentro del alcance responderán con su información codificada, lo que permite actualizaciones rápidas de los inventarios del almacén y seguimiento en tiempo real de los envíos a medida que pasan por la cadena de suministro. Poder acceder al inventario a pedido permite a las empresas aprovechar el envío "justo a tiempo".
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 ¿cómo usar las herramientas informáticas de manera adecuada?
    p.mb-5(data-aos="fade-right") Usar correctamente, las herramientas informáticas pueden ayudar a la empresa a ser más organizada y mucho más eficiente, a continuación, algunas estrategias:
    .row.justify-content-center
      .col-lg-8(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img51.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white.mb-0 #[b Anexo]. Estrategias para implementar de manera adecuada las herramientas informáticas.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/estrategias_para_implementar.pdf')" target="_blank")
                    span(style="color:#000 !important") Descargar
                    i.fas.fa-file-download(style="color:#000 !important")
      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),
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
