<script setup>
const route = useRoute();
const message = computed(()=> 
    `Your team is called ${route.params.name_team}. 
    User Id is ${route.params.user_id}`
    );
</script>

<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>