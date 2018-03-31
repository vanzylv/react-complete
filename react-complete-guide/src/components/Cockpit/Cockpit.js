import React from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {

    let assignedClasses = [];

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    
    let btnClass = '';

    if (props.showPerson) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button
                className={btnClass}
                onClick={() => props.clicked()}>Switch name</button>
        </div>
    );
}

export default cockpit;