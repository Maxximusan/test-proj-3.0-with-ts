import styled from "styled-components";
import bgimg from "../../images/rockstars.jpg";
import twBird from "../../images/tweetBird.jpg";

export const ImagesContainer = styled.section`
  display: flex;
  justify-content: center;
  position: relative;

  &&::before {
    content: "";
    width: 800px;
    height: 800px;
    background-size: cover;
    background-image: url(${bgimg});
  }

  &&::after {
    content: "";
    position: absolute;
    top: 500px;
    left: 1090px;
    width: 225px;
    height: 225px;
    background-size: cover;
    background-image: url(${twBird});
  }
`;
