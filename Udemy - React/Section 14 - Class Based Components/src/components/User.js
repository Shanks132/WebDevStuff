import classes from './User.module.css';
<<<<<<< Updated upstream
import { Component } from 'react';

class User extends Component{
  render(){
    return (
      <li className={classes.user}>{this.props.name}</li>
    );
  }
  componentWillUnmount(){
    console.log("User Unmount")
}   
}
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };
=======

const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
};
>>>>>>> Stashed changes

export default User;
