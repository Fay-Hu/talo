import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {PanelGroup, Panel } from 'react-bootstrap'

export default class BigCard extends Component {
  static propTypes = {
    title:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
  }

  render() {
    return (
        <Panel 
            collapsible 
            header={this.props.title} 
            eventKey="1"
            bsStyle="success">
            {this.props.content}
        </Panel>
    )
  }
}
