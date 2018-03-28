import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {

      persons:[
        {name:'Vickus111',age :'12'},
        {name:'Peter',age :'11'},
        {name:'Gert',age :'111'}
      ],
      otherStte :'rere'

  }
  
  swithNameHandler = (prop) =>  {

    this.setState({persons:[
      {name:'Vickus',age :'12'},
      {name:'Peter',age :'11'},
      {name:'Gert',age :'111'}
    ]})

  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi there</h1>
        <p>This is working</p>
        <button onClick={this.swithNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'test'),'Hi there h1');

  }
}

export default App;
