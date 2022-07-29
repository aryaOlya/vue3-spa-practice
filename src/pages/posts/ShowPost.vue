<template>
  <section class="text-center">
    <div v-if="loading" class="spinner-border text-center text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </section>

  <router-link class="btn btn-success" :to="{name:'updatePost',params:{id:useRoute().params.id}}">update</router-link>
  <button class="btn btn-danger" @click="deletePost">delete</button>
  <section v-if="!loading" class="col-4 text-center" style="margin: 80px auto 480px auto" :key="post.id">

    <div class="card" style="width: 18rem;margin: 0 auto">
      <div class="card-header">
        {{post.title}}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{post.body}}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import {ref} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
import Swal from "sweetalert2";


let loading = ref(true)
const post = ref({})

function userReq(){
  axios.get(`https://jsonplaceholder.typicode.com/posts/${useRoute().params.id}`)
      .then(response=> {
        post.value = response.data
        loading.value=false
      })
      .catch(()=>console.log('error'))
}

function deletePost() {
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.value.id}}`, {}).then(response => {
    console.log(response)
    Swal.fire(`title ${post.value.title} deleted successfully`)
  })
      .catch(() => {
        console.log('error')
        Swal.fire({
          icon: 'error',
          text: 'Something went wrong!',
        })
      })
}

userReq()

</script>

<style scoped>

</style>
