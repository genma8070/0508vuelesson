<script>
export default{
    data(){
        return{
            Jump: false
        }
    }, 
     methods:{
        isJump(){
            this.Jump = !this.Jump
        }

    }
}
  

</script>

<template>
    <h1>BBBBBBINDDDDD</h1>
    <div class="box" :class="{move: Jump}"></div>
    <button type="button" @click="isJump">channnnnnnnge</button>
  
</template>

<style scoped>
.box{
    width: 300px;
    height: 300px;
    left: 0px;
    background-color: blue;
    transition: 1s;
}
.move{
    left: 100px;
    border-radius: 2rem;
    background-color: red;
}

</style>
