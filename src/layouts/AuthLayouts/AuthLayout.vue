<template>
  <div>
    <Loader />
    <section class="sign-in-page">

      <b-container class="container p-12">

        <div class="row" align-v="center">
          <div class="pt-5 card mt-5" >
              <div class="sign-in-from">
                <router-view></router-view>
              </div>
          </div>
          <!-- <div class="col-md-6 text-center pt-5">
            <div class="sign-in-detail text-white">
              <a class="sign-in-logo mb-5" href="#"><img src="../../assets/images/NOMI2.png" class="img-fluid" alt="logo"></a>

            </div>
          </div>  -->

          <!-- <span class="mb-8"></span>
          <div class="col-sm-6 pt-5 card mt-5">
            <div class="sign-in-from">
              <router-view></router-view>
            </div>
          </div> -->
        </div>
      </b-container>
    </section>
  </div>
</template>
<script>
import Loader from '../../components/socialvue/loader/Loader'
import logo from '../../assets/images/logo-white.png'
import { socialvue } from '../../config/pluginInit'
import bgImage from '../../assets/images/login/login-2.jpg'
export default {
  name: 'AuthLayout1',
  components: {
    Loader
  },
  mounted () {
    socialvue.index()
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false
      },
      logo: logo,
      bgImageURL: bgImage
    }
  }
}
</script>

<style scoped>
.sign-in-page{
  background: rgb(194,215,208) !important;
  background: linear-gradient(45deg, rgba(194,215,208,1) 0%, rgba(153,255,221,1) 100%) !important;
  background-image: url('../../assets/images/bg1.jpg')!important;
  position: absolute;
  overflow: -moz-scrollbars-vertical !important; 
  overflow-y: scroll !important;
}

.sign-in-from{
  /* border-radius:; */
  height: auto !important;
  width: auto !important;
  margin-bottom: 40px;
  text-align: center;
}

.card{
  background-color: rgba(255, 255, 255, 0.144) !important;
  backdrop-filter: blur(20px);
  border-radius: 20px;
  height: auto !important;
  /* margin-top: 20px; */
  margin-left: auto !important;
  margin-right: auto !important;
  width: 30rem !important;
}

@media only screen and (max-width: 768px) {
  [class*="container"] {
    padding-left: 20px;
  }
}
</style>
