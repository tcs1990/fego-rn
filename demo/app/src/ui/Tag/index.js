import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Tag, Icon } from 'fego-rn';
import { Style } from '../../../common';


const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },

  header: {
    marginLeft: 10,
    marginTop: 10,
  },

  verticalContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  horizonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

});

export default class Page extends Component {
  constructor(props) {
    super(props);
    Tag.setBaseStyle({
      container: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
      },
    });
  }

  state = {
    checked1: true,
    selfTagSel: false,
    closed1: false,
  }

  render() {
    return (
      <ScrollView style={Style.container}>
        <View style={style.header}>
          <Text>纵向布局</Text>
        </View>
        <View style={style.verticalContainer}>
          <Tag text="使用 text props" />
          <Tag text="text属性" >children属性，text属性失效</Tag>
          <Tag >默认为非控组件</Tag>
          <Tag
            checked={this.state.checked1}
            onChange={
              checked => this.setState({ checked1: checked })
            }
          >受控属性：checked
          </Tag>

          <Tag disabled>禁止的</Tag>

          <Tag
            closed={this.state.closed1}
            onClose={
              closed => this.setState({ closed1: closed })
            }
          >受控属性：closed，开启关闭功能
          </Tag>

          <Tag
            styles={{
              checked: { borderColor: '#891232' },
            }}
            checked={this.state.selfTagSel}
            onChange={
              checked => this.setState({ selfTagSel: checked })
            }
          >
            <View style={{ flexDirection: 'row' }}>
              <Icon style={{ color: this.state.selfTagSel ? '#891232' : '#bbb' }} name="calendar-check-o" />
              <Text style={{ color: this.state.selfTagSel ? '#891232' : '#bbb' }}>自定义样式和内容</Text>
              <Icon style={{ color: this.state.selfTagSel ? '#891232' : '#bbb' }} name="check" />
            </View>
          </Tag>


          <Tag size="small">small</Tag>
          <Tag size="large">large</Tag>
          <Tag size="small" closed={false}>small</Tag>
          <Tag size="large" closed={false}>large closed</Tag>
          <Tag style={{ width: 200 }}>overflow controls how a children are measured and displayed. overflow: hidden causes views to be clipped while overflow: scroll causes views to be measured independently of their parents main axis</Tag>

        </View>
        <View style={style.header}>
          <Text>横向布局</Text>
        </View>
        <View style={style.horizonContainer}>
          <Tag>默认tag</Tag>
          <Tag disabled>disabled</Tag>
          <Tag size="small">small</Tag>
        </View>
        <View style={style.header}>
          <Text>等分</Text>
        </View>
        <View style={style.horizonContainer}>
          <Tag style={{ flex: 1 }}>标签1</Tag>
          <Tag style={{ flex: 1 }} disabled>disabled</Tag>
          <Tag style={{ flex: 2 }} size="small">small</Tag>
        </View>
      </ScrollView>
    );
  }
}

