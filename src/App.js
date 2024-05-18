import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={TripStream} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
