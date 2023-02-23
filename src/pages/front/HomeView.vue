<template lang="pug">
#home(style="height:100vh;" )
  div( style="padding:35px")
    q-carousel(style=" height:70vh" animated v-model='slide' navigation infinite :autoplay='autoplay' arrows transition-prev='slide-right' transition-next='slide-left' @mouseenter='autoplay = false' @mouseleave='autoplay = true')
      q-carousel-slide(:name='1' :img-src='news[0]?.image')
        router-link(:to="'/newsPage/' + news[0]?._id")
          q-img(style="height:100%")
      q-carousel-slide(:name='2' :img-src='news[1]?.image')
        router-link(:to="'/newsPage/' + news[1]?._id")
          q-img(style="height:100%")
      q-carousel-slide(:name='3' :img-src='news[2]?.image')
        router-link(:to="'/newsPage/' + news[2]?._id")
          q-img(style="height:100%")
      q-carousel-slide(:name='4' :img-src='news[3]?.image')
        router-link(:to="'/newsPage/' + news[3]?._id")
          q-img(style="height:100%")

    .product-area(data-aos="flip-down" )
      .row.align-items-center.justify-content-center
        .col-1
          #swiper-dj-prev.swiper-button-prev
        .col-10
          swiper(v-bind='swiperOptions' @swiper='getSwiperRef' )
            swiper-slide( v-for="product in products" :key="product._id" :slidesPerView="4")
              .productCard.flex.justify-center.q-pa-lg.col-12.col-md-6.col-lg-3
                ProductCard(v-bind="product")
        .col-1
          #swiper-dj-next.swiper-button-next

    .homeEvent-area1.flex.column.justify-around
      .firstEvent
        .row.flex.justify-center(style="height:100%")
          .homeEventLeft.col-12.col-md-4.ml-auto.flex.column.justify-around
            //- .even1Img(style=":background-image:events[0]?.image ; background-size:;")
            q-img(style="height:100%; mix-width:270px")
              img(:src="events[0]?.image" style="width:100%")
          .homeEventRight.col-12.col-md-4.ml-auto.flex.column.justify-around
            .homeEventContent(style="height:75%").flex.column.no-wrap
              .contentTitle.q-mb-md
                .text-h3 {{ events[0]?.title }}
              .contentText.q-mb-md
                p.lessWord {{ events[0]?.description }}
              .contentBtn
                q-btn(style="width:250px; background: #182747 ; color: white" label="LEARN MORE")

    .homeEvent-area2.flex.column.justify-around.q-ma-md
      .secondEvent
        .row.flex(style="height:100%" )
          .homeEventLeft-2.col-12.col-md-7.ml-auto.flex.column
            q-img(style="height:100%;")
              img(:src="events[1]?.image" style="width:100%")
          .homeEventRight-2.col-12.col-md-4.ml-auto
            .homeEventContent-2(style="height:75%").flex.column.no-wrap
              .contentTitle.q-mb-md
                .text-h3 {{ events[1]?.title }}
              .contentText.q-mb-md
                p.lessWord {{ events[1]?.description }}
              .contentBtn
                q-btn(style="width:250px; background: #182747 ; color: white" label="LEARN MORE")

        //- div.flex.row.wrap(v-for="event in events" :key="event._id")
        //-   q-card(style="width:250px").flex.justify-center.q-pa-lg.col-12.col-md-6.col-lg-3
            //- EventCard(v-bind="event")

            .firstEvent

    .homeFooter.flex.justify-star
      .row
        .col-4.q-pa-md.q-mb-sm
          q-list
            q-item(clickable v-ripple)
              q-item-section.text-h5 聯絡我們
            q-item(clickable v-ripple)
              q-item-section.text-h7 Main: 1-800-230-4321
            q-item
              q-btn(flat round icon="fa-brands fa-square-facebook")
              q-btn(flat round icon="fa-solid fa-envelope")
              q-btn(flat round icon="fa-brands fa-square-twitter")
        .col-4.q-pa-md.q-mb-sm.flex.column.justify-center
          q-list
            q-item(clickable v-ripple)
              q-item-section.text-h5 客戶服務
            q-item(clickable v-ripple)
              q-item-section.text-h7 FAQ問與答
            q-item(clickable v-ripple)
              q-item-section.text-h7 詢問單說明
            q-item(clickable v-ripple)
              q-item-section.text-h7 配送資訊
            q-item(clickable v-ripple)
              q-item-section.text-h7 退換貨說明

        .col-4.q-pa-md.q-mb-sm
          q-list
            q-item(clickable v-ripple)
              q-item-section.text-h5 相關政策
            q-item(clickable v-ripple)
              q-item-section.text-h7 品質保證
            q-item(clickable v-ripple)
              q-item-section.text-h7 服務條款
            q-item(clickable v-ripple)
              q-item-section.text-h7 隱私權政策及法令宣告

    //- 打開可移動icon
    q-page-sticky(position='bottom-right' :offset='fabPos' style="z-index:50")
      q-fab(icon='fa-regular fa-envelope' direction='up' color='primary' :disable='draggingFab' v-touch-pan.mouse='moveFab')
        q-fab-action(@click="openDialog" color="accent" icon="edit" )
        q-fab-action(@click="onClick" color="primary" icon="fa-solid fa-gift" )

    //- 回應對話框
    q-dialog(v-model="isDialogOpen" title="Dialog Title" persistent)
      q-card(class="bg-accent text-white" style="width: 500px")
        q-form(@submit="submit" @reset="onReset")
          q-card-section(align="right")
            q-btn(dense flat icon='close' v-close-popup)
                q-tooltip Close
          q-card-actions(align="center" class="bg-white text-accent")
            div.flex.column.q-pa-md
              h5.text-center.q-mt-md 請輸入您的回應
              q-input(filled v-model="form.title" label='請輸入主旨' :rules="[rules.required]")
              q-input( v-model="form.description" type="textarea" label="請輸入您的回應" :rules="[rules.required]" )
              div(align="center")
                q-btn(type="reset" color="red" flat label="reset")
                q-btn(flat type='submit' label="submit"  @click="submit")

