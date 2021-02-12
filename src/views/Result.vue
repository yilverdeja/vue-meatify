<template>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-7 text-center text-md-left d-flex justify-content-center align-items-center">
            <div>
                <h1 class="display-3">Chicken Breast</h1>
                <p class="lead">{{subtitle}}<br></p>
                <p>Fun Fact: {{funFact}}<br></p>
                <div class="btn-group d-flex flex-column flex-lg-row" role="group" style="margin: 0px;margin-right: 0px;">
                    <a class="btn btn-outline-primary" role="button" style="margin: 5px;margin-right: 5px;margin-left: 5px;" href="https://www.benswildlifereserve.xyz/store.html" target="_blank">Order Chicken Breasts</a>
                    <a class="btn btn-primary" role="button" style="margin: 5px;margin-right: 5px;margin-left: 5px;" :href=recipeOfTheDay target="_blank">Recipe of the Day</a></div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-5 d-none d-md-flex justify-content-center align-items-center">
            <div><img class="img-fluid" src="@/assets/undraw_diet.svg"></div>
        </div>
    </div>
</template>

<script>
import { db } from "@/firebase";
const collectionPath = "meatifydata";

export default {
    name: 'Result',
    data() {
        return {
            subtitle: "",
            funFact: "",
            recipeOfTheDay: ""
        }
    },
    beforeRouteEnter (to, from, next) {
        db.collection(collectionPath).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                next(vm => {
                    let facts = doc.data().facts;
                    let recipes = doc.data().recipes;
                    let subtitles = doc.data().subtitles;

                    vm.funFact = facts[Math.floor(Math.random() * facts.length)]
                    vm.recipeOfTheDay = recipes[Math.floor(Math.random() * recipes.length)]
                    vm.subtitle = subtitles[Math.floor(Math.random() * subtitles.length)]
                })
            })
        })
    },
    watch: {
        "$route": "fetchData"
    },
    methods: {
        fetchData() {
            db.collection(collectionPath).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    let facts = doc.data().facts;
                    let recipes = doc.data().recipes;
                    let subtitles = doc.data().subtitles;

                    this.funFact = facts[this.getRandomNumberInArray(facts)]
                    this.recipeOfTheDay = recipes[this.getRandomNumberInArray(recipes)]
                    this.subtitle = subtitles[this.getRandomNumberInArray(subtitles)]
                })
            })
        },
        getRandomNumberInArray(arr){
            return Math.floor(Math.random() * arr.length)
        }
    },
    computed: {

    }
}
</script>

<style scoped>

</style>