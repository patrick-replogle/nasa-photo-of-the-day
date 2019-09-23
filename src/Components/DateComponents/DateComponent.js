import React from "react";
import "../../App.css";

const DateComponent = (props) => {
    return (
        <div className="date-container">
            <h3>Enter date like this (YEAR-MO-DA) to change pictures:</h3>
            <p>
                Enter Date:
               <input id="date"/> 
               <button id="submit" onClick={() => props.setDate(props.date)}>Submit</button>
            </p>
        </div>
    )
}

export default DateComponent;