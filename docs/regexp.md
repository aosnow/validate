## Constants

<dl>
<dt><a href="#Numeric">Numeric</a> : <code>RegExp</code></dt>
<dd><p>数字字符串（包含正数、负数、小数）</p>
</dd>
<dt><a href="#UserName">UserName</a> : <code>RegExp</code></dt>
<dd><p>以字母开头，后接字母、数字、下划线</p>
</dd>
<dt><a href="#Email">Email</a> : <code>RegExp</code></dt>
<dd><p>邮箱地址（包含对中文域名后缀的支持，如 <code>.公司</code> 和 <code>.网络</code> 等）</p>
</dd>
<dt><a href="#IDCard">IDCard</a> : <code>RegExp</code></dt>
<dd><p>身份证号码</p>
</dd>
<dt><a href="#Telephone">Telephone</a> : <code>RegExp</code></dt>
<dd><p>座机号码</p>
</dd>
<dt><a href="#Phone">Phone</a> : <code>RegExp</code></dt>
<dd><p>国内手机号码</p>
<p><strong>注意</strong>：此正则为国内手机号严格验证规则，国际电话号码请使用 <code>InternationalPhone</code> 规则。</p>
</dd>
<dt><a href="#InternationalPhone">InternationalPhone</a> : <code>RegExp</code></dt>
<dd><p>国际电话号码</p>
<p><strong>注意</strong>：此正则为国际版电话号码规则验证，号码前可包含国际短号，如中国为 <code>+86</code> 或者 <code>0086</code>。
为适应各个国家的手机号通用验证，不再较验国内手机号以 <code>1</code> 开头的规则。国内手机号严格验证请使用 <code>Phone</code> 规则。</p>
<p><strong>示例</strong>：</p>
<p>中国：+86-15258893175、0086-15258893175</p>
<p>台湾：+88-6958133699、0088-6958133699</p>
<p>日本：+81-792379925、0081-792379925</p>
<p>美国：+1-8002006454、001-8002006454</p>
<p>英国：+44-9810597886、0044-9810597886</p>
</dd>
<dt><a href="#CnName">CnName</a> : <code>RegExp</code></dt>
<dd><p>汉字名称</p>
</dd>
<dt><a href="#BankCard">BankCard</a> : <code>RegExp</code></dt>
<dd><p>银行卡号</p>
<p><strong>说明</strong>：银行卡号一般 <code>15-19</code> 位，且首位不为 <code>0</code>。</p>
</dd>
<dt><a href="#DataURL">DataURL</a> : <code>RegExp</code></dt>
<dd><p>Base64 图片地址</p>
</dd>
<dt><a href="#Base64URL">Base64URL</a> : <code>RegExp</code></dt>
<dd><p>Base64 图片地址（DataURL 的别名）</p>
</dd>
<dt><a href="#AbsoluteURL">AbsoluteURL</a> : <code>RegExp</code></dt>
<dd><p>绝对地址（一般验证以如 <code>http://</code> 开头的网址）</p>
<p><strong>说明</strong>：如果URL以 <code>&lt;scheme&gt;://</code> 或 <code>//</code> 开头，则被认为是绝对URL</p>
</dd>
<dt><a href="#RelativeURL">RelativeURL</a> : <code>RegExp</code></dt>
<dd><p>相对地址（一般验证本地相对路径）</p>
</dd>
<dt><a href="#IPAddress">IPAddress</a> : <code>RegExp</code></dt>
<dd><p>IP 地址（IPv4 地址，分成4段由 0-255 数字组合而成）</p>
<p><strong>注意</strong>：请注意 IP 地址与 IP 网址的区别。</p>
</dd>
<dt><a href="#IPURL">IPURL</a> : <code>RegExp</code></dt>
<dd><p>IP 网址</p>
<p>其由 AbsoluteURL 和 IPAddress 两个验证规则连接组合而成</p>
</dd>
</dl>

<a name="Numeric"></a>

## Numeric : <code>RegExp</code>
数字字符串（包含正数、负数、小数）

**Kind**: global constant  
<a name="UserName"></a>

## UserName : <code>RegExp</code>
以字母开头，后接字母、数字、下划线

**Kind**: global constant  
<a name="Email"></a>

## Email : <code>RegExp</code>
邮箱地址（包含对中文域名后缀的支持，如 `.公司` 和 `.网络` 等）

**Kind**: global constant  
<a name="IDCard"></a>

## IDCard : <code>RegExp</code>
身份证号码

**Kind**: global constant  
<a name="Telephone"></a>

## Telephone : <code>RegExp</code>
座机号码

**Kind**: global constant  
<a name="Phone"></a>

## Phone : <code>RegExp</code>
国内手机号码

**注意**：此正则为国内手机号严格验证规则，国际电话号码请使用 `InternationalPhone` 规则。

**Kind**: global constant  
<a name="InternationalPhone"></a>

## InternationalPhone : <code>RegExp</code>
国际电话号码

**注意**：此正则为国际版电话号码规则验证，号码前可包含国际短号，如中国为 `+86` 或者 `0086`。
为适应各个国家的手机号通用验证，不再较验国内手机号以 `1` 开头的规则。国内手机号严格验证请使用 `Phone` 规则。

**示例**：

中国：+86-15258893175、0086-15258893175

台湾：+88-6958133699、0088-6958133699

日本：+81-792379925、0081-792379925

美国：+1-8002006454、001-8002006454

英国：+44-9810597886、0044-9810597886

**Kind**: global constant  
<a name="CnName"></a>

## CnName : <code>RegExp</code>
汉字名称

**Kind**: global constant  
<a name="BankCard"></a>

## BankCard : <code>RegExp</code>
银行卡号

**说明**：银行卡号一般 `15-19` 位，且首位不为 `0`。

**Kind**: global constant  
<a name="DataURL"></a>

## DataURL : <code>RegExp</code>
Base64 图片地址

**Kind**: global constant  
<a name="Base64URL"></a>

## Base64URL : <code>RegExp</code>
Base64 图片地址（DataURL 的别名）

**Kind**: global constant  
<a name="AbsoluteURL"></a>

## AbsoluteURL : <code>RegExp</code>
绝对地址（一般验证以如 `http://` 开头的网址）

**说明**：如果URL以 `<scheme>://` 或 `//` 开头，则被认为是绝对URL

**Kind**: global constant  
<a name="RelativeURL"></a>

## RelativeURL : <code>RegExp</code>
相对地址（一般验证本地相对路径）

**Kind**: global constant  
<a name="IPAddress"></a>

## IPAddress : <code>RegExp</code>
IP 地址（IPv4 地址，分成4段由 0-255 数字组合而成）

**注意**：请注意 IP 地址与 IP 网址的区别。

**Kind**: global constant  
<a name="IPURL"></a>

## IPURL : <code>RegExp</code>
IP 网址

其由 AbsoluteURL 和 IPAddress 两个验证规则连接组合而成

**Kind**: global constant  
