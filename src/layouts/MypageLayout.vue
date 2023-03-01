<template lang="pug">
q-layout( class="shadow-2 rounded-borders")
  //- q-header(elevated style="background-color: #230b0b")
  //-   q-toolbar(style="height:100px")
  //-     q-btn(flat @click="drawer = !drawer" round dense icon="menu" )
  //-     q-toolbar-title(@mouseover="miniState = false" @mouseout="miniState = true") 會員後台
  //-     v-model="drawer"
  q-drawer.bg-accent( show-if-above :width="300")
    q-scroll-area.fit
      ul.q-ma-none.q-pa-none
        .background.bg-primary(align="center")
          div.q-my-md
            img(src="../assets/logoicons/logo&name.png" style="width:150px;filter: brightness(100);")
          .bg-transparent
            q-avatar( size="80px" )
              img(:src="avatar" style="height:100%")
              //- {{  }}
            .div(class="text-weight-bold")
            .div.text-white.q-my-md Hi !  {{ account }}
        div.col-12.flex.column.q-ma-auto.q-ml-xl
          li.mypageIcon.q-pa-md.text-center.row(align="center" v-for="menuItem in menuList" )
            q-btn.mypageIconBtn.q-pa-md(@click="logoutClick(menuItem)" align="left" size="lg" :icon="menuItem.icon" :to="menuItem.route" flat rounded color="#182747") {{ menuItem.label}}

      //- q-list(padding class="menu-list")
      //-   template(v-for="(menuItem, index) in menuList" :key="index")
      //-     q-item.col-10(class="q-px-xl" clickable v-ripple :active="menuItem.label === 'Outbox'" :to="menuItem.route")
      //-       q-item-section.col-3
      //-         q-icon(:name="menuItem.icon" :color="menuItem.iconColor")
      //-       q-item-section {{ menuItem.label }}
      //-         q-separator

      //- q-img(class="absolute-top" src="@/assets/mypageimg.jpg"  style="height: 150px")
      //-   .div(class="absolute-bottom bg-transparent")
      //-     q-avatar( size="56px" class="q-mb-sm")
      //-       img(:src="avatar")
      //-       //- {{  }}
      //-     .div(class="text-weight-bold")
      //-     .div Hi !  {{ account }}

  q-page-container
    q-page
      router-view

</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

const user = useUserStore()
const { avatar, account } = storeToRefs(user)
// const drawer = ref(false)
const miniState = ref(true)
const { logout } = user

const logoutClick = (menuItem) => {
  if (menuItem.label === '登出') {
    logout()
  }
}

const menuList = [
  {
    icon: 'fa-regular fa-address-card',
    label: '會員資料',
    route: '/Mypage',
    separator: true
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    label: '購物清單',
    route: '/Mypage/Mypagecart',
    separator: true
  },
  // {
  //   icon: 'send',
  //   label: '付款資訊',
  //   route: '/Mypage/Paymentcards',
  //   separator: false
  // },

  {
    icon: 'fa-regular fa-heart',
    label: '我的收藏',
    route: '/Mypage/Wishlist',
    separator: true
  },
  {
    icon: 'fa-solid fa-receipt',
    label: '我的訂單',
    route: '/Mypage/MypageOrders',
    separator: false
  },
  {
    icon: 'fa-regular fa-envelope',
    label: '我的訊息',
    route: '/Mypage/Feedbacks',
    separator: false
  },
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
