<style scoped>

</style>

<template>
<section class="container">
  <div class="clearfix mxn2">
    <div class="sm-col sm-col-8 md-col-9 px2">
      <!--<a class="link" target="_blank" >-->
      <div v-for="event in events" class='event'>
        <event :event="event"></event>
      </div>
    </div>
    <sidebar></sidebar>
  </div>
</section>
</template>

<script>

import Sidebar from "../components/sidebar.vue"
import Event from "../components/event.vue"
export default {
  name: 'events',
    components: {Sidebar, Event},
    data () {
    return {
      events: [
        {
            title: 'Serverless feat. end-to-end testing',
            date: '2019-01-23',
            time: '18:30',
            image: '/serverless-e2e.png',
            description: `Con i nostri migliori auguri di Buon Anno, annunciamo il nostro primo meetup del 2019!
Ci concentreremo su 2 argomenti:
Alessandro Bellanda ci parlerà di sviluppo Serverless (AWS Lambda) mentre Enrico Fasoli di strumenti per l’end-to-end testing (Cypress.io)
Daremo alla presentazione un taglio molto pratico, mostrando l’uso reale di queste tecnologie e vedendo come possono essere integrate.`,
            link: 'https://www.meetup.com/CremaWeb/events/257746412/',
        },
        {
            title: 'JWT (JSON Web Token)\n',
            date: '2018-12-12',
            time: '19:00',
            image: '/jwt.png',
            description: 'Parleremo di JWT (Json Web Token), un nuovo standard che permette al server di identificare un utente, in modo indipendente dalla provenienza delle richieste. Il protocollo JWT non richiede accessi al file system, garantendo performance e scalabilità garantisce l\'autenticazione da molteplici dispositivi aumenta la sicurezza delle comunicazioni client/server.',
            link: 'https://www.meetup.com/CremaWeb/events/256598659/',
        },
        {
          title: 'IPFS, applicazioni web distribuite "backend-less"',
          date: '2018-11-06',
          time: '19:00',
          image: '/ipfs.png',
          description: 'Conosceremo IPFS (Interplanetary File System) e vedremo come utilizzarlo nell\'ottica di costruire applicazioni web distribuite, che non necessitano di server tradizionali e che restituiscono il controllo agli utenti.',
          link: 'https://www.meetup.com/CremaWeb/events/255741621/',
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