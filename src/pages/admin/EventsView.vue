<template lang="pug">
#admin-events.q-pa-md
  h3.text-center 活動管理
  //- div(class="q-px-xl row")
  //-   .col-12
  //-     q-btn( @click="openDialog(-1)" color="primary" label="新增活動")
  div(class="q-px-xl q-mt-md")
    q-table(align="center"  :columns="columns" :rows="events" row-key="_id" :filter="filter")
      //- 新增按鈕
      template(v-slot:top-left)
        .col-12
          q-btn(size="lg" @click="openDialog(-1)" color="primary" label="新增活動")
      //- 搜尋
      template( v-slot:top-right)
          q-input( outlined debounce="300" v-model="filter" placeholder="Search")
            template( v-slot:append)
              q-icon( name="search")
      //- 狀態
      template(v-slot:body-cell-sell="props")
        q-td.text-center
          q-icon(size="md" :color="props.row.sell ? 'positive':'negative'" :name="props.row.sell ? 'fa-solid fa-square-check':'fa-solid fa-square-xmark' ")

      //- 活動名稱顯示
      template(v-slot:body-cell-title="props")
        q-td
          q-btn.lessWord(@click="openParticipantInfo(props.row._id)") {{ props.row.title }}

            //- q-list.rounded-borders(bordered)
            //-   q-expansion-item(expand-separator icon='perm_identity' label='參加者資訊' caption='')
            //-     q-card
            //-       q-card-section
            //-         p

      //- 敘述顯示
      template(v-slot:body-cell-description="props")
        q-td
          p {{ props.row.description }}

      //- 圖片顯示
      template( v-slot:body-cell-image="props")
        q-td.text-center
          img.absolute-center(:src='props.row.image' style='width: 120px;')

      //- 編輯按鈕
      template(#body-cell-edit="data")
        q-td(class="q-pa-md q-gutter-sm")
          q-btn( round color="primary" text-color="white" icon="edit" @click="openDialog(events.findIndex((event)=> event._id === data.row._id))")

    //- 新增、編輯活動
    q-dialog(align="center" v-model="form.dialog" persistent)
      q-card( class="column" style="width: 700px; max-width: 80vw;")
        q-form(@submit="onSubmit" @reset="onReset")
          q-card-actions.row.flex.justify-between
            .div(align="left" class="q-pa-md row" )
              .text-center {{ form._id.length > 0 ? '編輯活動' : '新增活動' }}
            q-btn(dense flat icon='close' v-close-popup)
              q-tooltip Close

          q-card-section.column.q-gutter-md
            .col-12
              q-input(square filled v-model="form.title" label="活動名稱" :rules="[rules.required]")
            .col-6
              q-input(square filled v-model.number="form.price" type="number" prefix="$" label="活動費用" :rules="[rules.price]")
            .col-6
              q-checkbox(v-model="form.sell" label="上架")
            .col-12
              .text-h7.text-left 活動開始日期
              q-input.daysfrom(square filled v-model="form.daysfrom" type="date"  :rules="[rules.required, rules.daysfrom]" @update:model-value="form.daysto = ''")
              //-   p 活動開始日期： {{ days }}
              //- q-date(v-model='form.days' range multiple)
            .col-12
              .text-h7.text-left 活動結束日期
              q-input.daysto(square filled v-model="form.daysto" type="date"  :rules="[rules.required, rules.daysto]" :disable="form.daysfrom.length === 0")
            .col-12
              q-input.daysto(square filled v-model="form.description" type="textarea" label="活動說明" :rules="[rules.required]")
            .col-12
              q-select(filled v-model="form.category" :options="categories" label="活動分類" :rules="[rules.required]")
            .col-2
              q-input(square filled v-model="form.pplNum" type="number" label="人數上限" :rules="[rules.required]" )
            .col-2
              q-input(square filled v-model="form.lecturer" label="講師姓名" )
            .col-2
              q-input(v-bind:disable="form.lecturer.length === 0" square filled v-model="form.lecturerInfo" label="講師簡介" )
            .col-5
              .row
                  q-img(:src="events[form.idx]?.image" style="height:100px")
                  q-file(filled v-model="form.image" label="請上傳圖片" style="max-height: 50px")
                    template(v-slot:append)
                      q-icon(name="close" @click="clear")
          q-card-actions(align='right')
            q-btn(:disabled="form.loading" flat label='reset' type="reset" color='red')
            q-btn(:disabled="form.loading" flat label='submit' type="submit" color='green')

    q-dialog(align="center" v-model="participantInfoDialog" )
      q-card(class="column" style="width: 700px; max-width: 80vw;")
        q-table(:columns="columnsOfEventParti" :rows="participantInfos")

</template>

<script setup>
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
// import { useEventStore } from '@/stores/event'

// const event = useEventStore()
// const { haslecturer } = storeToRefs(event)

const categories = ['體驗', '文章分享', '線上課程', '實體課程', '其他']

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  },
  daysfrom: value => {
    if (!value) {
      return 'Required'
    }
    const today = new Date().toISOString().split('T')[0]
    return value >= today || 'Date must be greater than or equal to today'
  },
  daysto: value => {
    if (!value) return '此欄位必須填寫'
    if (!form.daysfrom) return '活動開始日期必須先輸入'
    return (new Date(value) >= new Date(form.daysfrom)) || '活動結束日期必須大於開始日期'
  }
}

const clear = () => {
  form.image = undefined
}

