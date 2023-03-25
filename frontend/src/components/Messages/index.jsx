import "./messages.css";
const Messages = () => {
	return (
		<div className="message_card">
			<div className="messager_name">
				<p>Mohamad Atout</p>
			</div>
			<div className="display_msgs_bar">
				<p className="sent_msg">Hi</p>
				<p className="received_msg">Ya hala</p>
			</div>
			<div className="send_bar">
				<input
					className="send_input"
					type="text"
					placeholder="type your message here"
				/>
				<button className="send_btn" id="send_btn">
					Send
				</button>
			</div>
		</div>
	);
};

export default Messages;
