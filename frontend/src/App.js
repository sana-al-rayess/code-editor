import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './Pages/HomePage';
import RegistrationPage from './Pages/RegistrationPage';
import SearchPage from './Pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reg" element={<RegistrationPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

