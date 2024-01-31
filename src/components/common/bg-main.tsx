import React from "react";
// import bgImage from "../../assets/images/keto-diet.jpg";

interface props {}

const BgMain: React.FC<props> = () => {
	return (
		<div className="main-bg w-full h-full absolute left-0 top-10 z-10">
			<img
				src={
					"https://www.eltiempo.com/files/image_1200_680/uploads/2022/10/21/6352b6e398cf6.jpeg"
				}
				alt="background"
				className="w-full h-full object-cover object-bottom"
			/>
		</div>
	);
};

export default BgMain;
