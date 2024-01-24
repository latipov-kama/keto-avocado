interface BMIRange {
	label: string;
	min: number;
	max: number;
	color: string;
}

function calculateWeightRange(
	height: number,
	bmiRanges: BMIRange[]
): number[] | null {
	const minHeight = 1.5; // Пример высоты в метрах
	const maxHeight = 2.5; // Пример высоты в метрах

	// Проверка на корректные параметры
	if (height < minHeight || height > maxHeight) {
		return null;
	}
  
	const normalBmiRange = bmiRanges?.find(
		(range) => range.min >= 18.5 && range.max <= 25
	);

	if (!normalBmiRange) {
		return null;
	}
	const normalWeightRange: number[] = [
		normalBmiRange.min * Math.pow(height, 2),
		normalBmiRange.max * Math.pow(height, 2),
	];

	return normalWeightRange;
}

export default calculateWeightRange;
