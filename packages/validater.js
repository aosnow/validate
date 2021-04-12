// ------------------------------------------------------------------------------
// name: validater
// author: mudas( mschool.tech )
// created: 2021/4/12 2:04
// ------------------------------------------------------------------------------

import {
  AbsoluteURL,
  BankCard,
  Base64URL,
  CnName,
  DataURL,
  Email,
  IDCard,
  IPAddress, IPURL,
  Numeric,
  Phone,
  RelativeURL,
  Telephone,
  UserName
} from './regexp';

/**
 * 验证是否必填项，且是否可为空值
 *
 * 若 `required` 缺省，则 `value` 为任何值皆可通过验证。若 `required` 已设置（`true,1,其它非空值`），则验证 `value` 是否非空。
 * @param {*} value 需要验证是否为空的值
 * @param {Boolean|undefined} [required] 是否必填开关
 * @return {Boolean} 验证结果
 */
export function isRequired(value, required) {
  return typeof required !== 'boolean'
         || !required
         || (required && value !== '' && value !== undefined && value !== null);
}

/**
 * 是否为数字字符串（包含正数、负数、小数）
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isNumeric(value) {
  return Numeric.test(String(value));
}

/**
 * 是否为以字母开头，后接字母、数字、下划线
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isUserName(value) {
  return UserName.test(String(value));
}

/**
 * 是否为邮箱地址
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isEmail(value) {
  return Email.test(String(value));
}

/**
 * 是否为身份证号码
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isIDCard(value) {
  return IDCard.test(String(value));
}

/**
 * 是否为座机号码
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isTelephone(value) {
  return Telephone.test(String(value));
}

/**
 * 是否为手机号码
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isPhone(value) {
  return Phone.test(String(value));
}

/**
 * 是否为汉字名称
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isCnName(value) {
  return CnName.test(String(value));
}

/**
 * 是否为银行卡号
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isBankCard(value) {
  return BankCard.test(String(value));
}

/**
 * 是否为 `Base64` 图片地址
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isDataURL(value) {
  return DataURL.test(String(value));
}

/**
 * 是否为 `Base64` 图片地址（DataURL 的别名）
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isBase64URL(value) {
  return Base64URL.test(String(value));
}

/**
 * 是否为绝对地址（一般验证以证以如 <code>http://</code> 开头的网址）
 * <p>如果URL以 <code><scheme>://</code> 或 <code>//</code> 开头，则被认为是绝对URL</p>
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isAbsoluteURL(value) {
  return AbsoluteURL.test(String(value));
}

/**
 * 是否为相对地址（一般验证本地相对路径）
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isRelativeURL(value) {
  return RelativeURL.test(String(value));
}

/**
 * 是否为 IP 地址
 * <p>可以和 <code>AbsoluteURL</code> 一起验证包含 IP 地址的网址</p>
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isIPAddress(value) {
  return IPAddress.test(String(value));
}

/**
 * 是否为 IP 网址
 *
 * 同时验证 `AbsoluteURL` 和 `IPAddress` 规则
 * @param {*} value 需要验证的值
 * @return {Boolean} 验证结果
 */
export function isIPURL(value) {
  return IPURL.test(String(value));
}

/**
 * 同时验证多个正则规则是否成立
 * @param {*} value 需要验证的值
 * @param {RegExp} regexps 需要验证的正则规则
 * @return {Boolean} 验证结果
 */
export function validate(value, ...regexps) {
  value = String(value);

  for (let i = 0; i < regexps.length; i++) {
    if (!regexps[i].test(value)) return false;
  }

  return true;
}
