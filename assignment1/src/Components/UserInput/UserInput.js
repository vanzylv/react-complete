import React from 'react';
import './UserInput.css';

const userInput = (props) =>{

    return (
        <div className="UserInput">
            <input onChange={props.change} value={props.name} type="text"/>
        </div>
    );

}

export default userInput;