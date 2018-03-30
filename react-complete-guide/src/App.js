import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {


  state = {

    persons: [
      { id: 1, name: 'Vickus111', age: '12' },
      { id: 2, name: 'Gert', age: '111' },
      { id: 3, name: 'Peter', age: '11' },
    ],
    otherStte: 'rere',
    showPersons: true

  }


  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })

  }

  togglePersonsHandler = () => {

    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }

  deletePersonHandler = (personIndex) => {

    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}

        </div>
      )

      style.backgroundColor = 'green'
    }


    let classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi there</h1>
        <p className={classes.join(' ')}>This is working</p>
        <button
          style={style}
          onClick={() => this.togglePersonsHandler('TRRRRRest')}>Switch name</button>
        {persons}
      </div>
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'test'),'Hi there h1');

  }
}

export default App;
