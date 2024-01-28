import React from "react";
import ClientList from "../../components/common/client-list";
import "./result.css";

interface props {}

const Results: React.FC<props> = () => {
	return (
		<section id="results">
			<div className="results-content">
				<h2>Результаты подопечных</h2>
				<ClientList />
			</div>
		</section>
	);
};

export default Results;
