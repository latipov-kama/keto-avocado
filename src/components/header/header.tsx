import React from "react";
import Nav from "./nav";
import Logo from "../common/logo";

interface props {}

const Header: React.FC<props> = () => {
	return (
		<header>
			<Logo />
			<Nav />
			<button>Записаться</button>
		</header>
	);
};

export default Header;
