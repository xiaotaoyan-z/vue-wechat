<template>
  <div class="computer">
    <header class="header">
      <input type="button" name="close" value="关闭" @click='$router.go(-1)'/>
    </header>
    <section class="image">
      <div class="computer-mobile">
        <svg class="icon icon-computer" aria-hidden="true"><use xlink:href="#icon-desktop"></use></svg>
        <svg class="icon icon-mobile" aria-hidden="true" v-show="settings.mobileMute"><use xlink:href="#icon-mobile"></use></svg>
      </div>
      <p>Windows 微信已登录</p>
    </section>
    <section class="mute">
      <div class="mute-box" @click='setMute'>
        <svg class="icon icon-mute" aria-hidden="true"><use :xlink:href="settings.mobileMute ? '#icon-jingyin' : '#icon-mute'"></use></svg>
      </div>
      <p>手机静音</p>
    </section>
    <section class="exit">
      <div class="exitWin" @click='showMenu'>退出 Windows 微信</div>
    </section>
    <section class="exit-menu" v-show='exitMenu'>
      <div class="mask" @click='closeMenu'></div>
      <div class="menu-win">
        <p>是否退出 Windows 微信？ </p>
        <div class="menu">
          <input type="button" name="exit" value="退出" @click='exitWindows' />
          <input type="button" name="cancel" value="取消" @click='closeMenu' />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'computer',
  data() {
    return {
      exitMenu: false
    }
  },
  computed: {
    ...mapState([
        'settings'
      ])
  },
  methods: {
    ...mapMutations([
        'SET_MOBILE_MUTE'
      ]),
    setMute() {
      this.SET_MOBILE_MUTE(!this.settings.mobileMute);
    },
    showMenu() {
      this.exitMenu = true;
    },
    closeMenu() {
      this.exitMenu = false;
    },
    exitWindows() {
      this.exitMenu = false;
      this.$router.go(-1);
    }
  }
}
</script>

<style lang='scss' scoped>
.computer {
  width: 100%;
  header {
    width: 100%;
    border-bottom: 1px solid #d4d4d4;
    text-align: left;
    height: 2.06933rem;
    line-height: 2.06933rem;
    input {
      border: none;
      background-color: #ebebeb;
      color: #0bb908;
      margin-left: 0.5rem;
      font-size: 0.8rem;
    }
  }
  .image {
    width: 100%;
    height: 13rem;
    .computer-mobile {
      height: 11rem;
      position: relative;
      .icon-computer {
        margin: 3rem auto;
        width: 7rem;
        height: 7rem;
      }
      .icon-mobile {
        position: absolute;
        background-color: #ebebeb;
        width: 4rem;
        height: 4rem;
        left: 58%;
        top: 55%;
      }
    }
    p {
      font-size: 0.8rem;
    }
  }
  .mute {
    .mute-box {
      border-radius: 50%;
      background-color: #fff;
      width: 3rem;
      height: 3rem;
      margin: 2rem auto 0.2rem;
      line-height: 3rem;
      color: #0bb908;
    }
    p {
      font-size: 0.5rem;
    }
  }
  .exit {
    text-align: center;
    .exitWin {
      margin: 2.3rem auto;
      border: 1px solid #0bb908;
      border-radius: 5px;
      color: #0bb908;
      padding:0.2rem 0.1rem;
      width: 7rem;
      font-size: 0.8rem;
    }
  }
  .exit-menu {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .mask {
      background-color: #000;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity:0.5;
    }
    .menu-win {
      position: fixed;
      background-color: #fff;
      width: 100%;
      bottom: 0;
      p {
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: 0.6rem;
        color: gray;
        border-bottom: 1px solid #d4d4d4;
      }
      .menu {
        background-color: #d4d4d4;
      input{
          display: block;
          height: 2rem;
          border: none;
          background-color: #fff;
          width: 100%;
          font-size: 0.9rem;
          &[name='exit'] {
            color: red;
            margin-bottom: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
