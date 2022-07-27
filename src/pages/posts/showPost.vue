<template>
  <section class="text-center">
    <div v-if="loading" class="spinner-border text-center text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </section>


  <section v-if="!loading" class="col-4" :key="post.id">
    <button class="btn btn-secondary">Update</button>
    <div class="card" style="width: 18rem;">
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

userReq()

</script>

<style scoped>

</style>
