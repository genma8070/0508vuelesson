<script>
import FormView from "../components/Form.vue"

export default {
    components: {
        FormView
    },
    data() {
        return {
            inputText: null
        }
    },
    methods: {
        getPush(sourceData) {
            this.inputText = sourceData;
        }
    }
}
</script>

<template>
    <div class="emit">
        <h2>eeeeeeeeee</h2>
        <p>{{ inputText }}</p>
        <FormView 
        :inputText="inputText" 
        @emitPush="getPush" />
        
    </div>
</template>

<style scoped>
.emit {
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;

}
</style>