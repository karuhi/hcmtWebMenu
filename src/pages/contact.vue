<template>
  <div class="contact">
    <navbar />
      <nuxt-link to="/" class="btn">
       ← トップページに戻る</nuxt-link>
    <div class="formrun-embed" data-formrun-form="@hcmtwebmenu" data-formrun-redirect="true">
    </div>
  </div>
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
  head() {
    return {
      script: [
        { src: 'https://sdk.form.run/js/v2/embed.js' }
      ]
    }
  },
  components: {
    navbar
  }
}

</script>
<style scoped>
.contact {
  padding-top: 3.25rem;
}

</style>
