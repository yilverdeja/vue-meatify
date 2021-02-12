<template>
    <div class="row">
        <div class="col-12 col-md-6 col-lg-7 text-center text-md-left d-none d-md-flex justify-content-center align-items-center">
            <div><img class="img-fluid" src="@/assets/undraw_Hamburger.svg"></div>
        </div>
        <div class="col-12 col-md-6 col-lg-5 d-flex justify-content-center align-items-center">
            <div class="d-flex justify-content-center align-items-center justify-content-lg-center">
                <!-- <form class="shadow-lg d-flex flex-column justify-content-center align-items-center align-items-lg-start" style="background: #ffffff;padding: 20px;border-radius: 15px;">
                    <div class="form-group" style="min-width: 100%;"><label for="redMeatInput">How often in a week do you eat Red Meat?</label><input class="form-control" type="number" id="redMeatInput" min="0" max="21" step="1" placeholder="3" required=""><small class="text-muted">Red Meat is all types of livestock such as beef, pork, goat and lamb</small></div>
                    <div class="form-group" style="min-width: 100%;"><label for="poultryMeatInput">How often in a week do you eat Poultry?</label><input class="form-control" type="number" id="poultryMeatInput" min="0" max="21" step="1" placeholder="3" required=""><small class="text-muted">Poultry includes Chicken and Turkey</small></div>
                    <div class="form-group" style="min-width: 100%;"><label for="seafoodMeatInput">How often in a week do you eat Seafood?</label><input class="form-control" type="number" id="seafoodMeatInput" min="0" max="21" step="1" placeholder="3" required=""><small class="text-muted">Seafood includes fish, crustaceans (crab and lobster) and molluscs (clambs, oysters, scallops and mussels)</small></div>
                    <button class="btn btn-outline-primary" to="loading">Submit</button>
                </form> -->
                <b-form @submit.prevent="submitSample" class="shadow-lg d-flex flex-column justify-content-center align-items-start" style="background: #ffffff;padding: 20px;border-radius: 15px;" >
                    <b-form-row>
                        <b-col sm="12">
                            <b-form-group label="How often do you eat red meat?">
                                <b-form-input type="number" name="redMeatInput" min="0" max="7" placeholder="1" required></b-form-input>
                                <b-form-text>Red Meat is all types of livestock such as beef, pork, goat and lamb</b-form-text>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-form-row>
                        <b-col sm="12">
                            <b-form-group label="How often do you eat poultry?">
                                <b-form-input type="number" name="poultryMeatInput" min="0" max="7" placeholder="1" required></b-form-input>
                                <b-form-text>Poultry includes Chicken and Turkey</b-form-text>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-form-row>
                        <b-col sm="12">
                            <b-form-group label="How often do you eat seafood?">
                                <b-form-input type="number" name="seafoodMeatInput" min="0" max="7" placeholder="1" required></b-form-input>
                                <b-form-text>Seafood includes fish, crustaceans (crab and lobster) and molluscs (clambs, oysters, scallops and mussels)</b-form-text>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-form-row>
                        <b-col sm="6">
                            <b-form-group label="Sex:">
                                <b-form-radio-group name="sex" required>
                                    <b-form-radio value="Male">Male</b-form-radio>
                                    <b-form-radio value="Female">Female</b-form-radio>
                                </b-form-radio-group>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6">
                            <b-form-group label="Age:">
                                <b-form-input name="age" type="number" min="13" max="110" placeholder="32" required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-button type="submit" variant="outline-primary">Submit</b-button>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Sample',
  components: {
  },
  methods: {
      submitSample(){
          this.$router.push("/loading");
      }
  }
}
</script>

<style scoped>

</style>