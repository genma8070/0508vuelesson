<script>
import Child from "../components/Child.vue"

export default {
    components: {
        Child
    },
    data() {
        return {
            title: "pppppp",
            cardData: [{
                img: "../../public/dessert_img/Rectangle 2.png",
                title: "img1"
            },
            {
                img: "../../public/dessert_img/Rectangle 6.png",
                title: "img2"
            },
            {
                img: "../../public/dessert_img/Rectangle 8.png",
                title: "img3"
            }]
        }
    }
}

</script>

<template>
    <div>
        <h2>pppppppppppp</h2>
        <div class="card-area">
        <Child 
        v-for="card in cardData"
            :key="card.title"
            :title="card.title" 
            :image="card.img"
        />
    </div>
    </div>
</template>

<style scoped>
.card-area{
    display: flex;
    justify-content: space-between;

}
</style>