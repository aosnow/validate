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
<dd><p>是否为邮箱地址</p>
</dd>
<dt><a href="#isIDCard">isIDCard(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为身份证号码</p>
</dd>
<dt><a href="#isTelephone">isTelephone(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为座机号码</p>
</dd>
<dt><a href="#isPhone">isPhone(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为手机号码</p>
</dd>
<dt><a href="#isCnName">isCnName(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为汉字名称</p>
</dd>
<dt><a href="#isBankCard">isBankCard(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为银行卡号</p>
</dd>
<dt><a href="#isDataURL">isDataURL(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为 <code>Base64</code> 图片地址</p>
</dd>
<dt><a href="#isBase64URL">isBase64URL(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为 <code>Base64</code> 图片地址（DataURL 的别名）</p>
</dd>
<dt><a href="#isAbsoluteURL">isAbsoluteURL(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为绝对地址（一般验证以证以如 <code>http://</code> 开头的网址）</p>
<p>如果URL以 <code><scheme>://</code> 或 <code>//</code> 开头，则被认为是绝对URL</p></dd>
<dt><a href="#isRelativeURL">isRelativeURL(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为相对地址（一般验证本地相对路径）</p>
</dd>
<dt><a href="#isIPAddress">isIPAddress(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为 IP 地址</p>
<p>可以和 <code>AbsoluteURL</code> 一起验证包含 IP 地址的网址</p></dd>
<dt><a href="#isIPURL">isIPURL(value)</a> ⇒ <code>Boolean</code></dt>
<dd><p>是否为 IP 网址</p>
<p>同时验证 <code>AbsoluteURL</code> 和 <code>IPAddress</code> 规则</p>
</dd>
<dt><a href="#validate">validate(value, regexps)</a> ⇒ <code>Boolean</code></dt>
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

<a name="isUserName"></a>

## isUserName(value) ⇒ <code>Boolean</code>
是否为以字母开头，后接字母、数字、下划线

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

<a name="isEmail"></a>

## isEmail(value) ⇒ <code>Boolean</code>
是否为邮箱地址

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

<a name="isIDCard"></a>

## isIDCard(value) ⇒ <code>Boolean</code>
是否为身份证号码

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

<a name="isTelephone"></a>

## isTelephone(value) ⇒ <code>Boolean</code>
是否为座机号码

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

<a name="isPhone"></a>

## isPhone(value) ⇒ <code>Boolean</code>
是否为手机号码

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

<a name="isCnName"></a>

## isCnName(value) ⇒ <code>Boolean</code>
是否为汉字名称

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

<a name="isBankCard"></a>

## isBankCard(value) ⇒ <code>Boolean</code>
是否为银行卡号

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

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
是否为绝对地址（一般验证以证以如 <code>http://</code> 开头的网址）
<p>如果URL以 <code><scheme>://</code> 或 <code>//</code> 开头，则被认为是绝对URL</p>

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

<a name="isRelativeURL"></a>

## isRelativeURL(value) ⇒ <code>Boolean</code>
是否为相对地址（一般验证本地相对路径）

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

<a name="isIPAddress"></a>

## isIPAddress(value) ⇒ <code>Boolean</code>
是否为 IP 地址
<p>可以和 <code>AbsoluteURL</code> 一起验证包含 IP 地址的网址</p>

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

<a name="isIPURL"></a>

## isIPURL(value) ⇒ <code>Boolean</code>
是否为 IP 网址

同时验证 `AbsoluteURL` 和 `IPAddress` 规则

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |

<a name="validate"></a>

## validate(value, regexps) ⇒ <code>Boolean</code>
同时验证多个正则规则是否成立

**Kind**: global function  
**Returns**: <code>Boolean</code> - 验证结果  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | 需要验证的值 |
| regexps | <code>RegExp</code> | 需要验证的正则规则 |

