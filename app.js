const app = Vue.createApp({
  data() {
    return {
      name: '',
      confirmName: '',
      counter: 0,

    };

  },
  methods: {
    increase(num) {
      this.counter = this.counter + num;
    },
    decrease(num) {
      if (this.counter == 0) {
        this.counter = 0
      } else {
        this.counter = this.counter - num;
      }
    },
    setName(event, lastname) {
      this.name = event.target.value + lastname;
    },
    confirmInput() {
      this.confirmName = this.name;
    },
    submitForm() {
      alert("Hello " + this.confirmName);
    }
  }
});
//comment : vue will control this section by css id 
app.mount('#events');
