import React, { useState } from "react";
import MenuButton from "../common/menu-button";

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

	return (
		<div className="header__menu">
			<MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
			<div className={`header__menu-modal ${isOpen ? "show" : "hide"}`}>
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
			</div>
		</div>
	);
};

export default Menu;
