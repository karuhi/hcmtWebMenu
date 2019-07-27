<template>
  <div class="roadmap">
    <navbar />
      <nuxt-link to="/" class="btn">
        ← トップページに戻る</nuxt-link>
    <div class="content">
    <iframe src="https://changelogfy.com/hcmtwebmenu/announcements" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
  components: {
    navbar
  }
}

</script>
<style scoped>
.roadmap {
  padding-top: 3.25rem;
}

iframe {
  width: 100%;
  height: 100vh;
}
.space {
	margin: 50px;
}
</style>
