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
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
