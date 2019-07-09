# vue-ele-form-json-editor | vue-ele-form 的 json 编辑器

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg)](https://opensource.org/licenses/mit-license.php)
[![npm](https://img.shields.io/npm/v/vue-ele-form-json-editor.svg)](https://www.npmjs.com/package/vue-ele-form-json-editor)
[![download](https://img.shields.io/npm/dw/vue-ele-form-json-editor.svg)](https://npmcharts.com/compare/vue-ele-form-json-editor?minimal=true)

## 介绍

vue-ele-form-json-editor 做为 vue-ele-form 的第三方扩展, 用于编辑 JSON 对象或者数组

![image](https://raw.githubusercontent.com/dream2023/images/master/WX20190707-214144.jcnnyvdjz.png)

## 安装

```bash
npm install vue-ele-form-json-editor --save
```

## 使用

```js
import EleForm from 'vue-ele-form'
import EleFormJsonEditor from 'vue-ele-form-json-editor'
// 注册 ele-form
Vue.use(EleForm, {
  // 可以在这里设置全局的 json-editor 属性
  'json-editor': {
    height: 300
  }
})

// 注册 json 组件
Vue.component('json-editor', EleFormJson)
```

```js
formDesc: {
  xxx: {
    label: 'xxx',
    type: 'json-editor', // 只需要在这里指定为 json 即可
    // 属性参考: https://github.com/yansenlei/VJsoneditor
    attrs: {
      height: 300
    }
  }
}
```

## 相关链接

- [VJsoneditor](https://github.com/yansenlei/VJsoneditor)
- [vue-ele-form](https://github.com/dream2023/vue-ele-form)
- [element-ui](http://element-cn.eleme.io)
