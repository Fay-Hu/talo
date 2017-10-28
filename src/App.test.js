import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PanelGroup, Panel } from 'react-bootstrap'
import BigCard from './BigCard.js'
import DataManager from './DataManager.js'
import SmallCardClass from './SmallCardClass.js'

class App extends Component {

  handleChange(e){
    let value=e.target.value
    let text = {
      title:"title",
      content:value
    }
    console.log(JSON.stringify(text))
  }

  

  render() {
    return <textarea onChange={this.handleChange.bind(this)}/>
    
  }
}

export default App;
