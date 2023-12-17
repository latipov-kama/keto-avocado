import React from "react";
import Logo from "../common/logo";
interface props {}

const Footer: React.FC<props> = () => {
	return (
		<footer>
			<div className="container mx-auto py-4 px-4">
				<div className="mb-3 flex items-center gap-2 justify-center">
					<Logo width="8"/>
					<span className="text-white text-xl">PPitanie</span>
				</div>
				<div className="mb-4 flex gap-4 justify-center">
					<a
						href="https://t.me/kamolketocoach"
						target="_blank"
						className="text-[#bbbbbb] text-3xl"
					>
						<i className="bx bxl-telegram"></i>
					</a>
					<a
						href="https://www.instagram.com/kamolketocoach/"
						target="_blank"
						className="text-[#bbbbbb] text-3xl"
					>
						<i className="bx bxl-instagram"></i>
					</a>
					<a
						href="tel:+998916282227"
						target="_blank"
						className="text-[#bbbbbb] text-3xl"
					>
						<i className="bx bx-phone"></i>
					</a>
				</div>

				<p className="text-[#bbbbbb] text-sm text-center  pt-4 border-t-[1px] border-[#4d4d4d]">
					&#169; 2023. Все права защищены
				</p>
			</div>
		</footer>
	);
};

export default Footer;
