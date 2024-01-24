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
		<div className="flex-[58%] pt-4 sm:mt-0 mt-6">
			<div className="mb-12 flex items-center">
				<span className="w-32 mr-5 text-sm text-[#555]">Индекс массы тела</span>
				<div className="text-[#222] font-bold">
					{bmi?.toFixed(1)}
					<span className="text-[#555] font-normal">кг/м2</span>
				</div>
			</div>

			<div className="flex gap-0.5 w-full text-sm leading-4 text-white font-medium relative">
				{bmi && <RangePointer bmi={bmi} ranges={bmiRanges} />}

				{bmiRanges.map((range, idx) => (
					<BmiRange {...range} key={idx} />
				))}
			</div>

			<div className="mt-8 flex items-center">
				<span className="w-32 mr-5 text-sm text-[#555]">Категория</span>
				{bmi && (
					<p style={{ color: returnRange(bmi)?.color, fontWeight: "bold" }}>
						{returnRange(bmi)?.label}
					</p>
				)}
			</div>
			<div className="mt-6 flex items-center">
				<span className="w-32 mr-5 text-sm text-[#555]">
					Диапазон нормального веса
				</span>
				<div className="text-[#222] font-bold">
					{normalWeightRange &&
						`${normalWeightRange[0].toFixed(
							1
						)} ... ${normalWeightRange[1].toFixed(1)}`}
					<span className="text-[#555] font-normal"> кг</span>
				</div>
			</div>
		</div>
	);
};

export default ResultBMI;
