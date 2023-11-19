import React from "react";
import ClientList from "../../components/common/client-list";

interface props {}

const About: React.FC<props> = () => {
	return (
		<section className="container mx-auto mb-20 pt-10 relative z-10">
			<h2 className="mb-8 text-black text-center text-2xl font-medium sm:text-3xl">
				Результаты подопечных
			</h2>
			<ClientList />
		</section>
	);
};

export default About;
