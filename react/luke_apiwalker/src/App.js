import { Route, Routes } from 'react-router-dom';

import { Results } from './views/Results';
import { Form } from './views/Form';

import './App.css';

function App() {
  return (
    <>
    <Form />
    <hr />
    <Routes>
      <Route path='/:category/:id' element={<Results />} />
    </Routes>
    </>
  );
}

export default App;
