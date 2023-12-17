import React from "react";

interface props {
	isOpen: boolean;
	toggleMenu: () => void;
}

const MenuButton: React.FC<props> = ({ isOpen, toggleMenu }) => {
	

	return (
		<div
			className={`burger-icon relative ${isOpen ? "open z-50 text-white" : ""}`}
			onClick={toggleMenu}
		>
			<i
				className={`bx bx-menu text-[40px] ${isOpen ? "hidden" : "block"}`}
			></i>
			<i className={`bx bx-x text-[40px] ${isOpen ? "block" : "hidden"}`}></i>
		</div>
	);
};

export default MenuButton;
