import React from "react";
import { Element } from "react-scroll";

import ClientList from "../../components/common/client-list";

interface props {}

const Results: React.FC<props> = () => {
	return (
		<Element name="results">
			<section className="container mx-auto mb-20 pt-10 relative z-10">
				<h2 className="mb-8 text-black text-center text-2xl font-medium sm:text-3xl">
					Результаты подопечных
				</h2>
				<ClientList />
			</section>
		</Element>
	);
};

export default Results;
