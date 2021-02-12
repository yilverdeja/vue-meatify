<template>
    <div class="justify-content-center flex-fill">
        <b-row>
            <b-col sm="12" class="text-center">
                <b-spinner label="Large Spinner" style="width: 128px;height: 128px;border-style: solid;color: rgb(200,0,0);"></b-spinner>
                <p class="lead" style="margin-top: 16px;"><span id="loadingText">{{loadingText}}</span>...</p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { db } from "@/firebase";
const collectionPath = "loadingTexts";

export default {
    name: 'Loading',
	metaInfo: {
		title: "Loading",
	},
    data() {
        return {
            loadingTexts: [],
            loadingText: "Analyzing Data",
            timer: null
        }
    },
    created() {
        this.fetchData();
    },
    watch: {
        "$route": "fetchData"
    },
    methods: {
        fetchData(){
            db.collection(collectionPath).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    let texts = doc.data().texts;
                    this.loadingTexts = texts;
                    this.updateLoadingText();
                })
            })
        },
        updateLoadingText(){
            let randomVal = Math.floor(Math.random() * this.loadingTexts.length)
            let newText = this.loadingTexts[randomVal]
            
            // checks for recurring loading text and changes it
            if (newText === this.loadingText) {
                if (randomVal === 0) {
                    randomVal = randomVal + 1;
                } else if (randomVal === this.loadingTexts.length - 1) {
                    randomVal = randomVal - 1;
                } else {
                    if (Math.random() < 0.5) {
                        randomVal = randomVal + 1
                    } else {
                        randomVal = randomVal - 1;
                    }
                }

                newText = this.loadingTexts[randomVal]
            }

            this.loadingText = newText;
        }

    },
    mounted() {
        var numIntervals = 10;
        var intervalTime = 1500;
        this.timer = setInterval(() => {
            if (numIntervals <= 0) {
                this.$router.push("/result").catch()
            } else {
                this.updateLoadingText();
                numIntervals = numIntervals - 1;
            }
        }, intervalTime)
    },
    beforeRouteLeave (to, from, next) {
        if (this.timer){
            clearInterval(this.timer);
        }
        next();
    }

}
</script>

<style scoped>

</style>