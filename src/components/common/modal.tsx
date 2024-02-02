import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiX } from "react-icons/bi";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	useEffect(() => {
		if (!isOpen) {
			document.body.style.overflowY = "scroll";
		} else {
			document.body.style.overflowY = "hidden";
		}
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="modal"
					onClick={onClose}
				>
					{children}
					<div onClick={onClose} className="close-modal">
						<BiX size={48} color="white"></BiX>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
