<template>
  <div class="wechat">
    <header-top head-more='true'></header-top>
    <div class="content">
      <section class="computer">
        <router-link to='/computer' class='computer-link'>
          <svg class="icon" aria-hidden="true"><use xlink:href="#icon-desktop"></use></svg>
          <p>Windows 微信已登录<span v-if='settings.mobileMute'>，手机通知已关闭</span></p>
        </router-link>
      </section>
    </div>
    <footer-nav></footer-nav>
    <transition name="router-show">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import headerTop from '@/components/header'
import footerNav from '@/components/footer'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    headerTop,
    footerNav
  },
  computed: {
    ...mapState([
        'settings'
      ])
  }
}
</script>

<style lang='scss' scoped>
.router-show-enter-active,.router-show-leave-active{
  transition: all .4s;
}
.router-show-enter,.router-show-leave-active{
  opacity: 0;
  transform:translateY(30rem);
}
.content {
  .computer {
    border-bottom: 1px solid #d4d4d4;
    width: 100%;
    height: 1.8rem;
    .computer-link {
      width: 100%;
      height: 1.8rem;
      line-height: 1.8rem;
      //border: 1px solid red;
      position: absolute;
      left: 0;
      color: #474747;
      svg {
        float: left;
        margin-left: 1rem;
        padding-top: 0.35rem;
        height: 1.1rem;
      }
      p {
        float: left;
        padding-left: 1rem;
        height: 1.8rem;
        font-size: 0.6rem;
      }
    }
  }
}
</style>
