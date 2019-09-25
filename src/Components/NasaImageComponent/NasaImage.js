import React from "react";
import "../../App.css";
import styled from "styled-components";

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 20px 0;
`;

const Img = styled.img`
  width: 100%;
  margin-left: 12%;
  margin-top: 20px;
  border: 1px solid black;
  box-shadow: 5px 5px #888888;
`;

const NasaImage = props => {
  return (
    <ImgContainer>
      <Img src={props.spaceImg} alt="nasa render" />
    </ImgContainer>
  );
};

export default NasaImage;
