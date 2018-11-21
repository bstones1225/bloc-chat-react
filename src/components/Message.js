import React, { Component } from 'react'
import './Message.css';
import classNames from "classnames"
import PropTypes from 'prop-types'

class Message extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    me:PropTypes.bool,


  }

  render() {
    const classes = classNames('Message', {

      me: this.props.me
    })

    return (
    <div className={classes}>
      {this.props.username && (
        <span className="username">{this.props.username}:</span>
      )}
      {this.props.content}
      {this.props.roomId}
    </div>
    )
  }
}

export default Message
