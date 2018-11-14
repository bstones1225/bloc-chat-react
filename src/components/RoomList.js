import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoom: ""
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.activeRoom = this.props.activeRoom;
  }
  componentDidMount() {
       this.roomsRef.on('child_added', snapshot => {
         const room = snapshot.val();
         room.key = snapshot.key;
         this.setState({ rooms: this.state.rooms.concat( room ) })
       });}
 handleChange(event) {
       this.setState({newRoom: event.target.value});
     }
handleSubmit(event) {
         event.preventDefault();
         this.roomsRef.push({
         roomId: this.state.newRoom
         });
         this.setState({newRoom: ""});
       }


  render(){
    return (
       <section className="rooms-list">
      {
        this.state.rooms.map((room, index) =>(
        <Link to={`/room/${room.roomId}`} key={room.key} onClick = {()=>this.props.setRoom(room.roomId)}>{room.roomId}</Link>
      ))
    }

    <form onSubmit={this.handleSubmit} >
      <label>
      Name:
      <input type="text" value={this.state.newRoom} onChange={this.handleChange} placeholder="Room List"/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </section>




    );
  }
}

export default RoomList;
