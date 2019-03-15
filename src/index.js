import Button from '../packages/button/src'
import Loading from '../packages/loading/src'
import $Dialog from '../packages/dialog/index.js'

const install = function (Vue) {
  if (install.installed) return
  Vue.component(Button.name, Button)
  Vue.component(Loading.name, Loading)
  Vue.prototype.$dialog = $Dialog
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Loading,
  Button
}
