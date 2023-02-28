<template lang="pug">
.productcard(align="center" )
  //- q-img.productcardImg(:src="image" fit="contain")
  q-img.productcardImg(:src="image" )
  q-card-section.nameinProductCard.q-pa-none.q-my-lg
    router-link.text-center.text-weight-bold.textUnderline-none(:to="'/product/' + _id" style="padding:0 20px;") {{ name }}
  q-card-section.text-center.q-pa-sm(style="height:50px")
    .text-h5.text-center.text-subtitle.items-center ${{ price }}
  q-card-actions(align="center")
    //- q-btn(flat round color='red' icon='favorite')
  q-btn.q-mt-auto(icon="fa-solid fa-cart-plus" color="primary" text-color="white" label="加入購物車" @click="editCart({_id, quantity: 1, text:'加入成功'})")
    //- q-btn(flat round color='primary' icon='share').

</template>

<script setup>
import { useUserStore } from '@/stores/user'

defineProps({
  /* eslint-disable */
  _id: {
      type: String,
      default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
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

const user = useUserStore()
const { editCart } = user
</script>

<style lang="sass">

</style>
