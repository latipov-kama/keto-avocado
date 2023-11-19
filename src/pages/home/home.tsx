import React from "react";
import BgMain from "../../components/common/bg-main";

interface props {}
const Home: React.FC<props> = () => {
	return (
		<section className="h-screen max-h-[852px] mx-auto pt-[70px] flex justify-center relative">
			<BgMain />
			<div className="pt-20 text-center relative z-20">
				<h1 className="font-medium drop-shadow-2xl">
					Здоровое похудение без <br /> возврата к исходному весу
				</h1>
				<p className="mt-6 text-xl font-medium text-gray-700">
					Похудеть в месяц от
					<span className="text-[#42a047]"> 8 до 12 кг </span>
					это реально
				</p>
			</div>

			<div></div>
		</section>
	);
};

export default Home;
