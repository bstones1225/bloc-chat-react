import React, { Component } from 'react';


class RoomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newRoom: "",
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  handleChange= (event) => {
       this.setState({newRoom: event.target.value});
     }
  handleSubmit= (event) => {
         event.preventDefault();
         this.roomsRef.push({
         roomId: this.state.newRoom
         });
         this.setState({newRoom: ""});
       }



  render(){
    return (

      <form onSubmit={this.handleSubmit} >
     <div className="input-container">
     <input type="text" value={this.state.newRoom} onChange={this.handleChange} placeholder="Room List"/>
     </div>
     <div>
     <input type="submit" value="Submit" />
     </div>
     </form>



    );
  }
}

export default RoomForm;
