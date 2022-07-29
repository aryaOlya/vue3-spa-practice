<template>
  <section class="text-center">
    <div v-if="loading" class="spinner-border text-center text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </section>


  <section v-if="!loading" class="col-4 text-center" style="margin: 80px auto 480px auto" :key="user.id">
    <div class="card" style="width: 18rem;margin: 0 auto">
      <div class="card-header">
        {{user.name}}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">username: {{user.username}}</li>
        <li class="list-group-item">email: {{user.email}}</li>
        <li class="list-group-item">phone: {{user.phone}}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import {ref} from "vue";
import {useRoute} from "vue-router/dist/vue-router";


let loading = ref(true)
const user = ref({})

function userReq(){
  axios.get(`https://jsonplaceholder.typicode.com/users/${useRoute().params.id}`)
      .then(response=> {
        user.value = response.data
        loading.value=false
      })
      .catch(()=>console.log('error'))
}

userReq()

</script>

<style scoped>

</style>
