import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Rooms.css';


class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');

  }
  componentDidMount() {
       this.roomsRef.on('child_added', snapshot => {
         const room = snapshot.val();
         room.key = snapshot.key;
         this.setState({ rooms: this.state.rooms.concat( room ) })
         console.log(room.key)

       });}



  render(){
    return (
       <div className="Rooms">
      {
        this.state.rooms.map((room, index) =>(
        <Link className="RoomLinks" to={`/room/${room.roomId}`} key={room.key} onClick = {()=>this.props.setRoom(room.roomId)}>{room.roomId}</Link>
      ))
    }
    </div>


    );
  }
}

export default Rooms;
