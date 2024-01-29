import "./problems.css";
import { motion } from "framer-motion";

const Problems: React.FC = () => {
	const problems: string[] = [
		"Лишний вес",
		"Плохой сон",
		"Зависимость к еде",
		"Головные боли",
		"Плохое состояние",
		"Нехватка энергии",
	];

	return (
		<section id="problems">
			<div className="problems-content">
				<fieldset>
					<legend>
						<span>Проблемы связанные с питанием</span>
					</legend>

					<div className="problems__box">
						<ul className="problems__list">
							{problems.map((item, i) => (
								<motion.li
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{
										delay: +`0.${i}`,
										duration: 1,
									}}
									key={i}
								>
									<span>✔</span>
									{item}
								</motion.li>
							))}
						</ul>
						<ul className="problems__list">
							{problems.slice(0, 4).map((item, i) => (
								<motion.li
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{
										delay: +`0.${i + 5}`,
										duration: 1,
									}}
									key={i}
								>
									<span>✔</span>
									{item}
								</motion.li>
							))}
						</ul>
					</div>
				</fieldset>
			</div>
		</section>
	);
};

export default Problems;
