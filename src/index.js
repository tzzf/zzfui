import Button from '../packages/button'
import $Dialog from '../packages/dialog/dialog.js'

const install = function (Vue) {
  if (install.installed) return
  Vue.component(Button.name, Button)
  Vue.prototype.$dialog = $Dialog
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button
}
