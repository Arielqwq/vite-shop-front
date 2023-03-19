<template lang="pug">
#front-news
  div.flex.justify-center.row
    .cardinNewsView.flex.justify-center.col-12.col-lg-4( style="margin-bottom:60px;" v-for="newscard in news" :key="newscard._id")
      NewsCard.newscard(v-bind="newscard" data-aos="zoom-out-up" data-aos-duration="1500")

</template>

<script setup>
import { reactive, nextTick } from 'vue'
import { api } from '@/boot/axios'
import Swal from 'sweetalert2'
import NewsCard from '@/components/NewsCard.vue'

// aos
import AOS from 'aos'
// 或是改到config
import 'aos/dist/aos.css'

const news = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/news')
    news.push(...data.result)
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
