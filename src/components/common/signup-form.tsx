import React from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import Logo from "./logo";

interface FormData {
	name: string;
	phone: string;
}
interface props {
	isOpen: boolean;
	onClose: () => void;
}

const SignupForm: React.FC<props> = ({ isOpen, onClose }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const botToken = "6846544608:AAHl7jqAoFwQaMlQWc3Ii9IWeoj7QTMxKEU"; // Replace with your bot token
		const chatId = "-1002144713519";

		const response = await axios
			.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatId, // Replace with your chat ID
				text: `Name: ${data.name}\nPhone: ${data.phone}`,
			})
			.then((res) => {
				onClose();
				reset({ name: "", phone: "+998" });
				console.log("Telegram API response:", res.data);
			})
			.catch((err) => console.error("Error sending Telegram message:", err));

		console.log(response);
	};

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
					<Logo width={12} />
					<h3 className="mb-8 mt-3 text-2xl font-medium">Заявка на курс</h3>

					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
						<label htmlFor="name" className="w-fit text-sm mb-1">
							Ваше имя
						</label>
						<input
							{...register("name", { required: true })}
							className="w-full h-12 sm:h-14 p-4 mb-0 rounded-md bg-[#f5f6fb] duration-150 ease-linear 
							outline-none border border-[#cccccc] focus:border-[#16a34a50] focus:border-4"
							placeholder="Введите имя"
							id="name"
						/>
						{errors.name && (
							<span className=" text-xs text-red-600 font-medium">
								Необходимо заполнить поле!
							</span>
						)}

						<label htmlFor="phone" className="w-fit text-sm mt-6 mb-1">
							Ваш номер телефона
						</label>
						<input
							{...register("phone", { required: true })}
							defaultValue={"+998"}
							className="w-full h-12 sm:h-14 p-4 rounded-md bg-[#f5f6fb] duration-150 ease-linear 
							outline-none border border-[#cccccc] focus:border-[#16a34a50] focus:border-4"
							id="phone"
						/>
						{errors.phone && (
							<span className=" text-xs text-red-600 font-medium">
								Необходимо заполнить поле!
							</span>
						)}

						<button className="w-full h-14 mt-4 text-lg">
							Оставить заявку
						</button>
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

export default SignupForm;
