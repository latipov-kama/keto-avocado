import React from "react";

interface props {
	img: string;
	initial: string | number;
	month: string | number;
	total: string | number;
}

const ClientElem: React.FC<props> = ({ initial, month, total, img }) => {
	console.log(img);

	return (
		<div className="results__item">
			<div className="results__img">
				<img src={img} alt="Результаты" />
			</div>
			<div className="results__item-box">
				<h3>
					До {initial}кг | После {+initial - +total}кг
				</h3>
				<p>
					{total}кг за {month} {+month > 1 ? "месяца" : "месяц"}
				</p>
			</div>
		</div>
	);
};

export default ClientElem;
