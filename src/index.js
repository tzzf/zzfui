import Button from '../packages/button'
import Loading from '../packages/loading'
import $Dialog from '../packages/dialog/dialog.js'

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
