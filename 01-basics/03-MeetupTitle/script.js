import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
	data (){
		return {
			selectedItem: null,
			title: null,
			isLoading: false,
		};
	},
	methods: {
		loadMeetup(id){
			this.isLoading = true
			fetch('https://course-vue.javascript.ru/api/meetups/' + id)
				.then(response => response.json())
				.then(jsonResponse => {
					this.isLoading = false
					this.title = jsonResponse.title
				})
		},
	},
	watch: {
		selectedItem(val, old){
			if(val && val != old){
				this.loadMeetup(val)
			}
		}
	},
});

app.$mount('#app');
