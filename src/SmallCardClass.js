import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {PanelGroup, Panel } from 'react-bootstrap'
import DataManager from './DataManager'
import SmallCard from './SmallCard'

export default class SmallCardClass extends Component {
  static propTypes = {
    kind:PropTypes.string.isRequired,
  }

  render() {
    let data = new DataManager()

    let smallCardList = data.getSmallCardList().map((value,index)=>{
        return <SmallCard key={index} value={value} kind={this.props.kind}/>
    })
    return (
        <Panel 
            collapsible 
            header={this.props.kind} 
            eventKey="1"
            bsStyle="info">
            <PanelGroup>
            {smallCardList}
          </PanelGroup>
        </Panel>
    )
  }
}
