<script>
import Child from "../components/Child.vue"
export default {
    components: {
        Child
    },
    data() {
        return {
            title: "pppppp"
        }
    }
}

</script>

<template>
    <h2>pppppppppppp</h2>
    <Child :child-title="title" />
</template>

<style scoped></style>