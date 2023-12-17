import React, { useState } from "react";
import BgMain from "../../components/common/bg-main";
import Info from "../info/info";
import SignupForm from "../../components/common/signup-form";

interface props {}

const Home: React.FC<props> = () => {
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

			<section className="h-screen max-h-[852px] bg-[#34545a] mx-auto pt-[70px] flex flex-col justify-center relative overflow-hidden">
				<BgMain />
				<div className="w-fit px-6 mx-auto flex flex-col items-center justify-center sm:text-center relative z-10">
					<p className="mb-8 md:text-lg text-white font-medium tracking-widest uppercase">
						Здоровое похудение
					</p>
					<h1 className="text-4xl sm:text-5xl md:text-[70px] tracking-widest text-white drop-shadow-xl">
						НУТРИЦОЛОГ
					</h1>
					<p className="mt-6 md:text-lg text-white font-medium tracking-widest uppercase">
						Специализированный коучинг по питанию
					</p>

					<button className="mt-14" onClick={openModal}>
						Записаться
					</button>

					<img
						src="https://www.elegantthemes.com/layouts/wp-content/uploads/2018/09/nutritionist-11.png"
						className="w-[40%] absolute z-[-1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
					/>
				</div>
				<div className="w-full absolute bottom-0 left-0 z-10">
					<img
						src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI2dnciIHZpZXdCb3g9IjAgMCAxMjgwIDE0MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMTI4MCAxNDBWMFM5OTMuNDYgMTQwIDY0MCAxMzkgMCAwIDAgMHYxNDB6Ii8+PC9nPjwvc3ZnPg=="
						className="w-full h-16"
						alt=""
					/>
				</div>
			</section>
			<Info />
		</>
	);
};

export default Home;
