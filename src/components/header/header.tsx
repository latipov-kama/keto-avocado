import React from "react";
import Nav from "./nav";
import Logo from "../common/logo";
import Menu from "./menu";

interface props {}

const Header: React.FC<props> = () => {

	

	return (
		<header>
			<Logo width="20" />
			<Nav />
			<Menu />
		</header>
	);
};

export default Header;

