#### zzfui

### 安装

```shell
npm i zzfui -S
```



### 引入
```javascript
import zzfui from 'zzfui'
import 'zzfui/lib/zzf-css/index.css'

Vue.use(zzfui)

// or 按需加载（需要引入插件babel-plugin-component）
import {
  Button
  // ...
} from 'zzfui'
import 'zzfui/lib/zzf-css/index.css'

Vue.use(Button)
// 在.babelrc中按需加载插件
"plugins": [
    [
      "component",
      {
        "libraryName": "zzfui",
        "styleLibraryName": "zzf-css"
      }
    ]
]

```

### 使用


button组件

```html
<v-button type="default">默认按钮</v-button>
<v-button type="primary">主要按钮</v-button>
<v-button type="warn">警告按钮</v-button>
```
尺寸 用size属性控制
支持 `large`、`normal`、`middle`、`small` 四种尺寸，默认为 `normal`
```html
<v-button size="large" type="default">默认按钮</v-button>
```
禁用 用disabled属性控制
```html
<v-button disabled type="default">默认按钮</v-button>
```



dialog组件

```javascript
this.$dialog({
    title: 'Dialog',
    cancelText: '取消',
    okText: '确定',
    content: '测试 Dialog，测试 Dialog，测试 Dialog~~~',
    onOK: () => {
        console.log('onOK');
    },
    onCancel: () => {
        console.log('onCancel');
    }
})
```

loading组件

```html
<v-loading :isLoading="isLoading"></v-loading>
```


骨架屏组件

```html
<v-skeleton :isLoading="isLoading">
  <div class="xxx">3231</div>
  <div class="xxx" v-if="isLoading">骨架屏if</div>
  <div class="xxx" v-else>骨架屏else</div>
</v-skeleton>
```