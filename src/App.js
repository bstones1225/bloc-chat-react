import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
      activeRoom: " "
    };
  }
  setRoom=(room)=>{
    console.log("Inside set Room " + room)
    this.setState({activeRoom: room})
    console.log(this.state.activeRoom)
    console.log("After set Room " + this.state.activeRoom)
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
        <Route path="/room/:roomId" render={() =>
                <MessageList
                 firebase={firebase}
                 activeRoom={this.state.activeRoom}
                />
               }
              />
        </main>
      </div>
    );
  }
}

export default App;
