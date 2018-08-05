import appLocaleData from 'react-intl/locale-data/en';
import messages from './en.message';

window.appLocale = {
  messages: messages,
  locale: 'en-US',
  data: appLocaleData
}

export default window.appLocale;
