export default {
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  methods: {
    increment() {
      this.$emit('increment', ++this.count);
    },
  },

  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="increment">{{ count }}</button>',
};