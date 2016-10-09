import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


class Operator extends Component {
  render() {
    return (
      <Text style={styles.prev}>
        {this.props.mode == "sum" ? "+" : null}
        {this.props.mode == "diff" ? "-" : null}
        {this.props.mode == "multi" ? "×" : null}
        {this.props.mode == "div" ? "÷" : null}
        {this.props.mode == "double" ? "^" : null}
      </Text>
    )
  }
}

export default class Display extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.prev}>{this.props.prev == 0 ? null : this.props.prev}</Text>
        <Operator mode={this.props.mode}/>
        <Text style={styles.now}>{this.props.now}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 50,
    paddingHorizontal: 30,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#3B3738',
  },
  prev: {
    textAlign: 'right',
    fontSize: 30,
    fontFamily: 'arial',
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
  operator: {
    textAlign: 'right',
    fontSize: 30,
    fontFamily: 'arial',
    margin: 0,
    padding: 0,
    color: 'whitesmoke',
    fontWeight: 'bold',
  },
  now: {
    textAlign: 'right',
    fontSize: 40,
    fontFamily: 'arial',
    color: 'whitesmoke',
    fontWeight: 'bold',
  }
})
