import React from "react";
import { BiLogoTelegram, BiLogoInstagram, BiPhone } from "react-icons/bi";

const Footer: React.FC = () => {
	return (
		<footer>
			<div className="max-w-[1144px] mx-auto py-4">
				<div className="mb-2 flex gap-5 justify-center">
					<a
						href="https://t.me/kamolketocoach"
						target="_blank"
						className="w-7 h-7 rounded-full flex items-center justify-center"
					>
						<BiLogoTelegram size={18} color="white" />
					</a>
					<a
						href="https://www.instagram.com/kamolketocoach/"
						target="_blank"
						className="w-7 h-7 rounded-full flex items-center justify-center"
					>
						<BiLogoInstagram size={18} color="white" />
					</a>
					<a
						href="tel:+998916282227"
						target="_blank"
						className="w-7 h-7 rounded-full flex items-center justify-center"
					>
						<BiPhone size={18} color="white" />
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
