export function getLocale(lang) {
  let result = {};
  switch(lang) {
    case 'zh-CN':
      result = require('./locales/zh-CN');
      break;
    case 'en-US':
      result = require('./locales/en-US');
      break;
    default:
      result = require('./locales/zh-CN');  
  }
  return result.default || result;
}

