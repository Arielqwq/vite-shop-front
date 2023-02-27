<template lang="pug">
#wishlist.q-pa-md
  h4.text-center 我的收藏
  div(class="q-px-xl q-mt-md")
    q-table(:columns="columns" :rows="loves" row-key="p_id" :filter="filter" )

      //- 商品圖片
      template( v-slot:body-cell-image="props")
        q-td.text-center
          img(:src='props.row.image' style='height: 100px;')

      //- 刪除商品
      template(#body-cell-edit="data")
        q-td.text-center
          //- span {{ data.row._id }}
          q-btn(round color="accent"  @click="removeFromWishlist(data.row._id)" icon="fa-solid fa-trash-can")
      //- goPage
      template( v-slot:body-cell-go="props")
        q-td.text-center
          q-btn.q-ml-md(size="12px" icon="fa-brands fa-golang" :to="'../product/' + props.row._id" round color="primary")
</template>
<script setup>
import { ref, reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/boot/axios'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { data } from 'browserslist'

const router = useRouter()

const user = useUserStore()
const { removeLove } = user
const filter = ref('')
const loves = reactive([])

const removeFromWishlist = async (_id) => {
  try {
    console.log(_id)
    console.log(loves)
    // findindex 第一個參數是找每個東西的id
    const idx = loves.findIndex((love) => love._id === _id)

    console.log(loves[idx]._id)
    await removeLove(loves[idx]._id)
    loves.splice(idx, 1)

    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '已從收藏刪除商品'
    })
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '刪除商品失敗'
    })
  }
}

const columns = [
  {
    name: 'name',
    required: true,
    label: '商品名稱',
    align: 'center',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'image',
    required: true,
    label: '商品圖片',
    align: 'center',
    field: row => row.image,
    sortable: true
  },
  {
    name: 'price',
    required: true,
    label: '商品價格',
    align: 'center',
    field: row => row.price,
    sortable: true
  },
  {
    name: 'edit',
    required: true,
    label: '編輯',
    align: 'center'
  },
  {
    name: 'go',
    required: true,
    label: '編輯',
    align: 'center'
  }
];

(async () => {
  try {
    const { data } = await apiAuth.get('/users/love')
    loves.push(...data.result)
    console.log(loves)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得我的收藏失敗'
    })
  }
})()

</script>
