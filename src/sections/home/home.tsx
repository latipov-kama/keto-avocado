import React, { useState } from "react";
import BgMain from "../../components/common/bg-main";
import SignupForm from "../../components/common/signup-modal";
import "./home.css";

const Home: React.FC = () => {
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
			<section id="home">
				<BgMain />
				<div className="home__content">
					<h1>НУТРИЦОЛОГ</h1>
					<p>Специализированный коучинг по питанию</p>

					<button onClick={openModal}>Записаться на курс</button>
				</div>
			</section>
		</>
	);
};

export default Home;
