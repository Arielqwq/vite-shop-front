<template lang="pug">
#front-events(align="center")
  div.row
    .cardinEventView.q-pa-lg.col-6( style=" margin-bottom:30px" v-for="event in events" :key="event._id" )
      EventCard.eventCard(v-bind="event" data-aos="fade-up")
  </template>

<script setup>
import { reactive, onMounted, nextTick } from 'vue'
import { api } from '@/boot/axios'
import Swal from 'sweetalert2'
import EventCard from '@/components/EventCard.vue'

// aos
import AOS from 'aos'
// 或是改到config
import 'aos/dist/aos.css'

const events = reactive([])

onMounted(() => {
  (async () => {
    try {
      const { data } = await api.get('/events')
      events.push(...data.result)
      // aos
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
})
</script>