</template>
<script setup>
import { reactive, ref, onMounted, nextTick } from 'vue'
import { api, apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'
import ProductCard from '@/components/ProductCard.vue'
import EventCard from '@/components/EventCard.vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

// aos
import AOS from 'aos'
// 改到config
import 'aos/dist/aos.css'

// swiper
import { SwiperSlide, Swiper } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 取資訊
const route = useRoute()
const user = useUserStore()
const { checkLogin } = user

// 接近來的資料
const products = reactive([])
const events = reactive([])
const news = reactive([])

const slide = ref(1)
const autoplay = ref(true)
const isDialogOpen = ref(false)
const openDialog = () => {
  isDialogOpen.value = true
}
const inputTitle = ref('')
const inputContent = ref('')

const rules = {
  required (value) {
    return !!value || '欄位必填'
  }
}

// 移動 icon
const fabPos = ref([18, 18])
const draggingFab = ref(false)
// 移動 icon
const moveFab = (ev) => {
  draggingFab.value = ev.isFirst !== true && ev.isFinal !== true

  fabPos.value = [
    fabPos.value[0] - ev.delta.x,
    fabPos.value[1] - ev.delta.y
  ]
}
// 回應表單
const form = reactive({
  _id: '',
  title: '',
  description: ''
})

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

// 送出回應
const submit = async (val) => {
  try {
    if (checkLogin()) return
    const { data } = apiAuth.post('/feedbacks', form)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '提交回覆成功',
      message: '已收到您的來信，我們將再盡快回覆您，謝謝。'
    })
    isDialogOpen.value = false
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '提交回覆失敗'
    })
  }
}

;(async () => {
  try {
    const results = await Promise.all([api.get('/products'), api.get('/events/eventsforhome'), api.get('/news')])
    const productsdata = results[0].data
    products.push(...productsdata.result)
    console.log(products)

    const eventsforhomedata = results[1].data
    events.push(...eventsforhomedata.result)
    console.log(events)

    const newsdata = results[2].data
    news.push(...newsdata.result)
    console.log(news)
    console.log(news[0]._id)
    // await nextTick()
    // setTimeout(() => {
    //   AOS.init()
    // }, 1000)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()

onMounted(() => {
  setTimeout(() => {
    AOS.init()
  }, 1000)
})
</script>
<style lang="sass">

</style>
