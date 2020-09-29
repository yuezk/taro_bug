import { View } from '@tarojs/components'
import { request } from '@tarojs/taro'
import React, { Component } from 'react'
import './index.scss'

export default class Index extends Component {
  state = {
    headers: ''
  }
  async componentDidShow() {
    const result = await request({
      url: 'https://httpbin.org/post',
      method: 'POST',
      header: {
        // 'content-type': 'application/json'
      },
      data: { name: 'value' }
    });
    this.setState({ headers: JSON.stringify(result.data.headers, null, 2) });
  }

  render() {
    return (
      <View className='index'>
        <pre>
          HTTP request headers: <br />
          {this.state.headers}
        </pre>
      </View>
    )
  }
}
