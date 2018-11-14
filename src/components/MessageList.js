import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMsg: "",

    };
    this.messagesRef = this.props.firebase.database().ref('messages');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

 }
  componentDidMount() {
       this.messagesRef.on('child_added', snapshot => {
         const message = snapshot.val();
         message.key = snapshot.key;
         this.setState({ messages: this.state.messages.concat( message ) })
       });
       this.props.setUser(this.props.user);
     }

handleChange(event) {

         this.setState({newMsg: event.target.value});
         }
handleSubmit(event) {
             event.preventDefault();

             if (this.props.activeRoom !== " "){

             this.messagesRef.push({
             content: this.state.newMsg,
             username: this.props.user.displayName,
             roomId: this.props.activeRoom
           })};
            this.setState({newMsg: ""});
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
        {message.username}
        </p>
      ))
    }
    <form onSubmit={this.handleSubmit} >
      <label>
      Enter Message:
      <input type="text" value={this.state.newMsg} onChange={this.handleChange} placeholder="Enter Message"/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>

    );
  }
}

export default MessageList;
