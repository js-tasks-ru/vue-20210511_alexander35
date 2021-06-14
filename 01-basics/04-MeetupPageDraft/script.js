import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов пунктов программы
 */
const agendaItemDefaultTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

const app = new Vue({
  data (){
    return {
      meetup: null,
      isLoading: false,
    };
  },
  computed: {
    localeDate() {
      if (this.meetup && this.meetup.date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        let meetupDate = new Date(this.meetup.date);
        return meetupDate.toLocaleDateString('ru-RU', options);
      }
      return null;
    },

    coverStyle() {
      return this.meetup.imageId
          ? {
            '--bg-url': 'url(' + getImageUrlByImageId(this.meetup.imageId) + ')',
          }
          : undefined;
    },

    agendaItems() {
      if (!this.meetup) return null;

      return this.meetup.agenda.map((agenda) => {
        return {
          agenda,
          agendaIcon: '/assets/icons/icon-' + this.getAgendaIcon(agenda.type) + '.svg',
          agendaTypeWord: this.getAgendaTitle(agenda.type),
        };
      });
    },
  },
  methods: {
    loadMeetup(id){
      this.isLoading = true
      fetch(API_URL + `/meetups/${id}`)
          .then((response) => response.json())
          .then((jsonResponse) => {
            this.isLoading = false;
            this.meetup = jsonResponse;
          });
    },
    getAgendaIcon(type) {
      return agendaItemIcons[type];
    },
    getAgendaTitle(type) {
      return agendaItemDefaultTitles[type];
    },
  },
  mounted() {
    this.loadMeetup(MEETUP_ID);
  }
});

app.$mount('#app');
