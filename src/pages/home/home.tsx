import React from "react";
import { Element } from "react-scroll";
import BgMain from "../../components/common/bg-main";

interface props {}
const Home: React.FC<props> = () => {
	return (
		<Element name="home">
			<section className="h-screen max-h-[852px] mx-auto pt-[70px] flex sm:justify-center relative">
				<BgMain />
				<div className="pt-20 px-6 sm:text-center relative z-10">
					<h1 className="font-medium drop-shadow-xl text-[36px] sm:text-5xl">
						Здоровое похудение без <br /> возврата к исходному весу
					</h1>
					<p className="mt-6 text-xl sm:text-2xl font-medium text-gray-700">
						Похудеть в месяц от
						<span className="text-[#42a047]"> 8 до 12 кг </span>
						это реально
					</p>
				</div>

				<div></div>
			</section>
		</Element>
	);
};

export default Home;
