import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

//const wechat = resolve => require(['../views/wechat/wechat.vue'], resolve)
const wechat = r => require.ensure([], () => r(require('../views/wechat/wechat.vue')), 'group-wechat')
const contact = r => require.ensure([], () => r(require('../views/contact/contact.vue')), 'group-contact')
const find = r => require.ensure([], () => r(require('../views/find/find.vue')), 'group-find')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'wechat',
      component: wechat
    },
    {
    	path: '/contact',
    	name: 'contact',
    	component: contact
    },
    {
    	path: '/find',
    	name: 'find',
    	component: find
    }
  ]
})
