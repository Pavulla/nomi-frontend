<template>
  <div class="container">
    <AddDocument></AddDocument>
    <br><br>
    <div class="">
      <DocumentsList></DocumentsList>
    </div>
  </div>
</template>

<script>

import { socialvue } from '@/config/pluginInit';
import DocumentsList from "@/views/Pages/Documents/DocumentsList";
import AddDocument from "@/views/Pages/Documents/AddDocument";

export default {
  components: {
    DocumentsList,
    AddDocument
  },
  name: "Documents",
  mounted(){
    socialvue.index();
  }
}
</script>

<style scoped>



</style>
