import React, { Component } from 'react';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput';
import Validation from './Components/Validation/Validation';
import CharComponent from './Components/CharComponent';
import './App.css';

class App extends Component {

  state = {

    typedText: '123'

  }

  changeText = (event) => {

    console.log(event.target.value);

    this.setState({ typedText: event.target.value })

  }

  removeComponent = (index) => {

    const items = this.state.typedText.split('');
    items.splice(index, 1);

    this.setState({ typedText: items.join('') });


  }

  renderCharComponent = () => {

    let typedText = this.state.typedText;

    let result = typedText.split('').map((char, index) => {

      return <CharComponent clicked={() => this.removeComponent(index)} key={index} char={char} />

    });

    console.log(result)

    return result;
  }

  render() {

    let charSequance = this.renderCharComponent();

    return (

      <div className="App">

        <input type="text" value={this.state.typedText} onChange={(event) => this.changeText(event)} />
        <Validation length={this.state.typedText.length} />

        {charSequance}

        <p>{this.state.typedText}</p>

      </div>
    );
  }
}

export default App;
