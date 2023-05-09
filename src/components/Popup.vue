<script>
export default {
    props: [
        "title",
        "content"
        
    ],
    methods: {
        changeOutsideShow() {
            this.$emit("switch")
        }

    }
}

</script>

<template>
    <div class="modal" >
        <div class="card">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button type="button" @click="changeOutsideShow">Close</button>

        </div>

        <div class="bg"></div>

    </div>
</template>

<style lang="scss" scoped>


.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: 1s;



    .bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.6;
        z-index: -1;
    }

    .card {
        margin: auto;
        border-radius: 12px;
        height: 15rem;
        width: 20rem;
        background-color: white;
    }
}
</style>