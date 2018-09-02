<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    navbar: navbar
  }
}
</script>

<style>

</style>
