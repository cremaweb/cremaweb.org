<style scoped>

</style>

<template>
<section class="container">
  <div class="clearfix mxn2">
    <div class="sm-col sm-col-8 md-col-9 px2">
      <a class="link" target="_blank" v-bind:href="event.link" v-for="event in events">
        <div class='event'>
          <p class="h2 bold">{{event.title}}</p>
          <p class="h3">{{event.date}} - {{event.time}}</p>
          <div class="flex mb2">
            <img v-bind:src="event.image"
              width="96" height="96"
              class="flex-none mr2" />
            <div class="eventdescription flex-auto">
              <p class="m0">{{event.description}}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <sidebar></sidebar>
  </div>
</section>
</template>

<script>

import Sidebar from "./sidebar";
export default {
  name: 'event',
    components: {Sidebar},
    data () {
    return {
      events: [
        {
          title: 'IPFS',
          date: '06 Novembre 2018',
          time: '19:30',
          image: '/ipfs.png',
          description: 'Descrizione evento IPFS',
          link: 'https://meetup.com/CremaWeb'
        },
      ],
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>