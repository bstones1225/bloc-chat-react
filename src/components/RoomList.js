import React, { Component } from 'react';

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
         name: this.state.newRoom
         });
       }


  render(){
    return (
      <div>
      {
        this.state.rooms.map((room, index) =>(
        <p>{room.name}</p>
      ))
    }

    <form onSubmit={this.handleSubmit} >
      <label>
      Name:
      <input type="text" value={this.state.newRoom} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>




    );
  }
}

export default RoomList;
