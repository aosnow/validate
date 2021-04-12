// ------------------------------------------------------------------------------
// name: regexp.d
// author: mudas( mschool.tech )
// created: 2021/4/12
// ------------------------------------------------------------------------------

/**
 * 数字字符串（包含正数、负数、小数）
 * @type {RegExp}
 */
export const Numeric:RegExp;

/**
 * 以字母开头，后接字母、数字、下划线
 * @type {RegExp}
 */
export const UserName:RegExp;

/**
 * 邮箱地址（包含对中文域名后缀的支持，如 `.公司` 和 `.网络` 等）
 * @type {RegExp}
 */
export const Email:RegExp;

/**
 * 身份证号码
 * @type {RegExp}
 */
export const IDCard:RegExp;

/**
 * 座机号码
 * @type {RegExp}
 */
export const Telephone:RegExp;

/**
 * 国内手机号码
 *
 * **注意**：此正则为国内手机号严格验证规则，国际电话号码请使用 `InternationalPhone` 规则。
 * @type {RegExp}
 */
export const Phone:RegExp;

/**
 * 国际电话号码
 *
 * **注意**：此正则为国际版电话号码规则验证，号码前可包含国际短号，如中国为 `+86` 或者 `0086`。
 * 为适应各个国家的手机号通用验证，不再较验国内手机号以 `1` 开头的规则。国内手机号严格验证请使用 `Phone` 规则。
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
 * @type {RegExp}
 */
export const InternationalPhone:RegExp;

/**
 * 汉字名称
 * @type {RegExp}
 */
export const CnName:RegExp;

/**
 * 银行卡号
 *
 * **说明**：银行卡号一般 `15-19` 位，且首位不为 `0`。
 * @type {RegExp}
 */
export const BankCard:RegExp;

/**
 * Base64 图片地址
 * @type {RegExp}
 */
export const DataURL:RegExp;

/**
 * Base64 图片地址（DataURL 的别名）
 * @type {RegExp}
 */
export const Base64URL:RegExp;

/**
 * 绝对地址（一般验证以如 `http://` 开头的网址）
 *
 * **说明**：如果URL以 `<scheme>://` 或 `//` 开头，则被认为是绝对URL
 * @type {RegExp}
 */
export const AbsoluteURL:RegExp;

/**
 * 相对地址（一般验证本地相对路径）
 * @type {RegExp}
 */
export const RelativeURL:RegExp;

/**
 * IP 地址（IPv4 地址，分成4段由 0-255 数字组合而成）
 *
 * **注意**：请注意 IP 地址与 IP 网址的区别。
 * @type {RegExp}
 */
export const IPAddress:RegExp;

/**
 * IP 网址
 *
 * 其由 AbsoluteURL 和 IPAddress 两个验证规则连接组合而成
 * @type {RegExp}
 */
export const IPURL:RegExp;
