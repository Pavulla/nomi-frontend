<template>
  <div>
    <h1 class="mb-0 text-center">
      <img :src="logo" width="98" alt="">
    </h1>
    <h4 class="text-center mb-4" style="color:white;" >Upload Files</h4>
    <form>
      <div class="row" style="color:white;">

          <div class="col">
            <div class="form-group">
              <div class="border p-2 mt-3">
                <label for="front" class="upload-label"> Upload Front Side </label>
                <p>Preview Here:</p>
                <template v-if="previewFront">
                  <img :src="previewFront" class="img-fluid" />
<!--                  <p class="mb-0">file name: {{ image.name }}</p>-->
<!--                  <p class="mb-0">size: {{ image.size/2048 }}KB</p>-->
                </template>
                <input type="file" accept="image/*" @change="previewImageFront" class="form-control-file" id="front">
              </div>
            </div>
          </div>

          <div class="col">
            <div class="form-group">
              <div class="border p-2 mt-3">
                <label class="upload-label" for="back">Upload Back Side</label>
                <p>Preview Here:</p>
                <template v-if="previewBack">
                  <img :src="previewBack" class="img-fluid" />
                  <!--                  <p class="mb-0">file name: {{ image.name }}</p>-->
                  <!--                  <p class="mb-0">size: {{ image.size/2048 }}KB</p>-->
                </template>
              </div>
            </div>
            <input type="file" accept="image/*" @change="previewImageBack" class="form-control-file" id="back">
          </div>

      </div>

<!--      <div class="form-group">-->
<!--        &lt;!&ndash; <label for="exampleInputEmail1">Document Number</label> &ndash;&gt;-->
<!--        <input type="text" size="sm" multiple placeholder="Your actual address" class="form-control mb-0  inputBackground" id="exampleInputEmail1" >-->
<!--      </div>-->
      <div class="d-inline">
        <b-button block variant="success" @click="$router.push({name: 'auth1.verify'})" >SAVE</b-button>
      </div>

    </form>

  </div>
</template>

<script>

export default {
  name: 'SignIn1',
  data: () => (
  {
    previewFront: null,
    previewBack: null,
    image: null
  }
  ),
  mounted () {
  },
  methods: {
    previewImageFront: function(event) {
      let input = event.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewFront = e.target.result;
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    previewImageBack: function(event) {
      let input = event.target;
      if (input.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewBack = e.target.result;
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    reset: function() {
      this.image = null;
      this.previewFront = null;
      this.previewBack = null;
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

.form-control-file{
  text-align: right;
  -moz-opacity:0 ;
  filter:alpha(opacity: 0);
  opacity: 0; /* make transparent */
  z-index: -1; /* move under anything else */
  position: absolute; /* don't let it take up space */
}

.upload-label{
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
}

</style>
