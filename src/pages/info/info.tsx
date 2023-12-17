import React from "react";
import icon1 from "../../assets/icons/nutrition-1.png";
import icon2 from "../../assets/icons/nutrition-2.png";
import icon3 from "../../assets/icons/nutrition-3.png";

const Info: React.FC = () => {
	return (
		<section className="max-w-[1144px] py-20 px-8 mx-auto">
			<div></div>
			<div className="flex md:flex-row flex-col-reverse gap-10 md:gap-20">
				<div className="flex-1 flex flex-col gap-6 md:gap-10">
					<div className="p-7 flex gap-5 items-center shadow-md">
						<img src={icon1} alt="" className="w-20" />
						<div>
							<h3 className="mb-1 text-[#333] text-lg font-bold">
								Коучинг по питанию
							</h3>
							<p className="text-[#666] text-sm">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Dolorum, qui.
							</p>
						</div>
					</div>
					<div className="p-7 flex gap-5 items-center shadow-md">
						<img src={icon2} alt="" className="w-20" />
						<div>
							<h3 className="mb-1 text-[#333] text-lg font-bold">
								Гарантированные результаты
							</h3>
							<p className="text-[#666] text-sm">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Dolorum, qui.
							</p>
						</div>
					</div>
					<div className="p-7 flex gap-5 items-center shadow-md">
						<img src={icon3} alt="" className="w-20" />
						<div>
							<h3 className="mb-1 text-[#333] text-lg font-bold">
								Индивидуальный план
							</h3>
							<p className="text-[#666] text-sm">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Dolorum, qui.
							</p>
						</div>
					</div>
				</div>

				<div className="flex-1 flex flex-col justify-center md:text-left text-center md:items-start items-center">
					<h2 className="title mb-6 text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-[#333]">
						Узнайте, как питаться здоровой пищей, не меняя при этом занятого
						образа жизни
					</h2>

					<p className="text-sm text-[#666]">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quam
						ratione provident laudantium nemo necessitatibus, ut excepturi
						repellat, vero quod itaque consectetur cupiditate laboriosam
						exercitationem eum. Ipsam vitae voluptatibus totam.
					</p>

					<button className="w-fit mt-10">Связаться</button>
				</div>
			</div>
		</section>
	);
};

export default Info;
