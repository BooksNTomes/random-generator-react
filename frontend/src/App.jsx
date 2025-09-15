import './css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Generators from './pages/Generators';
import Generator from './pages/Generator';
import GeneratorsManager from './pages/GeneratorsManager';

function App() {
  
  return (
    <>
      {// RE: Footer Issues TIP: add min height and width of 100dv as initial size for body
       // Flex and position footer at end
      }
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

        <Route path="/generators" element={<Generators/>}/>

        <Route path="/generators/:id" element={<Generator/>}/>

        <Route path="/generators-manager" element={<GeneratorsManager/>}/>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
