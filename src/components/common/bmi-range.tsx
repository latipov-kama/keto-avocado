import { IRange } from "../../models/Range";

const BmiRange: React.FC<IRange> = ({ label, min, max, color, width }) => {
	return (
		<div
			key={label}
			style={{
				width: `${width * 3}%`,
				backgroundColor: color,
			}}
			className="bg-[#d4222a] py-2 flex justify-center items-center"
		>
			{min != 30 ? `${min} - ${max}` : `${min}>`}
		</div>
	);
};

export default BmiRange;