const hasteacher = () => {
  console.log('123')
}

const events = reactive([])
const filter = ref('')
// const days = ref([])
const participantInfos = reactive([])

const form = reactive({
  // 如果 id 有東西就是編輯，沒有是新增
  _id: '',
  title: '',
  price: 0,
  daysfrom: '',
  daysto: '',
  description: '',
  pplNum: '',
  lecturer: '',
  lecturerInfo: '',
  image: undefined,
  // 預設下架
  sell: false,
  category: '',
  valid: false,
  loading: false,
  dialog: false,
  idx: -1
})

const openDialog = (idx) => {
  // 陣列索引從 0 開始，設定 -1 代表不在陣列裡，為新增活動
  if (idx === -1) {
    form._id = ''
    form.title = ''
    form.price = 0
    form.daysfrom = ''
    form.daysto = ''
    form.description = ''
    form.pplNum = ''
    form.lecturer = ''
    form.lecturerInfo = ''
    form.image = undefined
    form.sell = false
    form.category = ''
    form.valid = false
    form.loading = false
    form.idx = -1
  } else {
    form._id = events[idx]._id
    form.title = events[idx].title
    form.price = events[idx].price
    form.daysfrom = events[idx].daysfrom
    form.daysto = events[idx].daysto
    form.description = events[idx].description
    form.pplNum = events[idx].pplNum
    form.lecturer = events[idx].lecturer
    form.lecturerInfo = events[idx].lecturerInfo
    form.image = undefined
    form.sell = events[idx].sell
    form.category = events[idx].category
    form.valid = false
    form.loading = false
    form.idx = idx
  }
  form.dialog = true
}

const participantInfoDialog = ref(false)

const openParticipantInfo = async (_id) => {
  participantInfoDialog.value = true
  try {
    const { data } = await apiAuth.get('/events/' + _id)
    participantInfos.length = 0
    participantInfos.push(...data.result.participant)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}

const columns = [
  {
    name: 'title',
    required: true,
    label: '名稱',
    align: 'center',
    field: events => events.title
  },
  {
    name: 'daysfrom',
    required: true,
    label: '開始日期',
    align: 'center',
    field: events => events.daysfrom
  },
  {
    name: 'daysto',
    required: true,
    label: '結束日期',
    align: 'center',
    field: events => events.daysto
  },
  // {
  //   name: 'description',
  //   required: true,
  //   label: '簡介',
  //   align: 'center',
  //   field: events => events.description
  // },
  {
    name: 'lecturer',
    required: true,
    label: '講者',
    align: 'center',
    field: events => events.lecturer
  },
  // {
  //   name: 'lecturerInfo',
  //   required: true,
  //   label: '講者簡介',
  //   align: 'center',
  //   field: events => events.lecturerInfo
  // },
  {
    name: 'pplNum',
    required: true,
    label: '人數上限',
    align: 'center',
    field: events => events.pplNum
  },

  {
    name: 'price',
    required: true,
    label: '費用',
    align: 'center',
    field: events => events.price,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'image',
    required: true,
    label: '圖片',
    align: 'center',
    field: events => events.image
  },
  {
    name: 'sell',
    required: true,
    label: '狀態',
    align: 'center',
    field: events => events.sell
  },
  {
    name: 'edit',
    label: '編輯',
    align: 'center'
  }]

const columnsOfEventParti = [
  {
    name: 'account',
    required: true,
    label: '帳號',
    align: 'left',
    field: participantInfos => participantInfos.account
  },
  {
    name: 'email',
    required: true,
    label: '信箱',
    align: 'left',
    field: participantInfos => participantInfos.email,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'phone',
    required: true,
    label: '聯絡電話',
    align: 'left',
    field: participantInfos => participantInfos.phone
  }
]

const onReset = () => {
  form.title = null
  form.price = null
  form.daysfrom = null
  form.daysto = null
  form.description = null
  form.pplNum = null
  form.lecturer = null
  form.lecturerInfo = null
  form.image = undefined
  form.sell = false
  form.category = null
}

const onSubmit = async () => {
  // if (!form.valid) return
  form.loading = true
  // 建立一個新的 formdata 物件
  // fd.append(key, value)
  const fd = new FormData()
  fd.append('title', form.title)
  fd.append('price', form.price)
  fd.append('daysfrom', form.daysfrom)
  fd.append('daysto', form.daysto)
  fd.append('description', form.description)
  fd.append('pplNum', form.pplNum)
  fd.append('lecturer', form.lecturer)
  fd.append('lecturerInfo', form.lecturerInfo)
  fd.append('image', form.image)
  // fd.append('images', form.images)
  console.log(form.images)
  fd.append('sell', form.sell)
  fd.append('category', form.category)
  try {
    // 當id長度為 0，新增
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/events', fd)
      events.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增活動成功'
      })
      console.log(events)
    } else {
      const { data } = await apiAuth.patch('/events/' + form._id, fd)
      events[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯活動成功'
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
    const { data } = await apiAuth.get('/events')
    events.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
<style lang="sass">
.lessWord
  /* 字省略 */
  display: -webkit-box
  overflow: hidden
  text-overflow: ellipsis
  -webkit-line-clamp: 2
  /*省略第n行後的文字*/
  -webkit-box-orient: vertical
  /*設定元素是垂直布局*/
  white-space: nowrap
  overflow: hidden
  text-overflow: ellipsis

</style>
