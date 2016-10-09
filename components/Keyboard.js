import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

class KeyButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.keyButton}
        onPress={() => this.props.pressed(this.props.val)}
        activeOpacity={0.1}>
        <Text style={[styles.keyText, {color: this.props.color}]}>{this.props.val}</Text>
      </TouchableHighlight>
    )
  }
}

export default class Keyboard extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.keyLine}>
          <KeyButton color="green" val="c" pressed={this.props.typeClear}/>
          <KeyButton color="#3572A5" val="√" pressed={this.props.typeRoute} />
          <KeyButton color="#3572A5" val="^" pressed={this.props.typeDouble}/>
          <KeyButton color="#3572A5" val="÷" pressed={this.props.typeDiv}/>
        </View>
        <View style={styles.keyLine}>
          <KeyButton color="whitesmoke" val="7" pressed={this.props.typeNumber}/>
          <KeyButton color="whitesmoke" val="8" pressed={this.props.typeNumber}/>
          <KeyButton color="whitesmoke" val="9" pressed={this.props.typeNumber}/>
          <KeyButton color="#3572A5" val="×" pressed={this.props.typeMulti}/>
        </View>
        <View style={styles.keyLine}>
          <KeyButton color="whitesmoke" val="4" pressed={this.props.typeNumber}/>
          <KeyButton color="whitesmoke" val="5" pressed={this.props.typeNumber}/>
          <KeyButton color="whitesmoke" val="6" pressed={this.props.typeNumber}/>
          <KeyButton color="#3572A5" val="-" pressed={this.props.typeDiff}/>
        </View>
        <View style={styles.keyLine}>
          <KeyButton color="whitesmoke" val="1" pressed={this.props.typeNumber}/>
          <KeyButton color="whitesmoke" val="2" pressed={this.props.typeNumber}/>
          <KeyButton color="whitesmoke" val="3" pressed={this.props.typeNumber}/>
          <KeyButton color="#3572A5" val="+" pressed={this.props.typeSum}/>
        </View>
        <View style={styles.keyLine}>
          <KeyButton color="whitesmoke" val="0" pressed={this.props.typeNumber}/>
          <KeyButton color="whitesmoke" val="00" pressed={this.props.typeNumber}/>
          <KeyButton color="whitesmoke" val="." pressed={this.props.typeDot}/>
          <KeyButton color="darkorange" val="=" pressed={this.props.typeEqual}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  keyButton: {
    flex: 1,
    backgroundColor: '#3B3738',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  keyText: {
    color: 'whitesmoke',
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  keyLine: {
    flex: 1,
    flexDirection: 'row',
  },
  wrapper: {
    flex: 5,
  },
})
