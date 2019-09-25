import React from "react";
import "../../App.css";
import styled from "styled-components";

const AboutCard = styled.div`
    flex-direction: column;
    text-align: left;
    font-size: 2rem;
    margin-bottom: 10px;
    margin-right: 5%;
    margin-left: 5%;
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

const AboutComponent = () => {
    return(
        <AboutCard>
            <H3>About Us:</H3>
            <P>Everyday NASA posts a new mindblowing picture of the cosmos or planet Earth. This
                website allows you view those pictures in one convenient place. Want to see a photo from a specific
                date?  All you need to do is type the date you wish to view in the text field and submit! Today's photo
                is already displayed below.
            </P>
        </AboutCard>
    )
}
export default AboutComponent;