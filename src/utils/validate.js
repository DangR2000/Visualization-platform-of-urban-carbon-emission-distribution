// /**
//  * Created by PanJiaChen on 16/11/18.
//  */

// /**
//  *  判断字符串是否是https?:|mailto:|tal: 开头的
//  * @param {string} path
//  * @returns {Boolean}
//  */
// export function isExternal(path) {
// 	return /^(https?:|mailto:|tel:)/.test(path)
// }

// /**
//  * 检验字符串是否是 admin  editor
//  * @param {string} str
//  * @returns {Boolean}
//  */
// /* export function validUsername(str) {
//   const valid_map = ['admin', 'editor']
//   return valid_map.indexOf(str.trim()) >= 0
// } */

// /**
//  * @param {string} url
//  * @returns {Boolean}
//  */
// export function validURL(url) {
// 	const reg =
// 		/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
// 	return reg.test(url)
// }

// /**
//  * 判断都是小写字母
//  * @param {string} str
//  * @returns {Boolean}
//  */
// export function validLowerCase(str) {
// 	const reg = /^[a-z]+$/
// 	return reg.test(str)
// }

// /**
//  * 判断都是大写字母
//  * @param {string} str
//  * @returns {Boolean}
//  */
// export function validUpperCase(str) {
// 	const reg = /^[A-Z]+$/
// 	return reg.test(str)
// }

// /*
//  * 校验邮箱
//  * @param {string} email
//  * @returns {Boolean}
//  */
// // export function validEmail(email) {
// //   const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// //   if(reg.test(email)==false){
// // 	  alert('邮箱格式不正确')
// //   }
// // }

// /*
//  * 校验邮箱
//  * @param {string} email
//  * @returns {Boolean}
//  */
// export function validEmail(email) {
//   const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   return reg.test(email)
// }

// /**
//  * 判断是否是字母
//  * @param {string} str
//  * @returns {Boolean}
//  */
// export function validAlphabets(str) {
// 	const reg = /^[A-Za-z]+$/
// 	return reg.test(str)
// }

// /**
//  * 校验邮箱
//  * @param {string} email
//  * @returns {Boolean}
//  */

// /**
//  * 判断是否字符串
//  * @param {string} str
//  * @returns {Boolean}
//  */
// export function isString(str) {
// 	if (typeof str === 'string' || str instanceof String) {
// 		return true
// 	}
// 	return false
// }

// /**
//  * 判断是否是数组
//  * @param {Array} arg
//  * @returns {Boolean}
//  */
// export function isArray(arg) {
// 	if (typeof Array.isArray === 'undefined') {
// 		return Object.prototype.toString.call(arg) === '[object Array]'
// 	}
// 	return Array.isArray(arg)
// }
// /**
//  * @param {Object} digits
//  * 判断是否是整数
//  */
// /**
//  * @param {Object} digits
//  * 判断是否是整数
//  */

// /**
//  * @param {Object} digits
//  * 判断是否是整数
//  */
// export function validDigits(digits) {
// 	const reg = /^\d+$/
// 	return reg.test(digits)
// }

// /**
//  * @param {Object} number
//  * 请输入有效的数字
//  */
// export function validNumber(number) {
// 	const reg = /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/
// 	return reg.test(number)
// }
// /**
//  * @param {Object} letters
//  * 只能输入字母
//  */
// export function validLetters(letters) {
// 	const reg = /^[a-z]+$/i
// 	return reg.test(letters)
// }
// /**
//  * @param {Object} tel
//  * 电话格式不正确
//  */
// export function validTel(tel) {
// 	const reg = /^(?:(?:0\d{2,3}[\- ]?[1-9]\d{6,7})|(?:[48]00[\- ]?[1-9]\d{6}))$/
// 	return reg.test(tel)
// }
// /**
//  * @param {Object} mobile
//  * 手机号格式不正确
//  */
// export function validMobile(mobile) {
// 	const reg = /^1[3-9]\d{9}$/
// 	return reg.test(mobile)
// }
// /**
//  * @param {Object} qq
//  * QQ号格式不正确
//  */
// export function validQq(qq) {
// 	const reg = /^[1-9]\d{4,}$/
// 	return reg.test(qq)
// }
// /**
//  * @param {Object} date
//  * 请输入正确的日期，例：yyyy-MM-dd
//  */
// export function validDate(date) {
// 	const reg = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/
// 	return reg.test(date)
// }
// /**
//  * @param {Object} time
//  * 请输入正确的时间，例：HH:mm:ss
//  */
// export function validTime(time) {
// 	const reg = /^(2[0123]|(1|0?)[0-9]){1}:([0-5][0-9]){1}:([0-5][0-9]){1}$/
// 	return reg.test(time)
// }
// /**
//  * @param {Object} datetime
//  * 请输入正确的日期时间，例：yyyy-MM-dd HH:mm:ss
//  */
// export function validDatetime(datetime) {
// 	const reg =
// 		/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(2[0123]|(1|0?)[0-9]){1}:([0-5][0-9]){1}:([0-5][0-9]){1}$/
// 	return reg.test(datetime)
// }
// /**
//  * @param {Object} ID_card
//  * 请输入正确的身份证号码
//  */
// export function validIDCard(ID_card) {
// 	const reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/
// 	return reg.test(ID_card)
// }

// /**
//  * @param {Object} postcode
//  * 邮政编码格式不正确
//  */
// export function validPostcode(postcode) {
// 	const reg = /^[1-9]\d{5}$/
// 	return reg.test(postcode)
// }

// /**
//  * @param {Object} chinese
//  * 请输入中文
//  */
// export function validChinese(chinese) {
// 	const reg = /^[\u0391-\uFFE5]+$/
// 	return reg.test(chinese)
// }

// /**
//  * @param {Object} username
//  * 请输入3-12位数字、字母、下划线
//  */
// export function validUsername(username) {
// 	const reg = /^\w{3,12}$/;
// 	return reg.test(username);
// }

// /**
//  * @param {Object} password
//  * 密码由6-16位数字、字母组成
//  */


// /**
//  * @param {Object} password
//  * 密码由6-16位数字、字母组成
//  */


// /**
//  * @param {Object} username
//  * 请输入3-12位数字、字母、下划线
//  */

// /**
//  * @param {Object} password
//  * 密码由6-16位数字、字母组成
//  */

// export function validPassword(password) {
//   const reg = /^[0-9a-zA-Z]{6,16}$/;
//   return reg.test(password)
// }

