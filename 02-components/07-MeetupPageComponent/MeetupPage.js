import MeetupView from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export default {
	name: 'MeetupPage',

	data() {
		return {
			meetup: null,
		};
	},

	components: {
		MeetupView,
	},

	mounted() {
		fetchMeetup(MEETUP_ID).then((jsonResponse) => {
			this.meetup = jsonResponse;
		});
	},

	template: `
    <div>
        <MeetupView v-if="meetup" :meetup="meetup"></MeetupView>
    </div>`
};