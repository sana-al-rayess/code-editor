import Navbar from "../../components/Navbar/Navbar";
import CodeCard from "../../components/CodeCard";
import { useEffect, useState } from "react";
import axios from "axios";

const SavedCode = () => {
	const [codes, setCodes] = useState([]);

	useEffect(() => {
		const user_id = localStorage.getItem("user_id");
		axios({
			method: "post",
			url: "http://localhost:8000/api/getCodes",
			data: {
				user_id: user_id,
			},
			headers: {
				"content-type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		}).then((res) => {
			const codes = res.data.data;
			console.log(codes);
			setCodes(codes);
		});
	}, []);

	return (
		<div className="cardsContainer">
			<div className="header">
				<Navbar />
			</div>

			<div className="content">
				{codes.map((code, i) => (
					<CodeCard code={code} key={i} />
				))}
			</div>
		</div>
	);
};

export default SavedCode;
