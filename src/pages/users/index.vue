<template>
  <section class="container mt-5">
    <h1>Users List</h1>
    <section class="row">
      <section class="col-md-4" v-for="user in users "  :key="user.id" >
        <card :user="user" ></card>
      </section>
    </section>
  </section>
</template>



<script setup>
import axios from 'axios'
import {ref} from "vue";
import card from '../../components/users/card'

let users = ref([])

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>users.value = response.data)
    .catch(()=>console.log('error'))

</script>

<style scoped>

</style>
