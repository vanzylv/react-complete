import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  constructor(props){
      super(props);
      console.log('Inside contructor',props)

      this.state = {

        persons: [
          { id: 1, name: 'Vickus111', age: '12' },
          { id: 2, name: 'Gert', age: '111' },
          { id: 3, name: 'Peter', age: '11' },
        ],
        otherStte: 'rere',
        showPersons: true
    
      }

  }

  componentWillMount(){
    console.log('Inside component will mount');
  }

  componentDidMount(){
    console.log('Inside component DID mount');
  }


  shouldComponentUpdate(nextProps, nextState){
        console.log('App : Inside shouldComponentUpdate',nextProps,nextState);
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log('App : Inside componentWillUpdate',nextProps,nextState);
        
    }

    componentDidUpdate(){
        console.log('App : Inside componentDidUpdate');
        
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
  console.log('In Render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />
    }

    return (
      <div className={classes.App}>
        <button onClick={()=>{this.setState({showPersons:true})}}> Show persons </button>
        <Cockpit
          appTitle={this.props.appTitle}
          clicked={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons} />
        {persons}
      </div>
    );

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'test'),'Hi there h1');

  }
}

export default App;
