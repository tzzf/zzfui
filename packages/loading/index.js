import Loading from './src'

/* istanbul ignore next */
Loading.install = function (Vue) {
  Vue.component(Loading.name, Loading)
}

export default Loading
