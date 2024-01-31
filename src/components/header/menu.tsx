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
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		if (isOpen) {
			document.body.style.overflow = "scroll";
		} else {
			document.body.style.overflow = "hidden";
		}

		setIsOpen(!isOpen);
	};

	console.log(window.location.hash);

	return (
		<div className="header__menu">
			<div className="burger-icon" onClick={toggleMenu}>
				<BiMenu size={40} color="#20292f" className="block"></BiMenu>
			</div>

			<Modal isOpen={isOpen} onClose={toggleMenu}>
				<ul className="header__menu-list">
					{sections.map((item, i) => (
						<li key={i}>
							<a
								href={`#${item.section}`}
								onClick={toggleMenu}
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
