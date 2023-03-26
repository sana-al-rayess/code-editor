import "./messages.css";
import NameBar from "./NameBar";
import MessagesContent from "./MessagesContent";
import SendBar from "./SendBar";

const Messages = () => {
	return (
		<div className="message_card">
			<NameBar />
			<MessagesContent />
			<SendBar />
		</div>
	);
};

export default Messages;
