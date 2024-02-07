import axios from "axios";
import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FormData } from "../../models/FormData";
import Modal from "./modal";
import Logo from "./logo";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface props {
	isOpen: boolean;
	onClose: () => void;
	handleMessage: (value: boolean) => void;
}

const SignupForm: React.FC<props> = ({ isOpen, onClose, handleMessage }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const errorStyle = {
		border: "2px solid red",
	};
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		setIsLoading(true);

		const botToken = "6846544608:AAHl7jqAoFwQaMlQWc3Ii9IWeoj7QTMxKEU"; // Replace with your bot token
		const chatId = "-1002144713519";

		const response = await axios
			.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
				chat_id: chatId, // Replace with your chat ID
				text: `Name: ${data.name}\nPhone: ${data.phone}`,
			})
			.then((res) => {
				handleMessage(true);
				onClose();
				reset({ name: "", phone: "" });
				console.log("Telegram API response:", res.data);
			})
			.catch((err) => {
				console.error("Error sending Telegram message:", err);
			});

		setTimeout(() => {
			handleMessage(false);
		}, 3000);

		setIsLoading(false);
		console.log(response);
	};

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<div
					className="max-w-[600px] w-full px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="max-w-[560px] w-full p-6  sm:p-10 bg-white rounded-lg">
						<Logo width={48} />
						<h3 className="mb-8 mt-3 text-2xl font-medium">Заявка на курс</h3>

						<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
							<label htmlFor="name" className="w-fit text-sm mb-1">
								Ваше имя
							</label>
							<input
								{...register("name", {
									required: "Введите имя",
									pattern: /^[а-яА-ЯёЁa-zA-Z]+$/,
								})}
								className="signup__input"
								style={errors.name?.type == "pattern" ? errorStyle : undefined}
								id="name"
							/>
							{
								<span className=" text-xs text-red-600 font-medium">
									{errors.name?.message}
								</span>
							}

							<label htmlFor="phone" className="w-fit text-sm mt-6 mb-1">
								Ваш номер телефона
							</label>
							<Controller
								name="phone"
								control={control}
								defaultValue=""
								rules={{
									required: "Введите номер телефона",
									validate: (value) => isValidPhoneNumber(value),
								}}
								render={({ field }) => (
									<PhoneInput
										{...field}
										international={false}
										defaultCountry="UZ"
										countries={["UZ", "RU", "US"]}
										id="phone"
										className="signup__input"
										style={errors.phone ? errorStyle : undefined}
									/>
								)}
							/>
							{
								<span className=" text-xs text-red-600 font-medium">
									{errors.phone?.message}
								</span>
							}

							<button className="w-full h-14 mt-4 text-lg" disabled={isLoading}>
								{!isLoading ? "Оставить заявку" : "Загрузка..."}
							</button>
						</form>
						<div className="h-[1px] my-5 bg-[#ccc]"></div>
						<p className="text-sm text-[#7d7f95]">
							Пожалуйста, убедитесь, что правильно ввели данные.
						</p>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default SignupForm;
