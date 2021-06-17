export default {
	name: 'MeetupInfo',

	props: {
		organizer: {
			type: String,
			required: true,
		},

		place: {
			type: String,
			required: true,
		},

		date: {
			type: Date,
			required: true,
		},
	},

	computed: {
		textDate() {
			return this.date.toLocaleDateString('en-EN', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			});
		},

		datetime() {
			return this.date.toISOString().split('T')[0];
		},
	},

	template: `
    <ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="datetime">{{ textDate }}</time>
      </li>
    </ul>`,
};