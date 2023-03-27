import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegistrationPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/LoginPage";
import SearchPage from "./Pages/SearchPage";
import CodeEditorPage from "./Pages/CodeEditorPage";
import MessagesPage from "./Pages/MessagesPage";
import SavedCode from "./Pages/SavedCode";
import AdminPage from "./Pages/AdminPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
<<<<<<< HEAD
			    <Route path="/" element={<HomePage />} />
=======
				<Route path="/" element={<HomePage />} />
>>>>>>> 24f54bdf70d69a1a53e43660617a177769d26fa6
				<Route path="/Home" element={<HomePage />} />
				<Route path="/reg" element={<RegistrationPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/editor" element={<CodeEditorPage />} />
				<Route path="/messages" element={<MessagesPage />} />
				<Route path="/savedCode" element={<SavedCode />} />
				<Route path="/admin" element={<AdminPage />} />
				<Route path="*" element={<div>404</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
