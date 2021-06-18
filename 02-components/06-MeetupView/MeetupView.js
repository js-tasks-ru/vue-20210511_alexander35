import MeetupCover from './MeetupCover.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupInfo from './MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

export default {
	name: 'MeetupView',

	props: {
		meetup: {
			type: Object,
			required: true,
		},
	},

	components: {
		MeetupCover,
		MeetupDescription,
		MeetupAgenda,
		MeetupInfo,
	},

	computed: {
		imageLink() {
			return getImageUrlByImageId(this.meetup.imageId);
		},

		meetupDate() {
			return new Date(this.meetup.date);
		},
	},

	template: `
    <div>
      <MeetupCover :link="imageLink" :title="meetup.title"></MeetupCover>
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="meetup.description"></MeetupDescription>

            <h3>Программа</h3>
            <MeetupAgenda :agenda="meetup.agenda"></MeetupAgenda>
          </div>
          <div class="meetup__aside">
            <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetupDate"></MeetupInfo>
          </div>
        </div>
      </div>
    </div>`,
};