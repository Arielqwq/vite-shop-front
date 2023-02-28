<template lang="pug">
#myfeedback.q-pa-md
  h4.text-center 我的回應
  div(class="q-px-xl q-mt-md")
    q-table(:columns="columns" :rows="feedbacks" row-key="p_id"  :filter="filter")

      //- 過濾
      template(v-slot:top-right)
        q-input(borderless dense debounce="300" v-model="filter" placeholder="Search")
          template( v-slot:append)
            q-icon( name="search")

      //- 狀態圖案顯示
      template(v-slot:body-cell-status="props")
        q-td.text-center
          q-icon(size="md" :name="props.row.status== 0 ?'fa-regular fa-envelope' :'fa-solid fa-envelope-circle-check'")
      //- Invalid Date 修改
      template(v-slot:body-cell-replyDate="props")
        q-td.text-center {{ isNaN(new Date(props.row.replyDate)) ? '未回覆' : new Date(props.row.replyDate).toLocaleDateString() }}

</template>

<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'

const feedbacks = reactive([])

const columns = [
  {
    name: 'title',
    required: true,
    label: '主旨',
    align: 'center',
    field: feedbacks => feedbacks.title,
    sortable: true
  },
  {
    name: 'description',
    required: true,
    label: '我的訊息',
    align: 'center',
    field: feedbacks => feedbacks.description,
    sortable: true
  },
  {
    name: 'createDate',
    required: true,
    label: '寄件時間',
    align: 'center',
    field: feedbacks => new Date(feedbacks.createDate).toLocaleDateString(),
    sortable: true
  },
  {
    name: 'reply',
    required: true,
    label: '管理員回覆',
    align: 'center',
    field: feedbacks => feedbacks.reply,
    sortable: true
  },
  {
    name: 'replyDate',
    required: true,
    label: '回信時間',
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
  }
]

;(async () => {
  try {
    const { data } = await apiAuth.get('/feedbacks')
    feedbacks.push(...data.result)
    console.log(feedbacks)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得回應失敗'
    })
  }
})()
</script>
