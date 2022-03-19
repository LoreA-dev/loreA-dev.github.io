import './App.css';
import HomePage from './containers/homeContainer';
import { Routes, Route, Link } from "react-router-dom";
import Login from './containers/loginContainer';
import Register from './containers/registerContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
