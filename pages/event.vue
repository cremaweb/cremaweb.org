<style scoped>

</style>

<template>
<div class="clearfix">
  <div class="date sm-col sm-col-2 md-col-3">
    <p class="h5">{{formatDate}} - {{time}}</p>
    <img v-bind:src="image"
         width="100%" height="100%"
         class="flex-none mr2" />
  </div>
  <div class="content sm-col sm-col-10 md-col-9">
    <p class="title h3 bold">{{title}}</p>
    <div class="eventdescription">
      <p class="m0">{{description}}</p>
    </div>
    <div class="mb1 register">
      <a v-bind:href="link" target="_blank" class="btn btn-primary" v-bind:class="pastClass">{{action}}</a>
    </div>
  </div>
</div>
</template>

<script>

import moment from 'moment';
export default {
  name: 'event',
    components: {},
    props: {
        title: String,
        date: String,
        time: String,
        image: String,
        description: String,
        link: String,
  },
  data () {
      return {
        past: false,
        action: '',
      }
  },
  mounted () {
      this.past = this.date < moment().format('DD/MM/YYYY');
      this.action = this.past ? 'Vedi su Meetup' : 'Registrati';
  },
  computed: {
      formatDate() {
          return moment(this.date, 'DD/MM/YYYY').format('D MMMM YYYY');
      },
      pastClass: function () {
          return {
              'bg-gray': this.past
          }
      }
  },
}
</script>