import React from "react";
import "../../App.css";
import styled from "styled-components";

const DateContainer = styled.div`
  font-size: 2rem;
`;

const Button = styled.button`
  background: #6666ff;
  font-size: 1.6rem;
  color: white;
  padding: 4px 40px;
  border-radius: 4px;
  margin: 4px 10px;
  box-shadow: 1px 1px #888888;

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

const DateComponent = props => {
  function dateHandler() {
    return props.setDate({});
  }

  return (
    <DateContainer>
      <H3>Enter date like this (YEAR-MO-DA) to change pictures:</H3>
      <P>
        Enter Date:
        <input id={"date"} />
        <Button onClick={dateHandler}>Submit</Button>
      </P>
    </DateContainer>
  );
};

export default DateComponent;
