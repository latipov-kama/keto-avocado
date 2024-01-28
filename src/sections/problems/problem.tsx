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
		<section className="py-10 bg-gradient-to-t from-[#fafafa]">
			<div className="max-w-[1144px] mx-auto px-8">
				<fieldset className="px-6 sm:px-12 py-8 border-[1px] border-gray-400 text-left">
					<legend>
						<span className="text-xl  sm:text-2xl text-gray-800 font-medium">
							Проблемы связанные с питанием
						</span>
					</legend>

					<div className="md:flex">
						<ul className="flex-1 flex flex-col gap-2 sm:text-lg uppercase text-gray-800">
							{problems.map((item, i) => (
								<li key={i}>
									<span className="text-[#15C39A] mr-2">✔</span>
									{item}
								</li>
							))}
						</ul>
						<ul className="flex-1 flex flex-col gap-2 sm:text-lg uppercase text-gray-800">
							{problems.slice(0, 4).map((item, i) => (
								<li key={i}>
									<span className="text-[#15C39A] mr-2">✔</span>
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
