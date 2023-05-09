<script>
export default {
    data() {
        return {
            sourceData: null
        }
    },
    props:["inputText"],
    methods: {
        push() {
            this.$emit("emitPush", this.sourceData)

        }
    }
}

</script>

<template>
    <div class="form">
        <p>{{ sourceData }}</p>
        <form>
            <input type="text" v-model="sourceData">
            <button type="button" @click="push">案</button>
        </form>
    </div>
</template>

<style>
.form {
    height: 100px;
    border: 2px black;
    border-style:solid  
  

}
</style>