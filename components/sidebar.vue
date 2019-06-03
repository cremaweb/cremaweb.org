<style scoped>

</style>

<template>
  <div class="p-4">
    <p class="text-2xl pt-2">Join Us:</p>
    <ul class="flex flex-wrap justify-center border-b pb-2">
        <div v-for="(contact, index) in contacts" :key="index" class="w-full pt-3 flex justify-center"><a class="link flex items-center" target="_blank" v-bind:href="contact.href"><img class="icon" v-bind:alt="contact.alt" v-bind:src="contact.image"><span>{{contact.title}}</span></a></div>
    </ul>
    <p class="text-2xl pt-2">Sponsored By:</p>
    <ul class="flex flex-wrap justify-center border-b pb-2">
        <div v-for="(sponsor, index) in sponsors" :key="index" class="w-full pt-3 flex justify-center"><a class="link flex items-center" target="_blank" v-bind:href="sponsor.href"><img class="icon2" v-bind:alt="sponsor.alt" v-bind:src="sponsor.image"></a></div>
    </ul>
    <p class="text-2xl pt-2" >Hosted By:</p>
    <ul class="flex flex-wrap justify-center pb-2">
        <div v-for="(host, index) in hosts" :key="index" class="w-full pt-3 flex justify-center"><a class="link flex items-center" target="_blank" v-bind:href="host.href"><img class="icon2" v-bind:alt="host.alt" v-bind:src="host.image"></a></div>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'sidebar',
    data() {
      return {
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
            image: '/jetbrains.png',
            alt: 'JetBrains',
            href: 'https://www.jetbrains.com',
          },
          {
            image: '/idigital3.png',
            alt: 'iDigital3',
            href: 'http://www.idigital3.com',
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
          {
            image: '/rgweb.png',
            alt: 'rgweb',
            href: 'https://www.rgweb.it/',
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
    computed: {},
    methods: {}
  }
</script>
