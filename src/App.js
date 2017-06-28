import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Arrow from './arrow';

class App extends Component {
  constructor(props, context) {
		super(props, context);
        this.onExpand = this.onExpand.bind(this);
        this.onPullBack = this.onPullBack.bind(this);
	}

  onExpand() {
    console.log('Expand emit!');
  } 

  onPullBack() {
    console.log('Pull back emit!');
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <div className = 'text'>展开下拉菜单</div>
          <Arrow onExpand = {this.onExpand} onPullBack = {this.onPullBack}></Arrow>
        </div>
      </div>
    );
  }
}

export default App;
