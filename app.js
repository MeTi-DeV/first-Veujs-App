const app = Vue.createApp({
  data() {
    return {
      goals: [],
      entredGoalValue: '',
    };
  },
  methods: {
    //comment : method to add new goal to list
    addGoal(){
      this.goals.push(this.entredGoalValue);
      console.log(this.goals.length)
    }
  }
});

app.mount('#user-goals');
