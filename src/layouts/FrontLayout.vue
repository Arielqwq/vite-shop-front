<template lang="pug">
#front-layout(style="overflow-x:hidden")
  q-layout
    q-header.q-header(elevated height-hint="98" )
      //- shadow-2 整欄下底線
      .header-top.row.justify-center.items-center(indicator-color="transparent" active-color="white" class="text-grey-5")
        .text-h7 Get Free Shipping Now !
        q-btn.text-h7(to="/Products" flat style="color: #FFf" label=" Star Shopping")

      .header-toolbar.row(style="background: white;")
        q-tabs.col-2
          q-route-tab(to="/" bg-color="#630606")
            img(src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg")
        q-tabs.col-8.header-tabs.rounded-borders( indicator-color="transparent")
          q-btn.btnNews.text-h6(flat color="secondary"  to="/News" label="最新消息")
            q-tooltip NEWS
          q-btn.text-h6(flat color="secondary"  to="/Products" label="所有商品")
            q-tooltip ALL PRODUCTS
          //- q-route-tab(to="/" indicator-color="none")
          //-   img(src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg")
          q-btn.text-h6(flat color="secondary" to="/Events" label="課程活動")
            q-tooltip LECTURE & EVENTS
          q-btn.text-h6(flat color="secondary" to="/AboutUs" label="關於我們")
            q-tooltip ABOUT US

        q-toolbar.col-2.q-toolbar.q-pa-md(align="right")
          q-btn(v-if="!isLogin" text-color="secondary" flat rounded size="sm" icon="fa-solid fa-user" @click="showLogin = true")
          //- <q-btn v-if="!isLogin" font-awesome-icon icon="fa-solid fa-user" to="/register" label="註冊"/>
          //- <q-btn v-if="!isLogin" font-awesome-icon icon="fa-solid fa-right-to-bracket" to="/login" label="登入"/>
          //- 購物車及數量
          q-btn(v-if="isLogin && !isAdmin" text-color="secondary" flat rounded size="md" icon="fa-solid fa-cart-shopping" to="/Mypage/Mypagecart")
            q-badge( size="xs" color="red" :label="cart" rounded floating)

          //- 會員登入後的下拉選單
          q-btn-dropdown(v-if="isLogin && !isAdmin" text-color="secondary" flat rounded size="md" icon="fa-solid fa-user")
            q-list
              q-item(clickable v-close-popup to="/Mypage" )
                q-item-section(avatar)
                  q-icon(name="fa-regular fa-address-card")
                q-item-section 會員資料
              //- q-item(clickable v-close-popup to="/Mypage/Paymentcards")
              //-   q-item-section(avatar)
              //-     q-icon(name="fa-regular fa-credit-card")
              //-   q-item-section
              //-     q-item-label 付款資訊

              q-item(clickable v-close-popup to="/Mypage/Mypagecart")
                q-item-section(avatar)
                  q-icon(name="fa-solid fa-cart-shopping")
                q-item-section
                  q-item-label 我的購物車

              q-item(clickable v-close-popup to="/Mypage/Wishlist")
                q-item-section(avatar)
                  q-icon(name="fa-regular fa-heart")
                q-item-section
                  q-item-label 我的收藏

              q-item(clickable v-close-popup to="/Mypage/MypageOrders")
                q-item-section(avatar)
                  q-icon(name="fa-solid fa-receipt")
                q-item-section
                  q-item-label 我的訂單

              q-item(clickable v-close-popup to="/Mypage/Feedbacks")
                q-item-section(avatar)
                  q-icon(name="fa-regular fa-envelope")
                q-item-section
                  q-item-label 我的回應

              q-item(clickable v-close-popup @click="logout")
                q-item-section.q-pa-none(avatar)
                  q-icon(name="fa-solid fa-person-running")
                q-item-section
                  q-item-label 登出

          q-btn(v-if="isLogin && isAdmin" flat rounded text-color="secondary" size="md" icon="fa-solid fa-hammer" to="/admin" label="管理")
          q-btn#logoutBtn(v-if="isLogin && isAdmin" text-color="secondary" flat rounded size="md" icon="fa-solid fa-right-from-bracket" @click="logout" label="登出")

      q-dialog( v-if="showLogin" v-model="showLogin")
        q-card(class="q-dialog-plugin")
          RegisterShow(v-if="showRegister")
          LoginShow(v-if="!showRegister")
          .q-pa-lg.flex.justify-content
            q-btn(:label='showRegister ? "登入" : "註冊"' @click="showRegister = !showRegister")
            p.flex.items-center.q-ma-sm {{ showRegister ?"已經有帳號了!" : "還沒有帳號嗎?"}}

    //- q-btn(dense flat round icon="menu" @click="toggleLeftDrawer")
      //-   q-avatar
      //-     img(src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg")
      //-   q-toolbar-title(align="left") ~快樂的地方~

    q-page-container
      //- 按商品時路徑正確
      router-view(:key="$route.fullPath")
      q-page-scroller(position='bottom-right' :scroll-offset='150' :offset='[120, 230]')
        q-btn(fab icon='fa-solid fa-chevron-up' color='primary').

    q-footer.q-footer(fixed)
      q-img(style="width:100%" src="@/assets/drinkdontdrive.jpg")

</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import LoginShow from '@/components/LoginShow.vue'
import RegisterShow from 'components/RegisterShow.vue'

// quasar-swiper
// const slide = ref(1)
// const autoplay = ref(true)

const user = useUserStore()
const { isLogin, isAdmin, cart, showLogin } = storeToRefs(user)
const { logout } = user

const showRegister = ref(false)

const leftDrawerOpen = ref(false)

function onItemClick () {
  console.log('Clicked on an Item')
}

// const toggleLeftDrawer = () => {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }

// const dialoginHide = () => {
//   if (!isLogin) showLogin.value = false
// }

// const logoutBtn = document.querySelector('#logoutBtn')

// script 寫法
// export default{
//   setup(){
//     const leftDrawerOpen = ref(false)

//     return{
//       leftDrawerOpen,
//       toggleLeftDrawer(){
//         leftDrawerOpen.value = ! leftDrawerOpen.value
//       }
//     }
//   }
// }

</script>
<style lang="sass">

</style>
