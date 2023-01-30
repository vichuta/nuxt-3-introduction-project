<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <nav style="display: flex; gap:10px;">
      <!-- 1. Internal links -->
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <!-- 2. External links -->
      <NuxtLink to="https://vueschool.io">Vue School</NuxtLink>
    </nav>
    
    <NuxtPage/>
  </div>
</template>
