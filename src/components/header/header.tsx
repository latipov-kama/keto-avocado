import React from "react";
import Nav from "./nav";
import Logo from "../common/logo";
import Menu from "./menu";

const Header: React.FC = () => {
	return (
		<header>
			<Logo width={64} />
			<Nav />
			<Menu />
		</header>
	);
};

export default Header;
