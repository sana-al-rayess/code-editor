import "../messages.css";

const MessagesContent = ({ messages }) => {
	return (
		<div className="display_msgs_bar">
			{messages.map((message) => {
				return (
					<p
						className={message.sender_id === 3 ? "sent_msg" : "received_msg"}
						key={message.message}>
						{message.message}
					</p>
				);
			})}
		</div>
	);
};

export default MessagesContent;
