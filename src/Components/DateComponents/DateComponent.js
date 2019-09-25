import React from "react";
import "../../App.css";
import styled from "styled-components";

const DateContainer = styled.div`
    font-size: 2rem;
`;

const Button = styled.button`
    background: blue;
    font-size: 1.6rem;
    color: white;
    padding: 0px 15px;
    border-radius: 3px;
    margin: 4px 20px;

    :hover {
        opacity: 0.5;
    }
`;

const H3 = styled.h3`
    margin: 10px 0;
    font-weight: bold;
    font-size: 2rem;
`;

const P = styled.p`
    font-size: 1.8rem;
    margin: 10px 0;
`;

const DateComponent = (props) => {
    return (
        <DateContainer>
            <H3>Enter date like this (YEAR-MO-DA) to change pictures:</H3>
            <P>
                Enter Date: 
               <input id="date"/> 
               <Button onClick={() => props.setDate()}>Submit</Button> 
            </P>
        </DateContainer>
    )
}

export default DateComponent;