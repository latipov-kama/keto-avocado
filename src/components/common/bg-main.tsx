import React from "react";
import bgImage from "../../assets/images/keto-diet.jpg";

interface props {}

const BgMain: React.FC<props> = () => {
	return (
		<img
			src={bgImage}
			alt="background"
			className="w-full h-full object-cover object-bottom absolute left-0 top-0 z-10"
		/>
	);
};

export default BgMain;
