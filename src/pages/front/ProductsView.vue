<template lang="pug">
#front-ProductsView.text-center.q-pa-sm
  div.filterBtninProductsView.q-mt-lg.row.justify-center
    q-btn.q-ml-lg.q-mb-lg(v-for="(name, i) in filterName" :key="i" :label="name" @click="filterCategory = name" push rounded style="background:#630606;color:white")
  div.flex.q-ma-xs.justify-center.row
    .CardinProductsView.flex.justify-center.q-ma-lg.q-pt-xl.col-12.col-md-6.col-lg-3(v-for="product in filterData" :key="product._id" style="width:300px ; magin:50px 30px" )
        ProductCard(v-bind="product" data-aos="flip-left")

</template>

<script setup>
import { reactive, ref, computed, nextTick } from 'vue'
import { api } from '@/boot/axios'
import Swal from 'sweetalert2'
import ProductCard from '@/components/ProductCard.vue'

// aos
import AOS from 'aos'
// 或是改到config
import 'aos/dist/aos.css'

const products = reactive([])
const filterName = ['全部', '葡萄酒', '白蘭地', '清酒', '燒酒', '香檳氣泡酒', '啤酒', '奶酒', '其他']
const filterCategory = ref('全部')
const categories = ['葡萄酒', '白蘭地', '清酒', '燒酒', '香檳氣泡酒', '啤酒', '奶酒', '其他']

const filterData = computed(() => {
  if (filterCategory.value !== '全部') {
    return products.filter(item => item.category === filterCategory.value)
  }
  return products
})

;(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
    await nextTick()
    AOS.init()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()

</script>
<style lang="sass">

</style>
