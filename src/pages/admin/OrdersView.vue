<template lang="pug">
#orders.q-pa-md
  h3.text-center 訂單管理
  div(class="q-px-xl q-mt-md")
    q-table(:columns="columns" :rows="orders")

      //- 查詢
      template( v-slot:top-right)
        q-input(  outlined debounce="300" v-model="filter" placeholder="Search")
          template( v-slot:append)
            q-icon( name="search")

      //- 商品內容
      template(v-slot:body-cell-content='data')
        q-td
          ul
            li(v-for="product in data.row.products")
              p {{product.quantity + ' 個 ' + product.p_id.name}}

      //- 刪除
      template(v-slot:body-cell-delete='data')
        q-td.text-center
          q-btn(@click="deleteOrder(data.row._id)" round icon="fa-solid fa-trash-can" color="red")
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'

const orders = reactive([])

const columns = [
  {
    name: 'name',
    required: true,
    label: '訂單編號',
    align: 'center',
    field: orders => orders._id,
    sortable: true
  },
  {
    name: 'ID',
    required: true,
    label: '消費者 ID',
    align: 'center',
    field: orders => orders.u_id.account,
    sortable: true
  },
  {
    name: 'date',
    required: true,
    label: '訂單日期',
    align: 'center',
    field: orders => new Date(orders.date).toLocaleDateString(),
    sortable: true
  },
  {
    name: 'price',
    required: true,
    label: '訂單金額',
    align: 'center',
    field: orders => orders.totalPrice,
    sortable: true
  },
  {
    name: 'content',
    label: '訂單內容',
    align: 'center'
  },
  {
    name: 'delete',
    label: '刪除',
    align: 'center'
  }
]

const deleteOrder = async (_id) => {
  console.log(_id)
  try {
    await apiAuth.patch('/orders/delete/' + _id, {
      status: 1
    })
    const index = orders.findIndex(item => item._id === _id)
    orders.splice(index, 1)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '成功刪除'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((total, current) => total + current.p_id.price * current.quantity, 0)
      // order.products.product.quantity = orders.findIndex((product) => product in orders.products)
      return order
    }
    ))
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得訂單失敗'
    })
  }
})()
</script>
