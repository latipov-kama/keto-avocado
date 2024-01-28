import calculateWeightRange from "../../lib/calc-weight-range";
import RangePointer from "./range-ponter";
import BmiRange from "./bmi-range";

interface props {
	bmi: number | null;
	height: number;
}

const ResultBMI: React.FC<props> = ({ bmi, height }) => {
	const bmiRanges = [
		{
			label: "Дефицит массы тела",
			min: 0,
			max: 16,
			color: "#d4222a",
			width: 10,
		},
		{
			label: "Недостаточная масса тела",
			min: 16,
			max: 18.5,
			color: "#ffc232",
			width: 2.5,
		},
		{
			label: "Нормальная масса тела",
			min: 18.5,
			max: 25,
			color: "#82be48",
			width: 6.5,
		},
		{
			label: "Избыточная масса тела",
			min: 25,
			max: 30,
			color: "#ffc232",
			width: 5,
		},
		{ label: "Ожирение", min: 30, max: 100, color: "#d4222a", width: 13 },
	];
	const normalWeightRange = calculateWeightRange(height, bmiRanges);

	const returnRange = (value: number) => {
		const matchingRange = bmiRanges.find(
			(range) => bmi && bmi > range.min && bmi < range.max
		);

		if (value >= 30 && value < 35) {
			return { ...matchingRange, label: "Ожирение первой степени" };
		} else if (value > 35 && value < 40) {
			return { ...matchingRange, label: "Ожирение второй степени" };
		} else if (value > 40) {
			return { ...matchingRange, label: "Ожирение третьей степени" };
		} else {
			return matchingRange;
		}
	};

	return (
		<div className="bmi-info">
			<div className="bmi__result">
				<span>Индекс массы тела</span>
				{bmi && (
					<div className="bmi__result-number">
						{bmi?.toFixed(1)}
						<span> кг/м2</span>
					</div>
				)}
			</div>

			<div className="bmi__ranges">
				{bmi && <RangePointer bmi={bmi} ranges={bmiRanges} />}

				{bmiRanges.map((range, idx) => (
					<BmiRange {...range} key={idx} />
				))}
			</div>

			<div className="bmi__category">
				<span>Категория</span>
				{bmi && (
					<p style={{ color: returnRange(bmi)?.color, fontWeight: "bold" }}>
						{returnRange(bmi)?.label}
					</p>
				)}
			</div>
			<div className="weight__range">
				<span>Диапазон нормального веса</span>
				<div className="weight__range-result">
					{normalWeightRange &&
						`${normalWeightRange[0].toFixed(
							1
						)} ... ${normalWeightRange[1].toFixed(1)}`}
					<span> кг</span>
				</div>
			</div>
		</div>
	);
};

export default ResultBMI;
