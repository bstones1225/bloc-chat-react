import React, { Component } from 'react';
import Rooms from './Rooms';
import RoomForm from './RoomForm';

class RoomList extends Component {
  render(){
    return (
      <div>
       <Rooms
       firebase={this.props.firebase}
       setRoom={this.props.setRoom}
       />
       <RoomForm
       firebase={this.props.firebase}
       />
       </div>
    );
  }
}

export default RoomList;
