<template>
  <div>

    <h1 class="mb-0 text-center">
      <img :src="logo" width="98" alt="">
    </h1>
    <h4 class="mb-5 mt-2 text-center" style="color:white;">Sign in</h4>
    <ValidationObserver v-slot="{ handleSubmit}">
      <form @submit.prevent="handleSubmit(onSubmit)" class="mt-4">
        <ValidationProvider
          :rules="{required: true, regex:  /([0-9]{12}[A-Z]{1})/, length:13}"
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

        <div class="d-inline">
          <b-button
            block variant="success"
            type="submit"
          >
            Sign in
          </b-button>
        </div>

        <div class="sign-info">
          <span
            class="dark-color d-inline-block line-height-1"
            style="color:white;"
          >
            Don't have an account?
            <router-link :to="{ name: 'auth1.sign-up1'}">
              Sign up
            </router-link>
          </span>
        </div>

      </form>

    </ValidationObserver>


  </div>
</template>

<script>

export default {
  name: 'SignIn1',
  data: () => ({
    formData: {
      documentNumber: ""
    },
    documents:['ID','Passport','Drive License'],
    image: require("@/assets/images/NOMI1.png"),
    logo: require("@/assets/images/logo.png"),
  }),
  mounted () {
  },
  methods: {
    onSubmit() {
      //put here the logic to submit the form
      this.$router.push("/auth/verify");
    }
  }
}
</script>

<style scoped>
.fontColor{
  color:  white !important;
}

.inputBackground{
  background-color: rgb(255, 255, 255) !important;
}
</style>
