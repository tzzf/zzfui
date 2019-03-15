import Button from './src'

/* istanbul ignore next */
Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

export default Button
