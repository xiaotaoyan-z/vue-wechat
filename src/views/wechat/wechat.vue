<template>
  <div class="wechat">
    <!--<img src="./assets/logo.png">-->
    <!--底部导航-->
    <footer-nav></footer-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import footerNav from '@/components/footer'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    footerNav
  }
}
</script>

<style lang='scss'>
</style>
