/* eslint-disable */
/**
 * 网站统一置灰色主题（悼念英雄专用主题)
 * @param {Array} times ['2020-04-03 12:00:00', '2020-04-05 12:00:00']
 * @param {Boolean} ie 是否兼容IE10/11,采用蒙版的方式，默认0.6
 * @param {String} webTime false || 有效的时间格式， 默认采用用户本地时间，否则使用有效webTime
 * 
 * @example nowTime:'2020-04-04 12:00:00'
 *  grayscale(['2020-04-03 00:00:00', '2020-04-05 00:00:00'], true, null)
 *    => true
 * 
 *  grayscale(['2020-04-03', '2020-04-05'], true, null)
 *    => false
 *  
 *  grayscale(['2020-04-03', '2020-04-05'], true, '2020-04-06')
 *    => true
 * 
 */

export default function grayscalegrayscale(times = [], ie = true, webTime) {
  const startTime = new Date(times[0]);
  const endTime = new Date(times[1]);
  if (!times[0] || !times[1] || String(startTime) === 'Invalid Date' || String(endTime) === 'Invalid Date') {
    return false;
  }
  const nowTime = !!webTime && String(new Date(webTime)) !== 'Invalid Date' ? new Date(webTime) : new Date();
  const htmlEle = document.getElementsByTagName('html')[0];
  const userAgent = navigator.userAgent;
  if (nowTime >= startTime && nowTime <= endTime) {
    if (ie
      && (userAgent.indexOf('compatible') > -1 &&
        userAgent.indexOf('MSIE') > -1) ||
      userAgent.indexOf('Trident') > -1
    ) {
      document.body.insertAdjacentHTML('afterbegin', '<div style="position:fixed;z-index:999;width:100vw; height:100vh; left:-100vw; outline: 101vw solid rgba(100,100,100,.6);"></div>');
    } else {
      htmlEle.style['-webkit-filter'] = 'grayscale(100%)';
      htmlEle.style['-moz-filter'] = 'grayscale(100%)';
      htmlEle.style['-ms-filter'] = 'grayscale(100%)';
      htmlEle.style['-o-filter'] = 'grayscale(100%)';
      htmlEle.style.filter = 'grayscale(100%)';
    }
  } else {
    htmlEle.style['-webkit-filter'] = '';
    htmlEle.style['-moz-filter'] = '';
    htmlEle.style['-ms-filter'] = '';
    htmlEle.style['-o-filter'] = '';
    htmlEle.style.filter = '';
  }
}
