import './App.css';
import Navbar from './components/Navbar';
import Sign from './pages/Sign';
import About from './pages/About';
import Home from './pages/Home';
import Verify from './pages/Verify';
import Table from './pages/Table';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Profile from './pages/profile';
import styled from 'styled-components';
import { Gradient } from "./lib/gradient";
import { useLayoutEffect } from 'react';


function App() {
  useLayoutEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    <Router>
    <MainContainer>
    <Navbar/>
    <canvas id="gradient-canvas" data-transition-in />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </MainContainer>
    </Router>
  );
}

const MainContainer = styled.div`
width: 100%;
height: 100%;
`


export default App;
