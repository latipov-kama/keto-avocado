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
			<ul className="hidden md:flex items-center gap-6 font-medium">
				{sections.map((item, i) => (
					<li key={i}>
						<a
							href={`#${item.section}`}
							className="text-[#20292f] duration-150 ease-linear hover:text-[#40a38c]"
						>
							{item.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
