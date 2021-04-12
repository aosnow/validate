// ------------------------------------------------------------------------------
// name: validater.d
// author: mudas( mschool.tech )
// created: 2021/4/12
// ------------------------------------------------------------------------------

/**
 * 验证是否必填项，且是否可为空值
 *
 * 若 `required` 缺省，则 `value` 为任何值皆可通过验证。若 `required` 已设置（`true,1,其它非空值`），则验证 `value` 是否非空。
 * @param {*} value 需要验证是否为空的值
 * @param {Boolean|undefined} [required] 是否必填开关
 * @return {Boolean} 验证结果
 */
export function isRequired(value, required): boolean;

/**
 * 是否为数字字符串（包含正数、负数、小数）
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isNumeric('3.1415926');
 * // => true
 *
 * isNumeric('-100');
 * // => true
 *
 * isNumeric('-1.25');
 * // => true
 */
export function isNumeric(value): boolean;

/**
 * 是否为以字母开头，后接字母、数字、下划线
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isUserName('ao_snow88');
 * // => true
 *
 * isUserName('_aosnow');
 * // => false，不能以下划线 _ 开头，下划线只能出现在除首位的其它位置
 */
export function isUserName(value): boolean;

/**
 * 是否为邮箱地址（包含对中文域名后缀的支持，如 `.公司` 和 `.网络` 等）
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isEmail('aosnow@good.net');
 * // => true
 *
 * isEmail('aosnow@good.com.cn');
 * // => true
 *
 * isEmail('aosnow@good.公司');
 * // => true
 *
 * isEmail('aosnow@yeah');
 * // => false，域名后缀不能省略
 */
export function isEmail(value): boolean;

/**
 * 是否为身份证号码
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isIDCard('522425198109113949');
 * // => true，正常18位身份证号码
 *
 * isIDCard('14082519750817363x');
 * // => true，x结尾的身份证号码（x代表10）
 *
 * isIDCard('14082519750817363X');
 * // => true，x结尾的身份证号码（x代表10）
 *
 * isIDCard('130928198905281');
 * // => true，15位身份证号码
 */
export function isIDCard(value): boolean;

/**
 * 是否为座机号码
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isTelephone('02142531245');
 * // => true
 *
 * isTelephone('021-42531245');
 * // => true
 *
 * isTelephone('0571-42531245');
 * // => true
 *
 * isTelephone('0571 42531245');
 * // => true
 */
export function isTelephone(value): boolean;

/**
 * 是否为国内手机号码
 *
 * **注意**：此方法为国内手机号严格验证规则，国际电话号码请使用 `isInternationalPhone()` 方法。
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isPhone('15258829831');
 * // => true
 *
 * isPhone('12258829831');
 * // => false，号码段暂只支持 [3456789]
 *
 * isPhone('021-42531245');
 * // => false
 */
export function isPhone(value): boolean;

/**
 * 是否为国际电话号码
 *
 * **注意**：此方法为国际版电话号码规则验证，号码前可包含国际短号，如中国为 `+86` 或者 `0086`。
 * 为适应各个国家的手机号通用验证，不再较验国内手机号以 `1` 开头的规则。国内手机号严格验证请使用 `isPhone()` 方法。
 *
 * **示例**：
 *
 * 中国：+86-15258893175、0086-15258893175
 *
 * 台湾：+88-6958133699、0088-6958133699
 *
 * 日本：+81-792379925、0081-792379925
 *
 * 美国：+1-8002006454、001-8002006454
 *
 * 英国：+44-9810597886、0044-9810597886
 *
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isInternationalPhone('+8615258893175');
 * // => true，国内号码
 *
 * isInternationalPhone('008615258893175');
 * // => true，国内号码
 *
 * isInternationalPhone('0018002006454');
 * // => false，美国号码
 *
 * isInternationalPhone('+81792379925');
 * // => false，日本号码
 */
export function isInternationalPhone(value): boolean;

/**
 * 是否为汉字名称
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isCnName('我是中国人');
 * // => true
 *
 * isCnName('我要1个中国人');
 * // => false，不能包含汉字以外的字符
 */
export function isCnName(value): boolean;

/**
 * 是否为银行卡号
 *
 * **说明**：银行卡号一般 `15-19` 位，且首位不为 `0`。
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isBankCard('9558801282847859321');
 * // => true，中国工商银行原牡丹灵通卡借记卡
 *
 * isBankCard('5124312137817842310');
 * // => true，宁波银行卡
 */
export function isBankCard(value): boolean;

/**
 * 是否为 `Base64` 图片地址
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isDataURL(value): boolean;

/**
 * 是否为 `Base64` 图片地址（DataURL 的别名）
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isBase64URL(value): boolean;

/**
 * 是否为绝对地址（一般验证以如 `http://` 开头的网址）
 *
 * **说明**：如果URL以 `<scheme>://` 或 `//` 开头，则被认为是绝对URL
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isAbsoluteURL('http://www.xxx.com');
 * // => true
 *
 * isAbsoluteURL('ftp://200.0.0.1/xxx');
 * // => true
 *
 * isAbsoluteURL('//xxx.com/path');
 * // => true
 *
 * isAbsoluteURL('/upload/xxx.jpg');
 * // => false
 */
export function isAbsoluteURL(value): boolean;

/**
 * 是否为相对地址（一般验证本地相对路径）
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isRelativeURL('a/b/c/i.html');
 * // => true
 *
 * isRelativeURL('a/b/c/q?k=123');
 * // => true
 *
 * isRelativeURL('../a/b/c');
 * // => true
 *
 * isRelativeURL('//a.com/b/c');
 * // => false
 */
export function isRelativeURL(value): boolean;

/**
 * 是否为 IP 地址（IPv4 地址，分成4段由 0-255 数字组合而成）
 *
 * **注意**：请注意 IP 地址与 IP 网址的区别。
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isIPAddress('127.0.0.1');
 * // => true
 *
 * isIPAddress('192.168.1.1');
 * // => true
 *
 * isIPAddress('0.0.0.256');
 * // => false，每段区间为 0-255
 */
export function isIPAddress(value): boolean;

/**
 * 是否为 IP 网址
 *
 * 其由 AbsoluteURL 和 IPAddress 两个验证规则连接组合而成
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 * @example
 * isIPURL('http://127.0.0.1/path');
 * // => true
 *
 * isIPURL('ftp://200.0.0.1/path');
 * // => true
 *
 * isIPURL('//172.16.8.6/path');
 * // => true
 *
 * isIPURL('http://www.xxx.com');
 * // => false
 */
export function isIPURL(value): boolean;

/**
 * 同时验证多个正则规则是否成立
 * @param {*} value 需要验证的值
 * @param {RegExp|Boolean} regexps 需要验证的正则规则
 * @param {Boolean} [all=true] 是否同时满足所有条件，否则满足其一即条件成立
 * @return {Boolean} 验证结果
 * @example
 * import {Telephone, Phone} from '@mudas/validate';
 *
 * validate('15258878312', Telephone, Phone);
 * // => false
 *
 * validate('15258878312', Telephone, Phone, false);
 * // => true
 */
export function validate(value, ...regexps): boolean;
