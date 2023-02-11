import './App.css';
import Navbar from './components/Navbar';
import Sign from './pages/Sign';
import About from './pages/About';
import Home from './pages/Home';
import Verify from './pages/Verify';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"



function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/verify" element={<Verify/>}/>
      </Routes>
    </Router>
  );
}

export default App;
