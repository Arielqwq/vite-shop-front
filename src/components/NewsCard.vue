<template lang="pug">
#newsCard(style="width:85%")
  router-link.text-h8.q-pa-md.textUnderline-none(:to="'/newsPage/' + _id")
    .my-card.q-pa-lg
      .ImginNewsCard(style="position:relative")
        q-img(:src="image" cover style="height:300px;")
      q-card-section.q-pa-none.q-mt-lg(style="height:40px" align="right" )
        .q-ma-lg.text-h5.text-star.text-weight-bold.textUnderline-none {{ title }}
      //- q-card-section.flex.justify-center.column.items-center.q-pa-none.q-ma-sm(style="height:50px;")
      //-   .text-h7.text-center.text-subtitle.items-center.lessWord {{ description }}
      q-card-section.newCardContent.q-pa-none.q-mt-lg(style="height:50px magin-top:10px;" align="right" )
        span.learnMoreInNewscard LEARN MORE

</template>

<script setup>

defineProps({
  /* eslint-disable */
    _id: {
        type: String,
        default: ''
    },
    /* eslint-enable */
  title: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})

</script>

<style lang="sass">
.my-card
  // width:100%

</style>
