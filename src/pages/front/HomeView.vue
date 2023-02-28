<template lang="pug">
#home
  div(style="padding:35px 35px 0 35px")
    //- 視差
    section#parallaxArea
      .parallax-bg(data-relative-input="true" data-depth="0.6")
      //- 添加其他元素（例如，文本、图像等）
      h1 This is a parallax section
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus ac nisl lobortis aliquam. Nulla facilisi. Nullam sed lectus non mauris efficitur tincidunt.
    //-最新消息輪播圖
    .qcarousel-area
      q-carousel(style="width:100%; height:90%" animated v-model='slide' navigation infinite :autoplay='autoplay' arrows transition-prev='slide-right' transition-next='slide-left' @mouseenter='autoplay = false' @mouseleave='autoplay = true')
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

    //- 商品swiper
    .product-area
      .row.items-center.justify-center
        .col-1(style="position:relative")
          #swiper-dj-prev.swiper-button-prev
        .col-10(data-aos="flip-down" )
          swiper(v-bind='swiperOptions' @swiper='getSwiperRef' style="height:100%;").flex
            swiper-slide(v-for="product in products" :key="product._id" :slidesPerView="4" style="height:100%;")
              .productcardinHomeview
                ProductCard(v-bind="product" style="height:100% !important;")
        .col-1(style="position:relative")
          #swiper-dj-next.swiper-button-next

    //- 第一則最新活動
    .homeEvent-area1.flex.column.justify-around(data-aos="flip-down" )
      .firstEvent
        .row.flex.justify-center(style="height:100%")
          .homeEventLeft.col-12.col-md-5.ml-auto.flex.column.justify-around
            //- .even1Img(style=":background-image:events[0]?.image ; background-size:;")
            q-img(style=" mix-width:270px")
              img(:src="events[0]?.image" style="width:100%")
          .homeEventRight.col-12.col-md-5.ml-auto.flex.column.justify-around
            .homeEventContent(style="height:75%").flex.column.no-wrap
              .contentTitle.q-mb-md
                .text-h3 {{ events[0]?.title }}
              .contentText.q-mb-md
                p.lessWord {{ events[0]?.description }}
              .contentBtn
                q-btn(:to="'/event/' + events[0]?._id" style="width:250px; background: #182747 ; color: white" label="LEARN MORE")

    //- 第二則最新活動
    .homeEvent-area2.flex.column.justify-around.q-ma-md(data-aos="fade-up")
      .secondEvent
        .row.flex(style="height:100%" )
          .homeEventLeft-2.col-12.col-md-5
            .homeEventContent-2(style="height:100%").q-mx-xl
              .contentTitle.q-mb-md
                .text-h4 {{ events[1]?.title }}
              .contentText.q-mb-md.q-ml-lg
                p.lessWord {{ events[1]?.description }}
              .contentBtn
                q-btn(:to="'/event/' + events[1]?._id" style="width:250px; background: #182747 ; color: white" label="LEARN MORE")

          .homeEventRight-2.col-12.col-md-7.ml-auto.flex.column.justify-centent
            q-img(style="height:100%;")
              img(:src="events[1]?.image" style="width:100%")
        //- div.flex.row.wrap(v-for="event in events" :key="event._id")
        //-   q-card(style="width:250px").flex.justify-center.q-pa-lg.col-12.col-md-6.col-lg-3
            //- EventCard(v-bind="event")

    //- footer
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
    q-page-sticky(position='bottom-right' :offset='fabPos' style="z-index:50;")
      q-fab(icon='fa-regular fa-envelope' direction="left" color='primary' :disable='draggingFab' v-touch-pan.mouse='moveFab')
        q-fab-action(@click="openDialog" color="accent" icon="edit" )
        q-fab-action(@click="onClick" color="primary" icon="fa-solid fa-gift" )

    //- 回應對話框
    .feedbackDialog
      q-dialog(v-model="isDialogOpen" title="Dialog Title" persistent)
        q-card(class="bg-accent text-white" style="width: 800px")
          q-form(@submit="submit" @reset="onReset" style="width:100%")
            q-card-section(align="right" )
              q-btn(dense flat icon='close' v-close-popup)
                  q-tooltip Close
            q-card-actions( style="width:100%" align="center" class="bg-white text-accent")
              div.flex.column.q-pa-md(style="width:100%").text-primary
                h4.text-center.q-mt-md 請輸入您的回應
                .text-h6 請輸入主旨
                q-input.feedbackTitle(filled v-model="form.title" :rules="[rules.required]" style="font-size:24px")
                .text-h6 請輸入您的回應
                q-input( v-model="form.description" filled type="textarea"  :rules="[rules.required]" style="font-size:24px" )
                div(align="center")
                  q-btn(type="reset" color="red" flat label="reset")
                  q-btn(flat type='submit' label="submit")

</template>
<script setup>
import { reactive, ref, onMounted, nextTick } from 'vue'
import { api, apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'
import ProductCard from '@/components/ProductCard.vue'
import EventCard from '@/components/EventCard.vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

// gsap
import $ from 'jquery'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// aos
import AOS from 'aos'
// 或是改到config
import 'aos/dist/aos.css'

// swiper
import { SwiperSlide, Swiper } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

gsap.registerPlugin(ScrollTrigger)
// const triggers = ScrollTrigger.getAll()

onMounted(() => {
  const sections = gsap.utils.toArray('section')
  // 視差
  $('#parallaxArea').css({
    backgroundImage: new URL('../../assets/parallaxs/home_parallax.jpg', import.meta.url).href
  })
  gsap.to('#parallaxArea', {
    scrollTrigger: {
      trigger: '#parallaxArea',
      start: 'top 0%',
      end: 'bottom 0%',
      scrub: true
    },
    backgroundPosition: '50% -400%',
    ease: 'none'
  })
})
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
const fabPos = ref([45, 130])
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

onMounted(() => {
  (async () => {
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
      await nextTick()
      AOS.init()
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
})
</script>

<style lang="sass">

</style>
