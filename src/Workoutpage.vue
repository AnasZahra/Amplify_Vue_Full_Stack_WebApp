<template>
  <div>
  
    <Header></Header>

    <router-view />


    <section class="features" id="features">

    

        <h2 class="titel">Choose your favourite Workout</h2>
        <button @click="createGymPlan">Generate Gym Plan</button>

      <div class="content">



        <div class="card">
          <div class="icon">
            <i class="fa-solid fa-dumbbell"></i>
          </div>
          <div class="info">
            <h3>Personalized Workouts</h3>
            <p>Create a customized workout plan in minutes</p>
          </div>
        </div>


        <div class="card">
          <div class="icon">
            <i class="fa-solid fa-brain"></i>
          </div>
          <div class="info">
            <h3>Find Your Training Style</h3>
            <p>Discover the perfect training method for you</p>
          </div>
        </div>


        <div class="card">
          <div class="icon">
            <i class="fa-solid fa-heart-pulse"></i>
          </div>
          <div class="info">
            <h3>Track Your Progress</h3>
            <p>Stay on top of your fitness journey and track all your workouts</p>
          </div>
        </div>


                <div class="card">
          <div class="icon">
            <i class="fa-solid fa-dumbbell"></i>
          </div>
          <div class="info">
            <h3>Personalized Workouts</h3>
            <p>Create a customized workout plan in minutes</p>
          </div>
        </div>


        <div class="card">
          <div class="icon">
            <i class="fa-solid fa-brain"></i>
          </div>
          <div class="info">
            <h3>Find Your Training Style</h3>
            <p>Discover the perfect training method for you</p>
          </div>
        </div>


        <div class="card">
          <div class="icon">
            <i class="fa-solid fa-heart-pulse"></i>
          </div>
          <div class="info">
            <h3>Track Your Progress</h3>
            <p>Stay on top of your fitness journey and track all your workouts</p>
          </div>
        </div>

                <div class="card">
          <div class="icon">
            <i class="fa-solid fa-heart-pulse"></i>
          </div>
          <div class="info">
            <h3>Track Your Progress</h3>
            <p>Stay on top of your fitness journey and track all your workouts</p>
          </div>
        </div>


        


      </div>
    </section>

    <Footer></Footer>

  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Workoutpage",
  components: {
    Header,
    Footer,
  },
  methods: {
    createGymPlan() {
      // Example logic for generating a gym plan
      const exercises = ["Push-ups", "Squats", "Bench Press", "Plank", "Deadlift"];
      const plan = [];

      // Generate a plan with 3 random exercises
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * exercises.length);
        const exercise = exercises[randomIndex];
        plan.push(exercise);
      }

      console.log(plan);
    },
  },
};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
@import url("./src/assets/base.css");

/* Add your additional styles here */
</style>
