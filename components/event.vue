<style scoped>

</style>

<template>
<div class="clearfix">
  <div class="date sm-col sm-col-2 md-col-3">
    <p class="h5">{{formatDate}} - {{event.time}}</p>
    <img v-bind:src="event.image"
         width="100%"
         height="100%"
         class="flex-none mr2" />
  </div>
  <div class="content sm-col sm-col-10 md-col-9">
    <p class="title h3 bold">{{event.title}}</p>
    <div class="eventdescription">
      <p class="m0">{{event.description}}</p>
    </div>
    <div class="mb1 register">
      <a v-bind:href="event.link" target="_blank" class="btn btn-primary" :class="{'bg-gray': this.past}">{{nowToAction}}</a>
    </div>
  </div>
</div>
</template>

<script>

import moment from 'moment'

export default {
  components: {},
  props: [
    'event'
  ],
  data () {
    return {}
  },
  computed: {
    currentDate () {
      return moment(this.event.date, 'YYYY-MM-DD')
    },
    formatDate () {
      return this.currentDate.format('D MMMM YYYY')
    },
    past () {
      return moment().isAfter(this.currentDate)
    },
    nowToAction () {
      return this.past ? 'Vedi su Meetup' : 'Registrati'
    }
  },
}
</script>