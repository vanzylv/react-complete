import React from 'react';

const style = {
    display: 'inline-block',
    padding : '16px',
    textAlign:'center',
    margin:'16px',
    border:'1px solid black'
}

const char = (props) => {

    return(
        <div onClick={props.clicked} style={style}>
            {props.char}
        </div>
    );


}

export default char;
