<template>
  <div>
    <!-- <div class="mt-4">
        <div class="form-group">
          <b-alert :show="false" variant=" " dismissible fade class="text-white bg-success">
            <div class="iq-alert-text"></div>
          </b-alert>
        </div>
    </div> -->

    <h1 class="text-center">
      <img :src="logo" width="98" alt="">
    </h1>
      <h4 class="mb-4 mt-2 text-center" style="color:white;">Create Account</h4>

    <ValidationObserver v-slot="{ handleSubmit}">
      <form @submit.prevent="handleSubmit(onSubmit)" class="mt-4">

            <b-form-group class="">

              <ValidationProvider
                name="selected"
                v-slot="{ errors }"
                rules="required"
              >
                  <div class="form-group">
                    <b-form-select
                      plain v-model="formData.selected"
                      required
                      :options="options3"
                      class="mb-3 inputBackground"
                      @change="regxSelected"
                    >
                    </b-form-select>
                    <span>{{ errors[0] }}</span>
                  </div>
              </ValidationProvider>

              <ValidationProvider
                :rules="{required: true, regex: documentValidator, length: documentValidatorLength}"
                name="Document Number"
                v-slot="{ errors }"
              >
                  <div class="form-group ">
                      <input
                        type="text"
                        placeholder="Document Number"
                        class="form-control mb-0  inputBackground"
                        id="exampleInputEmail1"
                        v-model="formData.documentNumber"
                      >
                      <span style="color:red;">{{ errors[0] }}</span>
                  </div>
              </ValidationProvider>

              <ValidationProvider
                name="phone"
                rule="required|numeric"
                v-slot="{ errors }"
              >
                  <div class="form-group ">
                    <VuePhoneNumberInput v-model="phone" size="lg" border-radius="10"/>
                    <span style="color:red;">{{ errors[0] }}</span>
                  </div>

              </ValidationProvider>
            </b-form-group>

            <div class="d-inline">
              <b-button block variant="success" type="submit" >CREATE ACCOUNT</b-button>
            </div>

          </form>
    </ValidationObserver>

  </div>
</template>

<script>

import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

export default {
   components: {
    VuePhoneNumberInput
  },
  name: 'SignUp1',
  data: () => ({
    documentValidator : null,
    documentValidatorLength : 0,
    selected: null,
    options3:[
      { value: null, text: 'Document type' },
      { value: 'ID', text: 'ID'  },
      { value: 'Passport', text: 'Passport' },
      { value: 'Drive License', text: 'Drive License' }
    ],
    phone:'',
    formData: {
      documentNumber:''
    },
    image: require("@/assets/images/NOMI1.png"),
    logo: require("@/assets/images/logo.png"),
  }),
  mounted () {

  },
  methods: {
    onSubmit() {
      //put here the logic to submit the form
      this.$router.push("/auth/upload-file");
  },
    regxSelected() {

      let currentSelected = this.formData.selected;

      if(currentSelected === 'ID'){
      this.documentValidator = /([0-9]{12}[A-Z]{1})/;
      this.documentValidatorLength = 13;
      } else {
        if(currentSelected === 'Passport'){
          this.documentValidator = /([0-9]{2}[A-Z]{2}[0-9]{5})/;
          this.documentValidatorLength = 9;
        }else{
          this.documentValidator = /([0-9]{8}\/[0-9])/;
          this.documentValidatorLength = 10
        }
      }
  }
}
}
</script>

<style scoped>
.fontColor{
  color:  rgba(143, 143, 143, 0.418) !important;
}
.inputBackground{
  background-color: rgb(255, 255, 255) !important;
}
</style>
