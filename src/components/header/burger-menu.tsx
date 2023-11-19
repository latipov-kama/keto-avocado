import React, { useState } from "react";
import { Link } from "react-scroll";
import "boxicons";

interface BurgerMenuProps {}

const BurgerMenu: React.FC<BurgerMenuProps> = () => {
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
			<div
				className={`burger-icon ${isOpen ? "open" : ""}`}
				onClick={toggleMenu}
			>
				<i
					className={`bx bx-menu text-[40px] ${isOpen ? "hidden" : "block"}`}
				></i>
				<i className={`bx bx-x text-[40px] ${isOpen ? "block" : "hidden"}`}></i>
			</div>

			<div
				className={`bg-green-600 w-full h-full fixed top-[70px] z-20 duration-200 ease-linear 
       block ${isOpen ? "left-0" : "-left-full"}`}
			>
				<ul
					className="h-full flex flex-col pt-[60%] items-center gap-6
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
								className="text-white duration-200 ease-linear hover:text-[#bbbbbb]"
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

export default BurgerMenu;
