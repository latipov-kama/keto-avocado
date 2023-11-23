import React from "react";
import Logo from "./logo";

interface props {
	isOpen: boolean;
	onClose: () => void;
}

const SignUpModal: React.FC<props> = ({ isOpen, onClose }) => {
	return (
		<div
			className={`${
				!isOpen ? "hide" : "show"
			} w-full h-screen p-5 bg-[rgba(0,0,0,.85)] fixed left-0 top-0 z-50`}
		>
			<div className="absolute right-4 top-4 cursor-pointer" onClick={onClose}>
				<i className="bx bx-x text-white text-5xl"></i>
			</div>

			<div className="w-full h-full flex items-center justify-center">
				<div className="max-w-[560px] w-full p-6  sm:p-10 bg-white rounded-lg">
					<Logo width="12" />

					<h3 className="mb-8 mt-3 text-2xl font-medium">Заявка на курс</h3>

					<form className="flex flex-col">
						<label htmlFor="name" className="w-fit text-sm mb-1">
							Ваше имя
						</label>
						<input
							type="text"
							id="name"
							className="w-full h-12 sm:h-14 p-5 mb-3 rounded-md bg-[#f5f6fb] duration-150 ease-linear 
							outline-none border border-[#cccccc] focus:border-[#16a34a50] focus:border-4"
							placeholder="Введите имя"
						/>

						<label htmlFor="phone" className="w-fit text-sm mb-1">
							Ваш номер телефона
						</label>
						<input
							type="text"
							id="phone"
							defaultValue={"+998"}
							className="w-full h-12 sm:h-14 p-5 mb-3 rounded-md bg-[#f5f6fb] duration-150 ease-linear 
							outline-none border border-[#cccccc] focus:border-[#16a34a50] focus:border-4"
						/>

						<button className="w-full h-14 text-lg">Оставить заявку</button>
					</form>

					<div className="h-[1px] my-5 bg-[#ccc]"></div>

					<p className="text-sm text-[#7d7f95]">
						Пожалуйста, убедитесь, что правильно ввели данные.
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUpModal;
