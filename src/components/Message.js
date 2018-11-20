import React, { Component } from 'react'
import './Message.css';
import PropTypes from 'prop-types'

class Message extends Component {
  static propTypes = {
    username: PropTypes.string,
    roomId: PropTypes.string,
    content: PropTypes.string.isRequired,

  }

  render() {
    return (
      <div className="Message">
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
