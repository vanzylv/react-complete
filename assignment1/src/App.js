import React, { Component } from 'react';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';
import './App.css';

class App extends Component {
  
  state = {

    users : [
      {userName:'State User 1'},
      {userName:'State User 2'},
      {userName:'State User 3'}
    ]

  }

  changeState = (event) => {
    console.log("I get here");  
    this.setState({
        users : [
          {userName:event.target.value},
          {userName:event.target.value},
          {userName:event.target.value}
        ]
      })
  }
  
  render() {

    const style = {

      backgroundColor:'red'

    }
    
    return (
      <div className="App">

        <button style={style} onClick={this.changeState} >Change state</button>

        <UserInput change={this.changeState} name={this.state.users[0].userName}/>
        <UserOutput userName={this.state.users[0].userName}/>
        <UserOutput userName={this.state.users[1].userName}/>
        <UserOutput userName={this.state.users[2].userName}/>
      </div>
    );
  }
}

export default App;
