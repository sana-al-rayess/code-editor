import { useEffect, useState } from "react";
import "../messages.css";
import axios from "axios";

const SendBar = ({ update }) => {
	const [message, setMessage] = useState("");

	const user_id = localStorage.getItem("user_id");
	const handleSendBtn = () => {
		axios({
			method: "post",
			url: "http://localhost:8000/api/sendmsgs",
			data: {
				sender_id: user_id,
				recepient_id: 1,
				message,
			},
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}).then((res) => {
			console.log(res.data);
			update();
		});
	};

	return (
		<div className="send_bar">
			<input
				value={message}
				className="send_input"
				type="text"
				placeholder="type your message here"
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button
				className="send_btn"
				onClick={() => {
					handleSendBtn();
					setMessage("");
				}}>
				Send
			</button>
		</div>
	);
};

export default SendBar;
