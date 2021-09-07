<template>
  <div>
    <img src="../../../assets/images/login/mail.png" width="80"  alt="">
    <h1 class="mt-3 mb-0 dark-color" style="color:white;">Success !</h1>
    <p class="dark-color d-inline-block line-height-1" style="color:white;">
      An email has been sent to youremail@domain.com. 
      Please check for an email from company and click on the
      included link to reset your password.
    </p>
    <div class="d-inline-block w-100">
      <b-button type="submit" block variant="success">Back to Home</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConfirmMail1'
}
</script>
