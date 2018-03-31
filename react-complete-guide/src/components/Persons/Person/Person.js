import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component{

    constructor(props){
        super(props);
        console.log('Person : Inside contructor',props)
    }
  
    componentWillMount(){
      console.log('Person : Inside component will mount');
    }
  
    componentDidMount(){
      console.log('Person : Inside component DID mount');
    }

    render(){
        console.log('Person : Render');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I am a {this.props.name} person, I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }

}

export default Person;
