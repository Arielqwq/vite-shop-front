<template lang="pug">
.eventCard(align="left")
  router-link(:to="'/event/' + _id" ).notextUnderline
    q-card-section.row
      .col-12.col-lg-5
        q-img.eventCardImg.rounded-borders(:src='image')
      .col-12.col-lg-6
        q-card-section.eventCardContent
          .eventCardtitle.q-my-md.q-mb-xs {{title}}
          .q-my-md.q-mb-xs
            .eventCardP # {{category}} || 費用 ${{price}}
            .eventCardP 活動期間：{{ daysfrom }} - {{ daysto }}

</template>

<script setup>
// import { useUserStore } from '@/stores/'

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
  price: {
    type: Number,
    default: 0
  },
  daysfrom: {
    type: String,
    default: ''
  },
  daysto: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

// const user = useUserStore()
// const { editCart } = user
</script>

<style lang="sass">

</style>
