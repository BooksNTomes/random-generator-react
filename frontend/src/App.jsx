import './css/index.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Layout.jsx'
import Home from './pages/Home';
import About from './pages/About';
import Generators from './pages/Generators';
import Generator from './pages/Generator';
import ScrollTop from './components/ScrollTop.jsx';
import GeneratorsManager from './pages/AdminPages/GeneratorsManager.jsx';

function App() {
  return (
    <>
      <ScrollTop/>
      <div className="min-h-dvh min-w-dvw flex flex-col">
        <Header></Header>
        <Routes className="flex-grow">
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/generators" element={<Generators/>}/>
          <Route path="/generators/:id" element={<Generator/>}/>
          <Route path="/generators-manager" element={<GeneratorsManager></GeneratorsManager>}/>
        </Routes>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
