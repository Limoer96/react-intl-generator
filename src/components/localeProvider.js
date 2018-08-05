import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class LocaleProvider extends Component {
  static propTypes = {
    children: PropTypes.any,
    locale: PropTypes.object.isRequired
  }
  // 设置context，否则传递获取数据
  static childContextTypes = {
    locale: PropTypes.object
  }
  // 定义要传递的数据
  getChildContext() {
    return {
      locale: {
        ...this.props.locale
      }
    }
  }
  render() {
    return React.Children.only(this.props.children)
  }
} 

