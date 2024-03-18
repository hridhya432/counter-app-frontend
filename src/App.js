
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './component/Add';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Add/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
