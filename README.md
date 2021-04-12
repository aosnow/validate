# @mudas/validate

> A tools library of RegExp validater.

**Documents：** [view the document](https://aosnow.github.io/validate/)

## Steup
```bash
npm install @mudas/validate -S
```

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
import {Email} from '@mudas/validate';

Email.test('aosnow@yeah.net');
// => true
```

