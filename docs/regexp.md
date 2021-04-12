## Constants

<dl>
<dt><a href="#Numeric">Numeric</a> : <code>RegExp</code></dt>
<dd><p>数字字符串（包含正数、负数、小数）</p>
</dd>
<dt><a href="#UserName">UserName</a> : <code>RegExp</code></dt>
<dd><p>以字母开头，后接字母、数字、下划线</p>
</dd>
<dt><a href="#Email">Email</a> : <code>RegExp</code></dt>
<dd><p>邮箱地址</p>
</dd>
<dt><a href="#IDCard">IDCard</a> : <code>RegExp</code></dt>
<dd><p>身份证号码</p>
</dd>
<dt><a href="#Telephone">Telephone</a> : <code>RegExp</code></dt>
<dd><p>座机号码</p>
</dd>
<dt><a href="#Phone">Phone</a> : <code>RegExp</code></dt>
<dd><p>手机号码</p>
</dd>
<dt><a href="#CnName">CnName</a> : <code>RegExp</code></dt>
<dd><p>汉字名称</p>
</dd>
<dt><a href="#BankCard">BankCard</a> : <code>RegExp</code></dt>
<dd><p>银行卡号</p>
</dd>
<dt><a href="#DataURL">DataURL</a> : <code>RegExp</code></dt>
<dd><p>Base64 图片地址</p>
</dd>
<dt><a href="#Base64URL">Base64URL</a> : <code>RegExp</code></dt>
<dd><p>Base64 图片地址（DataURL 的别名）</p>
</dd>
<dt><a href="#AbsoluteURL">AbsoluteURL</a> : <code>RegExp</code></dt>
<dd><p>绝对地址（一般验证以证以如 <code>http://</code> 开头的网址）</p>
<p>如果URL以 <code><scheme>://</code> 或 <code>//</code> 开头，则被认为是绝对URL</p></dd>
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
邮箱地址

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
手机号码

**Kind**: global constant  
<a name="CnName"></a>

## CnName : <code>RegExp</code>
汉字名称

**Kind**: global constant  
<a name="BankCard"></a>

## BankCard : <code>RegExp</code>
银行卡号

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
绝对地址（一般验证以证以如 <code>http://</code> 开头的网址）
<p>如果URL以 <code><scheme>://</code> 或 <code>//</code> 开头，则被认为是绝对URL</p>

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
