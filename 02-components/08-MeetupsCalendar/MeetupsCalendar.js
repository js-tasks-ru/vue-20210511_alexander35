/*
  Полезные функции по работе с датой можно описать вне Vue компонента
 */

import MeetupsCalendarGrid from './MeetupsCalendarGrid.js';

export default {
	name: 'MeetupsCalendar',

    components: {
	    MeetupsCalendarGrid
    },

	data() {
		return {
			currentDate: null,
		};
	},

	props: {
		meetups: {
			type: Array,
			required: true,
		}
	},

    created() {
	    this.currentDate = new Date()
    },

    computed: {
	    localMeetups() {
		    return [...this.meetups].sort((a, b) => {
			    return a.date - b.date
		    })
	    },
	    currentDateTitle() {
		    return this.currentDate.toLocaleDateString(navigator.language, {  month: 'long' }) + ' ' + this.currentDate.getFullYear()
	    },
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
    <div class="rangepicker">
        <div class="rangepicker__calendar">
          <div class="rangepicker__month-indicator">
            <div class="rangepicker__selector-controls">
              <button class="rangepicker__selector-control-left" @click="prevMonth"></button>
              <div>{{ currentDateTitle }}</div>
              <button class="rangepicker__selector-control-right" @click="nextMonth"></button>
            </div>
          </div>
          <meetups-calendar-grid :meetups="localMeetups" :currentDate="currentDate"></meetups-calendar-grid>
        </div>
    </div>`,
};
