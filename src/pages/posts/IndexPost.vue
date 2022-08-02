<template>

  <section class="text-center">
    <div v-if="loading" class="spinner-border text-center text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </section>

  <router-link class="btn btn-primary" :to="{name:'createPost'}">Add Post</router-link>

  <select v-model="selected" @change="userReq" class="form-control" >
    <option disabled value="">choose number of posts</option>
    <option value="10">10 Posts</option>
    <option value="20">20 Posts</option>
    <option value="50">50 Posts</option>
    <option value="100">All Posts</option>
  </select>
<!--  <button @click="userReq">filter</button>-->
  <section v-if="!loading" class="col-4" v-for="post in posts" :key="post.id">
    <Card :post="post" />
  </section>


</template>

<script setup>
import axios from 'axios'
import {computed, ref} from "vue";
import Card from "@/components/posts/Card";

let loading = ref(true)
let posts = ref([])
let selected =ref('10')

 function userReq(){
  axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${selected.value}`)
      .then(response=> {
        posts.value = response.data
        loading.value=false
        console.log('response',response)
      })
      .catch(()=>console.log('error'))
}



userReq()


</script>

<style scoped>

</style>
