<template>
	<b-row>
		<b-col cols="12" md="6" lg="7" class="text-center text-md-left d-flex justify-content-center align-items-center">
			<div>
				<h1 class="display-3 d-none d-sm-block">Meatify</h1>
                <h1 class="display-4 d-sm-none">Meatify</h1>
				<p class="lead">Personalize your meat eating experience for a balanced diet</p>
				<p>Using State-of-the-Art Artificial Intelligence, Quantum &amp; Cloud Computing, and Blockchain, Meatify is disrupting the meat eating industry</p>
				<b-button variant="primary" size="lg" to="/sample"><strong>Try Now</strong></b-button>
			</div>
		</b-col>
		<b-col cols="12" md="6" lg="5" class="d-none d-md-flex justify-content-center align-items-center">
			<div><img class="img-fluid" src="@/assets/undraw_barbecue.svg"></div>
		</b-col>
	</b-row>
</template>

<script>
import { auth } from "@/firebase";
export default {
	name: 'Home',
	metaInfo: {
		titleTemplate: null
	},
	components: {
	},
	created: async function() {
		let user = auth.currentUser;
		if (!user) {
			await auth.signInAnonymously().then().catch(err => console.log(err));
		}
	}
}
</script>

<style scoped>

</style>
