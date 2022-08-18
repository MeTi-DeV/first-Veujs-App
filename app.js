const app = Vue.createApp({
  data() {
    return {
      name: '',
      confirmName: '',
      counter: 0,
      //comment : here define boxes objects
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };

  },


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
    confirmInput() {
      this.confirmName = this.name;
    },
    resetInput() {
      this.name = ''
    },
    // submitForm() {
    //   alert("Hello " + this.confirmName);
    // }
//comment : here I defind a method to compare state of each box status is true or false
    boxSelected(box) {
      if (box === 'A') {
        return this.boxASelected = !this.boxASelected
      } else if (box === 'B') {
        return this.boxBSelected = !this.boxBSelected
      } else if (box === 'C') {
        return this.boxCSelected = !this.boxCSelected
      }
    }
  }
});
app.mount('#events');
