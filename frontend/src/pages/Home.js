import React, { useRef, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import styled from "styled-components";
import { Gradient } from "../lib/gradient";
import '../styles.css'




  function Overlay() {
    // useLayoutEffect(() => {
    //   const gradient = new Gradient();
    //   gradient.initGradient("#gradient-canvas");
    // }, []);
  
    // BondZapp
    return (
      <Main>
        {/* <canvas id="gradient-canvas" data-transition-in /> */}
        <Container>
        <h1>BondZapp</h1>
        <h2>
          A platform for the bond market to connect with <br /> the world 
        </h2>
        </Container>
      </Main>
    );
  }
  

const Home = () => {
    
  return <Overlay />
}

const Container = styled.div`
margin-top: 80px;
margin-left: 80px;
h1 {
  margin-top:10vh;
  font-size: 65px;
}
h2 {
  margin-top: 35vh;
  font-size: 30px;
}
`

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const CanvasContainer = styled.div`
  position: relative;
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
  padding-right: 4em;

  @media only screen and (max-width: 1200px) {
    padding-right: 0;
    order: -1;
  }
`;

const Title = styled.h1`
  font-size: 6em;
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin-top: 0em;
  @media only screen and (max-width: 1200px) {
    margin-top: 0;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4em;

  > svg {
    width: 64px;
  }

  > div {
    text-align: right;
    font-size: 0.8rem;
    width: 100px;
    font-weight: bold;
  }

  @media only screen and (max-width: 1200px) {
    padding: 2em;
  }

  @media only screen and (max-width: 600px) {
    > svg {
      width: 44px;
    }
  }
`;

const Content = styled.div`
  flex: 1;
  padding-left: 4em;

  h2 {
    color: #f7057e;
    font-size: 4rem;
    margin-top: 40vh;
    padding: 0;
    line-height: 0;
    margin-bottom: 1.2em;
    white-space: nowrap;
  }

  h3 {
    float: right;
    text-align: right;
    width: 100px;
    font-size: 0.8rem;
  }

  h1 {
    font-size: 3.3rem;
    line-height: 3.8rem;
  }

  p {
    font-size: 0.8rem;
    width: 200px;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding-right: 2em;
    padding-left: 2em;
    h1 {
      font-size: 2.3rem;
      line-height: 2.8rem;
    }

    h2 {
      font-size: 2.3rem;
      line-height: 2.3rem;
      margin-bottom: 0.8rem;
    }
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 1.6rem;
      line-height: 2rem;
    }

    h2 {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 1.3rem;
      line-height: 1.8rem;
    }

    h2 {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
  }
`;

export default Home
