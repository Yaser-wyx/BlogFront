import Vue from 'vue'

let _ = require('lodash')
let $utils = {
  install(Vue) {
    Vue.prototype.$utils = _
  }
}

Vue.use($utils)
