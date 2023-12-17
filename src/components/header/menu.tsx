import React, { useState } from "react";
import { Link } from "react-scroll";
import "boxicons";
import MenuButton from "../common/menu-button";

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
	const sections = [
		{ section: "home", title: "Главная" },
		{ section: "about", title: "Обо мне" },
		{ section: "course", title: "О курсе" },
		{ section: "results", title: "Результаты" },
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

	const handleLinkClick = () => {
		document.body.style.overflow = "scroll";
		setIsOpen(false);
	};

	return (
		<div className="block md:hidden">
			<MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

			<div
				className={`bg-black bg-opacity-80 w-full h-full fixed top-[0px] left-0 z-20 duration-200 ease-linear ${
					isOpen ? "show" : "hide"
				}`}
			>
				<ul
					className="h-full flex flex-col items-center justify-center gap-8
        text-3xl"
				>
					{sections.map((section, i) => (
						<li key={i}>
							<Link
								to={section.section}
								smooth={true}
								duration={500}
								offset={60} // Adjust the offset as needed
								onClick={handleLinkClick}
								className="text-white duration-200 ease-linear  hover:text-[#bbbbbb]"
							>
								{section.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Menu;
