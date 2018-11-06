import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
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
      user:""
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

  render() {
    return (
      <div className="App">
      <header>
      <h1>Bloc Chat</h1>
      <nav>
        <RoomList
        firebase={firebase}
        setRoom={this.setRoom} />
      </nav>

      </header>
      <main>

                <MessageList
                 firebase={firebase}
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
