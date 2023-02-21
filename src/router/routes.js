import { createRouter, createWebHashHistory } from 'vue-router'
import FrontHomeView from '@/pages/front/HomeView.vue'
import { useUserStore } from '@/stores/user'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        //  children的 path 前面不用加 '/'
        path: '',
        name: 'home',
        component: FrontHomeView,
        meta: {
          title: '購物網',
          login: false,
          admin: false
        }
      },
      // {
      //   path: 'register',
      //   name: 'register',
      //   component: () => import('@/pages/front/RegisterView.vue'),
      //   meta: {
      //     title: '購物網 | 註冊',
      //     // 是否登入才能看
      //     login: false,
      //     admin: false
      //   }
      // },
      // {
      //   path: 'login',
      //   name: 'login',
      //   component: () => import('@/pages/front/LoginView.vue'),
      //   meta: {
      //     title: '購物網 | 登入',
      //     login: false,
      //     admin: false
      //   }
      // },
      // {
      //   path: 'cart',
      //   name: 'cart',
      //   component: () => import('@/pages/front/CartView.vue'),
      //   meta: {
      //     title: '購物網 | 購物車',
      //     login: true,
      //     admin: false
      //   }
      // },
      // {
      //   path: 'orders',
      //   name: 'orders',
      //   component: () => import('@/pages/front/OrdersView.vue'),
      //   meta: {
      //     title: '購物網 | 訂單',
      //     login: true,
      //     admin: false
      //   }
      // },
      {
        path: 'Products',
        name: 'Products',
        component: () => import('@/pages/front/ProductsView.vue'),
        meta: {
          title: '購物網 | 最新商品',
          login: false,
          admin: false
        }
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('@/pages/front/ProductView.vue'),
        meta: {
          title: '購物網 | 商品',
          login: false,
          admin: false
        }
      },
      {
        path: 'News',
        name: 'front-news',
        component: () => import('@/pages/front/NewsView.vue'),
        meta: {
          title: '購物網 | 最新消息',
          login: false,
          admin: false
        }
      },
      {
        path: 'aboutus',
        name: 'front-aboutus',
        component: () => import('@/pages/front/AboutusView.vue'),
        meta: {
          title: '購物網 | 關於我們',
          login: false,
          admin: false
        }
      },
      {
        path: 'contactus',
        name: 'front-ContactUs',
        component: () => import('@/pages/front/ContactusView.vue'),
        meta: {
          title: '購物網 | 聯絡我們',
          login: false,
          admin: false
        }
      },
      {
        path: 'Events',
        name: 'front-Events',
        component: () => import('@/pages/front/EventsView.vue'),
        meta: {
          title: '購物網 | 課程活動',
          login: false,
          admin: false
        }
      },
      {
        path: 'event/:id',
        name: 'event',
        component: () => import('@/pages/front/EventView.vue'),
        meta: {
          title: '購物網 | 商品',
          login: false,
          admin: false
        }
      }
    ]
  },
  // 管理員
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      // {
      //   path: ' ',
      //   name: 'admin-home',
      //   component: () => import('@/pages/admin/HomeView.vue'),
      //   meta: {
      //     title: '購物網 | 管理',
      //     login: true,
      //     admin: true
      //   }
      // },
      {
        path: '',
        name: 'admin-products',
        component: () => import('@/pages/admin/ProductsView.vue'),
        meta: {
          title: '購物網 | 商品管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'admin-orders',
        component: () => import('@/pages/admin/OrdersView.vue'),
        meta: {
          title: '購物網 | 訂單管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'news',
        name: 'admin-news',
        component: () => import('@/pages/admin/NewsView.vue'),
        meta: {
          title: '購物網 | 商品管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'customers',
        name: 'admin-customers',
        component: () => import('@/pages/admin/CustomersView.vue'),
        meta: {
          title: '購物網 | 訂單管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'feedbacks',
        name: 'admin-feedbacks',
        component: () => import('@/pages/admin/FeedbacksView.vue'),
        meta: {
          title: '購物網 | 回應管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'aboutus',
        name: 'admin-aboutus',
        component: () => import('@/pages/admin/AboutusView.vue'),
        meta: {
          title: '購物網 | 關於我們管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'events',
        name: 'admin-events',
        component: () => import('@/pages/admin/EventsView.vue'),
        meta: {
          title: '購物網 | 課程活動管理',
          login: true,
          admin: true
        }
      }
    ]
  },
  // 會員
  {
    path: '/Mypage',
    component: () => import('@/layouts/MypageLayout.vue'),
    children: [
      {
        path: '',
        name: 'Mypageinfo',
        component: () => import('@/pages/mypage/InfoView.vue'),
        meta: {
          title: '購物網 | 會員後台',
          login: true,
          admin: false
        }
      },
      {
        path: 'Mypagecart',
        name: 'Mypagecart',
        component: () => import('@/pages/mypage/CartView.vue'),
        meta: {
          title: '購物網 | 購物車',
          login: true,
          admin: false
        }
      },
      {
        path: 'Paymentcards',
        name: 'Paymentcards',
        component: () => import('@/pages/mypage/PaymentcardsView.vue'),
        meta: {
          title: '購物網 | 付款資訊',
          login: true,
          admin: false
        }
      },
      {
        path: 'MypageOrders',
        name: 'MypageOrders',
        component: () => import('@/pages/mypage/OrdersView.vue'),
        meta: {
          title: '購物網 | 我的訂單',
          login: true,
          admin: false
        }
      },
      {
        path: 'Wishlist',
        name: 'Wishlist',
        component: () => import('@/pages/mypage/WishlistView.vue'),
        meta: {
          title: '購物網 | 我的願望清單',
          login: true,
          admin: false
        }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/404',
    name: '404',
    // component: NotFoundView,
    component: () => import('pages/ErrorNotFound.vue'),
    meta: {
      title: '購物網 | 404',
      login: false,
      admin: false
    }
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'all',
  //   redirect: '/404'
  // },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
