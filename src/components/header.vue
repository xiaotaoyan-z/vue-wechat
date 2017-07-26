<template>
<div class="headerBox">
  <header class="header">
    <div class="header-back" v-if="headBack">
      <svg class="icon" aria-hidden="true"><use xlink:href="#icon-wechatperv"></use></svg>
      <span>微信</span>
    </div>
    <div class="header-title">
      微信
    </div>
    <div class="header-more" v-if='headMore'>
      <svg class="icon" aria-hidden="true"><use xlink:href="#icon-wechatplus"></use></svg>
    </div>
  </header>
  <section class="search" v-show="$route.path.indexOf('find')===-1&&$route.path.indexOf('me')===-1">
    <div class="search-box">
      <div class="search-text">
        <svg class="icon icon-search" aria-hidden="true"><use xlink:href="#icon-weixinduan-sousuo"></use></svg>
        <p>搜索</p>
      </div>
      <svg class="icon icon-huatong" aria-hidden="true"><use xlink:href="#icon-huatong"></use></svg>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ['headBack', 'headMore']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.header {
  position: fixed;
  background-color: black;
  color: #fff;
  top: 0;
  width: 100%;
  height: 2.06933rem;
  line-height: 2.06933rem;
  font-size: 0.7rem;
  .header-back {
    position: absolute;
    left: 0.5rem;
  }
  .header-title {
    display: inline-block;
  }
  .header-more {
    display: inline-block;
    position: absolute;
    right: 0.5rem;
  }
}
.search {
  border-bottom: 1px solid #d4d4d4;
  height: 1.8rem;
  line-height: 1.8rem;
  position: relative;
  margin-top: 2.06933rem;
  .search-box {
    border: none;
    position: absolute;
    height: 1.1rem;
    width: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 5px;
    background-color: #fff;
    font-size: 0.7rem;
    color: gray;
    //border: 1px solid green;
    .search-text {
      position: absolute;
      //border: 1px solid black;
      height: 1rem;
      line-height: 1rem;
      margin: 0;
      left: 45%;
      padding-top: 0.05rem;
      svg {
        float: left;
        //border: 1px solid red;
        height: 1.1rem;
        line-height: 1.1rem;
      }
      p {
        float: left;
        //border: 1px solid green;
        padding-left: 1px;
        padding-top: 0.5px;
        top: 0.1rem;
        font-size: 0.5rem;
        height: 1.1rem;
        line-height: 1.1rem;
      }
    }
    .icon-huatong {
      position: absolute;
     // border: 1px solid orange;
      right: 0.5rem;
      height: 1.1rem;
    }
  }
}
</style>
