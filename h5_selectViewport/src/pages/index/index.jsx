import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'
import Taro from '@tarojs/taro';
import './index.scss'

export default class Index extends Component {

  handleClick = () => {
    const query = Taro.createSelectorQuery();
    query.selectViewport().scrollOffset();
    query.exec(res => {
      alert(`scrollTop is: ${res[0].scrollTop}`);
    })
  }

  render () {
    return (
      <View className='index'>
        <View>Content</View>
        <Button className='btn' onClick={this.handleClick}>Call query.selectViewport().scrollOffset()</Button>
      </View>
    )
  }
}
