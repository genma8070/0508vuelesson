<script>
export default{
    components:{
        
    },
    data(){
        return{

        }

    },
    props:[
        "title",
        "image"
    ]
}

</script>

<template>
    <div class="card">
        <img class="img" :src="image" :alt="title">
        <h1>{{title}}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, repellendus</p>
        
    </div>

</template>

<style scoped>
.card{
    height: 200px;
    width: 200px;
    border-radius: 2rem;
    text-align: center;
    background-color: aquamarine;
}
.img{
    height: 50px;
    width: 100px;
    margin-top: 20px;
    
}
</style>