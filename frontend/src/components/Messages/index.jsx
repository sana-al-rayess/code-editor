import "./messages.css";
import NameBar from "./NameBar";
import MessagesContent from "./MessagesContent";
import SendBar from "./SendBar";
import axios from "axios";
import { useEffect, useState } from "react";

const Messages = () => {
	const [messages, setMessages] = useState([]);

	const user_id = localStorage.getItem("user_id");
	const fetch_messages = () => {
		axios({
			method: "post",
			url: "http://localhost:8000/api/getmsgs",
			data: {
				sender_id: user_id,
				recepient_id: 1,
			},
		}).then((res) => {
			const messages = res.data.response;
			setMessages(messages);
		});
	};

	useEffect(() => {
		fetch_messages();
	}, []);

	return (
		<div className="message_card">
			<NameBar />
			<MessagesContent messages={messages} />
			<SendBar update={fetch_messages} />
		</div>
	);
};

export default Messages;
