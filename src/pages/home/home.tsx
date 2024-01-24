import React, { useState } from "react";
import BgMain from "../../components/common/bg-main";
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
			<section className="h-screen  mx-auto pt-[70px] flex flex-col justify-center relative overflow-hidden">
				<BgMain />
				<div className="w-full mx-auto flex flex-col items-center relative z-10 text-center">
					<h1 className="text-4xl sm:text-5xl md:text-[64px] tracking-widest text-[#333] drop-shadow-xl">
						НУТРИЦОЛОГ
					</h1>
					<p className="mt-6 text-[#333] font-medium tracking-widest uppercase">
						Специализированный коучинг по питанию
					</p>

					<button className="mt-8" onClick={openModal}>
						Записаться на курс
					</button>
				</div>
				<div className="w-[768px] md:w-full absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
					<img
						src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI2dnciIHZpZXdCb3g9IjAgMCAxMjgwIDE0MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMTI4MCAxNDBWMFM5OTMuNDYgMTQwIDY0MCAxMzkgMCAwIDAgMHYxNDB6Ii8+PC9nPjwvc3ZnPg=="
						className="w-full h-16"
						alt=""
					/>
				</div>
			</section>
		</>
	);
};

export default Home;
