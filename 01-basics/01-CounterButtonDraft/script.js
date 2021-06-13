import Vue from './vendor/vue.esm.browser.js';

const app = new Vue({
	data() {
		return {
			counter: 0
		};
	},
	methods: {
		incrementCounter() {
			this.counter++
		}
	}
});

app.$mount('#app');