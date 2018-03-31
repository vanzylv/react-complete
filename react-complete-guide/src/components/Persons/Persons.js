import React, { Component } from 'react';
import Person from './Person/Person'



class Persons extends Component {

    constructor(props){
        super(props);
        console.log('Persons : Inside contructor',props)
  
        
  
    }
  
    componentWillMount(){
      console.log('Persons : Inside component will mount');
    }
  
    componentDidMount(){
      console.log('Persons : Inside component DID mount');
    }


    componentWillReceiveProps(nextProps){
      console.log('Persons : Inside componentWillReceiveProps',nextProps);
        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Persons : Inside shouldComponentUpdate',nextProps,nextState);
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log('Persons : Inside componentWillUpdate',nextProps,nextState);
        
    }

    componentDidUpdate(){
        console.log('Persons : Inside componentDidUpdate');
        
    }

    render() {
        console.log('Persons : Render');
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    key={person.id}
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}
                />

            })
        )

    }
}

export default Persons;