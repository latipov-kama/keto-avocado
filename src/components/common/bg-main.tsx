import React from "react";
// import bgImage from "../../assets/images/keto-diet.jpg";

interface props {}

const BgMain: React.FC<props> = () => {
	return (
		<img
			src={'https://www.elegantthemes.com/layouts/wp-content/uploads/2018/09/nutritionist-12.png'}
			alt="background"
			className="w-full h-full object-cover object-bottom absolute left-0 top-10 z-10"
		/>
	);
};

export default BgMain;
