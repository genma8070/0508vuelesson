<script>
export default{
    components:{
        
    },
    data(){

    },
    props:[
        "childTitle"
    ]
}

</script>

<template>
    <div class="card">
        <h1>{{childTitle }}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corporis necessitatibus voluptates beatae fugiat dolorum fugit libero tempore corrupti, repellendus</p>
    </div>

</template>

<style scoped>
.card{
    height: 200px;
    width: 200px;
    border-radius: 2rem;
    background-color: aquamarine;
}

</style>