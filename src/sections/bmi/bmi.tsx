import React, { useState } from "react";
import ResultBMI from "../../components/common/result-bmi";
import { motion } from "framer-motion";
import "./bmi.css";

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
		<section className="bmi">
			<div id="bmi" className="bmi-content">
				<div>
					<motion.h3
						initial={{ y: -30, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.8,
						}}
						viewport={{ once: true }}
					>
						Рассчитайте свой ИМТ сегодня
					</motion.h3>

					<p className="bmi__descr">
						Индекс массы тела является показателем отношения веса и роста
						человека. Данный параметр помогает определить отклонения от
						нормальной массы тела в ту или иную сторону.
					</p>
				</div>
				<div className="bmi__box">
					<div className="bmi__form ">
						<div className="bmi__form-box">
							<span>Рост</span>
							<input
								type="text"
								placeholder="см"
								onChange={(e) => setHeight(+e.target.value)}
							/>
						</div>
						<div className="bmi__form-box">
							<span>Вес</span>
							<input
								type="text"
								placeholder="кг"
								onChange={(e) => setWeight(+e.target.value)}
							/>
						</div>
						<button onClick={calculateBMI}>Рассчитать</button>
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
