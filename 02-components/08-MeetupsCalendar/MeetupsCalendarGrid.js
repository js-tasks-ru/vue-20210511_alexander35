export default {
	name: 'MeetupsCalendarGrid',

	props: {
		meetups: {
			type: Array,
			required: true,
		},
		currentDate: {
			type: Date,
			required: true,
		}
	},

    computed: {
	    currentDateTitle() {
		    return this.currentDate.toLocaleDateString(navigator.language, {  month: 'long' }) + ' ' + this.currentDate.getFullYear()
	    },

	    daysInMonth () {
		    let prevMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0)
		    let currentMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0)

		    let daysOfPrevMonth = prevMonth.getDate()
		    let daysOfCurrentMonth = currentMonth.getDate()
		    let firstDayOfWeek = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);

		    let result = [];
	    	for(let i = 0; i < firstDayOfWeek.getDay() - 1; i++){
	    		let key = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), firstDayOfWeek.getDay() - (i + 2)).toLocaleDateString();
	    		let dayMeetups = [...this.meetups].filter(_meetup => new Date(_meetup.date).toLocaleDateString() == key);

	    		result.unshift({
				    title: daysOfPrevMonth - i,
				    active: false,
				    meetups: dayMeetups
	    		});
		    }

		    for(let i = 0; i < daysOfCurrentMonth; i++){
			    let key = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i + 1).toLocaleDateString();
			    let dayMeetups = [...this.meetups].filter(_meetup => new Date(_meetup.date).toLocaleDateString() == key);

			    result.push({
				    title: i + 1,
				    active: true,
				    meetups: dayMeetups
			    });
		    }

		    return result;
	    }
    },

    methods: {
	    prevMonth() {
		    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()-1, 1)
	    },

	    nextMonth() {
		    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()+1, 1)
	    },
    },

	template: `
      <div class="rangepicker__date-grid">
        <div class="rangepicker__cell" :class="{ rangepicker__cell_inactive: !day.active }" v-for="day in daysInMonth">
        	{{ day.title }}
    		<a v-if="day.meetups" v-for="meetup in day.meetups" class="rangepicker__event">{{ meetup.title }}</a>
        </div>
      </div>`,
};