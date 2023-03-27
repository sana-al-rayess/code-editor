import "./users.css";

const Users = () => {
	return (
		<div className="user_card">
			<div className="user_img">
				<img src="" alt="" />
			</div>
			<div className="user_card_info">
				<p className="user_name">Mohamad Atout</p>
				<p className="user_location">Lebanon</p>
				<p className="user_bio">Full Stack Developer</p>
				<button className="send_msg_btn">Say Hello</button>
			</div>
		</div>
	);
};

export default Users;
