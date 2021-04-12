## Steup
```bash
npm install @mudas/validate -S
```

**Documents：** [view the document](https://aosnow.github.io/validate/)

## Build option
By default, babel-loader does not translate all files in node_modules, so specifying node_modules separately requires the esm module that babel translates
```js
module.exports = {
  transpileDependencies: [
    '@mudas/*'
  ]
};
```
> Note: The above is the configuration method of `vue.config.js`, please refer to relevant documents for other build environments

## Usage example
```js
import {isEmail} from '@mudas/validate';

isEmail('aosnow@yeah.net');
// => true
```

Or direct reference to regular:
```js
import {Reg} from '@mudas/validate';

Reg.Email.test('aosnow@yeah.net');
// => true
```

## 目录
[快速上手指南](./guide)  
### 验证函数
- [验证函数](./validater)  
### 正则表达式
- [正则表达式](./regexp)  
