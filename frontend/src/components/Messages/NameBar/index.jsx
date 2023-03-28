import "../messages.css";
import { useState } from "react";

const NameBar = () => {
	return (
		<div className="messager_name">
			<p>{localStorage.getItem("recepient_name")}</p>
		</div>
	);
};

export default NameBar;
