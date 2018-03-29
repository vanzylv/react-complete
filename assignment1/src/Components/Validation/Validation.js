import React from 'react';

const validation = (props) => {

    let errorDisplay = props.length > 5 ? "Too long" : "Too short";

    return (
       <div>
           <p>{errorDisplay}</p>
       </div>     
    )

}

export default validation;