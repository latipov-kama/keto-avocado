import React from "react";

interface props {
	img: string;
	before: string | number;
	after: string | number;
}

const ClientElem: React.FC<props> = ({ img, before, after }) => {
	return (
		<div className="lg:h-[360px] md:h-[300px] sm:h-[480px] h-[500px] bg-[#e0fce1] rounded-md overflow-hidden">
			<div className="h-[83%]">
				<img src={img} alt="" className="w-full h-full object-cover" />
			</div>
			<div className="h-[17%] px-4 flex items-center justify-between">
				<p className="font-medium">До {before}кг</p>
				<p className="font-medium text-[#2c7030]">После {after}кг</p>
			</div>
		</div>
	);
};

export default ClientElem;
