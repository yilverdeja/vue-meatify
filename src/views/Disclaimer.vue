<template>
    <b-row>
        <b-col cols="12" md="6" lg="5" class="d-none d-md-flex justify-content-center align-items-center">
            <div><img class="img-fluid" src="@/assets/undraw_unexpected_friends.svg"></div>
        </b-col>
        <b-col cols="12" md="6" lg="7" class="text-center text-md-left d-flex justify-content-center align-items-center">
            <div>
                <h1 class="display-3 d-none d-sm-block">Disclaimer</h1>
                <h1 class="display-4 d-sm-none">Disclaimer</h1>
                <p class="lead">Unfortunately, this is not a real website, it's just a joke.</p>
                <p>Your information is not collected or stored. Additionally, no chickens were harmed in the making of this website.</p>
            </div>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'Disclaimer',
	metaInfo: {
		title: "Disclaimer",
	},
}
</script>