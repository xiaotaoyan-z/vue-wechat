<template>
  <div class="contact">
    <header-top head-more='true'></header-top>
    <section class="contact-content">
      <div class="top-box">
        <ul>
          <router-link to='/' tag='li' class='contact-li'>
            <div class="link-image">
              <svg class="icon" aria-hidden="true"><use xlink:href="#icon-xindepengyou"></use></svg>
            </div>
            <p>新的朋友</p>
          </router-link>
          <router-link to='/' tag='li' class='contact-li'>
            <div class="link-image">
              <svg class="icon" aria-hidden="true"><use xlink:href="#icon-qunliao"></use></svg>
            </div>
            <p>群聊</p>
          </router-link>
          <router-link to='/' tag='li' class='contact-li'>
            <div class="link-image">
              <svg class="icon bgcolor" aria-hidden="true"><use xlink:href="#icon-biaoqian"></use></svg>
            </div>
            <p>标签</p>
          </router-link>
          <router-link to='/' tag='li' class='contact-li'>
            <div class="link-image">
              <svg class="icon bgcolor" aria-hidden="true"><use xlink:href="#icon-gongzhonghao"></use></svg>
            </div>
            <p>公众号</p>
          </router-link>
        </ul>
      </div>
    </section>
    <!--底部导航-->
    <footer-nav></footer-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import headerTop from '@/components/header'
import footerNav from '@/components/footer'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    headerTop,
    footerNav
  }
}
</script>

<style lang='scss' scoped>
.contact {
  width: 100%;
  .contact-content {
    .top-box {
      background-color: #fff;
      .contact-li {
        margin-left: 0.3rem;
        height: 2rem;
        line-height: 2rem;
        border-bottom: 1px solid #d4d4d4;
        clear: both;
        .link-image {
          display: inline-block;
          float: left;
          width: 2rem;
          svg {
            margin-top: 0.25rem;
            width: 1.5rem;
            height: 1.5rem;
          }
          .bgcolor {
            background-color: #2962ff;
          }
        }
        p {
          float: left;
          display: inline-block;
          margin-left: 0.5rem;
          font-size: 0.7rem;
        }
      }
    }
  }

}
</style>
