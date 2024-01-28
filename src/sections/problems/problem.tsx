import "./problems.css";

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
								<li key={i}>
									<span>✔</span>
									{item}
								</li>
							))}
						</ul>
						<ul className="problems__list">
							{problems.slice(0, 4).map((item, i) => (
								<li key={i}>
									<span>✔</span>
									{item}
								</li>
							))}
						</ul>
					</div>
				</fieldset>
			</div>
		</section>
	);
};

export default Problems;
