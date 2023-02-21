<template lang="pug">
#front-news.q-ma-md
  div.flex.justify-center.row
    .col-4
    .col-8
      .flex.justify-center.q-pa-lg.col-12(v-for="newscard in news" :key="newscard._id")
        NewsCard(v-bind="newscard")

</template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/boot/axios'
import Swal from 'sweetalert2'
import NewsCard from '@/components/NewsCard.vue'

const news = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/news')
    news.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
