<template>
  <div class="card" style="width: 18rem;">
    <div class="card-header">
      <router-link :to="{name:'showPost',params:{id:props.post.id}}">{{props.post.title}}</router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        {{props.post.body}}
      </li>
    </ul>
    <div class="card-footer d-flex justify-content-between ">
      <button class="btn btn-danger btn-sm" @click="deletePost">delete</button>
      <router-link class="btn btn-success btn-sm" :to="{name:'updatePost',params:{id:props.post.id}}">update</router-link>
    </div>
  </div>


</template>

<script setup>
import {defineProps} from "vue";
import axios from "axios";
import Swal from "sweetalert2";
const props = defineProps(['post'])

function deletePost() {
  axios.delete(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`, {}).then(response => {
    console.log(response)
    Swal.fire(`title ${props.post.title} deleted successfully`)
  })
      .catch(() => {
        console.log('error')
        Swal.fire({
          icon: 'error',
          text: 'Something went wrong!',
        })
      })
}

</script>

<style scoped>
.card{
  margin: 10px;
}
</style>
