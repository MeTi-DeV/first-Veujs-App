const app = Vue.createApp({
  data() {
    return {
      name: '',
      confirmName: '',
      counter: 0,

    };

  },
  //   comment :  computed use for time that we want to show some data and 
  //we don't need for next time to recalcute that   

  computed: {
    fullName() {
      if (this.name === '') {
        return '';
      } else {
        return this.name + ' ' + 'Zarei'
      }
    }
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
      this.name = event.target.value;
    },
    //comment : if we call this method here to show name every time for each 
    // method that executed this method will execute too
    confirmInput() {
      this.confirmName = this.name;
    },
    resetInput() {
      this.name = ''
    }
    // submitForm() {
    //   alert("Hello " + this.confirmName);
    // }
  }
});
app.mount('#events');
