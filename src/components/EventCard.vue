<template lang="pug">
.eventCard
  router-link(:to="'/event/' + _id").notextUnderline
    .row
      .col-6(style="margin:auto;")
        q-img.eventCardImg.rounded-borders(:src='image')
      .col-6.flex.items-center
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
