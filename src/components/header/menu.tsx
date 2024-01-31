import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

import Modal from "../common/modal";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
	const sections = [
		{ section: "home", title: "Главная" },
		{ section: "about", title: "Обо мне" },
		{ section: "course", title: "О курсе" },
		{ section: "results", title: "Результаты" },
		{ section: "bmi", title: "Калькулятор" },
	];
	const [isOpen, setIsOpened] = useState(false);

	const openModal = () => {
		setIsOpened(true);
	};
	const closeModal = () => {
		setIsOpened(false);
	};

	return (
		<div className="header__menu">
			<div className="burger-icon" onClick={openModal}>
				<BiMenu size={40} color="#20292f" className="block"></BiMenu>
			</div>

			<Modal isOpen={isOpen} onClose={closeModal}>
				<ul className="header__menu-list">
					{sections.map((item, i) => (
						<li key={i}>
							<a
								href={`#${item.section}`}
								onClick={closeModal}
								className="header__menu-link"
							>
								{item.title}
							</a>
						</li>
					))}
				</ul>
				<p className="menu__copyright">&#169; 2024. Keto Avocado</p>
			</Modal>
		</div>
	);
};

export default Menu;
