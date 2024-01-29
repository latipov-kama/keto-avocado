import React, { useState } from "react";
import SignupForm from "../../components/common/signup-form";
import { motion } from "framer-motion";
import icon1 from "../../assets/icons/nutrition-1.png";
import icon2 from "../../assets/icons/nutrition-2.png";
import icon3 from "../../assets/icons/nutrition-3.png";
import "./course.css";

const Course: React.FC = () => {
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
			<section className="course">
				<div id="course" className="course-content">
					<div className="course__info">
						<span>Преобразуйте свой образ жизни</span>
						<h2>Курс здорового питания</h2>

						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
							quam ratione provident laudantium nemo necessitatibus, ut
							excepturi repellat, vero quod itaque consectetur cupiditate
							laboriosam exercitationem eum. Ipsam vitae voluptatibus totam.
						</p>

						<button onClick={openModal}>Связаться</button>
					</div>
					<div className="course__about">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								duration: 1,
							}}
							viewport={{ once: true }}
							className="course__about-item"
						>
							<img src={icon1} />
							<div>
								<h3>Коучинг по питанию</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Dolorum, qui.
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								duration: 1,
							}}
							viewport={{ once: true }}
							className="course__about-item"
						>
							<img src={icon2} />
							<div>
								<h3>Гарантированные результаты</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Dolorum, qui.
								</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{ duration: 1 }}
							viewport={{ once: true }}
							className="course__about-item"
						>
							<img src={icon3} />
							<div>
								<h3>Индивидуальный план</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Dolorum, qui.
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Course;
