<template>
  <div class="container">
    <b-card no-body>
      <b-tabs justified class="mt-3">
        <b-tab title="Identification Documents">
          <div class="container">
            <b-card class="doc-item" title="Passport">
              <div class="container">
                <div class="row mt-3">
                  <div class="col-lg-10">
                    <h5>Upload Date:</h5> <label> 12/03/21  10:53</label>
                  </div>
                  <div class="col">
                    <b-button v-b-toggle href="#example-collapse" @click.prevent class="details">View the document</b-button>
                  </div>
                  <br>
                </div>
                <div class="row mb-2">
                  <b-collapse id="example-collapse">
                    <div class="row mt-5">
                      <div class="col">
                        <b-img
                          src="https://4.bp.blogspot.com/-9apUWLx3C9w/VWhBjPMrsfI/AAAAAAAAAIQ/h8oszyhB4Fc/s1600/ID%2BMoz.png"
                          fluid alt="Fluid image"></b-img>
                      </div>
                      <div class="col">
                        <b-img
                          src="https://4.bp.blogspot.com/-9apUWLx3C9w/VWhBjPMrsfI/AAAAAAAAAIQ/h8oszyhB4Fc/s1600/ID%2BMoz.png"
                          fluid-grow alt="Fluid image"
                        ></b-img>
                      </div>
                    </div>
                  </b-collapse>
                </div>
                <div class="col-lg-10">

                </div>
                <div class="col">
                  <a href="#" @click="modalShow = !modalShow" class="card-link">Privacy</a>
                  <b-modal centered v-model="modalShow" title="Choose who can see this document: ">
                    <form action="">
                      <b-form-select v-model="selected" :options="options" multiple :select-size="4"></b-form-select>
                      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
                    </form>
                  </b-modal>
                </div>
              </div>
            </b-card>
          </div>
        </b-tab>
        <b-tab title="Academic Documents">
          <b-card title="New documents will be shown here as you add them.">
          </b-card>
        </b-tab>
        <b-tab title="Other Documents">
          <b-card title="New documents will be shown here as you add them.">
          </b-card>
        </b-tab>
      </b-tabs>

    </b-card>
  </div>
</template>

<script>
export default {
  name: "DocumentsList",
  data() {
    return {
      modalShow: false,
      selected: '', // Array reference
      options: [
        { value: 'Tyrion Lannister', text: 'Tyrion Lannister' },
        { value: 'Deanerys Targaryen', text: 'Deanerys Targaryen' },
        { value: 'Jon Snow', text: 'Jon Snow' },
        { value: 'Tywin Lannister', text: 'Tywin Lannister' },
        { value: 'Aerys Targaryen', text: 'Aerys Targaryen' },
        { value: 'Eddard Stark', text: 'Eddard Stark' }
      ]
    }
  },
}
</script>

<style scoped>

.details{
  background-color: transparent  !important;
  color: #0b0b0b !important;
  cursor: pointer !important;
  /*border-color: #0b0b0b !important;*/
}

.details:hover{
  background-color: rgb(41,50,79) !important;
  color: white !important;
}

.doc-item{
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-bottom: 10px;
}

.doc-item:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

</style>
