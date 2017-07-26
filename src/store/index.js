import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import settings from './modules/settings'

Vue.use(Vuex)


const store = new Vuex.Store({
	actions,
	getters,
	modules: {
		settings
	}
});

export default store
