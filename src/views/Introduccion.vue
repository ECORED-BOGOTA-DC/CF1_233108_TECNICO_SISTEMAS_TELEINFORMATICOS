<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5
          figure(data-aos="fade-right")
            img(src='@/assets/curso/intro/img1.png', style="width: 1200px", alt='Imágen decorativa').m-auto
          .row.justify-content-center.mb-5(data-aos="fade-down")
            .col-lg-10.bg-c2.shadow-sm.p-4
              p.mb-0 Bienvenido a este componente formativo denominado “Herramientas informáticas para las organizaciones” para comenzar el recorrido por el mismo, revise la información que se presenta a continuación:
          figure(data-aos="fade-left")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/jV9Fyg1F_gI" title="Herramientas informáticas en las organizaciones" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
