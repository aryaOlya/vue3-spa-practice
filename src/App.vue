<template>
  <section>
    <header-component></header-component>
    <router-view></router-view>

  </section>
  <FooterComponent></FooterComponent>
</template>

<script setup>
import HeaderComponent from './components/sections/HeaderComponent'
import FooterComponent from './components/sections/footer'


</script>

<style>

</style>
