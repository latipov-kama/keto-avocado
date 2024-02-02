import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface props {
	status: boolean;
}

const Message: React.FC<props> = ({ status }) => {
	return (
		<AnimatePresence>
			{status && (
				<motion.div
					initial={{ opacity: 0, x: "-50%", y: -20 }}
					animate={{ opacity: 1, x: "-50%", y: 16 }}
					exit={{ opacity: 0, x: "-50%", y: -20 }}
					transition={{ duration: 0.3 }}
					className="message__box"
				>
					<FaCheckCircle size={20} color="#fff" />
					<p className="whitespace-nowrap">Заявка отправлена!</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Message;
