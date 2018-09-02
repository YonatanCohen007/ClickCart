<template>
  <div id="app">
    <div>
      <nav></nav>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import navbar from 'navbar.vue';

export default {

  components: {
    'nav': navbar,
  },
}
</script>

<style>

</style>
