<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El presente componente formativo da a conocer las principales herramientas informáticas que se requieren actualmente para el óptimo funcionamiento de una organización, pues es innegable que las tecnologías de la información han cambiado la forma de hacer las cosas, por ende, es necesario adquirir los conocimientos necesarios para poder aplicarlas de manera eficaz en cualquier contexto del ser humano. 
    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="A través de esta síntesis se resume los temas abordados en el presente componente formativo como es la definición y sus principales características del: Software, Hardware, Computación en la nube y Búsqueda de información.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
