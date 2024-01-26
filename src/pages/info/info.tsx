import React, { useState } from "react";
import SignupForm from "../../components/common/signup-form";
import icon1 from "../../assets/icons/nutrition-1.png";
import icon2 from "../../assets/icons/nutrition-2.png";
import icon3 from "../../assets/icons/nutrition-3.png";

const Info: React.FC = () => {
	const [isOpened, setIsOpened] = useState(false);

	const openModal = () => {
		setIsOpened(true);
	};
	const closeModal = () => {
		setIsOpened(false);
	};

	return (
		<>
			<SignupForm isOpen={isOpened} onClose={closeModal} />
			<section className="max-w-[1144px] pt-20 pb-10 px-8 mx-auto">
				<div id="course" className="flex md:flex-row flex-col gap-10 md:gap-20">
					<div className="flex-1 flex flex-col justify-center md:text-left text-center md:items-start items-center">
						<span className="text-lg text-[#333] font-medium">
							Преобразуйте свой образ жизни
						</span>
						<h2 className="title mt-2 mb-6 text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-[#FFC47C]">
							Курс здорового питания
						</h2>

						<p className="text-sm text-[#666]">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
							quam ratione provident laudantium nemo necessitatibus, ut
							excepturi repellat, vero quod itaque consectetur cupiditate
							laboriosam exercitationem eum. Ipsam vitae voluptatibus totam.
						</p>

						<button className="w-fit mt-10" onClick={openModal}>
							Связаться
						</button>
					</div>
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
				</div>
			</section>
		</>
	);
};

export default Info;
