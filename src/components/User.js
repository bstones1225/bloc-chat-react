import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

 }
  componentDidMount() {
      this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
      
});

 }

 signIn = (event) => {
   event.preventDefault();
const provider = new this.props.firebase.auth.GoogleAuthProvider();
this.props.firebase.auth().signInWithPopup(provider);

 }
 signOut = (event) => {
   this.props.firebase.auth().signOut();
 }

 nameDisplayed=()=>{
    if(this.props.user){
      return this.props.user.displayName
    }else
      return "Guest"
}
 render(){
    return (
      <section>

        <button value="Sign In" onClick={this.signIn} >
        Sign in
        </button>
        <button value="Sign Out" onClick={this.signOut} >
        Sign Out
        </button>
        <div>{this.nameDisplayed(this.props.user)}</div>
    </section>
    );
  }
}

export default User;
