<template>
  <div id="App">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  mounted() {
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },
  methods:{
    ...mapActions(['getAddress','getUserInfo'])
  },
  components: { FooterGuide },
};
</script>

<style lang="stylus">
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}
</style>
