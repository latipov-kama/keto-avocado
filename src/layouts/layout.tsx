import React, { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/Footer";
import SignUpModal from "../components/common/signup-form";

interface props {
	children: React.ReactNode;
}

const Layout: React.FC<props> = ({ children }) => {
	const [isOpened, setIsOpened] = useState(false);

	const openModal = () => {
		setIsOpened(true);
		console.log("open");
	};
	const closeModal = () => {
		setIsOpened(false);
	};

	return (
		<>
			<Header onOpen={openModal} />
			<main>{children}</main>
			<Footer />

			<SignUpModal isOpen={isOpened} onClose={closeModal} />
		</>
	);
};

export default Layout;
