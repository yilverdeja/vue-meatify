<template>
	<div id="app" class="d-flex flex-column body-wrapper sticky-footer-wrapper site">
		<Navigation />
		<b-container class="d-flex align-items-center main-wrapper flex-fill">
			<router-view class="d-flex"/>
		</b-container>
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
	metaInfo: {
		title: "Meatify",
		titleTemplate: "%s | Meatify"
	}
}
</script>

<style>
.footer-basic{padding:40px 0;background-color:#fff;color:#4b4c4d}.footer-basic ul{padding:0;list-style:none;text-align:center;font-size:18px;line-height:1.6;margin-bottom:0}.footer-basic li{padding:0 10px}.footer-basic ul a{color:inherit;text-decoration:none;opacity:.8}.footer-basic ul a:hover{opacity:1}.footer-basic .social{text-align:center;padding-bottom:25px}.footer-basic .social>a{font-size:24px;width:40px;height:40px;line-height:40px;display:inline-block;text-align:center;border-radius:50%;border:1px solid #ccc;margin:0 8px;color:inherit;opacity:.75}.footer-basic .social>a:hover{opacity:.9}.footer-basic .copyright{margin-top:15px;text-align:center;font-size:13px;color:#aaa;margin-bottom:0}.body-wrapper{background:url("~@/assets/meatify_background.svg") center 40%/cover no-repeat #fff}.sticky-footer-wrapper{min-height:100vh}.login-clean form{max-width:320px;width:90%;margin:0 auto;background-color:#fff;padding:40px;border-radius:4px;color:#505e6c;box-shadow:1px 1px 5px rgba(0,0,0,.1)}.login-clean .illustration{text-align:center;padding:0 0 20px;font-size:100px;color:#e66767}.login-clean form .form-control{background:#f7f9fc;border:none;border-bottom:1px solid #dfe7f1;border-radius:0;box-shadow:none;outline:0;color:inherit;text-indent:8px;height:42px}.login-clean form .btn-primary{background:#e66767;border:none;border-radius:4px;padding:11px;box-shadow:none;margin-top:26px;text-shadow:none;outline:0!important}.login-clean form .btn-primary:active,.login-clean form .btn-primary:hover{background:#e66767}.login-clean form .btn-primary:active{transform:translateY(1px)}.login-clean form .forgot{display:block;text-align:center;font-size:12px;color:#6f7a85;opacity:.9;text-decoration:none}.login-clean form .forgot:active,.login-clean form .forgot:hover{opacity:1;text-decoration:none}.navigation-clean{background:#fff;padding-top:.75rem;padding-bottom:.75rem;color:#333;border-radius:0;box-shadow:none;border:none;margin-bottom:0}.navigation-clean .navbar-brand{font-weight:700;color:inherit}.navigation-clean .navbar-brand:hover{color:#222}.navigation-clean.navbar-dark .navbar-brand:hover{color:#f0f0f0}.navigation-clean .navbar-brand img{height:100%;display:inline-block;margin-right:10px;width:auto}.navigation-clean .navbar-toggler{border-color:#ddd;color:#888}.navigation-clean .navbar-toggler:focus,.navigation-clean .navbar-toggler:hover{background:0 0}.navigation-clean.navbar-dark .navbar-toggler{border-color:#555;color:#eee}.navigation-clean .form-inline,.navigation-clean .navbar-collapse{border-top-color:#ddd}.navigation-clean.navbar-dark .form-inline,.navigation-clean.navbar-dark .navbar-collapse{border-top-color:#333}.navigation-clean .navbar-nav>.active>a,.navigation-clean .navbar-nav>.show>a{background:0 0;box-shadow:none}.navigation-clean.navbar-dark .navbar-nav a.active,.navigation-clean.navbar-dark .navbar-nav a.active:focus,.navigation-clean.navbar-dark .navbar-nav a.active:hover,.navigation-clean.navbar-light .navbar-nav .nav-link.active,.navigation-clean.navbar-light .navbar-nav .nav-link.active:focus,.navigation-clean.navbar-light .navbar-nav .nav-link.active:hover{color:#8f8f8f;box-shadow:none;background:0 0;pointer-events:none}.navigation-clean.navbar .navbar-nav .nav-link{padding-left:18px;padding-right:18px}.navigation-clean.navbar-light .navbar-nav .nav-link{color:#465765}.navigation-clean.navbar-light .navbar-nav .nav-link:focus,.navigation-clean.navbar-light .navbar-nav .nav-link:hover{color:#fff!important;background-color:transparent}.navigation-clean .navbar-nav>li>.dropdown-menu{margin-top:-5px;box-shadow:none;background-color:#fff;border-radius:2px}@media (min-width:768px){.navigation-clean{padding-top:1rem;padding-bottom:1rem}.navigation-clean .navbar-nav .show .dropdown-menu{box-shadow:0 4px 8px rgba(0,0,0,.1)}}.navigation-clean .dropdown-menu .dropdown-item,.navigation-clean .dropdown-menu .dropdown-item:focus{line-height:2;color:#37434d}.navigation-clean .dropdown-menu .dropdown-item:focus,.navigation-clean .dropdown-menu .dropdown-item:hover{background:#eee;color:inherit}.navigation-clean.navbar-dark{background-color:#1f2021;color:#fff}.navigation-clean.navbar-dark .navbar-nav .nav-link{color:#dfe8ee}.navigation-clean.navbar-dark .navbar-nav .nav-link:focus,.navigation-clean.navbar-dark .navbar-nav .nav-link:hover{color:#fff;background-color:transparent}.navigation-clean.navbar-dark .navbar-nav>li>.dropdown-menu{background-color:#1f2021}.navigation-clean.navbar-dark .dropdown-menu .dropdown-item,.navigation-clean.navbar-dark .dropdown-menu .dropdown-item:focus{color:#f2f5f8}.navigation-clean.navbar-dark .dropdown-menu .dropdown-item:focus,.navigation-clean.navbar-dark .dropdown-menu .dropdown-item:hover{background:#363739}@media (max-width:767px){.navigation-clean .navbar-nav .show .dropdown-menu .dropdown-item{color:#37434d;padding-top:.8rem;padding-bottom:.8rem;line-height:1}.navigation-clean.navbar-dark .navbar-nav .show .dropdown-menu .dropdown-item{color:#fff}}#main-container,#main-content{margin:0 auto}.topbackground{background:url("~@/assets/meatify_background.svg") top/cover no-repeat #fff;height:100vh}.top-background{background:url("~@/assets/meatify_topColors.svg") #fff}
</style>
