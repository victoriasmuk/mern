import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { NumberOrWord } from './views/NumberOrWord';
import { ColorsWord } from './views/ColorsWord';
import './App.css';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />
      <Route path='/home' element={<Home />} />
      <Route path='/:input' element={<NumberOrWord />} />
      <Route path='/:input/:textColor/:bgColor' element={<ColorsWord />} />
    </Routes>
  );
}

export default App;
