## Functions

<dl>
<dt><a href="#isRequired">isRequired(value, [required])</a> ⇒ <code>Boolean</code></dt>
<dd><p>验证是否必填项，且是否可为空值</p>
<p>若 <code>required</code> 缺省，则 <code>value</code> 为任何值皆可通过验证。若 <code>required</code> 已设置（<code>true,1,其它非空值</code>），则验证 <code>value</code> 是否非空。</p>
</dd>
<dt><a href="#isNumeric">isNumeric(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为数字字符串（包含正数、负数、小数）</p>
</dd>
<dt><a href="#isUserName">isUserName(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为以字母开头，后接字母、数字、下划线</p>
</dd>
<dt><a href="#isEmail">isEmail(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为邮箱地址（包含对中文域名后缀的支持，如 <code>.公司</code> 和 <code>.网络</code> 等）</p>
</dd>
<dt><a href="#isIDCard">isIDCard(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为身份证号码</p>
</dd>
<dt><a href="#isTelephone">isTelephone(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为座机号码</p>
</dd>
<dt><a href="#isPhone">isPhone(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为国内手机号码</p>
<p><strong>注意</strong>：此方法为国内手机号严格验证规则，国际电话号码请使用 <code>isInternationalPhone()</code> 方法。</p>
</dd>
<dt><a href="#isInternationalPhone">isInternationalPhone(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为国际电话号码</p>
<p><strong>注意</strong>：此方法为国际版电话号码规则验证，号码前可包含国际短号，如中国为 <code>+86</code> 或者 <code>0086</code>。
为适应各个国家的手机号通用验证，不再较验国内手机号以 <code>1</code> 开头的规则。国内手机号严格验证请使用 <code>isPhone()</code> 方法。</p>
<p><strong>示例</strong>：</p>
<p>中国：+86-15258893175、0086-15258893175</p>
<p>台湾：+88-6958133699、0088-6958133699</p>
<p>日本：+81-792379925、0081-792379925</p>
<p>美国：+1-8002006454、001-8002006454</p>
<p>英国：+44-9810597886、0044-9810597886</p>
</dd>
<dt><a href="#isCnName">isCnName(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为汉字名称</p>
</dd>
<dt><a href="#isBankCard">isBankCard(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为银行卡号</p>
<p><strong>说明</strong>：银行卡号一般 <code>15-19</code> 位，且首位不为 <code>0</code>。</p>
</dd>
<dt><a href="#isDataURL">isDataURL(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为 <code>Base64</code> 图片地址</p>
</dd>
<dt><a href="#isBase64URL">isBase64URL(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为 <code>Base64</code> 图片地址（DataURL 的别名）</p>
</dd>
<dt><a href="#isAbsoluteURL">isAbsoluteURL(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为绝对地址（一般验证以如 <code>http://</code> 开头的网址）</p>
<p><strong>说明</strong>：如果URL以 <code>&lt;scheme&gt;://</code> 或 <code>//</code> 开头，则被认为是绝对URL</p>
</dd>
<dt><a href="#isRelativeURL">isRelativeURL(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为相对地址（一般验证本地相对路径）</p>
</dd>
<dt><a href="#isIPAddress">isIPAddress(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为 IP 地址（IPv4 地址，分成4段由 0-255 数字组合而成）</p>
<p><strong>注意</strong>：请注意 IP 地址与 IP 网址的区别。</p>
</dd>
<dt><a href="#isIPURL">isIPURL(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为 IP 网址</p>
<p>其由 AbsoluteURL 和 IPAddress 两个验证规则连接组合而成</p>
</dd>
<dt><a href="#validate">validate(value, regexps, [all])</a> ⇒ <code>Boolean</code></dt>
<dd><p>同时验证多个正则规则是否成立</p>
</dd>
</dl>

<a name="isRequired"></a>

## isRequired(value, [required]) ⇒ <code>Boolean</code>
验证是否必填项，且是否可为空值

若 `required` 缺省，则 `value` 为任何值皆可通过验证。若 `required` 已设置（`true,1,其它非空值`），则验证 `value` 是否非空。

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证是否为空的值 |
| [required] | <code>Boolean</code> \| <code>undefined</code> | 是否必填开关 |

<a name="isNumeric"></a>

## isNumeric(value) ⇒ <code>Boolean</code>
是否为数字字符串（包含正数、负数、小数）

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isNumeric('3.1415926');
// => true

isNumeric('-100');
// => true

isNumeric('-1.25');
// => true
```
<a name="isUserName"></a>

## isUserName(value) ⇒ <code>Boolean</code>
是否为以字母开头，后接字母、数字、下划线

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isUserName('ao_snow88');
// => true

isUserName('_aosnow');
// => false，不能以下划线 _ 开头，下划线只能出现在除首位的其它位置
```
<a name="isEmail"></a>

## isEmail(value) ⇒ <code>Boolean</code>
是否为邮箱地址（包含对中文域名后缀的支持，如 `.公司` 和 `.网络` 等）

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isEmail('aosnow@good.net');
// => true

isEmail('aosnow@good.com.cn');
// => true

isEmail('aosnow@good.公司');
// => true

isEmail('aosnow@yeah');
// => false，域名后缀不能省略
```
<a name="isIDCard"></a>

## isIDCard(value) ⇒ <code>Boolean</code>
是否为身份证号码

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isIDCard('522425198109113949');
// => true，正常18位身份证号码

isIDCard('14082519750817363x');
// => true，x结尾的身份证号码（x代表10）

isIDCard('14082519750817363X');
// => true，x结尾的身份证号码（x代表10）

isIDCard('130928198905281');
// => true，15位身份证号码
```
<a name="isTelephone"></a>

## isTelephone(value) ⇒ <code>Boolean</code>
是否为座机号码

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isTelephone('02142531245');
// => true

isTelephone('021-42531245');
// => true

isTelephone('0571-42531245');
// => true

isTelephone('0571 42531245');
// => true
```
<a name="isPhone"></a>

## isPhone(value) ⇒ <code>Boolean</code>
是否为国内手机号码

**注意**：此方法为国内手机号严格验证规则，国际电话号码请使用 `isInternationalPhone()` 方法。

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isPhone('15258829831');
// => true

isPhone('12258829831');
// => false，号码段暂只支持 [3456789]

isPhone('021-42531245');
// => false
```
<a name="isInternationalPhone"></a>

## isInternationalPhone(value) ⇒ <code>Boolean</code>
是否为国际电话号码

**注意**：此方法为国际版电话号码规则验证，号码前可包含国际短号，如中国为 `+86` 或者 `0086`。
为适应各个国家的手机号通用验证，不再较验国内手机号以 `1` 开头的规则。国内手机号严格验证请使用 `isPhone()` 方法。

**示例**：

中国：+86-15258893175、0086-15258893175

台湾：+88-6958133699、0088-6958133699

日本：+81-792379925、0081-792379925

美国：+1-8002006454、001-8002006454

英国：+44-9810597886、0044-9810597886

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isInternationalPhone('+8615258893175');
// => true，国内号码

isInternationalPhone('008615258893175');
// => true，国内号码

isInternationalPhone('0018002006454');
// => false，美国号码

isInternationalPhone('+81792379925');
// => false，日本号码
```
<a name="isCnName"></a>

## isCnName(value) ⇒ <code>Boolean</code>
是否为汉字名称

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isCnName('我是中国人');
// => true

isCnName('我要1个中国人');
// => false，不能包含汉字以外的字符
```
<a name="isBankCard"></a>

## isBankCard(value) ⇒ <code>Boolean</code>
是否为银行卡号

**说明**：银行卡号一般 `15-19` 位，且首位不为 `0`。

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isBankCard('9558801282847859321');
// => true，中国工商银行原牡丹灵通卡借记卡

isBankCard('5124312137817842310');
// => true，宁波银行卡
```
<a name="isDataURL"></a>

## isDataURL(value) ⇒ <code>Boolean</code>
是否为 `Base64` 图片地址

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

<a name="isBase64URL"></a>

## isBase64URL(value) ⇒ <code>Boolean</code>
是否为 `Base64` 图片地址（DataURL 的别名）

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

<a name="isAbsoluteURL"></a>

## isAbsoluteURL(value) ⇒ <code>Boolean</code>
是否为绝对地址（一般验证以如 `http://` 开头的网址）

**说明**：如果URL以 `<scheme>://` 或 `//` 开头，则被认为是绝对URL

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isAbsoluteURL('http://www.xxx.com');
// => true

isAbsoluteURL('ftp://200.0.0.1/xxx');
// => true

isAbsoluteURL('//xxx.com/path');
// => true

isAbsoluteURL('/upload/xxx.jpg');
// => false
```
<a name="isRelativeURL"></a>

## isRelativeURL(value) ⇒ <code>Boolean</code>
是否为相对地址（一般验证本地相对路径）

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isRelativeURL('a/b/c/i.html');
// => true

isRelativeURL('a/b/c/q?k=123');
// => true

isRelativeURL('../a/b/c');
// => true

isRelativeURL('//a.com/b/c');
// => false
```
<a name="isIPAddress"></a>

## isIPAddress(value) ⇒ <code>Boolean</code>
是否为 IP 地址（IPv4 地址，分成4段由 0-255 数字组合而成）

**注意**：请注意 IP 地址与 IP 网址的区别。

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isIPAddress('127.0.0.1');
// => true

isIPAddress('192.168.1.1');
// => true

isIPAddress('0.0.0.256');
// => false，每段区间为 0-255
```
<a name="isIPURL"></a>

## isIPURL(value) ⇒ <code>Boolean</code>
是否为 IP 网址

其由 AbsoluteURL 和 IPAddress 两个验证规则连接组合而成

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

**Example**  
```js
isIPURL('http://127.0.0.1/path');
// => true

isIPURL('ftp://200.0.0.1/path');
// => true

isIPURL('//172.16.8.6/path');
// => true

isIPURL('http://www.xxx.com');
// => false
```
<a name="validate"></a>

## validate(value, regexps, [all]) ⇒ <code>Boolean</code>
同时验证多个正则规则是否成立

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | 需要验证的值 |
| regexps | <code>RegExp</code> \| <code>Boolean</code> |  | 需要验证的正则规则 |
| [all] | <code>Boolean</code> | <code>true</code> | 是否同时满足所有条件，否则满足其一即条件成立 |

**Example**  
```js
import {Telephone, Phone} from '@mudas/validate';

validate('15258878312', Telephone, Phone);
// => false

validate('15258878312', Telephone, Phone, false);
// => true
```
