import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import { Route, Routes } from 'react-router-dom';

const App=()=> {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="signup" element={<SignUp/>} />
    </Routes>
    </div>
  );
}

export default App;
