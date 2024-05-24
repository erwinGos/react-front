import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/bars/Navbar';
import Footer from './components/bars/Footer';
import RegisterForm from './pages/RegisterForm';
import SignIn from './pages/authentication/SignIn';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component={SignIn} />
        <Route path='/register' Component={RegisterForm} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
