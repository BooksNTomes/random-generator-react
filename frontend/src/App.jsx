import './css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Generators from './pages/Generators';

function App() {
  
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/generators" element={<Generators/>}/>
        <Route path="/generator" element={<Generator/>}/>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
