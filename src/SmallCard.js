import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {PanelGroup, Panel } from 'react-bootstrap'
import DataManager from './DataManager'

export default class SmallCard extends Component {
  static propTypes = {
      value:PropTypes.string.isRequired,
      kind:PropTypes.string.isRequired,
  }

  render() {
    let title = this.props.kind+this.props.value;
    let data = new DataManager()
    let content = data.getSmallCardContent(title);
    return (
        <Panel 
            collapsible 
            header={title} 
            eventKey="1"
            bsStyle="warning">
            {content}
        </Panel>
    )
  }
}
