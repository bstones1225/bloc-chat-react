import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div className="App">
      <header>
        <nav>

        </nav>
        <h1>Bloc Chat</h1>
      </header>
      <main>
        <RoomList firebase={firebase}/>
      </main>
      </div>
    );
  }
}

export default App;
