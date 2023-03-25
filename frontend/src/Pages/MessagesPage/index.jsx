import Users from "../../components/Users";
import Messages from "../../components/Messages";
import "./messagesPage.css";
import Navbar from "../../components/Navbar/Navbar";

const MessagesPage = () => {
	return (
		<div className="main">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="page">
				<Users />
				<Messages />
			</div>
		</div>
	);
};

export default MessagesPage;
