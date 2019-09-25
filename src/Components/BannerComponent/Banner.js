import React from "react";
import "../../App.css";
import banner from "../../Img/banner.jpg";
import styled from "styled-components";

const BannerContainer = styled.div`
  margin-right: 5%;
  margin-left: 5%;
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid black;
  box-shadow: 5px 5px #888888;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <Img src={banner} alt="banner" />
    </BannerContainer>
  );
};

export default Banner;
