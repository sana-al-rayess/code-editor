import "../messages.css";

const SendBar = () => {
	return (
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
	);
};

export default SendBar;
