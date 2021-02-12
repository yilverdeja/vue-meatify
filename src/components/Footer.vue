<template>
    <div class="d-flex justify-content-center footer-basic st" style="background: rgba(255,255,255,0);">
        <footer>
            <div class="social">
                <b-link style="border:0px;" href="https://github.com/yilverdeja/vue-meatify" title="Github" target="_blank"><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon></b-link>
                <b-link style="border:0px;" :href=meatifyEmail title="Email" target="_blank"><font-awesome-icon :icon="['far', 'envelope']"></font-awesome-icon></b-link>
                <b-link style="border:0px" :href=meatifyFeedback title="Feedback" target="_blank"><font-awesome-icon :icon="['far', 'comment-dots']"></font-awesome-icon></b-link>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="https://www.benswildlifereserve.xyz" target="_blank">Ben's Reserve</a></li>
                <li class="list-inline-item"><a href="/disclaimer">Disclaimer</a></li>
                <!-- <li class="list-inline-item"><a href="#">Privacy Policy</a></li> -->
            </ul>
            <p class="copyright">Meatify &copy; {{currentYear}}, Designed by <a href="https://www.yve.life" target="_blank">yve.</a></p>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            meatifyEmail: "mailto: meatifyxyz@gmail.com",
            meatifyFeedback: "https://github.com/yilverdeja/vue-meatify/issues/new?title=Feedback%20for%20Meatify%20Website&body=Explain%20your%20issue%20here",
            currentYear: (new Date).getFullYear()
        }
    }
}
</script>

<style scoped>
</style>