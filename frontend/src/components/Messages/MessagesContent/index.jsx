import "../messages.css";

const MessagesContent = ({ messages }) => {
	const user_id = localStorage.getItem("user_id");
	return (
		<div className="display_msgs_bar">
			{messages.map((message) => {
				return (
					<p
						className={
							message.sender_id == user_id ? "sent_msg" : "received_msg"
						}
						key={message.message}>
						{message.message}
					</p>
				);
			})}
		</div>
	);
};

export default MessagesContent;
