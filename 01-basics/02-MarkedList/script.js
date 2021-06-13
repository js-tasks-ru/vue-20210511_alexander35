import Vue from './vendor/vue.esm.browser.js';

// From https://jsonplaceholder.typicode.com/comments

const emails = [
	{value: 'Eliseo@gardner.biz', marked: false},
	{value: 'Jayne_Kuhic@sydney.com', marked: false},
	{value: 'Nikita@garfield.biz', marked: false},
	{value: 'Lew@alysha.tv', marked: false},
	{value: 'Hayden@althea.biz', marked: false},
	{value: 'Presley.Mueller@myrl.com', marked: false},
	{value: 'Dallas@ole.me', marked: false},
	{value: 'Mallory_Kunze@marie.org', marked: false},
	{value: 'Meghan_Littel@rene.us', marked: false},
	{value: 'Carmen_Keeling@caroline.name', marked: false},
	{value: 'Veronica_Goodwin@timmothy.net', marked: false},
	{value: 'Oswald.Vandervort@leanne.org', marked: false},
	{value: 'Kariane@jadyn.tv', marked: false},
	{value: 'Nathan@solon.io', marked: false},
	{value: 'Maynard.Hodkiewicz@roberta.com', marked: false},
	{value: 'Christine@ayana.info', marked: false},
	{value: 'Preston_Hudson@blaise.tv', marked: false},
	{value: 'Vincenza_Klocko@albertha.name', marked: false},
	{value: 'Madelynn.Gorczany@darion.biz', marked: false},
	{value: 'Mariana_Orn@preston.org', marked: false},
	{value: 'Noemie@marques.me', marked: false},
	{value: 'Khalil@emile.co.uk', marked: false},
	{value: 'Sophia@arianna.co.uk', marked: false},
	{value: 'Jeffery@juwan.us', marked: false},
	{value: 'Isaias_Kuhic@jarrett.net', marked: false}
];

const app = new Vue({
	data (){
		return {
			emails,
			emailModel: '',
		};
	},
	watch: {
		emailModel(val, old){
			this.updateEmails(val)
		}
	},
	methods: {
		updateEmails() {
			return emails.forEach(function (item, key) {
				if (app.emailModel == 0) {
					item.marked = false
				} else {
					item.marked = (item.value.toLowerCase().indexOf(app.emailModel.toLowerCase()) != -1) ? true : false
				}
			});
		}
	}
});

app.$mount('#app');

// Требуется создать Vue приложение
