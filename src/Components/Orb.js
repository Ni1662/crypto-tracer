import React from "react";
import { keyframes, styled } from "styled-components";
import { useWindowSize } from "../Utils/useWindowSize";

const Orb = () => {
  const { width, height } = useWindowSize();

  const moveOrb = keyframes`
    0%{
        transform: translate(0, 0);
    }
    50%{
        transform: translate(${width / 1.3}px, ${height / 1.5}px);
    }
    100%{
        transform: translate(0, 0);
    }
`;

  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: fixed;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background-image: linear-gradient(
      to right top,
      #051937,
      #004064,
      #006b8e,
      #0099b0,
      #00c9c8
    );
    filter: blur(200px);
    animation: ${moveOrb} 15s alternate linear infinite;
    z-index: 0;
  `;
  return <OrbStyled>Orb</OrbStyled>;
};

export default Orb;
