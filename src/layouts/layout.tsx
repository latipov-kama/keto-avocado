import React from "react";
import Header from "../components/header/header";

interface props {
	children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<footer></footer>
		</>
	);
};

export default Layout;
