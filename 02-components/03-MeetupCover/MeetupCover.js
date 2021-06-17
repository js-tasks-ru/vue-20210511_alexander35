export default {
	name: 'MeetupCover',

	props: {
		link: {
			type: String,
		},

		title: {
			type: String,
		},
	},

	computed: {
		coverStyle() {
			return this.link ? { '--bg-url': 'url(' + this.link + ')', } : undefined;
		},
	},

	template: `
    <div class="meetup-cover" :style="coverStyle">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
};