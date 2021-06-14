export default {
  name: 'MeetupDescription',

  // Входные параметры
  props: {
    description: {
      type: String,
    },
  },

  template: '<p class="meetup-description" v-html="description"></p>',
};