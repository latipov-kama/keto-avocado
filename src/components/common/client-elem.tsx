import React from "react";
import { motion } from "framer-motion";

interface props {
	img: string;
	initial: string | number;
	month: string | number;
	total: string | number;
}

const ClientElem: React.FC<props> = ({ initial, month, total, img }) => {
	return (
		<div className="results__item">
			<div className="results__img">
				<img src={img} alt="Результаты" />
			</div>
			<div className="results__item-box">
				<h3>
					До {initial}кг | После {+initial - +total}кг
				</h3>
				<motion.p
					animate={{
						color: ["#29c4a9", "#34545a", "#29c4a9"],
					}}
					transition={{ duration: 3, repeat: Infinity }}
				>
					{total}кг за {month} {+month > 1 ? "месяца" : "месяц"}
				</motion.p>
			</div>
		</div>
	);
};

export default ClientElem;
