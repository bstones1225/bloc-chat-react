import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.messagesRef = this.props.firebase.database().ref('messages');
 }
  componentDidMount() {
       this.messagesRef.on('child_added', snapshot => {
         const message = snapshot.val();
         message.key = snapshot.key;
         this.setState({ messages: this.state.messages.concat( message ) })
       });

     }
 render(){
    return (
      <div>
      {

        this.state.messages.filter(message => {
              return this.props.activeRoom === message.roomId
      })
        .map((message, index) =>(
        <p key={index}>{message.content}
        {message.roomId}
        {message.sentAt}
        </p>
      ))
    }
    </div>
    );
  }
}

export default MessageList;
