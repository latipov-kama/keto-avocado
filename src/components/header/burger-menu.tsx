import React, { useState } from "react";
import "boxicons";

interface BurgerMenuProps {}

const BurgerMenu: React.FC<BurgerMenuProps> = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
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
				className={` bg-green-600 w-full h-full fixed top-[70px] z-20 duration-200 ease-linear 
       block ${isOpen ? "left-0" : "-left-full"}`}
			>
				<ul
					className="h-full flex flex-col pt-[60%] items-center gap-6
        text-3xl"
				>
					<li>
						<a href="#home" className="text-white">
							Главная
						</a>
					</li>
					<li>
						<a href="#home" className="text-white">
							Обо мне
						</a>
					</li>
					<li>
						<a href="#home" className="text-white">
							О курсе
						</a>
					</li>
					<li>
						<a href="#home" className="text-white">
							Результаты
						</a>
					</li>
					<li>
						<a href="#home" className="text-white">
							Отзывы
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default BurgerMenu;
