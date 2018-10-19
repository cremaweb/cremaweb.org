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
    <div class="sm-col sm-col-4 md-col-3 px2 sm-show">
      <p class="h3">Join Us:</p>
      <ul class="list-reset">
        <li v-for="contact in contacts"><a class="link" target="_blank" v-bind:href="contact.href"><img class="icon" v-bind:alt="contact.alt" v-bind:src="contact.image"><span>{{contact.title}}</span></a></li>
      </ul>
      <p class="h3">Sponsored By:</p>
      <ul class="list-reset">
        <li v-for="sponsor in sponsors"><a class="link"target="_blank" v-bind:href="sponsor.href"><img class="icon" v-bind:alt="sponsor.alt" v-bind:src="sponsor.image"></a></li>
      </ul>
      <p class="h3" >Hosted By:</p>
      <ul class="list-reset">
        <li v-for="host in hosts"><a class="link" target="_blank" v-bind:href="host.href"><img class="icon" v-bind:alt="host.alt" v-bind:src="host.image"></a></li>
      </ul>
    </div>
  </div>
</section>
</template>

<script>

export default {
  name: 'event',
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
      contacts: [
        {
            image: '/meetup.png',
            alt: 'Meetup',
            href: 'https://www.meetup.com/CremaWeb/',
            title: 'CremaWeb',
        },
        {
          image: '/slack.png',
          alt: 'Slack',
          href: 'https://join.slack.com/t/cremaweb/shared_invite/enQtMjU2NTM3ODAxMjM3LTE5ZTczMTUyMjQ2OGY4YzE0YTA4NDUxMTA0NDU5ZGQxYzA1ZWY4YTliNmY4ZTlkZjhhOTNjYzBkMWMzYjMyZTM',
          title: 'cremaweb.slack.com',
        },
        {
          image: '/facebook.png',
          alt: 'Facebook',
          href: 'https://www.facebook.com/cremawebcommunity',
          title: 'cremawebcommunity',
        },
        {
          image: '/twitter.png',
          alt: 'Twitter',
          href: 'https://twitter.com/cremaweb',
          title: '@cremaweb',
        },
      ],
      sponsors: [
        {
          image: '/dflabs.png',
          alt: 'DFLabs',
          href: 'https://dflabs.com',
        },
        {
            image: '/esc.png',
            alt: 'ESC',
            href: 'https://esconsulting.it',
        },
        {
          image: '/nealis.png',
          alt: 'Nealis',
          href: 'https://nealis.it',
        },
      ],
      hosts: [
        {
          image: '/rei.png',
          alt: 'Rei - Reindustria innovazione',
          href: 'http://www.reindustria.com',
        },
      ]
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>