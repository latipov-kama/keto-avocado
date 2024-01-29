import aboutImg from "../../assets/images/orig.jpg";
import { BiLogoTelegram, BiLogoInstagram, BiPhone } from "react-icons/bi";
import "./about.css";
import { motion } from "framer-motion";

const About: React.FC = () => {
	return (
		<section id="about">
			<div className="about-content">
				{/* <h2 className="mb-5 text-3xl text-white font-bold">
					Страдаешь из-за лишнего веса?
				</h2>
				<p className="title mb-12 text-lg text-[#15C39A] font-bold">
					Ты не один. И я здесь, чтобы помочь!
				</p> */}

				<div className="about-box">
					<div className="about__info">
						<h2>
							Меня зовут
							<span>Камол Латипов</span>
						</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
							nulla vero deleniti autem in molestias fuga velit voluptate aut
							quas laborum nobis a consequuntur alias cum libero ex fugit
							necessitatibus atque, eligendi possimus omnis! Velit omnis
							pariatur delectus vitae ab?
						</p>
					</div>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{
							duration: 1,
							delay: 0.2,
						}}
						viewport={{ once: true }}
					>
						<motion.div
							className="about__img"
							animate={{
								translateY: [0, -15, 0],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
							}}
						>
							<img src={aboutImg} />
						</motion.div>

						<div className="social-links">
							<a href="https://t.me/kamolketocoach" target="_blank">
								<BiLogoTelegram color="white" size={24} />
							</a>
							<a
								href="https://www.instagram.com/kamolketocoach/"
								target="_blank"
							>
								<BiLogoInstagram color="white" size={24} />
							</a>
							<a href="tel:+998916282227" target="_blank">
								<BiPhone color="white" size={24} />
							</a>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="w-[768px] md:w-full absolute top-0 left-1/2 -translate-x-1/2 z-10">
				<img
					src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI2dnciIHZpZXdCb3g9IjAgMCAxMjgwIDE0MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMTI4MCAxNDBWMFM5OTMuNDYgMTQwIDY0MCAxMzkgMCAwIDAgMHYxNDB6Ii8+PC9nPjwvc3ZnPg=="
					className="w-full h-16 rotate-180"
					alt=""
				/>
			</div>
		</section>
	);
};

export default About;
