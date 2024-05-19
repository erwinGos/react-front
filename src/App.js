import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/bars/Navbar';
import Footer from './components/bars/Footer';
import RegisterForm from './pages/RegisterForm';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={RegisterForm} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
