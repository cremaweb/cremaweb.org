<style scoped>

</style>

<template>
  <div class="p1 justify-center">
    <div v-for="(event, index) in events" :key="index" class='event'>
      <event :event="event"></event>
    </div>
  </div>
</template>

<script>

import Event from "../components/event.vue"
export default {
  name: 'events',
    components: {
      Event,
    },
    data () {
    return {
      events: [
        {
          title: 'Remote Working: Opportunità e Pericoli',
          date: '2019-03-27',
          time: '18:30',
          image: '/remoteworking.png',
          description: `Sempre più professionisti, sviluppatori e non, richiedono il remote-working per collaborare con le aziende. Nel prossimo evento di #CremaWeb, Massimo Riva ci parlerà di quali sono i benefici e le sfide da affrontare!`,
          link: 'https://www.meetup.com/CremaWeb/events/259709974/',
        },
        {
          title: 'NextCloud',
          date: '2019-02-27',
          time: '18:30',
          image: '/nextcloud.png',
          description: `Il nostro prossimo appuntamento di #CremaWeb sarà dedicato a NextCloud. Paolo Finardi ci parlerà di questa piattaforma Open Source e perchè può essere interessante come strumento aziendale. Verranno mostrate e descritte le principali caratteristiche confrontandolo con quelle di alcuni dei suoi principali competitor.`,
          link: 'https://www.meetup.com/CremaWeb/events/258904615/',
        },
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
