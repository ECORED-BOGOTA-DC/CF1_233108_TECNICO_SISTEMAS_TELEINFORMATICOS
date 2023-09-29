<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Sistemas informáticos en una organización
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
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
            p.mb-0 Por su parte, la tecnología de TI es aquella que impulsa o permite el almacenamiento, el procesamiento y el flujo de comunicación dentro de una organización. Todo lo relacionado con las computadoras, software, redes, intranets, sitios web, servidores, bases de datos y telecomunicaciones.
        .cajon.color-acento-botones.p-4.mb-3
          p.mb-0 La mayoría de las empresas actualmente dependen de sistemas informáticos para la gestión de sus operaciones, por ejemplo, el correo electrónico, las bases de datos, la administración de sitios web, entre otros, son fundamentales para el óptimo funcionamiento de los procesos organizacionales.
        p.mb-0 Por ejemplo, los hospitales cuentan con grandes bases de datos de pacientes para poder realizar un seguimiento eficiente de las historias clínicas. Las universidades cuentan con sistemas para la gestión de personal, estudiantes y pagos, así como redes en expansión para la administración del campus. Incluso una pequeña empresa de entrega de alimentos a domicilio necesita un sistema de gestión y seguimiento de pedidos.
    p.mb-5 Si bien los sistemas de información pueden diferir en la forma en que se utilizan dentro de una organización, todos tienen los siguientes componentes:
    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='')
          .tarjeta.color-secundario.p-3(x="22.3%" y="36%" numero="+")
            p #[b Hardware]
            p.mb-0 Conjunto de elementos físicos o materiales que constituyen una computadora o un sistema informático.
          .tarjeta.color-secundario.p-3(x="76%" y="64%" numero="+")
            p #[b Software]
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
    p.mb-5 Existen diferentes tipos de sistemas de información con funciones diferentes los cuales pueden ser utilizados según requerimientos organizacionales, a continuación, se presentan algunos:
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
                p.mb-0 DataBase Management System, es una combinación de software que permite la administración y el análisis de datos. Su función principal es servir de interfaz entre la base de datos, el usuario y las distintas aplicaciones utilizadas.
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
                p.mb-0 Son aplicaciones de software utilizadas por la gerencia media y alta para recopilar información de una amplia gama de fuentes y procesos para respaldar la resolución de problemas y la toma de decisiones. Un DSS se utiliza principalmente para problemas de decisión no estructurados y semiestructurados.
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
      .col-lg-7.mb-4.mb-lg-0
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
            p.mb-0 Un sistema ERP es una aplicación de software con una base de datos centralizada que se implementa en toda la organización.
          li.d-flex
            i.fas.fa-check-circle(style="color: #4ADBD1")
            |
            p.mb-0 La computación en la nube es un método de entrega de #[i software] que se ejecuta en cualquier computadora que tenga un navegador web y acceso a Internet.
          li.d-flex
            i.fas.fa-check-circle(style="color: #4ADBD1")
            |
            p.mb-0 El #[i software] se desarrolla a través de un proceso llamado programación, en el que un programador usa un lenguaje específico para ejecutarlo. Si bien la mayoría del software se desarrolla utilizando un modelo de código cerrado, el movimiento de código abierto está ganando más apoyo en la actualidad.
      .col-lg-5
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
            p.text-white.mb-0 #[b Recuerde que el software] es el conjunto de instrucciones que le dicen al hardware qué hacer. El software se puede dividir ampliamente en dos categorías: sistemas operativos y software de aplicación. Los sistemas operativos administran el hardware y crean la interfaz entre el hardware y el usuario. El software de aplicación es la categoría de programas que hacen algo útil para el usuario.
    .row.mb-4(data-aos="fade-right")
      .col-auto.px-4.py-3.bg-c3
        h3.mb-0 Sistemas operativos
    p.mb-5 El sistema operativo proporciona varias funciones esenciales, que incluyen:
      
</template>

<script>
export default {
  name: 'Tema1',
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
