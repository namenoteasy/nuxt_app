<template>
  <div
    class="appItem"
  >
    <img class="appImg" :src="imgServer+appInfo.imgUrl">
    <div class="appCodeContain">
      <img src="">
    </div>
    <div class="appTitle">
      {{ appInfo.appName }}
    </div>
    <div class="appText">
      {{ appInfo.sketch }}
    </div>
    <div class="bottom" style="text-align:center">
      <v-btn outlined color="rgb(20,110,249)" @click="pushPage">
        查看详情
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appInfo: null
  },
  data () {
    return {
      imgServer: process.env.baseUrl
    }
  },
  methods: {
    pushPage () {
      if (this.appInfo.appUrl) {
        window.open(this.appInfo.appUrl, null, '')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.appItem {
  width: 7.09rem;
  min-height: 7.88rem;
  /* border-radius: 0.11rem; */
  position: relative;
  /* box-shadow: 0px 13px 28.42px 0.58px rgba(0, 0, 0, 0.05); */
  margin-bottom: 0.55rem;
  border: 1px solid #ddd;
  background-color: #ffffff;
  .v-btn{
    height:0.6rem;
    line-height: 0.6rem;
    padding-left: 0.42rem;
    padding-right: 0.42rem;
    border-radius: 0;
    font-size: 0.25rem;
    text-decoration: none;
  }
  .bottom{
    position: absolute;
    left: 0;
    bottom:0;
    width:100%;
  }
}
.appImg {
  display: block;
  width: 100%;
  height: 4.19rem;
  /* border-top-left-radius: 0.11rem; */
  /* border-top-right-radius: 0.11rem; */
}
.appCodeContain {
  width: 100%;
  height: 6.63rem;
  line-height: 6.63rem;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  display: none;
  text-align: center;
  border-top-left-radius: 0.11rem;
  border-top-right-radius: 0.11rem;
}
.appTitle {
  margin: 0.193rem 0;
  color: #292a2f;
  text-align: center;
  font-size: 0.35rem;
  padding: 0 0.311rem 0 0.354rem;
}
.appText {
  margin: 0.193rem 0;
  color: rgb(137,137,137);
  text-align: center;
  font-size: 0.25rem;
  padding: 0 0.311rem 0 0.354rem;
}
</style>
