<script>
import Popup from "../components/Popup.vue"
export default {
    components: {
        Popup

    },
    data() {
        return {
            isShow: false,
            madalInfo:{
                title:"ggggggg",
                content:"8787"
            }
        }
    },
    methods: {
        change() {
            this.isShow = !this.isShow

        }
    }
}

</script>

<template>
    <div class="modal-ex">
        <h2>mmmmmmmmm</h2>
        <button type="button" @click="change">btn</button>
    </div>

    <Popup 
    v-show="isShow" 
    @switch="change" 
    :title="madalInfo.title"
    :content="madalInfo.content" 
    
     />
</template>

<style lang="scss" scoped>
.modal-ex {
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;

    button{
        margin: auto;
        width: 50px;
    }
}
</style>