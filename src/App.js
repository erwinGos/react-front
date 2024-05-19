import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/bars/Navbar';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' Component="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
