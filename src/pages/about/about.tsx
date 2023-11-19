import React from "react";
import ClientList from "../../components/common/client-list";

interface props {}

const About: React.FC<props> = () => {
	return (
		<section className="container mx-auto mb-20 pt-10 relative z-20 px-4 sm:p-0">
			<h2 className="mb-8 text-black text-center text-3xl font-medium">
				Результаты подопечных
			</h2>
			<ClientList />
		</section>
	);
};

export default About;
