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
  </div>


</template>

<script setup>
import {defineProps} from "vue";
import {useRoute} from "vue-router/dist/vue-router";
const props = defineProps(['post'])

</script>

<style scoped>
.card{
  margin: 10px;
}
</style>
