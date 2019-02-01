<style lang="stylus">
</style>

<template>
  <div id="body">
    <div class="parallax">
      <section class="logo">
          <img src="/cremaweb.png">
      </section>
      <section class="block header">
      </section>
      <section class="nav flex flex-wrap h2 justify-center p02">
        <a href="/home" class="btn px2 py02 white"><div>Chi Siamo</div></a>
        <a href="/events" class="btn px2 py02 white"><div>Eventi</div></a>
        <a href="/newsletter" class="btn px2 py02 white bg-blue rounded"><div>Iscriviti alla Newsletter</div></a>
      </section>
    </div>
    <div class="flex flex-wrap pb3">
      <div class="col-12 md-col-2"></div>
      <div class="col-12 md-col-6 ">
        <nuxt/>
      </div>
      <div class="col-12 md-col-2">
        <sidebar></sidebar>
      </div>
      <div class="col-12 md-col-2"></div>
    </div>
  </div>
</template>

<script>

import Sidebar from '../components/sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>
