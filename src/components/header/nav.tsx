import React from "react";
import { Link } from "react-scroll";

interface props {}

const Nav: React.FC<props> = () => {
	const sections = [
		{ section: "home", title: "Главная" },
		{ section: "about", title: "Обо мне" },
		{ section: "course", title: "О курсе" },
		{ section: "results", title: "Результаты" },
	];

	return (
		<nav>
			<ul className="hidden md:flex items-center gap-6 font-medium">
				{sections.map((item, i) => (
					<li key={i}>
						<Link
							to={item.section}
							smooth={true}
							offset={60} // Adjust the offset as needed
							duration={500}
							className="text-black duration-200 ease-linear hover:text-[#16a34a]"
						>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
