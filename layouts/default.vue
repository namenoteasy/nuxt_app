<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <span class="menu_title">{{ title }}</span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon v-show="isMobile" @click.stop="drawer = !drawer" />
      <span class="app_title">{{ title }}</span>
      <v-spacer />
    </v-app-bar>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      isMobile: false,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      title: '润建创新研发院'
    }
  },
  beforeCreate () {
    if (process.browser) {
      if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
        this.$store.commit('app/changeClient', true)
        this.isMobile = true
      } else {
        this.isMobile = false
        this.$store.commit('app/changeClient', false)
      }
    }
  }
}
</script>
<style>
html {
  font-size: calc(100vw /30);
}
@function rem($pixels) {
    @return $pixels / calc(100vw /30) + rem;
}
.menu_title{
  font-size:14px;
}
.app_title{
  font-size:24px;
}
</style>
