<template lang="pug">
#admin-news.q-pa-md
  h3.text-center 新聞管理
  div(class="q-px-xl row")
    .col-12
      q-btn( @click="openDialog(-1)" color="primary" label="新增貼文")
  div(class="q-px-xl q-mt-md")
    q-table(align="center" :columns="columns" :rows="news" row-key="_id" :filter="filter")
      //- 圖片
      template( v-slot:body-cell-image="props")
        q-td
          img(:src='props.row.image' style='height: 100px;')
      //- 狀態
      template(v-slot:body-cell-sell="props")
        q-td.text-center
          q-icon(size="md" :color="props.row.sell ? 'positive':'negative'" :name="props.row.sell ? 'fa-solid fa-square-check':'fa-solid fa-square-xmark' ")

      //- 搜尋
      template( v-slot:top-right)
          q-input( outlined  debounce="300" v-model="filter" placeholder="Search")
            template( v-slot:append)
              q-icon( name="search")

      //- 編輯按鈕
      template(#body-cell-edit="data")
        q-td(class="q-pa-md q-gutter-sm")
          q-btn( round color="primary" text-color="white" icon="edit"  @click="openDialog(news.indexOf(data.row))")

    q-dialog(align="center" v-model="form.dialog" persistent)
      q-card( class="column" style="width: 700px; max-width: 80vw;")
        q-form(@submit="onSubmit" @reset="onReset")
          q-card-actions.row.flex.justify-between
            .div(align="left" class="q-pa-md row" )
              .text-center {{ form._id.length > 0 ? '編輯貼文' : '新增貼文' }}
            q-btn(dense flat icon='close' v-close-popup)
              q-tooltip Close
          q-card-section.column.q-gutter-md
            .col-12
              q-input(square filled v-model="form.title" label="文章標題" :rules="[rules.required]")
            .col-12
              q-input(square filled v-model="form.description" type="textarea" label="文章內容" :rules="[rules.required]")
            .col-2
              q-checkbox(v-model="form.sell" label="上架")
            .col-5
              .row
                q-img(:src="news[form.idx]?.image" style="height:100px" )
                q-file(filled v-model="form.image" label="請上傳圖片" style="max-height: 50px" :rules="[rules.required]")
                  template(v-slot:append)
                    q-icon(name="close" @click="clear")

          q-card-actions(align='right')
            q-btn(:disabled="form.loading" flat label='reset' type="reset" color='red')
            q-btn(:disabled="form.loading" flat label='submit' type="submit" color='green')

</template>

<script setup>
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'
import { ref, reactive } from 'vue'

const rules = {
  required (value) {
    return !!value || '欄位必填'
  }
}

const clear = () => {
  form.image = []
}
const filter = ref('')
const news = reactive([])

const form = reactive({
  _id: '',
  title: '',
  image: undefined,
  description: '',
  sell: false,
  loading: false,
  dialog: false,
  idx: -1
})

const openDialog = (idx) => {
  console.log(idx)
  if (idx === -1) {
    form._id = ''
    form.title = ''
    form.image = undefined
    form.description = ''
    form.sell = false
    form.loading = false
    form.idx = -1
  } else {
    form._id = news[idx]._id
    form.title = news[idx].title
    form.description = news[idx].description
    form.sell = news[idx].sell
    form.image = news[idx].image
    form.loading = false
    form.idx = idx
  }
  form.dialog = true
}

const columns = [
  {
    name: 'title',
    required: true,
    label: '名稱',
    align: 'center',
    field: news => news.title
  },
  {
    name: 'description',
    required: true,
    label: '內容',
    align: 'center',
    field: news => news.description
  },
  {
    name: 'image',
    required: true,
    label: '圖片',
    align: 'center',
    field: news => news.image
  },
  {
    name: 'sell',
    required: true,
    label: '上架狀態',
    align: 'center',
    field: news => news.sell,
    sortable: true
  },
  {
    name: 'edit',
    required: true,
    label: '編輯',
    align: 'center'
  }
]

const onReset = () => {
  form.title = null
  form.image = undefined
  form.description = null
  form.sell = false
}

const onSubmit = async () => {
  // if (!form.valid) return
  form.loading = true
  // 建立一個新的 formdata 物件
  // fd.append(key, value)
  const fd = new FormData()
  fd.append('title', form.title)
  fd.append('description', form.description)
  fd.append('image', form.image)
  fd.append('sell', form.sell)
  try {
    // 當id長度為 0，新增
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/news', fd)
      news.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/news/' + form._id, fd)
      news[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
  form.loading = false
};

(async () => {
  try {
    const { data } = await apiAuth.get('/news')
    news.push(...data.result)
    console.log(form)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
