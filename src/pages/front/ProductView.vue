<template lang="pug">
#productView
  .showProduct.row.flex.justify-center
    .product-img.col-12.col-lg-3.flex.justify-center
      q-img(:src="product.image" style="width:200px")
    .product-content.col-10.col-lg-5
      h3.q-my-lg {{ product.name }}
      h4.q-my-lg $ {{ product.price }}
      p.pre.q-my-lg {{ product.description }}
      q-form(@submit="submitCart").row.q-mt-md.flex.items-center
        //-v-model.number傳入數字，v-model 預設是文字
        //- div.flex.items-center
        q-input.col-5.col-lg-2.q-pr-md(filled v-model.number="quantity" type="number" label="數量" :rules="[rules.required, rules.number]" style="height:55px")
        q-btn.col-5.col-lg-3.q-pr-md(type="submit" color="primary" style="height:55px") 加入購物車
        q-btn.col-2.col-lg-1.q-pa-md(flat round color='red' size="xl" :icon=" love ? 'fa-solid fa-heart':'fa-regular fa-heart'" @click="editLove({_id:product._id})")
      //- div 多圖顯示
      //-   .row.col-10(v-for="img in product.images" :key="img")
      //-     img.col-3.q-mt-xl.justify-star(:src="img")

  .recomProduct.row.flex.justify-center
      .col-6
        .text-h5 YOU MAY ALSO LIKE
      .col-7.row(style="margin:50px")
        div(v-for="recomProduct in recomProducts.slice(0, 4)" :key="recomProducts._id")
          ProductCard(style="width:250px" v-if="recomProduct._id !== product._id" v-bind="recomProduct")

  q-dialog(:v-model="!product.sell" persistent )
    q-card(class="bg-accent text-white" style="width: 300px")
      q-card-section
        h5.text-white.text-weight-bold 賣完ㄌ餒
      q-card-actions( align="right" class="bg-white text-accent")
        q-btn(@click="router.go(-1)" flat label="back" v-close-popup )

</template>

<script setup>
import { reactive, ref } from 'vue'
import { api, apiAuth } from '@/boot/axios'
// 有沒有 r 的區別，有 r 是跳頁，沒 r 是取資料(在哪一頁)
import { useRoute, useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

import ProductCard from '@/components/ProductCard.vue'

// swiper
import { SwiperSlide, Swiper } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// swiper
const swiperRef = ref(null)
// Stop autoplay
const getSwiperRef = (swiperInstance) => {
  swiperRef.value = swiperInstance
  swiperRef.value.autoplay.stop()
}

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    prevEl: '#swiper-dj-prev',
    nextEl: '#swiper-dj-next'
  },
  modules: [Navigation, Autoplay],
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
  autoplay: {
    delay: 5000
  },
  loop: true
}

// 取資訊
const route = useRoute()
// 換頁
const router = useRouter()

const user = useUserStore()
const { editCart, isLogin } = storeToRefs(user)

// const valid = ref(false)
const quantity = ref(0)

const love = ref(false)

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  number (value) {
    // 0 加購物車沒意義
    return value > 0 || '數量錯誤'
  }
}
// 本頁商品
const product = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  images: [],
  // 預設是 false 會看到已下架
  sell: true,
  category: ''
})
// 接推薦商品
const recomProducts = reactive([])
const submitCart = () => {
  // if (!valid.value) return
  editCart({ _id: product._id, quantity: quantity.value, text: '加入購物車' })
}

const editLove = async () => {
  try {
    const { data } = await apiAuth.post('/users/love', { p_id: route.params.id, love: !love.value })
    love.value = !love.value
    if (love.value === true) {
      Swal.fire({
        title: '加入收藏',
        color: 'pink'
      })
    } else {
      Swal.fire({
        title: '移除收藏',
        color: 'pink'
      })
    }
  } catch (error) {
    Swal.fire({
      message: '失敗',
      caption: error?.response?.data?.message || '發生錯誤',
      color: 'pink'
    })
  }
}

// function back () {
//   console.log('yayayya')
// }

(async () => {
  try {
    // const results = await Promise.all([api.get('/products'),api.get('/products/' + route.params.id)])
    const { data } = await api.get('/products/' + route.params.id)
    // 不能直接 product.result 因為 product 是 const
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.description = data.result.description
    product.image = data.result.image
    product.images = data.result.images
    product.sell = data.result.sell
    product.category = data.result.category
    // 對使用者來說，頁面標題有變化
    document.title = '購物網 | ' + product.name
    console.log(data.result.images)

    // 推薦商品
    const { data: recomProductsData } = await api.get('/products/')
    recomProducts.push(...recomProductsData.result)

    // 收藏
    if (isLogin.value) {
      const { data } = await apiAuth.get('/users/love/' + route.params.id)
      love.value = data.result
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品失敗'
    })
    // 取失敗就回上一頁
    router.go(-1)
  }
})()
</script>
<style lang="sass">

</style>
