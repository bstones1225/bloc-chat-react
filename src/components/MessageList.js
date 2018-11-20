import React, { Component } from 'react'
import Message from './Message'
import './MessageList.css'


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages:[],
    };


    this.messagesRef = this.props.firebase.database().ref('messages');


 }


  componentDidMount = () => {

       this.messagesRef.on('child_added', snapshot => {
         const message = snapshot.val();
         message.key = snapshot.key;

         this.setState({ messages: this.state.messages.concat( message ) })

       });
       this.props.setUser(this.props.user);



     }

componentDidUpdate = () => {
    this.node.scrollTop = this.node.scrollHeight
}


 render(){
    return (

      <div className="MessageList" ref={(node) => (this.node = node)}>
      {


        this.state.messages
        .filter(message => {return this.props.activeRoom === message.roomId})
        .map((message, index) =>(
          <Message key={index}
          content = {message.content}
          roomId= {message.roomId}
          sentAt= {message.sentAt}
          username={message.username}
        />
      ))
  }
    </div>

    )
  }
}

export default MessageList;
