<script>
export default {
    data() {
        return {
            imgArr: 
                [
                 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_djxBtNj4E0dWt0IW1as1HB6eLNJJeGF7A&usqp=CAU',
                 'data:image/jpeg;base64,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'
            ],
            imgIndex: false


        }
    },
    methods:{
        imgChange(){
            this.imgIndex = !this.imgIndex
        }
    }

}

</script>

<template>
    <h1>Aaaaaaaaaaaaaa</h1>
    <button type="button" @click="imgChange">brain power</button>
    <div class="box" >
        <img class="box" :class="{a: imgIndex}" :src="imgArr[this.imgIndex ? 0 : 1]">
        
        
    </div>
</template>

<style scoped>
.box {
    position: relative;
    width: 300px;
    height: 300px;
    left: 0px;
    transition: 0.5s;


}

.a {
    left: 300px;
}
</style>
