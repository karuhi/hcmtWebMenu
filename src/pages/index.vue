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
      <div class="tab-container tabs-classic tabs-fill tabs-center">
        <ul>
          <li class="selected"><a>今日</a></li>
          <li><a>明日</a></li>
          <li><a>明後日</a></li>
        </ul>
      </div>
      <div class="card">
        <div class="card-head">
          <p class="card-head-title">{{ todayDate }}のメニュー</p>
        </div>
        <div class="content">
          <p>
            <div v-if="response != null">
              <div v-if="disp[0] == true">
                {{ response[0]['breakfast']['A'] }}
                {{ response[0]['breakfast']['B'] }}
              </div>
              <div v-if="disp[1] == true">{{ response[0]['lunch'] }}</div>
              <div v-if="disp[2] == true">
                {{ response[0]['dinner']['A'] }}
                {{ response[0]['dinner']['B'] }}
              </div>
            </div>
          </p>
        </div>
        <div class="card-footer level content">
          {{ todayDate }}更新
          <div class="pull-right">
            <div class="level-left ignore-screen">
              <a class="level-item">
                <span class="icon"><i class="fa small fa-reply" aria-hidden="true"></i></span>
              </a>
              <a class="level-item">
                <span class="icon"><i class="fa small fa-retweet" aria-hidden="true"></i></span>
              </a>
              <a class="level-item">
                <span class="icon"><i class="fa small fa-heart" aria-hidden="true"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div class="action-bar center">
          <button class="btn" @click="changeMenu(0)">朝食を見る</button>
          <button class="btn" @click="changeMenu(1)">昼食を見る</button>
          <button class="btn" @click="changeMenu(2)">夜食を見る</button>
        </div>
      </div>
    </div>
    <footer>
      <div class="footer-list-title">hcmtWebMenu</div>
      <ul>
        <a href="" class="list-item">更新情報</a>
        <a href="" class="list-item">ロードマップ</a>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap' }
      ]
    }
  },
  data: function() {
    return {
      response: null,
      todayDate: '2019/07/01',
      disp: [true, false, false]
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
  methods: {
    changeMenu(num) {
      const index = num;
      for (var i = 0; i < this.disp.length; i++) {
        this.disp.splice(i, 1, false);
      }
      this.disp.splice(index, 1, true);
      console.log(this.disp);
    }
  }

}

</script>
<style scoped>
.main {
  padding-top: 3.25rem;
}

</style>
