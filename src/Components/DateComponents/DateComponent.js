import React from "react";
import "../../App.css";
import styled from "styled-components";

const DateContainer = styled.div`
  background: lightgray;
  font-size: 2rem;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  margin-right: 5%;
  margin-left: 5%;
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
  text-shadow: 1px 1px #6666ff;
`;

const P = styled.p`
  font-size: 1.8rem;
  margin: 10px 0;
`;

const DateComponent = props => {
  function dateHandler(e) {
    let dateChange = document.getElementById("date").value;
    e.preventDefault();
    return props.setDate(dateChange);
  }

  return (
    <DateContainer>
      <H3>Enter date like this YEAR-MO-DA to change pictures:</H3>
      <form>
        Enter Date:
        <input type="text" id="date" name="date" />
        <Button type="submit" onClick={dateHandler}>
          Submit
        </Button>
      </form>
    </DateContainer>
  );
};

export default DateComponent;
