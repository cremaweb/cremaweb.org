<style scoped>

</style>

<template>
<div class="flex flex-wrap p-1">
  <div class="w-full md:w-4/12">
    <div class="date h5">{{formatDate}} - {{event.time}}</div>
    <div>
      <img v-bind:src="event.image"
         width="100%"
         height="100%"
         class="flex-none mr2" />
    </div>
  </div>
  <div class="w-full md:w-8/12 flex flex-wrap">
    <div class="w-full title text-2xl bold p05">{{event.title}}</div>
    <div class="w-full justify p05">
      {{event.description}}
    </div>
    <div class="w-full pt1 register white ">
      <a v-bind:href="event.link" target="_blank" class="h4 btn p04 px06 shadow rounded" :class="{'bg-grey': this.past, 'bg-blue': !this.past }">{{ nowToAction }}</a>
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