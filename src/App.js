import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/bars/Navbar';
import Footer from './components/bars/Footer';
import RegisterForm from './pages/RegisterForm';
import Signup from './pages/authentication/Signup';
import Signin from './pages/authentication/Signin';
import ProtectedAuth from './components/middlewares/protectedAuth';
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import { checkTokenValidity } from './app/features/auth/authSlice';
import ProtectedRoute from './components/middlewares/protectedRoute';


function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    dispatch(checkTokenValidity());
  },[])

  return (
    auth.isAuth != null ? 
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/register' element={<ProtectedAuth><Signup/></ProtectedAuth>} />
        <Route path='/' element={<ProtectedAuth><Signin/></ProtectedAuth>} />
        <Route path='/home' element={<ProtectedRoute><RegisterForm/></ProtectedRoute>} />
      </Routes>
      <Footer/>
    </BrowserRouter> : null
  );
}

export default App;
