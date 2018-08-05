import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import LocaleProvider from './components/localeProvider';
import Home from './views/Home';

import { getLocale } from './util';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en-US'
    }
  }
  render() {
    let { lang } = this.state;
    const appLocale = getLocale(lang);
    addLocaleData(...appLocale.data);
    return (
      <LocaleProvider
        locale={appLocale}
      >
        <IntlProvider 
          locale={appLocale.locale}
          messages={appLocale.messages}
        >
          <Home />
        </IntlProvider>
      </LocaleProvider>
    )
  }
}