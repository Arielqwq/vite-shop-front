<template lang="pug">
#admin-layout
  q-layout(class="shadow-2 rounded-borders")
    //- q-header(elevated style="background-color: #230b0b")
    //-   q-toolbar(style="height:100px")
    //-     q-btn(flat @click="drawer = !drawer" round dense icon="menu" )
    //-     q-toolbar-title.text-h5 管理者後台
        //- @mouseover="miniState = false" @mouseout="miniState = true"
    //- q-drawer.bg-accent( show-if-above v-model="drawer"  :width="250" :breakpoint="500" bordered )
          q-scroll-area(fit style="height: calc(100% - 200px); margin-top: 200px; border-top:1px solid #999;")

    //- style="position:fixed"
    q-drawer.bg-accent( show-if-above :width="300" :breakpoint="500" bordered style="position:fixed")
      q-scroll-area(style="height: calc(100vh - 220px);margin-top: 220px; ")
        q-list( class="menu-list")
          template(v-for="(menuItem, index) in menuList" :key="index")
            q-item.col-10(class="q-px-xl" clickable v-ripple :active="menuItem.label === 'Outbox'" :to="menuItem.route")
              q-item-section.col-3.q-ma-sm
                q-icon(:name="menuItem.icon" size="sm" :color="menuItem.iconColor")
              q-item-section.text-h6(@click="logoutClick(menuItem)") {{ menuItem.label }}

      div.top(class="absolute-top" color="white" style="height: 220px; background:#630606;")
        div.q-pa-md.text-center(class="absolute-center bg-transparent" style="width:100%")
          div.q-my-md
            img(src="../assets/logoicons/logo&name.png" style="width:150px;filter: brightness(100);")
          q-avatar( size="80px")
            img(:src="avatar")
          //- div(class="text-weight-bold")
          div.q-my-md.flex.row.justify-center(style="color:#fff")
            .text-h6 Hi ! 管理員 &nbsp;
            .text-h6 {{ account }}
            //- .text-h6 {{ email }}

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
const { logout } = user

const logoutClick = (menuItem) => {
  if (menuItem.label === '登出') {
    logout()
  }
}

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
    icon: 'fa-solid fa-newspaper',
    label: '新聞管理',
    route: '/admin/news',
    separator: false
  },
  {
    icon: 'fa-solid fa-clipboard-list',
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
    label: '訊息管理',
    route: '/admin/feedbacks',
    separator: false
  },
  // {
  //   icon: 'error',
  //   label: '關於管理',
  //   route: '/admin/aboutus',
  //   separator: false
  // },
  {
    icon: 'fa-solid fa-house',
    iconColor: 'primary',
    label: '回首頁',
    route: '/',
    separator: false
  },
  {
    icon: 'fa-solid fa-person-running',
    iconColor: 'primary',
    label: '登出',
    route: '',
    separator: false
  }
]
</script>
<style lang="sass">
.text-rwd
  font-size:2.5vh

</style>
