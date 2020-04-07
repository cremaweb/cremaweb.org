<template>
  <div id="body">
    <div class="bg-crema bg-bottom bg-no-repeat bg-cover bg-fixed">
      <section class="logo">
          <img src="/cremaweb.png">
      </section>
      <section class="block header ">
      </section>
    </div>
    <section class="text-white bg-black flex flex-wrap h2 justify-center p02 text-2xl">
      <nuxt-link class="md:pl-1 pt-1" to="/home"><div class="cursor-pointer px2 py-1">Chi Siamo</div></nuxt-link>
      <nuxt-link class="md:pl-1 pt-1" to="/events"><div class="cursor-pointer px2 py-1">Eventi</div></nuxt-link>
      <a class="md:pl-1 pt-1" href="https://join.slack.com/t/cremaweb/shared_invite/zt-39unzead-vFLMaB0dk2oWmmi5ikygWw" target="_blank">
        <div class="cursor-pointer px2 py-1 bg-red-500 rounded"><span class="italic">Join us on</span>  Slack</div>
      </a>
      <nuxt-link class="md:pl-1 pt-1" to="/newsletter"><div class="cursor-pointer px2 py-1 bg-blue-500 rounded">Iscriviti alla Newsletter</div></nuxt-link>
    </section>
    <div class="flex flex-wrap pb3">
      <div class="w-full md:w-2/12"></div>
      <div class="w-full md:w-6/12 ">
        <nuxt/>
      </div>
      <div class="w-full md:w-2/12">
        <sidebar></sidebar>
      </div>
      <div class="w-full md:w-2/12"></div>
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

<style scoped lang="stylus">
  .bg-crema {
    background-image: url('/crema.jpg')
    height 70vh
  }
</style>
