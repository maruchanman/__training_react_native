import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Display from './Display.js';
import Keyboard from './Keyboard.js';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      val: 0,
      prev_val: 0,
      mode: "",
      typing: false,
    }
  }

  typeNumber(val) {
    if(!this.state.typing){
      this.setState({
        val: String(val), typing: true});
    } else{
      this.setState({
        val: String(this.state.val) + String(val)});
    }
  }

  calculate(mode, prev, val) {
    switch(mode) {
      case "sum":
        return Number(prev) + Number(val)
        break;
      case "diff":
        return prev == 0 ? val : prev - val
        break;
      case "multi":
        return prev == 0 ? val : prev * val
        break;
      case "div":
        return prev == 0 ? val : prev / val
        break;
      case "multi":
        return prev == 0 ? val : Math.pow(prev, val)
        break;
      default:
        return val
    }
  }

  typeClear() {
    this.setState({
      val: 0,
      prev_val: 0,
      mode: "",
      typing: false,
    })
  }
  typeSum() {
    if(this.state.typing || this.state.mode == "equal"){
      this.setState({
        val: 0,
        prev_val: this.calculate(this.state.mode, this.state.prev_val, this.state.val),
        mode: "sum",
        typing: false});
    } else {
      this.setState({
        mode: "sum",
      })
    }
  }
  typeDiff() {
    if(this.state.typing || this.state.mode == "equal"){
      this.setState({
        val: 0,
        prev_val: this.calculate(this.state.mode, this.state.prev_val, this.state.val),
        mode: "diff",
        typing: false});
    } else {
      this.setState({
        val: "-",
        typing: true,
      })
    }
  }
  typeMulti() {
    if(this.state.typing || this.state.mode == "equal"){
      this.setState({
        val: 0,
        prev_val: this.calculate(this.state.mode, this.state.prev_val, this.state.val),
        mode: "multi",
        typing: false});
    } else {
      this.setState({
        mode: "multi",
      })
    }
  }
  typeDiv() {
    if(this.state.typing || this.state.mode == "equal"){
      this.setState({
        val: 0,
        prev_val: this.calculate(this.state.mode, this.state.prev_val, this.state.val),
        mode: "div",
        typing: false});
    } else {
      this.setState({
        mode: "div",
      })
    }
  }
  typeDouble() {
    if(this.state.typing || this.state.mode == "equal"){
      this.setState({
        val: 0,
        prev_val: this.calculate(this.state.mode, this.state.prev_val, this.state.val),
        mode: "double",
        typing: false});
    } else {
      this.setState({
        mode: "double",
      })
    }
  }
  typeRoute() {
    this.setState({
      val: Math.pow(this.state.val, 1/2)});
  }
  typeDot() {
    if(!String(this.state.val).includes(".")){
      this.setState({val: String(this.state.val) + "."})
    }
  }
  typeEqual() {
    switch(this.state.mode) {
      case "sum":
        this.setState({mode: "equal", prev_val: 0, val: Number(this.state.prev_val)+Number(this.state.val), typing: false});
        break;
      case "diff":
        this.setState({mode: "equal", prev_val: 0, val: Number(this.state.prev_val)-Number(this.state.val), typing: false});
        break;
      case "multi":
        this.setState({mode: "equal", prev_val: 0, val: this.state.prev_val*this.state.val, typing: false});
        break;
      case "div":
        this.setState({mode: "equal", prev_val: 0, val: this.state.prev_val/this.state.val, typing: false});
        break;
      case "double":
        this.setState({mode: "equal", prev_val: 0, val: Math.pow(this.state.prev_val, this.state.val), typing: false});
        break;
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Display now={this.state.val} prev={this.state.prev_val} mode={this.state.mode} />
        <Keyboard
          typeNumber={this.typeNumber.bind(this)}
          typeSum={this.typeSum.bind(this)}
          typeDiff={this.typeDiff.bind(this)}
          typeMulti={this.typeMulti.bind(this)}
          typeDiv={this.typeDiv.bind(this)}
          typeRoute={this.typeRoute.bind(this)}
          typeDouble={this.typeDouble.bind(this)}
          typeEqual={this.typeEqual.bind(this)}
          typeClear={this.typeClear.bind(this)}
          typeDot={this.typeDot.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
  },
})
