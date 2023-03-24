import './App.css';
import { Link, Navigate, Routes, Route } from 'react-router-dom';

import { Main } from './views/Main';
import { Update } from './views/Update';
import { Create } from './views/Create';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Navigate to="/authors" replace />} />
        <Route path="/authors" element={<Main />} />
        <Route path="/authors/edit/:id" element={<Update />} />
        <Route path="/authors/new" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
