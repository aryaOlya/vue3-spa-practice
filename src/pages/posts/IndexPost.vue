<template>

  <section class="text-center">
    <div v-if="loading" class="spinner-border text-center text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </section>

  <router-link class="btn btn-primary" :to="{name:'createPost'}">Add Post</router-link>
  <section v-if="!loading" class="col-4" v-for="post in posts" :key="post.id">
    <Card :post="post" />
  </section>


</template>

<script setup>
import axios from 'axios'
import {ref} from "vue";
import Card from "@/components/posts/Card";

let loading = ref(true)
let posts = ref([])

function userReq(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response=> {
        posts.value = response.data
        loading.value=false
      })
      .catch(()=>console.log('error'))
}

userReq()

</script>

<style scoped>

</style>
