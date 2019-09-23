import React from "react";
import "../../App.css";

const DateComponent = (props) => {
    return (
        <div className="date-container">
            <h3>Enter date like this (YEAR-MO-DA) to change pictures:</h3>
            {/* <form>
                <label>
                    Date:
                    <input type="text" date="date" />
                </label>
                <input type="submit" value="Submit" onClick={() => props.setDate()}/>
            </form> */}
            <button onClick={() => props.setDate(props.date + 1)}>click me</button>
        </div>
    )
}

export default DateComponent;