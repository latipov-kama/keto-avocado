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
			className="w-full lg:h-[380px] md:h-[300px] sm:h-[380px] h-[440px] 
		 rounded-lg bg-white shadow-md overflow-hidden pb-6 md:pb-8 p-2.5"
		>
			<div className="h-[82%]">
				<img
					src={img}
					alt=""
					className="w-full h-full object-cover rounded-lg"
				/>
			</div>
			<div className="h-[18%] p-5">
				<h3 className="text-[#333] mb-2">
					До {initial}кг | После {+initial - +total}кг
				</h3>
				<p className="text-sm text-[#29c4a9]">
					{total}кг за {month} {+month > 1 ? "месяца" : "месяц"}
				</p>
				{/* <p className="font-medium sm:text-lg text-xl ">
					До {initial}кг <br /> После {+initial - +total}кг
				</p>
				<span className="font-medium text-[#2c7030] text-right sm:text-base text-lg">
					
				</span> */}
			</div>
		</div>
	);
};

export default ClientElem;
