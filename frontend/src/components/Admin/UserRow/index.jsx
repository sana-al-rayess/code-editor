import "./row.css";
const UserRow = ({ user }) => {
	return (
		<div className="user_row">
			<p>{user.name}</p>
			<p>{user.email}</p>
			<p>{user.location}</p>
			<p>{user.gender}</p>
			<p>{user.age}</p>
		</div>
	);
};

export default UserRow;
