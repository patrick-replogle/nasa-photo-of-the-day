import React, { useState } from "react";
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
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.setDate(input);
  };

  return (
    <DateContainer>
      <H3>Enter date like this YEAR-MO-DA to change pictures:</H3>
      <form onSubmit={handleSubmit}>
        Enter Date:
        <input
          onChange={handleChange}
          type="text"
          id="date"
          name="date"
          value={input}
        />
        <Button type="submit">Submit</Button>
      </form>
    </DateContainer>
  );
};

export default DateComponent;
