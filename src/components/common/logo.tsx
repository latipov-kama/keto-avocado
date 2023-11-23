import React from "react";
import logo from "../../assets/logo.svg";

interface props {
	width: string;
}

const Logo: React.FC<props> = ({ width }) => {
	return <img src={logo} alt="logo" className={`w-${width}`} />;
};

export default Logo;
