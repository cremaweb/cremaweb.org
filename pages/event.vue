<style scoped>

</style>

<template>
<section class="container">
  <div class="clearfix mxn2">
    <div class="sm-col sm-col-8 md-col-9 px2">
      <!--<a class="link" target="_blank" >-->
        <div  v-for="event in events" class='event'>
          <div class="clearfix">
            <div class="date sm-col sm-col-2 md-col-3">
              <p class="h5">{{event.date}} - {{event.time}}</p>
              <img v-bind:src="event.image"
                   width="100%" height="100%"
                   class="flex-none mr2" />
            </div>
            <div class="content sm-col sm-col-10 md-col-9">
              <p class="title h3 bold">{{event.title}}</p>
              <div class="eventdescription">
                <p class="m0">{{event.description}}</p>
              </div>
              <div class="mb1 register">
                <a v-bind:href="event.link" target="_blank" class="btn btn-primary bg-red">Registrati</a>
              </div>
            </div>
          </div>
        </div>
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
          title: 'IPFS, applicazioni web distribuite "backend-less"',
          date: '06 Novembre 2018',
          time: '19:00',
          image: '/ipfs.png',
          description: 'Conosceremo IPFS (Interplanetary File System) e vedremo come utilizzarlo nell\'ottica di costruire applicazioni web distribuite, che non necessitano di server tradizionali e che restituiscono il controllo agli utenti.',
          link: 'https://www.meetup.com/CremaWeb/events/255741621/'
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