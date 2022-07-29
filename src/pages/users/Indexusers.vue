<template>

    <section class="text-center">
      <div v-if="loading" class="spinner-border text-center text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </section>


      <section v-if="!loading" class="col-4" v-for="user in users" :key="user.id">
        <Card :user="user" />
      </section>


</template>



<script setup>
import axios from 'axios'
import {ref} from "vue";
import Card from "@/components/users/Card";

let loading = ref(true)
let users = ref([])

function userReq(){
  axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response=> {
        users.value = response.data
        loading.value=false
      })
      .catch(()=>console.log('error'))
}

userReq()

</script>

<style scoped>

</style>
