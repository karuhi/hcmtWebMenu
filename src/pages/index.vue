<template>
  <div class="main">
    <div class="header dark header-fixed unselectable header-animated">
      <div class="header-brand">
        <div class="nav-item no-hover">
          <h6 class="title">HCMTWebMenu</h6>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="tab-container tabs-classic tabs-fill tabs-center">
        <ul>
          <li v-bind:class="{'selected' : disp_date == 0}" @click="changeDate(0)"><a>今日</a></li>
          <li v-bind:class="{'selected' : disp_date == 1}" @click="changeDate(1)"><a>明日</a></li>
          <li v-bind:class="{'selected' : disp_date == 2}" @click="changeDate(2)"><a>明後日</a></li>
        </ul>
      </div>
      <div v-for="(item, key, index) in response" v-bind:key="item[0].id">
        <div class="card" v-show="disp_date==key">
          <div class="card-head">
            <p class="card-head-title">
              {{item[0].date}}のメニュー
            </p>
          </div>
          <div class="content">
            <div v-show="disp_menu == 0">
              <div>{{item[0]['breakfast']['A']}}</div>
              <div>{{item[0]['breakfast']['B']}}</div>
            </div>
            <div v-show="disp_menu == 1">
              {{item[0]['lunch']}}
            </div>
            <div v-show="disp_menu == 2">
              <div>{{item[0]['dinner']['A']}}</div>
              <div>{{item[0]['dinner']['B']}}</div>
            </div>
          </div>
          <div class="card-footer level content center">
            みんなの評価：
            <div v-for="i in 5">
              <a class="level-item">
                <span class="icon iconstared"><i class="fa small fa-star" aria-hidden="true"></i></span>
              </a>
            </div>
          </div>
          <div class="action-bar">
            <div class="btn-group btn-group-fill">
              <button v-bind:class="{ 'btn-dark' : disp_menu[0]}" @click="changeMenu(0)">朝食を見る</button>
              <button v-bind:class="{ 'btn-dark' : disp_menu[1]}" @click="changeMenu(1)">昼食を見る</button>
              <button v-bind:class="{ 'btn-dark' : disp_menu[2]}" @click="changeMenu(2)">夕食を見る</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="content">
      
      <div class="card">
        
        <div class="action-bar center" v-if="response != null">
          <div class="btn-group btn-group-fill">
            
          </div>
        </div>
      </div>
    </div>-->
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
  data: function() {
    return {
      response: [],
      todayDate: '2019/07/01',
      disp_menu: 0,
      disp_date: 0,
    }
  },
  mounted: function() {
    var dates = new Date();

    var year = dates.getFullYear();
    var month = ("0" + (dates.getMonth() + 1)).slice(-2);
    var day = ("0" + dates.getDate()).slice(-2);
    this.todayDate = year + '/' + month + '/' + day;
    this.callMenu(year, month, day);
  },
  methods: {
    changeMenu(num) {
      const index = num;
      for (var i = 0; i < this.disp_menu.length; i++) {
        this.disp_menu.splice(i, 1, false);
      }
      this.disp_menu.splice(index, 1, true);
      console.log(this.disp_menu);
    },
    changeDate(num) {
      this.disp_date = num;
    },
    callMenu(year, month, day) {
      for (var i = 0; i < 3; i++) {
        day = parseInt(day);
        var dates = year + '/' + month + '/' + (day + i);
        console.log(dates + "のメニューを取得します...");
        this.$axios
          .$get('/api/menu/' + dates)
          .then(response => {
            this.response.push(response);
            if (response.slice(0, 1) == "<") {
              this.response[i] = null;
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }

}

</script>
<style scoped>
.main {
  padding-top: 3.25rem;
}

.card button {
  border-color: #white;
}

.iconstared {
  color: #fab633;
}

.iconstared:hover {
  color: #f9a90e;
}

</style>
