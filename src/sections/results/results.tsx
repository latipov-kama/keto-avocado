import React from "react";
import { motion } from "framer-motion";
import ClientList from "../../components/common/client-list";
import "./result.css";

interface props {}

const Results: React.FC<props> = () => {
	return (
		<section id="results">
			<div className="results-content">
				<motion.h2
					initial={{ y: -30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.8,		
					}}
					viewport={{ once: true }}
				>
					Результаты подопечных
				</motion.h2>
				<ClientList />
			</div>
		</section>
	);
};

export default Results;
