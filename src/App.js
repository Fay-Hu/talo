import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PanelGroup, Panel } from 'react-bootstrap'
import BigCard from './BigCard.js'
import DataManager from './DataManager.js'
import SmallCardClass from './SmallCardClass.js'

class App extends Component {

  

  render() {
    let data = new DataManager();
    let title = data.getBigCardTitle();
    let bigCardList = title.map((value,index)=>{
      return <BigCard key={index} title={value} content={data.getBigCardContent(value)}/>
    })

    let smallCardClassList = data.getSmallCardClass().map((value,index)=>{
      return <SmallCardClass key={index} kind={value}/>
    })
    return (
      <div className="App">
        <div>
          <h3>塔罗牌义速查手册</h3>
        </div>
        <PanelGroup>
          <Panel collapsible header={"大牌"} bsStyle="primary">
            <PanelGroup>
              {bigCardList}
            </PanelGroup>
          </Panel>
        <Panel collapsible header={"小牌"} bsStyle="primary">
          <PanelGroup>
            {smallCardClassList}
          </PanelGroup>
        </Panel>
        </PanelGroup>
      </div>
    );
  }
}

export default App;
