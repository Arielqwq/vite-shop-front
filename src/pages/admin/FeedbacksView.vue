<template lang="pug">
#feedbackview.q-pa-md
  h3.text-center 訊息管理
  div(class="q-px-xl q-mt-md")
    q-table(:columns="columns" :rows="feedbacks")
      //- 查詢
      template( v-slot:top-right)
        q-input(  outlined debounce="300" v-model="filter" placeholder="Search")
          template( v-slot:append)
            q-icon( name="search")
      //- 狀態圖案顯示
      template(v-slot:body-cell-status="props")
        q-td.text-center
          q-icon(size="md" :name="props.row.status== 0 ?'fa-regular fa-envelope' :'fa-solid fa-envelope-circle-check'")

      //- 編輯
      template(v-slot:body-cell-edit="data")
        q-td(class="q-pa-md q-gutter-sm")
          q-btn(size="md" round color="primary" text-color="white" icon="edit"  @click="openDialog(feedbacks.findIndex((feedback)=> feedback._id === data.row._id))")

      //- Invalid Date 修改
      template(v-slot:body-cell-replyDate="props")
        q-td.text-center {{ isNaN(new Date(props.row.replyDate)) ? '未回覆' : new Date(props.row.replyDate).toLocaleDateString() }}

    q-dialog(align="center" v-model="form.dialog" persistent)
      q-card( class="column" style="width: 700px; max-width: 80vw;")
        q-form(@submit="onSubmit" @reset="onReset")
          q-card-actions.row.flex.justify-between
            .div(align="left" class="q-pa-md row" )
              .text-center {{ form._id.length > 0 ? '管理者回應' : '新增商品' }}
            q-btn(dense flat icon='close' v-close-popup)
              q-tooltip Close
          q-card-section(align='left').column.q-gutter-md
            .col-12.q-pa-md
              .text-h5 主旨：
              .text-h6 {{ form.title }}
            .col-12.q-pa-md
              .text-h5 內文：
              .text-h6 {{ form.description }}
            .col-12.q-pa-md
              .text-h5 管理者回應：
              q-input(square filled v-model="form.reply" :rules="[rules.required]")
            .col-2.q-pa-md
              .text-h6 請勾選確定回應
              q-checkbox(v-model="form.status")
          q-card-actions(align='right')
            q-btn(:disabled="form.loading" flat label='reset' type="reset" color='red')
            q-btn(:disabled="!form.status" flat label='submit' type="submit" color='green')

</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'

const feedbacks = reactive([])

const rules = {
  required (value) {
    return !!value || '欄位必填'
  }
}

const columns = [
  {
    name: 'username',
    required: true,
    label: '使用者名稱',
    align: 'center',
    field: feedbacks => feedbacks.u_id.username,
    sortable: true
  },
  {
    name: 'title',
    required: true,
    label: '回應主旨',
    align: 'center',
    field: feedbacks => feedbacks.title,
    sortable: true
  },
  {
    name: 'description',
    required: true,
    label: '來信內容',
    align: 'center',
    field: feedbacks => feedbacks.description,
    sortable: true
  },
  {
    name: 'createDate',
    required: true,
    label: '來信時間',
    align: 'center',
    field: feedbacks => new Date(feedbacks.createDate).toLocaleDateString(),
    sortable: true
  },
  {
    name: ' reply',
    required: true,
    label: '管理員回應',
    align: 'center',
    field: feedbacks => feedbacks.reply,
    sortable: true
  },
  {
    name: 'replyDate',
    required: true,
    label: '回覆時間',
    align: 'center',
    field: feedbacks => new Date(feedbacks.replyDate).toLocaleDateString(),
    sortable: true
  },
  {
    name: 'status',
    required: true,
    label: '狀態',
    align: 'center',
    field: feedbacks => feedbacks.status,
    sortable: true
  },
  {
    name: 'edit',
    label: '編輯',
    align: 'center'
  }
]

const form = reactive({
  // 如果 id 有東西就是編輯，沒有是新增
  _id: '',
  u_id: '',
  title: '',
  description: '',
  createDate: '',
  replyDate: '',
  status: '',
  dialog: false,
  reply: '',
  idx: -1
})

const onReset = () => {
  form.reply = null
}

const openDialog = (idx) => {
  console.log(idx)
  // 陣列索引從 0 開始，設定 -1 代表不在陣列裡，為新增商品
  if (idx !== -1) {
    form.u_id = feedbacks[idx].u_id
    form._id = feedbacks[idx]._id
    form.description = feedbacks[idx].description
    form.title = feedbacks[idx].title
    if (feedbacks[idx].status === 1) {
      form.status = true
    } else {
      form.status = false
    }

    form.reply = feedbacks[idx].reply
    form.idx = idx
    form.loading = false
  }
  form.dialog = true
  console.log(form)
}

// 管理員送出回應
const onSubmit = async () => {
  try {
    const { data } = await apiAuth.patch('/feedbacks/' + form._id, form)
    const index = feedbacks.findIndex((item) => item._id === form._id)
    feedbacks[index] = data.result
    form.dialog = false
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}

;(async () => {
  try {
    const { data } = await apiAuth.get('/feedbacks/all')
    feedbacks.push(...data.result)
    console.log(feedbacks)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得所有回應失敗'
    })
  }
}
)()
</script>
