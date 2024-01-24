import React from "react";

const Footer: React.FC = () => {
	return (
		<footer>
			<div className="max-w-[1144px] mx-auto py-4">
				{/* <div className="flex items-center gap-2 justify-center">
						<Logo width={40} />
						<span className="text-white text-xl">PPitanie</span>
					</div> */}
				<div className="mb-2 flex gap-5 justify-center">
					<a
						href="https://t.me/kamolketocoach"
						target="_blank"
						className="w-7 h-7 rounded-full flex items-center justify-center"
					>
						{/* <i className="bx bxl-telegram text-[#bbb] text-lg"></i> */}
					</a>
					<a
						href="https://www.instagram.com/kamolketocoach/"
						target="_blank"
						className="w-7 h-7 rounded-full flex items-center justify-center"
					>
						{/* <i className="bx bxl-instagram text-[#bbb] text-lg"></i> */}
					</a>
					<a
						href="tel:+998916282227"
						target="_blank"
						className="w-7 h-7 rounded-full flex items-center justify-center"
					>
						{/* <i className="bx bx-phone text-[#bbb] text-lg"></i> */}
					</a>
				</div>

				<p className="text-[#bbbbbb] text-sm text-center">
					&#169; 2023. Все права защищены
				</p>
			</div>
		</footer>
	);
};

export default Footer;
