import React from "react";
import Nav from "./nav";
import Logo from "../common/logo";
import BurgerMenu from "./burger-menu";

interface props {
	onOpen: () => void;
}

const Header: React.FC<props> = ({ onOpen }) => {
	return (
		<header>
			<Logo width="20" />
			<Nav />
			<div className="flex items-center gap-4">
				<button onClick={onOpen}>Записаться</button>
				<BurgerMenu />
			</div>
		</header>
	);
};

export default Header;
