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
    <div className="min-h-dvh min-w-dvw flex flex-col">
      <Header></Header>
      <Routes className="flex-grow">
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

        <Route path="/generators" element={<Generators/>}/>

        <Route path="/generators/:id" element={<Generator/>}/>

        <Route path="/generators-manager" element={<GeneratorsManager/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
