import './css/index.css';
import { Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth.js';
import { Header, Footer } from './components/Layout.jsx'
import Home from './pages/Home';
import About from './pages/About';
import Generators from './pages/Generators';
import Generator from './pages/Generator';
import GeneratorsManager from './pages/GeneratorsManager';
import Auth from './pages/Auth.jsx';

function App() {
  
  return (
    <div className="min-h-dvh min-w-dvw flex flex-col">
      {/** <Router> */}
        {/** <AuthProvider> */}
          <Header></Header>
          <Routes className="flex-grow">
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/generators" element={<Generators/>}/>
            <Route path="/generators/:id" element={<Generator/>}/>
            {/* <Route path="/generators-manager" element={<GeneratorsManager/>}/> */}
            {/** <ProtectedRoute path="/generators-manager" element={<GeneratorsManager/>}/> */}
            {/* <Route path="/auth" element={<Auth/>}/> */}
          </Routes>
          <Footer></Footer>
        {/** </AuthProvider> */}
      {/** </Router> */}
    </div>
  )
}

export default App
