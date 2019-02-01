<style scoped>

</style>

<template>
  <div class="px1">
    <p class="h3">Join Us:</p>
    <ul class="list-reset">
        <li v-for="contact in contacts"><a class="link" target="_blank" v-bind:href="contact.href"><img class="icon" v-bind:alt="contact.alt" v-bind:src="contact.image"><span>{{contact.title}}</span></a></li>
    </ul>
    <p class="h3">Sponsored By:</p>
    <ul class="list-reset">
        <li v-for="sponsor in sponsors"><a class="link"target="_blank" v-bind:href="sponsor.href"><img class="icon2" v-bind:alt="sponsor.alt" v-bind:src="sponsor.image"></a></li>
    </ul>
    <p class="h3" >Hosted By:</p>
    <ul class="list-reset">
        <li v-for="host in hosts"><a class="link" target="_blank" v-bind:href="host.href"><img class="icon2" v-bind:alt="host.alt" v-bind:src="host.image"></a></li>
    </ul>
  </div>
</template>

<script>

    export default {
        name: 'sidebar',
        data () {
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