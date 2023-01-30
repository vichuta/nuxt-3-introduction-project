<script setup>
// -- อันนี้คือ function ดั้งเดิมก่อนใช้ useAsyncData()--
// async function search(){
//     const {Search} = await $fetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`)
// }
// --

// -- การใช้ useAsyncData() --
// // ใช้ useAsyncData() แทน asyn, await
// // De-dupe Async Data with a Key คือ การเพิ่ม route.params.id 2 ที่ เพื่อให้ data มีความ uni-key มากขึ้น 
// // |-> แก้ปัญหา : โหลดใหม่แล้ว แต่ยังเห็นข้อมูลเก่าอยู่
// const { data } = useAsyncData(`/movies/${route.params.id}`,()=>{ 
//     return $fetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`);
// },{ 
//   pick:['Title','imdbRating'],   // -> ใช้ pick array filter key-object แค่บางตัว
//   // transform(data){               //-> ใช้ tranform() เพื่อจัด formet ข้อมูลใหม่ได้
//   //   return data.Title + '\nRating : ' + data.imdbRating
//   // }
//   // --***pick หรือ transform ต้องเลือกใช้อย่างใดอย่างหนึ่ง!!***
// })
const route = useRoute()

// -- การใช้ useFetch() --
// การใช้ useFetch() เป็นการยุบคำสั่ง useAsyncData() + $fetch() 
// ข้อดี คือ เขียนสั้นลง + ดูข้อมูลเดิมเร็วขึ้น เพราะดึงมาจาก cache
const { data } = useFetch(
  `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
  {
    pick:['Title','imdbRating','Error'],
    key: `/movies/${route.params.id}`,
    // -- เหมือนจะใช้ได้แค่บาง version --
    onResponse({request,response}){
      if(response._data.Error === "Incorrect IMDb ID."){
        showError({statusCode: 404, statusMessage:"Page Not Found"})
      }
    }
  }
);
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
