<style scoped>

</style>

<template>
<section class="container">
    <div class="mxn2">
        <div class="sm-col sm-col-8 md-col-9 px2">
            <p class="h2">
                Siamo un gruppo di professionisti, studenti e appassionati del mondo IT.
            </p>
            <p class="h3">
                Organizziamo questo Meetup in Crema (CR) per incontrarci, discutere e condividere informazioni sui temi più svariati relativi a tecnologie Web, best practice di sviluppo, project management, startup e imprenditorialità.
                Se sei interessato a questi argomenti e vuoi entrare in contatto con altri professionisti come te, questo gruppo fa al caso tuo.
            </p>
            <hr>
            <p class="h5">
                CremaWeb è nato come progetto senza scopo di lucro, organizziamo e portiamo avanti le nostre attività con il contributo volontario della community.
            </p>
        </div>
        <sidebar></sidebar>
    </div>
</section>
</template>

<script>

import Sidebar from "./sidebar";
export default {
  name: 'index',
    components: {Sidebar},
    data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>