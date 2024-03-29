import { agendaItemIcons, agendaItemDefaultTitles } from './data.js';

export default {
	name: 'MeetupAgendaItem',

	props: {
		agendaItem: {
			type: Object,
			required: true,
		},
	},

	computed: {
		icon() {
			return '/assets/icons/icon-' + agendaItemIcons[this.agendaItem.type] + '.svg';
		},

		title() {
			return this.agendaItem.title ? this.agendaItem.title : agendaItemDefaultTitles[this.agendaItem.type];
		},
	},

	template: `
      <div class="meetup-agenda__item">
        <div class="meetup-agenda__item-col">
          <img class="icon" alt="icon" :src="icon" />
        </div>
        <div class="meetup-agenda__item-col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
        <div class="meetup-agenda__item-col">
          <h5 class="meetup-agenda__title">{{ title }}</h5>
          <p v-if="agendaItem.type === 'talk'">
            <span>{{ agendaItem.speaker }}</span>
            <span class="meetup-agenda__dot"></span>
            <span class="meetup-agenda__lang">{{ agendaItem.language }}</span>
          </p>
          <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
        </div>
      </div>`
};