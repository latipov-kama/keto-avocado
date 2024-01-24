import React from "react";
// import bgImage from "../../assets/images/keto-diet.jpg";

interface props {}

const BgMain: React.FC<props> = () => {
	return (
		<div className="main-bg w-full h-full absolute left-0 top-10 z-10">
			<img
				src={
					"https://www.elegantthemes.com/layouts/wp-content/uploads/2018/09/nutritionist-34.jpg"
				}
				alt="background"
				className="w-full h-full object-cover object-bottom"
			/>
		</div>
	);
};

export default BgMain;
