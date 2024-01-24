import React from "react";
import icon1 from "../../assets/icons/nutrition-icon.png";
import icon2 from "../../assets/icons/nutrition-icon-2.png";
import icon3 from "../../assets/icons/nutrition-icon-3.png";
import icon4 from "../../assets/icons/nutrition-icon-4.png";
import plan from "../../assets/images/diet-plan.png";

const Service: React.FC = () => {
	return (
		<section className="relative py-20 bg-gradient-to-b from-[#fafafa] to-white overflow-hidden">
			<div className="max-w-[1144px] mx-auto px-6 sm:px-12">
				<div className="flex md:flex-row flex-col-reverse gap-12 lg:gap-16 lg:items-center">
					<div>
						<div className="shadow-2xl p-5 w-fit mx-auto md:mx-0">
							<img src={plan} alt="" className="h-[300px] md:h-[400px]" />
						</div>
					</div>
					<div className="flex-1 text-center md:text-left">
						<h2 className="mb-5 text-xl sm:text-2xl lg:text-3xl text-[#333] font-bold">
							Я работаю с вами над созданием индивидуального плана питания
						</h2>
						<p className="text-[#666] ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
							finibus sodales urna, vel ornare orci cursus sit amet. Vivamus
							condimentum risus faucibus felis aliquet ullamcor Praesent sapien
							massa, convallis a pellentesque nec, egestas non nisi. Vestibulum
							ante ipsum primis in faucibus orci luctus et ultrices posuere
							cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
							ullamcorper sit amet ligula. Sed porttitor lectus nibh. Curabitur
							arcu erat, accumsan id imperdiet et, porttitor at sem.
						</p>
					</div>
				</div>
				<div className="mt-20 p-8 bg-[#15c39a] rounded-md">
					{/* <h1 className="mb-8 text-3xl font-bold text-[#fff] text-center">
					Вы получите
				</h1> */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-10">
						<div className="flex flex-col items-center text-center">
							<img src={icon1} className="w-20" />
							<h3 className="mt-4 mb-2 text-lg text-[#fff] font-bold">
								Коачинг по питанию
							</h3>
							<p className="text-sm text-[#555] leading-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<img src={icon3} className="w-20" />
							<h3 className="mt-4 mb-2 text-lg text-[#fff] font-bold">
								Витамины и добавки
							</h3>
							<p className="text-sm text-[#555] leading-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<img src={icon2} className="w-20" />
							<h3 className="mt-4 mb-2 text-lg text-[#fff] font-bold">
								Спортивные советы
							</h3>
							<p className="text-sm text-[#555] leading-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<img src={icon4} className="w-20" />
							<h3 className="mt-4 mb-2 text-lg text-[#fff] font-bold">
								Похудение
							</h3>
							<p className="text-sm text-[#555] leading-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className=" w-full absolute top-0 left-1/2 -translate-x-1/2 z-10">
				<img
					src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMHZ3IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTMyMCAyOEMxNjAgMjggODAgNDkgMCA3MFYwaDEyODB2NzBjLTgwIDIxLTE2MCA0Mi0zMjAgNDItMzIwIDAtMzIwLTg0LTY0MC04NHoiLz48L2c+PC9zdmc+"
					className="w-full h-16"
					alt=""
				/>
			</div>
		</section>
	);
};

export default Service;
