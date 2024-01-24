import React from "react";
import logo from "../../../public/logo.svg";

interface props {
	width: number;
}

const Logo: React.FC<props> = ({ width }) => {
	return <img src={logo} alt="logo" style={{ width: `${width}px` }} />;
};

export default Logo;
