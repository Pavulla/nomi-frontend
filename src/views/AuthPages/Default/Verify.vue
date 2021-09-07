<template>
  <div>
    <h1 class="mb-0 text-center">
      <img :src="logo" width="98" alt="">
    </h1>
    <h4 class="mb-5 mt-2 text-center" style="color:white;">Verify</h4>
    <ValidationObserver v-slot="{ handleSubmit}"> 
      <form @submit.prevent="handleSubmit(onSubmit)" class="mt-4">

          <ValidationProvider
            :rules="{required: true, regex:  /([0-9]{6})/, length:6}"
            name="Verify"
            v-slot="{ errors }"
          >
            <div class="form-group">
              <input 
                type="text"    
                placeholder="code" 
                class="form-control mb-0 inputBackground" 
                id="exampleInputEmail1"
                v-model="code"
              >
              <span style="color:red;">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <div class="d-inline">
              <b-button block variant="success" type="submit" >VERIFY CODE</b-button>
          </div>

        </form>

    </ValidationObserver>

  </div>
</template>

<script>

export default {
  name: 'SignIn1',
  data: () => ({
    image: require("@/assets/images/NOMI1.png"),
    logo: require("@/assets/images/logo.png"),
    code: ''
  }),
  mounted () {
  },
  methods: {
    onSubmit() {
      //put here the logic to submit the form
      //alert(this.code); just for test
      this.$router.push('/');
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