import "./users.css";

const Users = () => {
	return (
		<div className="user_card">
			<div className="user_card_info">
				<p className="user_name">{localStorage.getItem("recepient_name")}</p>
				<p className="user_location">
					{localStorage.getItem("recepient_location")}
				</p>
				<p>{localStorage.getItem("recepient_age")}</p>
			</div>
		</div>
	);
};

export default Users;
