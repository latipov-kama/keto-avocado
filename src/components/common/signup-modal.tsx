import React from "react";
import { BiX } from "react-icons/bi";
import SignUpForm from "./signup-form";

interface props {
	isOpen: boolean;
	onClose: () => void;
}

const SignUpModal: React.FC<props> = ({ isOpen, onClose }) => {
	return (
		<div
			className={`${
				!isOpen ? "hide" : "show"
			} w-full h-screen p-5 bg-[rgba(0,0,0,.85)] fixed left-0 top-0 z-50`}
		>
			<div className="absolute right-4 top-4 cursor-pointer" onClick={onClose}>
				<BiX color="white" size={48} />
			</div>

			<div className="w-full h-full flex items-center justify-center">
				<SignUpForm closeModal={onClose} />
			</div>
		</div>
	);
};

export default SignUpModal;
