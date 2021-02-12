<template>
    <div>
        <b-navbar toggleable="md">
            <b-container>
                <b-navbar-brand href="/" class="d-flex align-items-center" style="width: 60%">
                    <img src="@/assets/meatify_logo.svg" class="img-fluid" alt="">
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse" class="toggle-btn"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="/" class="d-flex justify-content-center align-items-center navigation-link"><strong><span class="navigation-link-title">Home</span></strong></b-nav-item>
                        <b-button href="sample" variant="dark" class="d-flex justify-content-center align-items-center"><strong>Try Now</strong></b-button>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .navigation-link {
        margin: 0 2rem;
    }

    .toggle-btn {
        border-style: none
    }

    .navigation-link-title {
        color: black
    }

    .navigation-link-title:hover {
        color: grey
    }
    
</style>