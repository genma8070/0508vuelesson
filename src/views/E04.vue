<script>
import { RouterLink } from 'vue-router'
import Popup from "../components/Popup.vue"
export default {
    components: {
        Popup

    },
    data() {
        return {
            isShow: false,
            homeInfo:{
                title:"rrrrrrrrrr",
                content:"7414"
            }
        }
    },
    methods:{
        changeShow(){
            this.isShow=!this.isShow
        }
    }
    }
</script>

<template>
    <div>
        <h2>HG</h2>
        <RouterLink to="/router-view">router-view</RouterLink>
        <button type="button" @click="changeShow">rrrrrrr</button>
       
    </div>

    <Popup 
    v-if="isShow" 
    @switch="changeShow"
    :title="homeInfo.title"
    :content="homeInfo.content" 
    />
    
  
</template>

<style scoped>

</style>
