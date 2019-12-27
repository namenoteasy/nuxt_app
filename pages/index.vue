<template>
  <v-app id="inspire">
    <v-content style="background:rgb(247,247,247)">
      <div v-if="!isMobile" class="mainIndexContain">
        <div v-for="(item, i) in listdata" id="pc" :key="i" :style="{'background':(i/2===0)?'#fff':'rgb(247,247,247)'}">
          <p class="mainTitle">
            {{ item.name }}
          </p>
          <div class="appContain">
            <card v-for="(el, k) in item.appInfos" :key="k" :app-info="el" />
          </div>
        </div>
      </div>
      <!-- 移动端 -->
      <div v-if="isMobile" class="mobileContain">
        <div v-for="(item, i) in listdata" id="mobile" :key="i">
          <p class="mainTitle">
            {{ item.name }}
          </p>
          <div class="appContain">
            <mobile-card v-for="(el, k) in item.appInfos" :key="k" :app-info="el" />
          </div>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Card from '~/components/Card.vue'
import MobileCard from '~/components/MobileCard.vue'
export default {
  components: {
    Card, MobileCard
  },
  asyncData (context) {
    return context.$axios.get(`/api/Category/GetAppCategoryInfos`).then((res) => {
      return { listdata: res.data }
    })
  },
  data () {
    return {
      isMobile: this.$store.state.app.isMobile,
      listdata: null,
      drawer: null
    }
  },
  computed: {
    bgStyle () {

    }
  }
}
</script>
<style lang="scss" scoped>
.mobileContain {
  width: 100%;
  overflow: hidden;
  .mainTitle {
    padding: 1.48rem 0 1.36rem 1.28rem;
    font-size: 1.2rem;
    margin-top: 1.2rem;
    margin-bottom: 0;
    color: #292a2f;
    font-weight: 440;
    text-align: center;
  }
  .appContain {
    padding: 0 1.72rem 0.84rem 1.4rem;
  }
}
.mainIndexContain {
  width: 100%;
  padding: 0 3.8rem 1.125rem 3.8rem;
  .mainTitle {
    font-size: 0.45rem;
    color: #292a2f;
    margin: 1.25rem 0 0.36rem 0;
    position: relative;
    font-weight: 600;
    width: 100%;
    text-align: center;
  }
  .appContain {
    width: 100%;
    margin-top: 0.503rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
