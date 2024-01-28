import React, { useEffect, useState } from "react";
import { IRange } from "../../models/Range";

interface props {
	bmi: number;
	ranges: IRange[];
}

const RangePointer: React.FC<props> = ({ bmi, ranges }) => {
	const [arrowPosition, setArrowPosition] = useState(0);

	useEffect(() => {
		bmi && determineArrowPosition(bmi);
	}, [bmi]);

	const determineArrowPosition = (value: number) => {
		const totalWidth = ranges.reduce((acc, range) => acc + range.width, 0);
		let currentPosition = 0;

		for (const range of ranges) {
			if (value >= range.min && value <= range.max) {
				currentPosition +=
					((value - range.min) / (range.max - range.min)) * range.width;
				setArrowPosition((currentPosition / totalWidth) * 100);
				return;
			}
			currentPosition += range.width;
		}
	};

	const poitionStart = () => {
		return bmi > 10 ? arrowPosition : 0;
	};

	const poitionEnd = () => {
		return bmi < 100 ? arrowPosition : 100;
	};

	return (
		<div
			className="range-pointer"
			style={{
				left: `${poitionStart() && poitionEnd()}%`,
			}}
		>
			<span>{bmi.toFixed(1)}</span>
			<br />
			<span>▼</span>
		</div>
	);
};

export default RangePointer;
