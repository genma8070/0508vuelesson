<script>
export default{
    data(){
        return{
            isShow:false

        }
    },
    methods:{
        change(){
            this.isShow = !this.isShow
        }
    }
}
</script>

<template>
    <h2>123123</h2>
    <div class="boxes">
        <div v-show="isShow" class="box box1"></div>
        <div  class="box box2"></div>
    </div>
    <button type="button" @click="change">aaaaaaaaaaaaa</button>
    {{ isShow }}

</template>

<style>

.boxes{
    position: absolute;
}
.box{
    
    height: 3rem;
    width: 3rem;
}

.box1{
    background-color: blue;
    left: 0;
}

.box2{
    background-color: red;
    left: 100;
}


</style>