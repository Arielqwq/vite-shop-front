<template lang="pug">
#feedbackview
  h3.text-center 回應管理
    .div(class="q-px-xl row")
      .col-12
        q-table(:columns="columns" :rows="feedbacks")
          //- 狀態圖案顯示
          template(v-slot:body-cell-status="props")
            q-td
              q-icon(size="md" :name="props.row.status== 0 ?'fa-regular fa-envelope' :'fa-solid fa-envelope-circle-check'")

          //- 編輯
          template(v-slot:body-cell-edit="data")
            q-td(class="q-pa-md q-gutter-sm")
              q-btn(size="md" round color="primary" text-color="white" icon="edit"  @click="openDialog(feedbacks.findIndex((feedback)=> feedback._id === data.row._id))")

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
              .text-h5 主旨
              .text-h6 {{ form.title }}
            .col-12.q-pa-md
              .text-h5 內文
              .text-h6 {{ form.description }}
            .col-12
              q-input(square filled v-model="form.reply" label="管理者回應" :rules="[rules.required]")
            .col-2
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
    align: 'left',
    field: feedbacks => feedbacks.u_id.username,
    sortable: true
  },
  {
    name: 'title',
    required: true,
    label: '回應主旨',
    align: 'left',
    field: feedbacks => feedbacks.title,
    sortable: true
  },
  {
    name: 'description',
    required: true,
    label: '來信內容',
    align: 'left',
    field: feedbacks => feedbacks.description,
    sortable: true
  },
  // {
  //   name: 'date',
  //   required: true,
  //   label: '來信時間',
  //   align: 'left',
  //   field: feedbacks => new Date(feedbacks.date).toLocaleDateString(),
  //   sortable: true
  // },
  {
    name: ' reply',
    required: true,
    label: '管理員回應',
    align: 'left',
    field: feedbacks => feedbacks.reply,
    sortable: true
  },
  {
    name: 'status',
    required: true,
    label: '狀態',
    align: 'left',
    field: feedbacks => feedbacks.status,
    sortable: true
  },
  {
    name: 'edit',
    label: '編輯',
    align: 'left'
  }
]

const form = reactive({
  // 如果 id 有東西就是編輯，沒有是新增
  _id: '',
  u_id: '',
  title: '',
  description: '',
  // 預設下架
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
