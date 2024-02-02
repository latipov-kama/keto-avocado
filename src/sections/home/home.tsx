import React, { useState } from "react";
import { motion } from "framer-motion";
import BgMain from "../../components/common/bg-main";
import SignupForm from "../../components/common/signup-form";
import Message from "../../components/common/message";

import "./home.css";

const Home: React.FC = () => {
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
			<section id="home" className="home">
				<BgMain />
				<div className="home__content">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{
							duration: 1,
						}}
						viewport={{ once: true }}
					>
						<h1>НУТРИЦОЛОГ</h1>
						<p>Специализированный коучинг по питанию</p>
					</motion.div>

					<button onClick={openModal}>Записаться на курс</button>
				</div>
			</section>
		</>
	);
};

export default Home;
