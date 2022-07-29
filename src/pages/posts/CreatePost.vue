<template>
  <section class="col-md-6" style="margin: 0 auto">
    <h2 class="mb-3 text-center">Create Post</h2>
    <form @submit.prevent="validate">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">title:</label>
        <input type="text" v-model.lazy.trim="form.title" name="title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <section class="form-text text-danger" >
          {{form.titleErrors}}
        </section>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">body:</label>
        <textarea v-model.lazy.trim="form.body"  class="form-control" name="body" id="exampleInputPassword1" cols="30" rows="10"></textarea>
        <section class="form-text text-danger">
          {{form.bodyErrors}}
        </section>
      </div>
      <section class="text-center mb-3" >
        <button type="submit" class="btn btn-primary" :disabled="loading">
          <div v-if="loading" class="spinner-border spinner-border-sm text-light" role="status">
          </div>
          create
        </button>
      </section>
    </form>
  </section>
</template>

<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
import Swal from 'sweetalert2'

  const form = reactive({
    title:'',
    body:'',
    titleErrors:'',
    bodyErrors:''
  })

  let loading = ref(false)

  function validate(){
    loading.value = true
    if (form.title === ''){
      form.titleErrors = 'مقدار تایتل ضروری است'
      console.log(form.titleErrors)
      loading.value = false
    }else{
      form.titleErrors=''
      console.log(form.titleErrors)
    }
    if (form.body === ''){
      form.bodyErrors = 'مقدار متن اصلی ضروری است'
      console.log(form.titleErrors)
      loading.value = false
    }
    else{
      form.bodyErrors=''
      console.log(form.bodyErrors)
    }
    if (form.title !='' && form.body !=''){
      createPost()
    }
  }

  function createPost(){
    axios.post('https://jsonplaceholder.typicode.com/posts',{
      title:form.title,
      body:form.body,
      userId: 1
    })
        .then(response => {
          console.log(response)
          loading.value = false
          Swal.fire(`title ${form.title} created successfully`)
    })
    .catch(()=>{
      console.log('error')
      loading.value = false
      Swal.fire({
        icon: 'error',
        text: 'Something went wrong!',
      })
    })
  }

</script>

<style scoped>

</style>
