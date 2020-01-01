import Vue from 'vue'

import Nyre from 'nyre';

function install(Vue, options) {
    Vue.prototype.$nyre = new Nyre()
}

export default install