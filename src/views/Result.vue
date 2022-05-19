<template>
    <b-row>
        <b-col cols="12" md="6" lg="7" class="text-center text-md-left d-flex justify-content-center align-items-center">
            <div>
                <h1 class="display-3 d-none d-sm-block">Chicken Breast</h1>
                <h1 class="display-4 d-sm-none">Chicken Breast</h1>
                <p class="lead">{{subtitle}}<br></p>
                <p>Fun Fact: {{funFact}}<br></p>
                <div class="btn-group d-flex flex-column flex-lg-row" role="group" style="margin: 0px;margin-right: 0px;">
                    <a class="btn btn-outline-primary" role="button" style="margin: 5px;margin-right: 5px;margin-left: 5px;" href="https://friendly-hermann-3b7c13.netlify.app/store.html" target="_blank">Order Chicken Breasts</a>
                    <a class="btn btn-primary" role="button" style="margin: 5px;margin-right: 5px;margin-left: 5px;" :href=recipeOfTheDay target="_blank">Recipe of the Day</a></div>
            </div>
        </b-col>
        <b-col cols="12" md="6" lg="5" class="d-none d-md-flex justify-content-center align-items-center">
            <div><img class="img-fluid" src="@/assets/undraw_diet.svg"></div>
        </b-col>
    </b-row>
</template>

<script>
import { db, auth } from "@/firebase";
const collectionPath = "meatifydata";

export default {
    name: 'Result',
	metaInfo: {
		title: "Result",
	},
    data() {
        return {
            subtitle: "",
            funFact: "",
            recipeOfTheDay: ""
        }
    },
    created() {
        let user = auth.currentUser;
        if (user) {
            this.fetchData();
        } else {
            this.$router.push("/")
        }
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
            }).catch(err => {
                if (err) {
                    console.log(err)
                }
                this.$router.push("/")
            })
        },
        getRandomNumberInArray(arr){
            return Math.floor(Math.random() * arr.length)
        }
    },
}
</script>

<style scoped>

</style>
