import React from "react";
import { BiLogoTelegram, BiLogoInstagram, BiPhone } from "react-icons/bi";
import "./footer.css";

const Footer: React.FC = () => {
	return (
		<footer>
			<div className="footer__links">
				<a href="https://t.me/kamolketocoach" target="_blank">
					<BiLogoTelegram size={18} color="white" />
				</a>
				<a href="https://www.instagram.com/kamolketocoach/" target="_blank">
					<BiLogoInstagram size={18} color="white" />
				</a>
				<a href="tel:+998916282227" target="_blank">
					<BiPhone size={18} color="white" />
				</a>
			</div>

			<p>&#169; 2024. Все права защищены</p>
		</footer>
	);
};

export default Footer;
