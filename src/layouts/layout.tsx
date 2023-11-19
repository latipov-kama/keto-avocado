import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";

interface props {
	children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
