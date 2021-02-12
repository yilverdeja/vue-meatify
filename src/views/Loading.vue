<template>
    <div class="d-flex align-items-center main-wrapper flex-fill">
        <div class="container d-flex justify-content-center justify-content-xl-center">
            <!-- Start: Loading Wrapper -->
            <div class="text-center login-clean"><span class="spinner-border" role="status" style="width: 128px;height: 128px;border-style: solid;color: rgb(230,103,103);"></span>
                <p class="lead" style="margin-top: 16px;"><span id="loadingText">Analyzing Data</span>...</p>
            </div><!-- End: Loading Wrapper -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'Loading',
  components: {
  }
}
</script>

<style scoped>

</style>