import React, { Component } from 'react';
import { FormattedMessage } from  'react-intl';
import PropTypes from 'prop-types';
export default class Home extends Component {
  // 必须有，否则无法获取数据
  static contextTypes = {
    locale: PropTypes.object
  }
  render() {
    const { locale } = this.context;
    return (
      <FormattedMessage
        tag='p'
        id='page.locale.something'
        values={{
          name: 'limoer'
        }}
        defaultMessage="你好{name}，很高兴认识你"
      ></FormattedMessage>
    )
  } 
}
