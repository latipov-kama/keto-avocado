import React from "react";
import { BiMenu, BiX } from "react-icons/bi";

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
			<BiMenu
				size={36}
				color="#20292f"
				className={`${isOpen ? "hidden" : "block"}`}
			></BiMenu>
			<BiX size={36} className={`${isOpen ? "block" : "hidden"}`}></BiX>
		</div>
	);
};

export default MenuButton;
