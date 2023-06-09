import Button from "../Button/button";
import UserRow from "./UserRow";
import "./adminComp.css";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminStructure = () => {
	const [users, setUsers] = useState([]);
	const user_id = localStorage.getItem("user_id");

	useEffect(() => {
		axios({
			method: "get",
			url: `http://localhost:8000/api/users/${user_id}`,
		}).then((res) => {
			const usersData = res.data.users;
			setUsers(usersData);
		});
	}, []);

	const handleLogout = () => {
		window.location.href = "/login";
		localStorage.clear();
	};

	return (
		<div className="admin_main">
			<div className="left">
				<p>Users</p>
				<button className="logoutBtn" onClick={handleLogout}>
					Logout
				</button>
			</div>
			<div className="right">
				<div className="main_row">
					<p>Name</p>
					<p>Email</p>
					<p>Location</p>
					<p>Gender</p>
					<p>Age</p>
				</div>
				<div className="Users_row">
					{users.map((user) => {
						return <UserRow user={user} key={user.id} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default AdminStructure;
