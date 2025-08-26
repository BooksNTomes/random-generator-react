import './css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
