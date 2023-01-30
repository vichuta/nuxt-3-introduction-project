<script lang="ts" setup>
const query = ref("batman");
const movies = ref([]);
async function search(){
    const {Search} = await $fetch(`http://www.omdbapi.com/?apikey=8e3f600b&s=${query.value}`)
    // เมื่อกด search -> check F12 -> Network -> มีข้อมูลขึ้นมาไหม?
    movies.value = Search;
}
search();
</script>

<template>
  <div>
    <h1>Page Movies</h1>
    <b>path: </b><span>pages/movies/index.vue</span>
    <hr>

    <form @submit.prevent="search" style="border-color: black; border-width: 1;">
        <input type="text" v-model="query">
        <button>Search</button>
    </form>

    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none;">
        <li v-for="movie in movies" :key="movie.imdbID">
            <NuxtLink :to="{ name:'movies-id', params: {id:movie.imdbID}}">
                <img :src="movie.Poster" :alt="movie.Title" width="150">
            </NuxtLink>
        </li>
    </ul>

  </div>
</template>

<style scoped></style>
<!-- คำถาม prevent คืออะไร?? -->