import React from "react";
import "../../App.css";
import logo from "../../Img/logo.jpg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 32%;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 80px;
`;

const H3 = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
  font-style: italic;
  text-shadow: 1px 1px #888888;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo" />
      <H3>NASA PICS</H3>
    </LogoContainer>
  );
};

export default Logo;
