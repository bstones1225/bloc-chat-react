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

    };
  }

  setRoom=(room)=>{

    this.setState({activeRoom: room})

  }
  setUser=(user)=>{

    this.setState({
      user: user
    })

  }
  deleteRoom=()=>{

    console.log("Delete button")
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
      deleteRoom={this.deleteRoom.bind(this)}
      activeRoom={this.state.activeRoom}
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
