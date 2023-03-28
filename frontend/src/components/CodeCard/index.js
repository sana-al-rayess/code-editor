import Button from "../Button/button";
import axios from "axios";
import "../CodeCard/codecard.css";
import { useEffect, useState } from "react";

const CodeCard = ({ code }) => {
	const handleDownloadClick = (code) => {
		const blob = new Blob([code], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = "code.txt";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="card">
			<div className="text_section">
				<p id="user_name">{code.title}</p>
				<p id="user_name">{code.description}</p>
			</div>
			<div className="butt_section">
				{/* <Button>View Code</Button> */}
				<Button onClick={() => handleDownloadClick(code.text)}>
					Download Code
				</Button>
			</div>
		</div>
	);
};

export default CodeCard;
