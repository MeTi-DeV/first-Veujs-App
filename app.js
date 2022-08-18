const app = Vue.createApp({
  data() {
    return {
      goals: [],
      entredGoalValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.entredGoalValue);
    }
  }
});

app.mount('#user-goals');
