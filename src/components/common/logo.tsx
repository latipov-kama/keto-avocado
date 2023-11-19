import React from "react";
import logo from "../../assets/logo.svg";

interface props {}

const Logo: React.FC<props> = () => {
	return <img src={logo} alt="logo" />;
};

export default Logo;
