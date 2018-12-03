import React, { Component } from 'react'
import './MessageForm.css';

class MessageForm extends Component {
  constructor(props) {
    super(props);


    this.messagesRef = this.props.firebase.database().ref('messages');


  }


  componentDidMount = () => {
    this.input.focus()
  }
  handleChange = (event) => {
          event.preventDefault();

           }
  handleFormSubmit = (event) => {
               event.preventDefault();

               if (this.props.activeRoom !== " " && this.input.value!== ""){

               this.messagesRef.push({
               content: this.input.value,
               username: this.props.user.displayName,
               roomId: this.props.activeRoom
             })};
              this.input.value = ""
             }

  render() {
    return (

      <form className="MessageForm" onSubmit={this.handleFormSubmit}>
      <div className="input-container">
        <input
        type="text"
        ref={(node) => (this.input = node)}
        onChange={this.handleChange} placeholder="Enter Message"/>
      </div>
      <div className="button-container">
        <button type="submit">
        Send
        </button>
      </div>
      </form>

    )
  }
}

export default MessageForm
