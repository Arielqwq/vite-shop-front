<template lang="pug">
#customersview.q-pa-md
  h3.text-center 會員管理
  //- .div(class="q-px-xl row")
    //- .col-12
    //-   q-btn( @click="openDialog(-1)" color="primary" label="新增會員")
  div(class="q-px-xl q-mx-md")
    q-table(:columns="columns" :rows="customers" row-key="_id" :filter="filter" :rows-per-page-options="[5]")
      //- 查詢
      template( v-slot:top-right)
        q-input(  outlined debounce="300" v-model="filter" placeholder="Search")
          template( v-slot:append)
            q-icon( name="search")

      //- 身分別顯示
      template(v-slot:body-cell-role="props")
        q-td.text-center
          q-icon(size="md"  :name="props.row.role == 1 ? 'fa-solid fa-user-gear':'fa-solid fa-user' ")

      //- 編輯
      template(#body-cell-edit="data")
        q-td.text-center
          q-btn( round color="primary" text-color="white" icon="edit" @click="openDialog(customers.findIndex((customer)=> customer._id === data.row._id))")

    //- 新增編輯
    q-dialog(align="center" v-model="form.dialog" persistent)
      q-card( class="column" style="width: 700px; max-width: 80vw;")
        q-form(@submit="onSubmit" @reset="onReset")
          q-card-actions.row.flex.justify-between
            .div(align="left" class="q-pa-md row" )
              .text-center {{ form._id.length > 0 ? '編輯帳號' : '新增帳號' }}
            q-btn(dense flat icon='close' v-close-popup)
              q-tooltip Close
          q-card-section.column.q-gutter-md
            .col-12
              q-input(square filled v-model="form.account" label="帳號" :rules="[rules.required]")
            .col-12
              q-input(square filled v-model="form.password" type="password" label="密碼" :rules="[rules.required]")
            .col-12
              q-input(square filled v-model="form.email" type="email" label="信箱" :rules="[rules.required]")
            .col-12
              q-input(square filled v-model="form.username" type="text" label="姓名")
            .col-12
              q-input(square filled v-model="form.phone" type="phone" label="手機" )
            .col-12
              q-input(square filled v-model="form.birth" type="birth" label="出生年月日" )

          q-card-actions(align='right')
            q-btn(:disabled="form.loading" flat label='reset' type="reset" color='red')
            q-btn(:disabled="form.loading" flat label='submit' type="submit" color='green')
</template>

<script setup>
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'

const customers = reactive([])
const filter = ref('')

const rules = {
  required (value) {
    return !!value || '欄位必填'
  }
}

const form = reactive({
  // 如果 id 有東西就是編輯，沒有是新增
  _id: '',
  account: '',
  password: '',
  email: '',
  username: '',
  phone: '',
  birth: '',
  sell: '',
  loading: false,
  dialog: false,
  idx: -1
})

const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.account = ''
    form.password = ''
    form.email = ''
    form.username = ''
    form.birth = ''
    form.phone = ''
    form.sell = ''
    form.loading = false
    form.dialog = false
    form.idx = -1
  } else {
    form._id = customers[idx]._id
    form.account = customers[idx].account
    form.password = ''
    form.email = customers[idx].email
    form.username = customers[idx].username
    form.birth = customers[idx].birth
    form.phone = customers[idx].phone
    form.sell = customers[idx].sell
    form.loading = customers[idx].loading
    form.dialog = customers[idx].dialog
    form.idx = idx
  }
  form.dialog = true
}

const columns = [
  {
    name: 'account',
    required: true,
    label: '帳號',
    align: 'center',
    field: customers => customers.account
  },
  {
    name: 'email',
    required: true,
    label: '信箱',
    align: 'center',
    field: customers => customers.email,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'username',
    label: '會員姓名',
    align: 'center',
    field: customers => customers.username
  },
  {
    name: 'phone',
    label: '連絡電話',
    align: 'center',
    field: customers => customers.phone
  },
  {
    name: 'role',
    required: true,
    label: '身分別',
    align: 'center',
    field: customers => customers.role
  },
  {
    name: 'edit',
    label: '編輯',
    align: 'center'
  }]

const onReset = () => {
  form.account = null
  form.email = null
  form.username = null
  form.birth = null
  form.phone = null
  form.sell = false
  form.image = undefined
}
const onSubmit = async () => {
  // if (!form.valid) return
  form.loading = true
  // 建立一個新的 formdata 物件
  // fd.append(key, value)
  // const fd = new FormData()
  // fd.append('title', form.title)
  try {
    const { data } = await apiAuth.patch('/users/edituser/', form)
    customers[form.idx] = data.result
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '編輯會員資料成功'
    })
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
    //
    form.dialog = false
    //
  }
  form.loading = false
};

(async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    customers.push(...data.result)
    console.log(customers)
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
