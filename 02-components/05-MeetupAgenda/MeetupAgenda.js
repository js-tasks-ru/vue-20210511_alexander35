import MeetupAgendaItem from './MeetupAgendaItem.js';

export default {
	name: 'MeetupAgenda',

	props: {
		agenda: {
			type: Array,
			required: true,
		},
	},

	components: {
		MeetupAgendaItem,
	},

	template: `
    <div class="meetup-agenda">
      <div v-for="agendaItem in agenda">
        <MeetupAgendaItem :agendaItem="agendaItem"></MeetupAgendaItem>
      </div>
    </div>`
};