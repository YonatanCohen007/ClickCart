<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
  <a class="navbar-brand" href="#">
    <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Click Cart
  </a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/">
            <a class="nav-link"> Products </a>
        </router-link>
      </li>
    </ul>
    <span>
        <router-link to="/Cart">
            <button type="button" class="btn btn-outline-dark"> Cart </button>
        </router-link>
    </span>
  </div>
</nav>
</template>

<script>
  export default {
    
  }

</script>