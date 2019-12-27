<template>
  <div class="appItem">
    <img class="appImg" :src="imgServer + appInfo.imgUrl">
    <div class="appCodeContain">
      <img src="">
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
  }
}
</script>

<style scoped>
.appItem {
}
.appImg {
  display: block;
  width: 100%;
  height: 11.76rem;
  margin-bottom: 1.2rem;
  cursor: pointer;
  background-color: #ffffff;
  /* border-top-left-radius: 0.11rem; */
  /* border-top-right-radius: 0.11rem; */
}
.appCodeContain {
  width: 100%;
  height: 11.76rem;
  line-height: 11.76rem;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  display: none;
  text-align: center;
  border-top-left-radius: 0.11rem;
  border-top-right-radius: 0.11rem;
}
</style>
