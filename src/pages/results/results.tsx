import React from "react";

import ClientList from "../../components/common/client-list";

interface props {}

const Results: React.FC<props> = () => {
	return (
		<section id="results" className="py-10 bg-[#fafafa] relative z-10">
			<div className="max-w-[1144px] mx-auto">
				<h2 className="mb-8 text-black text-center text-2xl font-medium sm:text-3xl">
					Результаты подопечных
				</h2>
				<ClientList />
			</div>
		</section>
	);
};

export default Results;
