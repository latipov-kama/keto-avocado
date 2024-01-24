import aboutImg from "../../assets/images/orig.jpg";
import "boxicons";

const About: React.FC = () => {
	return (
		<section id="about" className="bg-[#34545a] relative overflow-hidden">
			<div className="max-w-[1144px] mx-auto px-8 pb-14 pt-20 text-center">
				{/* <h2 className="title mb-5 text-3xl text-white font-bold">
					Страдаешь из-за лишнего веса?
				</h2>
				<p className="title text-lg text-[#15C39A] font-bold">
					Ты не один. И я здесь, чтобы помочь!
				</p> */}

				<div className="flex flex-col md:flex-row justify-evenly items-center gap-10">
					<div className="flex flex-col text-center md:text-left">
						<h2 className="mb-5 text-xl text-white font-medium">
							Меня зовут
							<span className="block mt-2 text-4xl text-[#FFC47C]">
								Камол Латипов
							</span>
						</h2>
						<p className="max-w-[500px] text-white">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
							nulla vero deleniti autem in molestias fuga velit voluptate aut
							quas laborum nobis a consequuntur alias cum libero ex fugit
							necessitatibus atque, eligendi possimus omnis! Velit omnis
							pariatur delectus vitae ab?
						</p>
					</div>

					<div>
						<div className="max-w-[260px]  rounded-full  overflow-hidden bg-[#34545a]">
							<img src={aboutImg} />
						</div>

						<div className="social mt-6 flex gap-5 justify-center">
							<a
								href="https://t.me/kamolketocoach"
								target="_blank"
								className="w-10 h-10 bg-[#e7b06d] rounded-full flex items-center justify-center"
							>
								<i className="bx bxl-telegram text-white text-xl"></i>
							</a>
							<a
								href="https://www.instagram.com/kamolketocoach/"
								target="_blank"
								className="w-10 h-10 bg-[#e7b06d] rounded-full flex items-center justify-center"
							>
								<i className="bx bxl-instagram text-white text-2xl"></i>
							</a>
							<a
								href="tel:+998916282227"
								target="_blank"
								className="w-10 h-10 bg-[#e7b06d] rounded-full flex items-center justify-center"
							>
								<i className="bx bx-phone text-white text-xl"></i>
							</a>
						</div>
					</div>
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
