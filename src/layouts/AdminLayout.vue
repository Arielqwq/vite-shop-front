<template lang="pug">
#admin-layout
  q-layout(class="shadow-2 rounded-borders")
    q-header(elevated style="background-color: #230b0b")
      q-toolbar(style="height:100px")
        q-btn(flat @click="drawer = !drawer" round dense icon="menu" )
        q-toolbar-title.text-h5 管理者後台
        //- @mouseover="miniState = false" @mouseout="miniState = true"
    q-drawer( show-if-above v-model="drawer"  :width="250" :breakpoint="500" bordered )

      q-scroll-area(fit style="height: calc(100% - 200px); margin-top: 200px; border-top:1px solid #999;")
        q-list( class="menu-list")
          template(v-for="(menuItem, index) in menuList" :key="index")
            q-item.col-10(class="q-px-xl" clickable v-ripple :active="menuItem.label === 'Outbox'" :to="menuItem.route")
              q-item-section.col-3.q-ma-sm
                q-icon(:name="menuItem.icon" size="sm" :color="menuItem.iconColor")
              q-item-section.text-h6 {{ menuItem.label }}

      div.top(class="absolute-top" color="white" style="height: 200px; background: brown;")
        div.q-pa-md.text-center(class="absolute-center bg-transparent" style="width:100%")
          q-avatar( size="56px" class="q-mb-sm")
            img(:src="avatar")
          //- div(class="text-weight-bold")
          div.q-ma-sm.flex.row.justify-center(style="color:#fff")
            .text-h6 Hi ! 管理員 &nbsp;
            .text-h6 {{ account }}
            .text-h6 {{ email }}

    q-page-container
      q-page
        router-view

</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

const user = useUserStore()
const { avatar, account, email } = storeToRefs(user)
const drawer = ref(false)
const miniState = ref(true)

const menuList = [
  {
    icon: 'fa-solid fa-bag-shopping',
    label: '商品管理',
    route: '/admin',
    separator: true
  },
  {
    icon: 'fa-solid fa-martini-glass-citrus',
    label: '活動管理',
    route: '/admin/events',
    separator: true
  },
  {
    icon: 'send',
    label: '新聞管理',
    route: '/admin/news',
    separator: false
  },
  {
    icon: 'delete',
    label: '訂單管理',
    route: '/admin/orders',
    separator: false
  },
  {
    icon: 'fa-solid fa-user-group',
    label: '會員管理',
    route: '/admin/customers',
    separator: true
  },
  {
    icon: 'fa-solid fa-comments',
    label: '回應管理',
    route: '/admin/feedbacks',
    separator: false
  },
  {
    icon: 'error',
    label: '關於管理',
    route: '/admin/aboutus',
    separator: false
  },
  {
    icon: 'fa-solid fa-house',
    iconColor: 'primary',
    label: '回首頁',
    route: '/',
    separator: false
  }
]
</script>
<style lang="sass">
.text-rwd
  font-size:2.5vh

</style>
