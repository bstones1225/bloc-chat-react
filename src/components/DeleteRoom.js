import React, { Component } from 'react';


class DeleteRoom extends Component {



  render(){
    return (
      <div>
       <button type="button" onClick={this.props.deleteRoom()}>Delete Button</button>
       </div>
    );
  }
}

export default DeleteRoom;
