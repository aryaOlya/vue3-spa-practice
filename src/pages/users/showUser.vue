<template>
  <section class="text-center">
    <div v-if="loading" class="spinner-border text-center text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </section>


  <section v-if="!loading" class="col-4" :key="user.id">
    <Card :user="user" />
  </section>
</template>

<script setup>
import axios from "axios";
import {ref} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
import Card from '../../components/users/card'

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
