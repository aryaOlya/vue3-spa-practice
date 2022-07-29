<template>
  <footer>
    {{info}} <a :href="{githubLink}">aryaOlya</a>
  </footer>
</template>

<script setup>
  import {ref} from "vue";

  let info = ref('created by')
  let githubLink = ref('https://github.com/aryaOlya')
</script>

<style scoped>
footer{
  width: 100%;
  height: 50px;
  background-color: #F8F9FA;
  color: #181819;
  text-align: center;
  line-height: 50px;
}
</style>
