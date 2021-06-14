export default {
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },

  // Компонент должен иметь модель
  data() {
    return {
      counter: 0,
    };
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы
  methods: {
    increment() {
      this.counter = this.count;
      this.$emit('increment', ++this.counter);
    },
  },

  // Шаблон потребуется отредактировать
  template: '<button type="button" @click="increment">{{ count }}</button>',
};