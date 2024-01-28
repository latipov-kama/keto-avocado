import React from "react";

interface props {}

const Nav: React.FC<props> = () => {
	const sections = [
		{ section: "home", title: "Главная" },
		{ section: "about", title: "Обо мне" },
		{ section: "course", title: "О курсе" },
		{ section: "results", title: "Результаты" },
		{ section: "bmi", title: "Калькулятор" },
	];

	return (
		<nav>
			<ul className="nav__list">
				{sections.map((item, i) => (
					<li key={i}>
						<a href={`#${item.section}`} className="nav__link">
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
