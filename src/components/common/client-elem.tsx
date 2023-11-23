import React from "react";

interface props {
	img: string;
	initial: string | number;
	month: string | number;
	total: string | number;
}

const ClientElem: React.FC<props> = ({ img, initial, month, total }) => {
	return (
		<div
			className="px-4 pt-4 lg:h-[360px] md:h-[300px] sm:h-[380px] h-[440px] border-2
		 rounded-md overflow-hidden"
		>
			<div className="h-[82%]">
				<img
					src={img}
					alt=""
					className="w-full h-full object-cover rounded-md"
				/>
			</div>
			<div className="h-[18%] px-4 flex items-center justify-between">
				<p className="font-medium sm:text-lg text-xl ">
					До {initial}кг <br /> После {+initial - +total}кг
				</p>
				<span className="font-medium text-[#2c7030] text-right sm:text-base text-lg">
					{total}кг <br /> за {month} {+month > 1 ? "месяца" : "месяц"}
				</span>
			</div>
		</div>
	);
};

export default ClientElem;
