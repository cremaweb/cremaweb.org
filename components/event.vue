<style scoped>

</style>

<template>
<div class="flex flex-wrap p1">
  <div class="col-12 md-col-4">
    <div class="date h5">{{formatDate}} - {{event.time}}</div>
    <div>
      <img v-bind:src="event.image"
         width="100%"
         height="100%"
         class="flex-none mr2" />
    </div>
  </div>
  <div class="col-12 md-col-8 flex flex-wrap">
    <div class="col-12 title h3 bold p05">{{event.title}}</div>
    <div class="col-12 justify p05">
      {{event.description}}
    </div>
    <div class="col-12 pt1 register white ">
      <a v-bind:href="event.link" target="_blank" class="h4 btn p04 px06 shadow rounded" :class="{'bg-gray': this.past, 'bg-blue': !this.past }">{{ nowToAction }}</a>
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
    eventDate () {
      return moment(this.event.date, 'YYYY-MM-DD')
    },
    formatDate () {
      return this.eventDate.format('D MMMM YYYY')
    },
    past () {
      return moment(moment().format('YYYY-MM-DD')).isAfter(this.eventDate)
    },
    nowToAction () {
      return this.past ? 'Vedi su Meetup' : 'Registrati'
    }
  },
}
</script>