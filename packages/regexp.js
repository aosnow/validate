// ------------------------------------------------------------------------------
// name: regexp
// author: mudas( mschool.tech )
// created: 2021/4/12 2:00
// ------------------------------------------------------------------------------

/**
 * 数字字符串（包含正数、负数、小数）
 * @type {RegExp}
 */
export const Numeric = /^-?\d+(\.\d+)?$/;

/**
 * 以字母开头，后接字母、数字、下划线
 * @type {RegExp}
 */
export const UserName = /^[a-z0-9][a-z0-9_]+$/i;

/**
 * 邮箱地址
 * @type {RegExp}
 */
export const Email = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;

/**
 * 身份证号码
 * @type {RegExp}
 */
export const IDCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

/**
 * 座机号码
 * @type {RegExp}
 */
export const Telephone = /^0\d{2,3}-?\d{7,8}$/;

/**
 * 手机号码
 * @type {RegExp}
 */
export const Phone = /^[1][3456789][0-9]{9}$/;

/**
 * 汉字名称
 * @type {RegExp}
 */
export const CnName = /^[\u4e00-\u9fa5]+$/;

/**
 * 银行卡号
 * @type {RegExp}
 */
export const BankCard = /^\d{9,}$/;

/**
 * Base64 图片地址
 * @type {RegExp}
 */
export const DataURL = /^data:(image|img)\/\w+;base64/i;

/**
 * Base64 图片地址（DataURL 的别名）
 * @type {RegExp}
 */
export const Base64URL = DataURL;

/**
 * 绝对地址（一般验证以证以如 <code>http://</code> 开头的网址）
 * <p>如果URL以 <code><scheme>://</code> 或 <code>//</code> 开头，则被认为是绝对URL</p>
 * @type {RegExp}
 */
export const AbsoluteURL = /^([a-z][a-z\d+\-.]*:)?\/\//i;

/**
 * 相对地址（一般验证本地相对路径）
 * @type {RegExp}
 */
export const RelativeURL = /^[\/\\]?([0-9a-z-_.]+[\/\\])+/i;

/**
 * IP 地址（IPv4 地址，分成4段由 0-255 数字组合而成）
 *
 * **注意**：请注意 IP 地址与 IP 网址的区别。
 * @type {RegExp}
 */
export const IPAddress = /(\d{1,2}|1?\d?\d|2?[0-5]?[0-5])(\.(\d{1,2}|1?\d?\d|2?[0-5]?[0-5])){3}/;

/**
 * IP 网址
 *
 * 其由 AbsoluteURL 和 IPAddress 两个验证规则连接组合而成
 * @type {RegExp}
 */
export const IPURL = /^([a-z][a-z\d+\-.]*:)?\/\/(\d{1,2}|1?\d?\d|2?[0-5]?[0-5])(\.(\d{1,2}|1?\d?\d|2?[0-5]?[0-5])){3}/;
