<template>
    <div>
      

      <router-view />
  
      <section class="main" id="Home">
        <div>
          <h2>Your Workout.<br><span>Your Day.</span></h2>
          <h3>Get your daily dose of movement from home<br>or on the go with over 500 workouts for your level & goals.</h3>
          <a href="/profile" class="main-btn-up">Create an account</a>
          
        </div>
      </section>
  
      <section class="features" id="features">
        <h2 class="titel">improve your own workout plan with GymTimer</h2>
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
        </div>
      </section>
  
      <Footer></Footer>
    </div>
  </template>