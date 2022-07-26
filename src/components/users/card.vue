<template>
  <div class="card" style="width: 18rem;">
    <div class="card-header">
      {{props.user.name}}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">username: {{props.user.username}}</li>
      <li class="list-group-item">email: {{props.user.email}}</li>
      <li class="list-group-item">phone: {{props.user.phone}}</li>
    </ul>
  </div>


</template>

<script setup>
import {defineProps} from "vue";

const props =defineProps(['user'])

</script>

<style scoped>
.card{
  margin: 10px;
}
</style>
