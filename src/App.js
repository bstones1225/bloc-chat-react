import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import Rooms from './components/Rooms';
import RoomForm from './components/RoomForm';
import DeleteRoom from './components/DeleteRoom';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import User from './components/User';

var config = {
  apiKey: "AIzaSyDQZNrNM29rmk1gaTaEojzjFYH_ILXjDb4",
  authDomain: "bloc-chat-react-eb860.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-eb860.firebaseio.com",
  projectId: "bloc-chat-react-eb860",
  storageBucket: "bloc-chat-react-eb860.appspot.com",
  messagingSenderId: "832463459106"
};
firebase.initializeApp(config);


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: " ",
      user:" ",
      activeRoomKey:" ",

    };
   this.roomsRef = firebase.database().ref('rooms');
  }

  setRoom=(room, roomKey)=>{
    
    this.setState({activeRoom: room, activeRoomKey:roomKey})


  }
  setUser=(user)=>{

    this.setState({
      user: user
    })

  }
  deleteRoom=()=>{
   this.roomsRef.child(this.state.activeRoomKey).remove()

  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Bloc Chat</h1>
      <nav>
      <Rooms
      firebase={firebase}
      setRoom={this.setRoom.bind(this)}
      />
      <RoomForm
      firebase={firebase}
      />
      <DeleteRoom
      firebase={firebase}
      activeRoomKey={this.state.activeRoomKey}
      deleteRoom={this.deleteRoom.bind(this)}
      />
      </nav>

      </header>
      <main>

                <MessageList
                 firebase={firebase}
                 activeRoom={this.state.activeRoom}
                 user={this.state.user}
                 setUser={this.setUser.bind(this)}
                 messages={this.state.messages}
                />


                <MessageForm
                firebase={firebase}
                user={this.state.user}
                activeRoom={this.state.activeRoom}
                />
              <User
              firebase={firebase}
              user={this.state.user}
              setUser={this.setUser.bind(this)}
              />
        </main>
      </div>
    );
  }
}

export default App;
