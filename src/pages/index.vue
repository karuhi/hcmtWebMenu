<template>
  <div class="main">
    <div class="header dark header-fixed unselectable header-animated">
      <div class="header-brand">
        <div class="nav-item no-hover">
          <h6 class="title">hcmtFoodMenuWeb</h6>
        </div>
      </div>
    </div>
    <div class="content">
      <p>
        api response result : {{ response }}
      </p>
      <tiny-slider :mouse-drag="true" slide-by="page" items="3" gutter="20" v-if="response != null">
        <div>{{ response[0]['breakfast'] }}</div>
        <div>{{ response[0]['lunch'] }}</div>
        <div>{{ response[0]['dinner'] }}</div>
        <div>{{ response[0]['breakfast'] }}</div>
        <div>{{ response[0]['lunch'] }}</div>
        <div>{{ response[0]['dinner'] }}</div>
        <div>{{ response[0]['breakfast'] }}</div>
        <div>{{ response[0]['lunch'] }}</div>
        <div>{{ response[0]['dinner'] }}</div>
      </tiny-slider>
    </div>
    <footer>
      <div class="footer-list-title">hcmtFoodMenuWeb</div>
      <ul>
        <a href="" class="list-item">更新情報</a>
        <a href="" class="list-item">ロードマップ</a>
      </ul>
    </footer>
  </div>
</template>
<script>
import VueTinySlider from 'vue-tiny-slider';
export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.3.5/tiny-slider.css' }
      ]
    }
  },
  components: {
    'tiny-slider': VueTinySlider
  },
  data: function() {
    return {
      response: null,
      todayDate: '2019/07/01'
    }
  },
  mounted: function() {
    this.$axios
      .$get('/api/menu/' + this.todayDate)
      .then(response => {
        this.response = response
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {}

}

</script>
<style scoped>
.main {
  padding-top: 3.25rem;
}

</style>
