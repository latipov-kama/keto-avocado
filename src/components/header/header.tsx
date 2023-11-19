import React from "react";
import Nav from "./nav";
import Logo from "../common/logo";
import BurgerMenu from "./burger-menu";

interface props {}

const Header: React.FC<props> = () => {
	return (
		<header>
			<Logo />
			<Nav />
			<div className="flex items-center gap-4">
				<button>Записаться</button>
				<BurgerMenu />
			</div>
		</header>
	);
};

export default Header;
