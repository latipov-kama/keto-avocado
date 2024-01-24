import React, { useState } from "react";
import ResultBMI from "../../components/common/result-bmi";

const BMI: React.FC = () => {
	const [weight, setWeight] = useState<number>(0);
	const [height, setHeight] = useState<number>(0);
	const [heightM, setHeightM] = useState<number>(0);

	const [bmi, setBmi] = useState<number | null>(null);

	const calculateBMI = () => {
		if (weight > 0 && height > 0) {
			const heightInMeters = height / 100; // Convert height from cm to meters
			const bmiValue = weight / (heightInMeters * heightInMeters);

			setHeightM(heightInMeters);
			setBmi(bmiValue);
		} else {
			setBmi(null);
		}
	};

	return (
		<section className="bg-[#15C39A] sm:pt-32 sm:pb-24 pt-24 pb-16 px-2 relative">
			<div
				className="max-w-[1080px] mx-auto bg-white px-4
			sm:px-10 py-12 rounded-lg"
			>
				<h3 className="text-[26px] text-[#333] text-center font-bold">
					Рассчитайте свой ИМТ сегодня
				</h3>

				<p className="max-w-[600px] mx-auto mt-4 text-sm text-[#666] text-center">
					Индекс массы тела является показателем отношения веса и роста
					человека. Данный параметр помогает определить отклонения от нормальной
					массы тела в ту или иную сторону.
				</p>
				<div className="pt-12 md:flex gap-10">
					<div className="flex-[42%]">
						<div className="flex flex-col gap-5 items-end">
							<div className="w-full flex flex-col md:flex-row md:items-center">
								<span className="md:w-16 w-fit mr-5 text-right text-sm text-[#555]">
									Рост
								</span>
								<input
									type="text"
									placeholder="см"
									onChange={(e) => setHeight(+e.target.value)}
									className="w-full h-14 p-4 bg-white border-[1px] border-[#dee4e4] rounded"
								/>
							</div>
							<div className="w-full flex flex-col md:flex-row md:items-center">
								<span className="md:w-16 w-fit mr-5 text-right text-sm text-[#555]">
									Вес
								</span>
								<input
									type="text"
									placeholder="кг"
									onChange={(e) => setWeight(+e.target.value)}
									className="w-full h-14 p-4 bg-white border-[1px] border-[#dee4e4] rounded"
								/>
							</div>
							<button className="w-fit" onClick={calculateBMI}>
								Рассчитать
							</button>
						</div>
					</div>

					<ResultBMI bmi={bmi} height={heightM} />
				</div>
			</div>

			<div className="w-full absolute top-0 left-0 z-10">
				<img
					src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI2dnciIHZpZXdCb3g9IjAgMCAxMjgwIDE0MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmFmYWZhIj48cGF0aCBkPSJNMzIwIDI4QzE2MCAyOCA4MCA0OSAwIDcwVjBoMTI4MHY3MGMtODAgMjEtMTYwIDQyLTMyMCA0Mi0zMjAgMC0zMjAtODQtNjQwLTg0eiIvPjwvZz48L3N2Zz4="
					className="w-full h-16"
				/>
			</div>
		</section>
	);
};

export default BMI;
