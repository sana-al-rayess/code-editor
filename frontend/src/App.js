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
				<Route path="/" element={<HomePage />} />
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
