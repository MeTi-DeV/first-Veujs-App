//comment : way to add Vue to js file
const app = Vue.createApp({
  //comment : has data method to implement our logic and variables will be shown in ui
  data() {
    return {
      //c
      counter: 0,
   
    };

  },
  //comment : and other part to define methods will change states
  methods: {
    increase(num) {
      this.counter=this.counter+num;
    },
    decrease(num) {
      if (this.counter == 0) {
        this.counter = 0
      } else {
        this.counter=this.counter-num;
      }
    }
  }
});
//comment : vue will control this section by css id 
app.mount('#events');
