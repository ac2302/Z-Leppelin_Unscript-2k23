import './App.css';
import Navbar from './components/Navbar';
import Sign from './pages/Sign';
import About from './pages/About';
import Home from './pages/Home';
import Verify from './pages/Verify';
import Table from './pages/Table';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Profile from './pages/profile';



function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/Profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
