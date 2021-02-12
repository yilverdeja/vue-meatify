<template>
	<div id="app">
		<!-- Navigation -->
		<Navigation />
		<b-container>
		<router-view/>
		</b-container>
		<!-- Footer -->
		<Footer />
	</div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
import Footer from "@/components/Footer.vue"
export default {
	name: "App",
	components: {
		Navigation,
		Footer
	},
	data: () => ({
		//
	}),
}
</script>

<style>

</style>
