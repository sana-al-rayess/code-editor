import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './Pages/HomePage';
import RegistrationPage from './Pages/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reg" element={<RegistrationPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

