<template>
  <div class="container">
    <div id="plus-icon" class="row">
      <a href="#" @click="modalShow = !modalShow">
        <i class="fa fa-plus fa-3x"></i>
      </a>
    </div>
    <b-modal
      v-model="modalShow"
      centered
      id="modal-xl"
      size="l"
      title="Add a new document"
      scrollable
      hide-footer
    >
      <ValidationObserver v-slot="{ handleSubmit}">
        <form @submit.prevent="handleSubmit(onSubmit)">

          <b-form-group class="">

            <ValidationProvider
              name="Document category"
              v-slot="{ errors }"
              rules="required"
            >
              <div class="form-group">
                <b-form-select
                  plain v-model="category"
                  required
                  :options="options3"
                  class="mb-3"
                >
                </b-form-select>
                <span style="color:red;">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <ValidationProvider
              rules="required"
              name="Expire Date"
              v-slot="{ errors }"
            >
              <div class="form-group ">
                <label for="exampleInputEmail1">Expire Date</label>
                <input
                  type="date"
                  placeholder="Expire Date"
                  class="form-control mb-0  inputBackground"
                  id="exampleInputEmail1"
                  v-model="expireDate"
                >
                <span style="color:red;">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <div class="row" style="color:white;">

              <div class="col">
                <div class="form-group">
                  <div class="border p-2 mt-3">
                    <label for="front" class="upload-label"> Upload Front Side </label>
                    <p>Preview Here:</p>
                    <template v-if="previewFront">
                      <img  alt="Upload here a picture of the Front Side of your document" :src="previewFront" class="img-fluid" />
                      <!--                  <p class="mb-0">file name: {{ image.name }}</p>-->
                      <!--                  <p class="mb-0">size: {{ image.size/2048 }}KB</p>-->
                    </template>
                    <a href="#" @click="reset"><i class="fa fa-trash fa-lg"> </i></a>
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
                      <img alt="Upload here a picture of the Back Side of your document" :src="previewBack" class="img-fluid" />
                      <!--                  <p class="mb-0">file name: {{ image.name }}</p>-->
                      <!--                  <p class="mb-0">size: {{ image.size/2048 }}KB</p>-->
                    </template>
                    <input type="file" accept="image/*" @change="previewImageBack" class="form-control-file" id="back">
                    <a href="#" @click="reset"><i class="fa fa-trash fa-lg"> </i></a>
                  </div>
                </div>
              </div>
            </div>

          </b-form-group>

          <div class="container">
            <p>How would you like to be notified when your document is about to expire?</p>
            <div class="row">
              <label for="emailOption" class="mr-2"> Email</label>
              <toggle-button
                id="emailOption"
                :value="true"
                :labels="{checked: 'Yes', unchecked: 'No'}"
              />
            </div>
            <div class="row">
              <label for="pushOption" class="mr-2"> Push Notification</label>
              <toggle-button
                id="pushOption"
                :value="true"
                :labels="{checked: 'Yes', unchecked: 'No'}"
              />
            </div>
          </div>

          <div class="d-inline">
            <b-button block variant="success" type="submit" >Save</b-button>
          </div>

        </form>
      </ValidationObserver>

<!--      <template #modal-footer>-->
<!--        <div class="w-100">-->
<!--          <b-button-->
<!--            variant="danger"-->
<!--            size="sm"-->
<!--            class="float-right"-->
<!--            @click="modalShow=false"-->
<!--          >-->
<!--            Cancel-->
<!--          </b-button>-->
<!--        </div>-->
<!--      </template>-->
    </b-modal>
  </div>

</template>

<script>
import ToggleButton from 'vue-js-toggle-button';
import Vue from "vue";
Vue.use(ToggleButton);

export default {
  name: "AddDocument",
  data(){
    return{
      modalShow: false,
      category: null,
      options3:[
        { value: null, text: 'Document category' },
        { value: 'Identification Documents', text: 'Identification Documents'  },
        { value: 'Academic Documents', text: 'Academic Documents' },
        { value: 'Others', text: 'Others' }
      ],
      expireDate: null,
      previewFront: null,
      previewBack: null,
      image: null,
      notification: ''
    }
  },
  mounted() {
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
  #plus-icon{
    float: right;
    cursor: pointer;
    color: lightskyblue;
  }

  #plus-icon:hover{
    color: rgb(41,50,79);
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
