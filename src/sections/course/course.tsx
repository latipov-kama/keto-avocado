import React, { useState } from "react";
import SignupForm from "../../components/common/signup-form";
import { motion } from "framer-motion";
import icon1 from "../../assets/icons/nutrition-1.png";
import icon2 from "../../assets/icons/nutrition-2.png";
import icon3 from "../../assets/icons/nutrition-3.png";
import "./course.css";
import Message from "../../components/common/message";

const Course: React.FC = () => {
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const [status, setStatus] = useState<boolean>(false);

	const openModal = () => {
		setIsOpened(true);
	};
	const closeModal = () => {
		setIsOpened(false);
	};

	const handleMessage = (value: boolean) => {
		setStatus(value);
	};

	return (
		<>
			<Message status={status} />
			<SignupForm
				isOpen={isOpened}
				onClose={closeModal}
				handleMessage={handleMessage}
			/>
			<section id="course" className="course">
				<div className="course-content">
					<div className="course__about">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								duration: 1,
								delay: 0.2,
							}}
							viewport={{ once: true }}
							className="course__about-item"
						>
							<img src={icon1} />
							<div>
								<h3>Коучинг по питанию</h3>
								<p>
									Создаём здоровые привычки в еде, достигаем целей и улучшаем
									общее здоровье.
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								duration: 1,
								delay: 0.2,
							}}
							viewport={{ once: true }}
							className="course__about-item"
						>
							<img src={icon2} />
							<div>
								<h3>Гарантированные результаты</h3>
								<p>За месяц вы можете похудеть от 8 до 12 кг.</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{ duration: 1, delay: 0.2 }}
							viewport={{ once: true }}
							className="course__about-item"
						>
							<img src={icon3} />
							<div>
								<h3>Индивидуальный план</h3>
								<p>Ориентированный на уникальные потребности организма.</p>
							</div>
						</motion.div>
					</div>
					<div className="course__info">
						<span>Преобразуйте свой образ жизни</span>
						<h2>Курс здорового питания</h2>

						<p>
							Основанный на принципах кето, не просто диета, а образ жизни.
							Обучение включает в себя принципы питания, поддерживающие
							здоровье, энергию и устойчивость.
						</p>

						<button onClick={openModal}>Связаться</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Course;
